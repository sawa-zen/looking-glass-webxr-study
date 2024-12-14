import "./style.css";
import * as THREE from "three";
import {
  LookingGlassWebXRPolyfill,
  LookingGlassConfig,
} from "@lookingglass/webxr";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { VertexNormalsHelper } from "three/addons/helpers/VertexNormalsHelper.js";
import { HolographicMaterial } from "./HolographicMaterial";

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

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  document.body.append(renderer.domElement);
  renderer.xr.enabled = true;

  const camera = new THREE.PerspectiveCamera();
  camera.position.z = 3;

  const cameraDirection = new THREE.Vector3();
  camera.getWorldDirection(cameraDirection);

  const cardMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(3.94 / 2.5, 5.5 / 2.5),
    new HolographicMaterial()
  );
  scene.add(cardMesh);
  const vertexHelper = new VertexNormalsHelper(cardMesh, 0.2, 0x00ff00);
  vertexHelper.visible = false
  scene.add(vertexHelper);

  const lookAtPoint = new THREE.Vector3(0, 0, 2);

  renderer.setAnimationLoop(() => {
    lookAtPoint.x = Math.sin(performance.now() / 1000);
    lookAtPoint.y = Math.cos(performance.now() / 1000);
    cardMesh.lookAt(lookAtPoint);
    vertexHelper.update();
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
