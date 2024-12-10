import "./style.css";
import * as THREE from "three";
import { LookingGlassWebXRPolyfill, LookingGlassConfig } from "@lookingglass/webxr";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { HologramMaterial } from "./HologramMaterial";

const config = LookingGlassConfig;
config.targetY = 0;
config.targetZ = 0;
config.targetDiam = 3;
config.fovy = (14 * Math.PI) / 180;
new LookingGlassWebXRPolyfill();

function start(textures: THREE.Texture[]) {
  const scene = new THREE.Scene();

  // box の部屋
  const geometry = new THREE.BoxGeometry(
    config.targetDiam,
    config.targetDiam,
    config.targetDiam
  );
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  scene.add(new THREE.AmbientLight(0xffffff));
  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(3, 3, 3);
  scene.add(directionalLight);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  document.body.append(renderer.domElement);
  renderer.xr.enabled = true;

  const camera = new THREE.PerspectiveCamera();
  camera.position.z = 3;

  const cardMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(3.94 / 2.5, 5.5 / 2.5),
    new HologramMaterial({
      monoMap: textures[0],
      colorMap: textures[1],
    })
  );
  cardMesh.rotation.y = -Math.PI / 15;
  scene.add(cardMesh);

  const lookAtPoint = new THREE.Vector3(0, 0, 3);

  renderer.setAnimationLoop(() => {
    // cardMesh.rotation.y += 0.01;
    lookAtPoint.x = Math.sin(performance.now() / 1000);
    lookAtPoint.y = Math.cos(performance.now() / 1000);
    cardMesh.lookAt(lookAtPoint);
    renderer.render(scene, camera);
  });

  document.body.append(VRButton.createButton(renderer));

  function resize() {
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);
}

const texturePaths = [
  "pokeka_mono.jpg",
  "pokeka.jpg",
]

// テクスチャローダー
const textureLoader = new THREE.TextureLoader();

// テクスチャをロードする関数
function loadTexture(url: string): Promise<THREE.Texture> {
  return new Promise((resolve, reject) => {
    textureLoader.load(url, resolve, undefined, reject);
  });
}

Promise.all(texturePaths.map(loadTexture))
  .then((textures) => {
    start(textures);
  })
  .catch(console.error);
