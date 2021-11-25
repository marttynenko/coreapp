import $ from "jquery";


const accardeon = () => {

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
}

export { accardeon };