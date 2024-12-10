import { DoubleSide, ShaderMaterial, TextureLoader } from 'three'
import vertexShader from './vertex.glsl?raw'
import fragmentShader from './fragment.glsl?raw'

interface Attributes {
  // monoMap: Texture
  // colorMap: Texture
}

export class HologramMaterial extends ShaderMaterial {
  constructor({  }: Attributes) {
    const monoMap = new TextureLoader().load('pokeka_mono.jpg')
    const colorMap = new TextureLoader().load('pokeka.jpg')
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        colorMap2: { value: colorMap },
        monoMap2: { value: monoMap },
      }
    })
  }
}
