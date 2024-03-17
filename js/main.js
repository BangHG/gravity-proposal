// ## dropdown
$('.dropdown').each(function () {
  const btn = $(this).find('.dropdown__btn');
  const list = $(this).find('.dropdown__drawer');
  btn.on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      list.stop().fadeOut(200);
    } else {
      $(this).addClass('active');
      list.stop().fadeIn(200);
    }
  });
});

// ## swiper
var gameCarouselPagination = ['ON-LINE', 'MOBILE', 'IPTV'];
const gameCarousel = new Swiper('.games-carousel .swiper-container', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  autoplay: {
    delay: 8000,
  },
  pagination: {
    el: '.games-carousel .games-carousel__tab',
    clickable: true,
    bulletClass: 'item',
    bulletActiveClass: 'active',
    renderBullet: function (index, className) {
      return '<button type="button" class="' + className + '">' + gameCarouselPagination[index] + '</button>';
    },
  },
});
$('.games-carousel__tab .item').hover(function () {
  //탭에 마우스 진입시 바로 전환
  $(this).trigger('click');
});

// ## nav bg
$('.nav__bg').each(function () {
  var maxHeight = 0;
  $('.header .nav-list--depth2').each(function () {
    if ($(this).outerHeight() > maxHeight) {
      maxHeight = $(this).outerHeight();
    }
  });
  $(this).css('height', maxHeight);
});

// ## nav
function navOn() {
  $('.header').addClass('hover');
  $('.header .nav__bg').stop().fadeIn(200);
  $('.header .nav-list--depth2').stop().fadeIn(200);
}
function navOff() {
  $('.header').removeClass('hover');
  $('.header .nav__bg').stop().fadeOut(200);
  $('.header .nav-list--depth2').stop().fadeOut(200);
}

$('.nav .nav-item--depth1 > .link').mouseenter(function () {
  navOn();
});
$('.nav').mouseleave(function () {
  navOff();
});

// ## 버튼 진입/퇴장 효과
$(document).on('mouseenter', '.btn-entered-effect', function (e) {
  var parentOffset = $(this).offset(),
    relX = e.pageX - parentOffset.left,
    relY = e.pageY - parentOffset.top;
  $(this).find('.btn-entered-effect__overlay').css({ top: relY, left: relX });
});

$(document).on('mouseout', '.btn-entered-effect', function (e) {
  var parentOffset = $(this).offset(),
    relX = e.pageX - parentOffset.left,
    relY = e.pageY - parentOffset.top;
  $(this).find('.btn-entered-effect__overlay').css({ top: relY, left: relX });
});

//## 전환효과
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    $('body').attr('data-loading', 'done');
  }, 10);
});

//## refresh: 탑으로 이동
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
