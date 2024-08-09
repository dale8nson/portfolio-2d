varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vPosition;

void main() {
  float Ka = 1.0, Kd = 0.5, Ks = 0.5;
  float roughness = 0.1;
  vec3 specularColor = vec3(1.0,1.0,1.0);
  vec3 Nf = normalize(vNormal);

  // gl_FragColor = vec4(0.0,0.8,0.0,1.0);
  gl_FragColor = vec4(abs(vPosition.rg) * 4.0, 0.0, 1.0);
  gl_FragDepth = sin(vPosition.b) * 4.0;
}