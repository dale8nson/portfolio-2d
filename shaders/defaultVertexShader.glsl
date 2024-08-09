
varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vPosition;

void main() {
  vUv = uv;
  vNormal = normal; 
  vPosition = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  gl_Position = vPosition;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}