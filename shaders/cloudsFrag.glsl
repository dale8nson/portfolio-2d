uniform float time;
varying vec3 vPosition;

float fade(float t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float grad(int hash, vec3 p) {
    int h = hash & 15; // Convert low 3 bits of hash code
    float u = h < 8 ? p.x : p.y;
    float v = h < 4 ? p.y : h == 12 || h == 14 ? p.x : p.z;
    float s = h < 8 ? p.z : p.x;
    return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v) + ((h & 4) == 0 ? s : -s);

}

float noise(vec3 p) {

  vec3 i = floor(p);
  vec3 f = fract(p);

  int ix = int(i.x) & 255;
  int iy = int(i.y) & 255;
  int iz = int(i.z) & 255;

  float u = fade(f.x);
  float v = fade(f.y);
  float s = fade(f.z);

  int a = ix + iy * 100 + iz * 1000;
  int b = a + 1;

  float res = mix(mix(mix(grad(a, vec3(f.x, f.y, f.z)), grad(b, vec3(f.x - 1.0, f.y, f.z)), u), mix(grad(a + 100, vec3(f.x, f.y - 1.0, f.z)), grad(b + 100, vec3(f.x - 1.0, f.y - 1.0, f.z)), u), v), mix(mix(grad(a + 10, vec3(f.x, f.y, f.z - 1.0)), grad(b + 10, vec3(f.x - 1.0, f.y, f.z - 1.0)), u), mix(grad(a + 110, vec3(f.x, f.y - 1.0, f.z - 1.0)), grad(b + 110, vec3(f.x - 1.0, f.y - 1.0, f.z - 1.0)), u), v), s);

  return res;

}

float fbm(vec3 pos, int octaves) {
  float noiseSum = 0.0, frequency = .07, amplitude = 0.7;

  for(int i = 0; i < octaves; ++i) {
    noiseSum += noise(pos * frequency) * amplitude;
    amplitude *= 0.5;
    frequency *= 2.0;
  }

  return noiseSum;
}

void main() {

  vec3 p = vPosition * sin(time) * 0.7; // Scale the coordinates
  // float n = noise(p);
  // + noise(p * 100.0) + noise(p * 1000.0);

  // gl_FragColor = vec4(n * 5.0, 0.0, 0.0, 1.0);
  float n = fbm(p, 4);
  gl_FragColor = vec4(n, 0.0, 0.0, 1.0);
}