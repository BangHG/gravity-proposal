// ## 마우스포인터
let cursor = document.getElementById('cursor');
let circle = document.querySelector('.cursor-circle');

let setCursorPosition = function (e) {
  let xPosition = e.clientX - cursor.clientWidth / 2 + 'px';
  let yPosition = e.clientY - cursor.clientHeight / 2 + 'px';
  cursor.style.transform = 'translate(' + xPosition + ',' + yPosition + ') ';

  return {
    x: xPosition,
    y: yPosition,
  };
};

document.addEventListener('mousemove', (e) => {
  setCursorPosition(e);
  //움직일때 포인터 조그맣게.
  circle.style.transform = 'scale(0.5)';

  //안움직일때 포인터 원래사이즈.
  var timeout;
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(mouseStop, 150);
});

//안움직일때 포인터 원래사이즈.
function mouseStop() {
  circle.style.transform = 'scale(1)';
}

// 마우스 오버/리브 시 이벤트
$('a, button')
  .mouseout(function (e) {
    cursor.classList.remove('hover');
    cursor.classList.remove('hover--logo');
  })
  .mouseover(function (e) {
    if ($(this).hasClass('logo')) {
      cursor.classList.add('hover--logo');
    }
    cursor.classList.add('hover');
  });
