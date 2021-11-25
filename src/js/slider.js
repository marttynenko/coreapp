import Swiper from 'swiper';
import $ from 'jquery';

const slider = () => {
  const swiper = new Swiper('.reports__slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.swiper-button-prev').on('click', function () {
    swiper.slidePrev();
  })
  $('.swiper-button-next').on('click', function () {
    swiper.slideNext();
  })
}

export { slider };