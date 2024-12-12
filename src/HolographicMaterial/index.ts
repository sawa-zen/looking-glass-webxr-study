import * as THREE from 'three'
import vertexShader from './vertex.glsl?raw'
import fragmentShader from './fragment.glsl?raw'

interface Attributes {
  cameraDirection: THREE.Vector3
}

export class HolographicMaterial extends THREE.ShaderMaterial {
  constructor({ cameraDirection }: Attributes ) {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        cameraDirection: { value: cameraDirection },
        colorMap: { value: new THREE.TextureLoader().load("pokeka.jpg") },
        monoMap: { value: new THREE.TextureLoader().load("pokeka_mono.jpg") },
      }
    })
  }

  update() {
    this.uniforms.cameraDirection.value.needsUpdate = true
  }
}
