import $ from 'jquery';

const select = () => {
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
}


export { select };