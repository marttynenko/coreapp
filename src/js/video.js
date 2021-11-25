import $ from 'jquery';

const video = () => {
  const resizeVideo = () => {
    const width = $('.video-frame').width();
    $('.video-frame').css({
      height: width * 9 / 16
    })
  }
  $(document).ready(function () {
    resizeVideo();
  });

  $(window).resize(function () {
    resizeVideo();
  })
}

export { video };