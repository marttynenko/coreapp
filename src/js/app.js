
// import { form } from 'form';
import { video } from 'video';
import { accardeon } from 'accardeon';
import { slider } from 'slider';
import { scroll } from 'scroll';
import $ from 'jquery';

let app = {
  init() {
    video();
    scroll();
    slider();
    accardeon();

    $('.nav__link__drop').on('mouseover', function () {
      $('.menu').addClass('opened');
    });
    // $(document).on('scroll', function () {
    //   $('.menu').fadeOut();
    // })
    function checkTargets(target, origin) {
      if ($(target).hasClass(origin) || $(target).closest('.'+origin).length) {
        return false
      }
      return true
    }
    $(document).on('mouseup', function (e) {
      var menu = $(".menu");
      if (!menu.is(e.target) && menu.has(e.target).length === 0 && checkTargets(e.target,'header__menu-toggler')) {
        menu.removeClass('opened');
      }
    });

    $('.--openpopup').on('click', function () {
      const data = $(this).data('popup');
      $('.popup[data-popup="' + data + '"]').fadeIn();
      $('.body').addClass('--frozen');
    })

    $('.popup__bg').on('click', function () {
      $('.popup').fadeOut();
      $('.body').removeClass('--frozen');
    })


    //тугглер меню
    $(document).on('click','.header__menu-toggler',function(e){
      e.preventDefault()
      $(this).toggleClass('opened');
      $('.menu').toggleClass('opened');
    })
  }
};
app.init();