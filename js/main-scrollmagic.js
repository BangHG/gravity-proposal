$(function () {
  $('html').easeScroll();

  AOS.init();
});

//SCROLL ANIMATION
var controller = new ScrollMagic.Controller();

var scene1Title = new ScrollMagic.Scene({
  triggerElement: '#section2',
})
  .setTween(TweenMax.to('#section1 .title-bx ', 0.5, { opacity: 0 }))
  .addTo(controller);

var scene1Cover = new ScrollMagic.Scene({
  triggerElement: '#section2',
  triggerHook: 'onCenter',
})
  .setTween(TweenMax.to('.section1__bg ', 0.5, { opacity: 0 }))
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: '#section2',
  triggerHook: 'onEnter',
  duration: '100%',
})
  .setTween(TweenMax.to('.main', 0.5, { backgroundColor: '#ffffff' }))
  .addTo(controller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 'onEnter',
  duration: '100%',
  // offset: 50
})
  .setTween(TweenMax.to('.main', 0.5, { backgroundColor: '#000000' }))
  .addTo(controller);

var scene4 = new ScrollMagic.Scene({
  triggerElement: '#section4',
  triggerHook: 'onEnter',
  duration: '100%',
  // offset: 200,
})
  .setTween(TweenMax.to('.main', 0.5, { backgroundColor: '#ffffff' }))
  .addTo(controller);

var scene5 = new ScrollMagic.Scene({
  triggerElement: '#section5',
  triggerHook: 'onEnter',
  duration: '100%',
  // offset: 50
})

  .setTween(TweenMax.to('.main', 0.5, { backgroundColor: '#000000' }))
  .addTo(controller);

//fix topbtn
var scene6 = new ScrollMagic.Scene({
  triggerElement: '#section5',
  triggerHook: 'onEnter',
  // offset: 100,
})
  .setClassToggle('.scroll-top-btn', 'fix')
  .offset(135 + 80 + 20) // btn + sectionpadding + position
  // .offset(135 + 20 + 20) // btn + sectionpadding + position
  .addTo(controller);

//show topbtn
var scene7 = new ScrollMagic.Scene({
  triggerElement: '#section3',
  triggerHook: 'onEnter',
  // duration: '',
})
  .setTween(TweenMax.to('.scroll-top-btn', 0.5, { opacity: '1' }))
  .addTo(controller);

//header
var scene8 = new ScrollMagic.Scene().addTo(controller).on('update', function (e) {
  var scrollDirection = controller.info('scrollDirection');
  if ($(window).scrollTop() > 300) {
    $('.header').addClass('simple');
    if ($(window).scrollTop() > $('#section2').offset().top) {
      if (scrollDirection == 'FORWARD') {
        //수납
        TweenMax.to('.header:not(.hover)', 0.5, { marginTop: '-80px' });

        //임시코드: 헤더 수납되면 드롭박스 모두 닫기
        $('.dropdown__btn').removeClass('active');
        $('.dropdown__drawer').stop().hide();
      } else {
        TweenMax.to('.header', 0.5, { marginTop: 0 });
      }
    }
  } else {
    $('.header').removeClass('simple');
  }
});
