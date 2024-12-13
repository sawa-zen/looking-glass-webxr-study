varying vec2 vUv;
varying vec3 vNormal;        // ワールド空間の法線
varying vec3 vWorldPosition; // ワールド座標

void main() {
  vUv = uv;
  // 法線をワールド空間に変換
  vNormal = normalize(normalMatrix * normal);
  // ワールド座標を計算
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  // 最終的な頂点位置を計算
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPosition, 1.0);
}
