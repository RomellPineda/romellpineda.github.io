(function ($) {
    "use strict"; // Start of use strict
  
  })(jQuery); // End of use strict
  
  $(document).ready(function () {
    console.log('If you stay ready, you need not get ready');
  
    // Scroll Directives
    $(window).scroll(function (event) {
      var target = $('#shift');
      var sum = 650;
      var distance = $(window).scrollTop();
  
      // Slide Right
      if (sum + distance < 800) {
        sum = sum + distance;
        target.css('left', sum);
      }
  
      // Slide contingency
      if (distance > 650) {
        sum = 800;
        target.css('left', sum);
      }
  
      // Fade Out
      if (distance > 850) {
        $('#text_area').fadeOut(2000);
      }
  
      // Fade In
      if (distance < 800) {
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