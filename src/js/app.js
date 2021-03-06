
// import { form } from 'form';
import { accardeon } from 'accardeon';
import { slider } from 'slider';
import { scroll } from 'scroll';
import $ from 'jquery';

let app = {
  init() {
    scroll();
    slider();
    accardeon();

    $('.nav__link__drop').on('mouseover', function () {
      $('.menu').addClass('opened');
    });
    $('.menu').on('mouseleave', function () {
      $('.menu').removeClass('opened');
    });
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
        $('.header__menu-toggler').removeClass('opened')
      }
    });

    $('.--openpopup').on('click', function () {
      const data = $(this).data('popup');
      $('.popup[data-popup="' + data + '"]').fadeIn();
      $('.popup-bg[data-popup="' + data + '"]').fadeIn();
      $('html').addClass('--overflowhidden');
    })

    $(document).on('click','.popup__bg', function () {
      $('.popup').fadeOut();
      $('html').removeClass('--overflowhidden');
    })

    $(document).on('click','.popup-close', function (e) {
      e.preventDefault();
      $('.popup, .popup-bg').fadeOut();
      $('html').removeClass('--overflowhidden');
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