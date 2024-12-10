uniform sampler2D colorMap2;
uniform sampler2D monoMap2;
varying vec2 vUv;

void main() {
  vec2 vUv2 = vec2(vUv.x, 1.0 - vUv.y);
  vec4 colorTexture2 = texture2D(colorMap2, vUv);
  vec4 monoTexture2 = texture2D(monoMap2, vUv2);

  // 背景画像にキラキラノイズを合成
  gl_FragColor = mix(monoTexture2, colorTexture2, 0.8);
}
