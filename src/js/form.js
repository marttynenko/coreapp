import Inputmask from 'inputmask';
import $ from 'jquery';

let form = () => {
  console.log('form')
  let selector = document.querySelectorAll('.js-mask__tel');
  Inputmask({
    mask: '+7 (9 9 9) 9 9 9 - 9 9 - 9 9',
    showMaskOnHover: false,
  }).mask(selector);

  $('.form__switch-wrap ').on('click', function () {
    $('.form__switch').toggleClass('active');
  });

  $('.form__close').on('click', function () {
    $('.form').fadeOut();
  })
  $('.form__open').on('click', function () {
    $('.form').fadeIn();
  })

  $('.form__submit').on('click', function (e) {
    e.preventDefault();
    $('.form__succes').fadeIn();
    $('.form__succes').addClass('active');
    setTimeout(function () {
      $('.form__succes').fadeOut();
      $('.form__succes').removeClass('active');
      $('.form').fadeOut();
    }, 7000)
  })
};

export { form };