// Utils
// =====

$(function() {

  // Video
  $(".results").on('mouseenter', 'video', function() {
    $(this).get(0).play();
  }).on('mouseleave', 'video', function() {
    $(this).get(0).pause();
  });

  // Fullscreen
  $(".results").on('click', 'video', function() {
    $(this).get(0).webkitRequestFullscreen();
  });

});