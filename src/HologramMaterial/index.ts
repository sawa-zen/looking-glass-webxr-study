import { DoubleSide, ShaderMaterial, Texture } from 'three'
import vertexShader from './vertex.glsl?raw'
import fragmentShader from './fragment.glsl?raw'

interface Attributes {
  monoMap: Texture
  colorMap: Texture
}

export class HologramMaterial extends ShaderMaterial {
  constructor({ monoMap, colorMap }: Attributes) {
    super({
      vertexShader,
      fragmentShader,
      side: DoubleSide, // 両面描画
      transparent: true, // 透過を有効化
      uniforms: {
        colorMap: { value: colorMap },
        monoMap: { value: monoMap },
      }
    })
  }
}
