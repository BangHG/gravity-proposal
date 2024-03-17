const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(21, 1920 / 1000, 0.5, 1000);
camera.position.z = 5;

//배경
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, 1100);

renderer.domElement.style.backgroundColor = 'transparent';

const cylinderCanvas = document.getElementById('cylinder');

cylinderCanvas.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();

const texture = textureLoader.load('images/section1/cylinder.png');

const cylinderGeometry = new THREE.CylinderGeometry(
  // radiusTop : Float, || Radius of the cylinder at the top. Default is 1.
  1,
  // radiusBottom : Float, || Radius of the cylinder at the bottom. Default is 1.
  1,
  // height : Float, || Height of the cylinder. Default is 1.
  0.8,
  // 0.5,
  // radialSegments : Integer, || Number of segmented faces around the circumference of the cylinder. Default is 32
  60,
  // heightSegments : Integer, || Number of rows of faces along the height of the cylinder. Default is 1.
  1,
  // openEnded : Boolean, || A Boolean indicating whether the ends of the cylinder are open or capped. Default is false, meaning capped.
  true
  // thetaStart : Float, || Start angle for first segment, default = 0 (three o'clock position).
  // 0
  // thetaLength : Float || The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cylinder.
);

const cylinderMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  transparent: true,
  side: THREE.DoubleSide,
  color: 0xffffff,
});

const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);

scene.add(cylinder);

function animate() {
  requestAnimationFrame(animate);

  cylinder.rotation.x = -0.4;
  cylinder.rotation.y += 0.001; //회전
  camera.rotation.z = -0.3; //기울기

  camera.position.x = -0.6;
  camera.position.y = 0.2;

  renderer.render(scene, camera);
}

const initCylinder = () => {
  animate();
};

initCylinder();
