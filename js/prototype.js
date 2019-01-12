(function ($) {
  "use strict"; // Start of use strict

})(jQuery); // End of use strict

$(document).ready(function () {
  console.log('If you stay ready, you need not get ready');
  // var width = $(window).width();
  // console.log('jQuery says width = ', width);

  // Scroll Directives
  $(window).scroll(function (event) {
    var target = $('#shift');
    var distance = $(window).scrollTop();
    // console.log('distance: ', distance);

    // Slide Right
    if (distance < 800) {
      target.css('left', distance);
    }

    // Fade Out
    if (distance > 1100) {
      $('#text_area').fadeOut(2000);
    }

    // Fade In
    if (distance < 1080) {
      $('#text_area').fadeIn(2000);
    }

  })

  $('.dropdown-trigger').dropdown({
    hover: true,
    constrainWidth: false
  });

  $('.modal').modal();

  $('#submit').hover(function () {
    $(this).css('background-color', 'rgb(132, 133, 135)');
  }, function () {
    $(this).css('background-color', 'rgb(104, 103, 103)');
  });
});