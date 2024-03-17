class Star {
  constructor() {
    this.position = {
      x: random_range(-(star_count / depth), star_count / depth),
      y: random_range(-(star_count / depth), star_count / depth),
      z: random_range(1, depth),
    };
    this.speed = 55;
    this.speed = 40;
    this.life = 0;
  }
}
const c = document.getElementById('stars'),
  ctx = c.getContext('2d');
let w = (c.width = innerWidth),
  h = (c.height = innerHeight),
  stars = [],
  star_count = 250,
  depth = 20;

const initStars = () => {
  for (let i = 0; i < star_count; i++) {
    stars.push(new Star());
  }
  loop();
};
const resize = () => {
  w = c.width = innerWidth;
  h = c.height = innerHeight;
};
const stage = (background, width, height) => {
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);
};
const random_range = (min, max) => {
  return ~~(Math.random() * (max - min)) + min;
};
const draw = () => {
  stage(`rgba(20,20,20,1)`, w, h);
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i],
      k = stars.length / 4 / s.position.z,
      px = s.position.x * k + w / 2,
      py = s.position.y * k + h / 2;
    if (px >= 0 && px <= w && py >= 0 && py <= h) {
      let size = (1 - s.position.z / (stars.length / 8)) * 2;
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      if (s.life < 1) {
        ctx.fillStyle = 'rgba(255, 255, 255, ' + s.life + ')';
        s.life += s.speed / 10000;
      }
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }
    if (s.position.z <= 0) {
      stars[i] = new Star();
    }
    s.position.z -= s.speed / 1000;
  }
};
const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
window.ownresize = resize;
initStars();
