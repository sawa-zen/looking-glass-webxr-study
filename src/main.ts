import "./style.css";
import * as THREE from "three";
import {
  LookingGlassWebXRPolyfill,
  LookingGlassConfig,
} from "@lookingglass/webxr";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { HologramMaterial } from "./HologramMaterial";

const config = LookingGlassConfig;
config.targetY = 0;
config.targetZ = 0;
config.targetDiam = 3;
config.fovy = (14 * Math.PI) / 180;
new LookingGlassWebXRPolyfill();

function start() {
  const scene = new THREE.Scene();

  scene.add(new THREE.AmbientLight(0xffffff));
  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(3, 3, 3);
  scene.add(directionalLight);

  const renderer = new THREE.WebGLRenderer({ antialias: true, });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0xffffff);
  document.body.append(renderer.domElement);
  renderer.xr.enabled = true;

  const camera = new THREE.PerspectiveCamera();
  camera.position.z = 3;

  const cardMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(3.94 / 2.5, 5.5 / 2.5),
    new HologramMaterial()
  );
  cardMesh.rotation.y = -Math.PI / 15;
  scene.add(cardMesh);

  const lookAtPoint = new THREE.Vector3(0, 0, 3);

  renderer.setAnimationLoop(() => {
    lookAtPoint.x = Math.sin(performance.now() / 1000);
    lookAtPoint.y = Math.cos(performance.now() / 1000);
    cardMesh.lookAt(lookAtPoint);
    renderer.render(scene, camera);
  });

  // looking glass のバグ対策
  // TODO: issue を立てる
  renderer.xr.addEventListener("sessionstart", () => {
    cardMesh.material.uniforms.colorMap.value.needsUpdate = true;
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

start();
