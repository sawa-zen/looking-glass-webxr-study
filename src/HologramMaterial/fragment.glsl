uniform vec2 resolution;
varying vec2 vUv;
varying vec3 vNormal;        // 回転後の法線（ワールド空間）
varying vec3 vWorldPosition; // ワールド座標
uniform vec3 cameraDirection; // カメラの向き
uniform sampler2D colorMap;
uniform sampler2D monoMap;

/**
 * 乱数生成
 * @param {vec2} st 位置
 * 参考: https://nogson2.hatenablog.com/entry/2017/11/18/150645
 * 参考: https://thebookofshaders.com/11/?lan=jp
 */
float generateRandomFloat(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

/**
  * バリューノイズ
  * @param {vec2} st 位置
  * 参考: https://nogson2.hatenablog.com/entry/2017/11/18/150645
  * 参考: https://thebookofshaders.com/11/?lan=jp
  */
float generateValueNoise(in vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  float a = generateRandomFloat(i);
  float b = generateRandomFloat(i + vec2(1.0, 0.0));
  float c = generateRandomFloat(i + vec2(0.0, 1.0));
  float d = generateRandomFloat(i + vec2(1.0, 1.0));

  vec2 u = f*f*(3.0-2.0*f);

  return mix(a, b, u.x) +
    (c - a)* u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}

/**
 * HSVからRGBへの変換
 * @param {vec3} hsv HSV
 */
vec3 hsv2rgb(vec3 hsv) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(hsv.xxx + K.xyz) * 6.0 - K.www);
  return hsv.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), hsv.y);
}

/**
 * RGBからHSVへの変換
 * @param {vec3} rgb RGB
 */
vec3 rgb2hsv(vec3 rgb) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(rgb.bg, K.wz), vec4(rgb.gb, K.xy), step(rgb.b, rgb.g));
  vec4 q = mix(vec4(p.xyw, rgb.r), vec4(rgb.r, p.yzx), step(p.x, rgb.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

/**
 * カメラとポリゴンの角度を返す
 */
float getViewAngle() {
  vec3 faceNormal = normalize(vNormal); // ポリゴンの法線
  return dot(faceNormal, cameraDirection); // カメラ方向と法線の角度 -1.0 ～ 1.0
}

/**
 * 角度に応じたRGBを返す
 * @param {float} strength 角度の強さ
 */
vec3 generateAngleRGB(float strength) {
  float angle = getViewAngle() * strength;
  float normalizedAngle = (angle + 1.0) / 2.0; // 0.0 ～ 1.0
  return hsv2rgb(vec3(normalizedAngle, 1.0, 1.0)); // 彩度=1.0, 明度=1.0
}

/**
 * キラキラのrgbを返す
 * @param {vec3} colorNoise 七色のノイズ
 */
vec3 generateKiraRGB(vec3 colorNoiseRGB) {
  // 角度を色相 (Hue) に変換
  vec3 angleColorRGB = generateAngleRGB(20.0);
  float colorDiff = distance(colorNoiseRGB, angleColorRGB);
  vec3 kiraNoiseHSV = rgb2hsv(colorNoiseRGB);
  kiraNoiseHSV.z = max(1.0 - colorDiff, 0.0);
  return hsv2rgb(kiraNoiseHSV);
}

void main() {
  gl_FragColor = vec4(generateAngleRGB(20.0), 1.0);
  // vec2 st = vUv;
  // vec4 colorTexture = texture2D(colorMap, vUv);
  // vec4 monoTexture = texture2D(monoMap, vUv);

  // // ノイズを作成
  // vec2 pos = vec2(st * 6.0); // ノイズのスケール
  // float valueNoise = generateValueNoise(pos); // ノイズ値
  // vec3 colorNoiseHSV = vec3(valueNoise, 1.0, 1.0);

  // // キラキラのノイズを作成
  // vec3 kiraNoiseRGB = generateKiraRGB(hsv2rgb(colorNoiseHSV)) * monoTexture.rgb;

  // // 背景画像にキラキラノイズを合成
  // gl_FragColor = vec4(kiraNoiseRGB + colorTexture.rgb, 1.0);
}
