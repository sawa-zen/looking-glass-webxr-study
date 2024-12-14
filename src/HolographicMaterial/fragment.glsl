varying vec2 vUv;
varying vec3 vNormal;
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
float generateValueNoise(vec2 st) {
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
 * 面の法線ベクトルと真下のベクトルの角度を返す
 */
float getViewAngle() {
  vec3 faceNormal = normalize(vNormal); // 法線ベクトル
  vec3 lightDir = normalize(vec3(0.0, -1.0, -1.0)); // ライトの向きベクトル
  float angle = acos(dot(faceNormal, lightDir));
  return angle; // 0.0 ～ π
}

/**
 * 角度に応じたRGBを返す
 * @param {float} strength 角度の強さ
 */
vec3 generateAngleRGB(float strength) {
  float pi = 3.141592653589793;
  float angle = mod(getViewAngle() * strength, pi) / pi; // 0.0 ～ 1.0
  vec3 colorHSV = vec3(angle, 1.0, 1.0);
  return hsv2rgb(colorHSV);
}

/**
 * キラキラのrgbを返す
 * @param {vec3} colorNoise 七色のノイズ
 */
vec3 generateKiraRGB(vec3 colorNoiseRGB) {
  vec3 angleColorRGB = generateAngleRGB(20.0);              // 角度から表示色を算出
  float colorDiff = distance(colorNoiseRGB, angleColorRGB); // 表示色とノイズの値の差を計算
  float brightness = max(1.0 - colorDiff, 0.0);             // 明るさを計算

  vec3 kiraNoiseHSV = rgb2hsv(colorNoiseRGB);
  kiraNoiseHSV.z = brightness;                              // 明るさを設定
  return hsv2rgb(kiraNoiseHSV);
}

void main() {
  // ノイズを作成
  vec2 pos = vec2(vUv * 6.0);                           // ノイズのスケール
  float valueNoise = generateValueNoise(pos);           // ノイズ値
  vec3 colorNoiseHSV = vec3(valueNoise, 1.0, 1.0);      // HSV の色相にノイズの値を使用する
  vec3 colorNoiseRGB = hsv2rgb(colorNoiseHSV);          // HSVをRGBに変換

  // キラキラのノイズを作成
  vec3 kiraNoiseRGB = generateKiraRGB(colorNoiseRGB);
  vec4 monoTexture = texture2D(monoMap, vUv);           // モノクロ画像を取得
  kiraNoiseRGB = kiraNoiseRGB * monoTexture.rgb;        // モノクロ画像の色を乗算してキラキラをマスク

  // 背景画像にキラキラノイズを合成
  vec4 colorTexture = texture2D(colorMap, vUv);         // 背景画像を取得
  vec3 finalColorRGB = colorTexture.rgb + kiraNoiseRGB; // 背景画像とキラキラを合成

  gl_FragColor = vec4(finalColorRGB, 1.0);
}