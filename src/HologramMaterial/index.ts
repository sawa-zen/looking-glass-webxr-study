import { DoubleSide, ShaderMaterial, TextureLoader } from 'three'
import vertexShader from './vertex.glsl?raw'
import fragmentShader from './fragment.glsl?raw'

export class HologramMaterial extends ShaderMaterial {
  constructor() {
    const colorTexture = new TextureLoader().load('pokeka.jpg')
    const monoTexture = new TextureLoader().load('pokeka_mono.jpg')

    super({
      vertexShader,
      fragmentShader,
      side: DoubleSide, // 両面描画
      transparent: true, // 透過を有効化
      uniforms: {
        colorMap: { value: colorTexture },
        monoMap: { value: monoTexture },
      }
    })
  }
}
