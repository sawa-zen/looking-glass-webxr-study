import * as THREE from 'three'
import vertexShader from './vertex.glsl?raw'
import fragmentShader from './fragment.glsl?raw'

export class HolographicMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        colorMap: { value: new THREE.TextureLoader().load("pokeka.jpg") },
        monoMap: { value: new THREE.TextureLoader().load("pokeka_mono.jpg") },
      }
    })
  }

  update() {
    this.uniforms.cameraDirection.value.needsUpdate = true
  }
}
