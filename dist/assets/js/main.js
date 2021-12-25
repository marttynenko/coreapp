function scrollMagicAnimations() {
  const SMController = new ScrollMagic.Controller();

  const scene_1 = {
    scene: undefined,
    trigger: document.querySelector('#add__list'),
    animated: document.querySelector('#add__scroll'),
    tween: undefined
  }

  if (scene_1.trigger) {
    scene_1.tween = gsap.to(scene_1.animated,
      {
        x: (index, target, targets) => {
          const listWidth = scene_1.animated.getBoundingClientRect().width
          const containerWidth = document.querySelector('#add__scroll-wrap').getBoundingClientRect().width
          return containerWidth - listWidth
        }
      }
    )
  
    scene_1.scene = new ScrollMagic.Scene({triggerElement: scene_1.trigger, duration: 250, offset: -50})
    // .setPin(scene_1.trigger)
    .setTween(scene_1.tween)
    .addTo(SMController);
  }
  


  const scene_2 = {
    scene: undefined,
    trigger: document.querySelector('.about__panel.--blocks'),
    mouse: document.querySelector('.about__mouse'),
    card: document.querySelector('.about__pic-animate'),
    image: document.querySelector('.about__animate-pic'),
    tween: undefined
  }

  if (scene_2.trigger) {
    scene_2.tween = gsap.timeline()
    scene_2.tween
      .to(scene_2.mouse,{opacity: 1, duration: 0.8})
      .to(scene_2.mouse,{yPercent: -40, duration: 2})
      .to(scene_2.card,{
        xPercent: () => {
          return document.documentElement.clientWidth > 770
            ? 150
            : -25
        },
        yPercent: () => {
          return document.documentElement.clientWidth > 770
            ? 0
            : 300
        },
        duration: 3
      })
      .fromTo(scene_2.image,{opacity: 0, scale: 0.75},{opacity: 1, scale: 1, duration: 0.2})
      .to(scene_2.card,{opacity: 0.5, scale: 0.85, xPercent: 0, yPercent: 0, duration: 1, delay: -0.2})
      .to(scene_2.card,{scale: 1, opacity: 1, duration: 1})
      .to(scene_2.mouse,{opacity: 0, duration: 0.25, delay: -2})

    scene_2.scene = new ScrollMagic.Scene({triggerElement: scene_2.trigger, duration: 1000, triggerHook: 0})
      .setPin(scene_2.trigger)
      .setTween(scene_2.tween)
      .addTo(SMController);

    // scene_2.scene.on('end',() => {
    //   setTimeout(() => {
    //     scene_2.scene.destroy(true)
    //   }, 10);
    // })
  }
  
}
scrollMagicAnimations()



/* --- Проигрываем гифки во вьюпорте ---*/
function gifInViewport() {
  //коллекция контейнеров, в которых есть гифки
  const gifsIn = document.querySelectorAll('.gifs-in')


  //изменяем урл при вхождениее выхождении из вьюпорта
  function changeSources(isInViewport,image) {
    const srcStatic = image.getAttribute('data-src') || null;
    const srcGif = image.getAttribute('data-gif') || null;
    const imageViewport = Boolean(+image.getAttribute('data-viewport'));

    if (!srcStatic || !srcGif) return

    if (isInViewport !== imageViewport) {
      if (isInViewport) {
        image.src = srcGif;
      } else {
        image.src = srcStatic;
      }
      image.setAttribute('data-viewport',+isInViewport)
    }
  }

  //проверяем находится ли элемент во вьюпорте
  const inViewport = (element) => {
    const coords = element.getBoundingClientRect();
    if (coords.bottom < 0 || coords.top > documentHeight) {
      return false
    } else {
      return true
    }
  }

  const onScroll = () => {
    gifsIn.forEach((el,index) => {
      const img = el.querySelector('img.gif-trigger')
      changeSources(inViewport(el),img)
    })
  }

  window.addEventListener('scroll',onScroll)

  let documentHeight = document.documentElement.clientHeight
  window.addEventListener('resize',() => documentHeight = document.documentElement.clientHeight)
}
if (document.querySelector('.gifs-in')) {
  gifInViewport();

  //если будут гифки, сразу подгружаем их
  document.querySelectorAll('img.gif-trigger').forEach(element => {
    const src = element.dataset.gif
    const img = new Image()
    img.src = src
    img.classList.add('img-hidden')
    img.onload = () => {
      document.body.appendChild(img)
      setTimeout(() => {
        img.remove()
      }, 3000);
    }
  })
}



jQuery(document).ready(function($){
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



  $('.select__main').on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).nextAll('.select__list').fadeIn();
    }
  });
  $('.select__item').on('click', function () {
    $('.select__list').fadeOut();
    const text = $(this).text();
    $(this).parents('.select').find('.select__main').empty().text(text);
    $('.select__main').removeClass('active');
  });
  $(document).on('click', function (e) {
    var select = $('.select');
    if (!select.is(e.target) && select.has(e.target).length === 0) {
      $('.select__list').fadeOut();
      $('.select__main').removeClass('active');
    }
  })


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


  $('.accardeon__main').on('click',function(e){
    e.preventDefault();
    $('.accardeon__main').not($(this)).next('.accardeon__drop').hide()
    $('.accardeon__main').not($(this)).removeClass('active')
    if (!$(this).hasClass('active')) {
      $(this).next('.accardeon__drop').slideDown(150);
      $(this).toggleClass('active');
    } else {
      $(this).next('.accardeon__drop').slideUp(150);
      $(this).toggleClass('active');
    }
  })


  setTimeout(() => {
    $('#open_ny_popup').click();
  },5000)
});