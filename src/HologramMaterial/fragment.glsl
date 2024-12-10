uniform vec2 resolution;
varying vec2 vUv;
varying vec3 vNormal;        // 回転後の法線（ワールド空間）
varying vec3 vWorldPosition; // ワールド座標
uniform sampler2D colorMap;
uniform sampler2D monoMap;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(in vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f*f*(3.0-2.0*f);

  return mix(a, b, u.x) +
    (c - a)* u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}

// HSVからRGBへの変換
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// RGBからHSVへの変換
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

/**
 * カメラとポリゴンの角度を返す
 */
float viewAngle() {
  vec3 viewDir = normalize(cameraPosition - vWorldPosition); // カメラ方向
  return dot(viewDir, normalize(vNormal)); // ビュー方向と法線の角度 -1.0 ～ 1.0
}

/**
 * キラキラのrgbを返す
 * @param {vec3} colorNoise 七色のノイズ
 */
vec3 kira(vec3 colorNoiseRGB) {
  // ビュー方向を計算
  float kiraStrength = 20.0;
  float angle = viewAngle() * kiraStrength;
  float normalizedAngle = (angle + 1.0) / 2.0; // 0.0 ～ 1.0

  // 角度を色相 (Hue) に変換
  vec3 angleColorRGB = hsv2rgb(vec3(normalizedAngle, 1.0, 1.0)); // 彩度=1.0, 明度=1.0
  float colorDiff = distance(colorNoiseRGB, angleColorRGB);
  vec3 kiraNoiseHSV = rgb2hsv(colorNoiseRGB);
  kiraNoiseHSV.z = max(1.0 - colorDiff, 0.0);
  return hsv2rgb(kiraNoiseHSV);
}

void main() {
  vec2 st = vUv;
  vec4 monoTexture = texture2D(monoMap, vUv);
  vec4 colorTexture = texture2D(colorMap, vUv);

  // ノイズを作成
  vec2 pos = vec2(st * 6.0); // ノイズのスケール
  float n = noise(pos);      // ノイズ値
  vec3 colorNoiseHSV = vec3(n, 1.0, 1.0);

  // キラキラのノイズを作成
  vec3 kiraNoiseRGB = kira(hsv2rgb(colorNoiseHSV)) * monoTexture.rgb;

  // 背景画像にキラキラノイズを合成
  gl_FragColor = vec4(kiraNoiseRGB + colorTexture.rgb, 1.0);
}
