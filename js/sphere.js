function sphere() {
  var scene = new THREE.Scene();
  document.addEventListener('mousemove', onMouseMove, false);
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var mouseX;
  var mouseY;

  var renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.domElement.style.backgroundColor = 'transparent';
  renderer.setSize(window.innerWidth, window.innerHeight);

  const sphereCanvas = document.getElementById('sphere');

  sphereCanvas.appendChild(renderer.domElement);

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  var distance = Math.min(200, window.innerWidth / 4);
  var geometry = new THREE.Geometry();

  for (var i = 0; i < 1600; i++) {
    var vertex = new THREE.Vector3();

    var theta = Math.acos(THREE.Math.randFloatSpread(2));
    var phi = THREE.Math.randFloatSpread(360);

    vertex.x = distance * Math.sin(theta) * Math.cos(phi);
    vertex.y = distance * Math.sin(theta) * Math.sin(phi);
    vertex.z = distance * Math.cos(theta);

    geometry.vertices.push(vertex);
  }

  var particles = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      transparent: true,
      color: 0xffffff,
      opacity: 0.5,
      transparent: true,
      size: 2,
    })
  );

  particles.boundingSphere = 150;

  var renderingParent = new THREE.Group();
  renderingParent.add(particles);

  var resizeContainer = new THREE.Group();
  resizeContainer.add(renderingParent);
  scene.add(resizeContainer);

  camera.position.z = 400;

  var animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  var myTween;
  function onMouseMove(event) {
    if (myTween) myTween.kill();

    mouseX = (event.clientX / window.innerWidth) * 1 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 1 + 1;
    myTween = gsap.to(particles.rotation, { duration: 1, x: mouseY * -1, y: mouseX });
  }
  animate();

  // Scaling animation
  var animProps = { scale: 1, xRot: 0, yRot: 0 };
  gsap.to(animProps, {
    duration: 10,
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    // ease: 'sine',
    onUpdate: function () {
      renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale);
    },
  });

  gsap.to(animProps, {
    duration: 200,
    xRot: Math.PI * 2,
    yRot: Math.PI * 4,
    repeat: -1,
    yoyo: true,
    ease: 'none',
    onUpdate: function () {
      renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
    },
  });
}
sphere();
