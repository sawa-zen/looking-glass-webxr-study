import "./style.css";
import * as THREE from "three";
import { LookingGlassWebXRPolyfill, LookingGlassConfig } from "@lookingglass/webxr";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const config = LookingGlassConfig;
config.targetY = 0;
config.targetZ = 0;
config.targetDiam = 3;
config.fovy = (14 * Math.PI) / 180;
new LookingGlassWebXRPolyfill();

const scene = new THREE.Scene();

// box の部屋
const geometry = new THREE.BoxGeometry(
  config.targetDiam,
  config.targetDiam,
  config.targetDiam
);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.BackSide });
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

let mixer: THREE.AnimationMixer;
let clock = new THREE.Clock();

renderer.setAnimationLoop(() => {
  //Animation Mixerを実行
  if (mixer) {
    mixer.update(clock.getDelta());
  }
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

const loader = new GLTFLoader();
loader.load(
  "./zensuke.gltf",
  function (gltf) {
    gltf.scene.scale.set(0.35, 0.35, 0.35);
    gltf.scene.position.set(0, -0.8, -0.5);
    const obj = gltf.scene;
    const animations = gltf.animations;
    if (animations && animations.length) {
      console.log(animations);
      //Animation Mixerインスタンスを生成
      mixer = new THREE.AnimationMixer(obj); //全てのAnimation Clipに対して
      let animation = animations[1]; //Animation Actionを生成
      let action = mixer.clipAction(animation); //ループ設定（1回のみ）
      action.clampWhenFinished = true; //アニメーションを再生
      action.play();
    }

    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
