$(document).ready(function($) {

  /*  Interactions */

  $('#teaching').on('click', function(event) {
    event.preventDefault();
    $('.teaching').addClass('is-visible');
    $(document.body).css({'overflow':'hidden'});
  });


    $('#ibm').on('click', function(event) {
      event.preventDefault();
      $('.ibm').addClass('is-visible');
      $(document.body).css({'overflow':'hidden'});
    });


      $('#mentor').on('click', function(event) {
        event.preventDefault();
        $('.mentor').addClass('is-visible');
        $(document.body).css({'overflow':'hidden'});
    });


          //close popup when clicking x or off popup
          $('.cd-popup').on('click', function(event) {
            if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
              event.preventDefault();
              $('.cd-popup').removeClass('is-visible');
              $(document.body).css({'overflow':'auto'});
            }
          });

          //close popup when clicking the esc keyboard button
          $(document).keyup(function(event) {
            if (event.which == '27') {
              $('.cd-popup').removeClass('is-visible');
              $(document.body).css({'overflow':'auto'});
            }
          });

          //Move to the next project by pressing the right arrow
          $(document).keyup(function(event) {
            if (event.which == '39') {
              $('.cd-popup').removeClass('is-visible');
              $(document.body).css({'overflow':'auto'});
            }
          });
          $('.close_button').on('click', function(event) {
            event.preventDefault();
            $('.cd-popup').removeClass('is-visible');
            $(document.body).css({'overflow':'auto'});
          }
          );

          //Move to the previous project by clicking the left arrow
          $(document).keyup(function(event) {
            if (event.which == '37') {
              $('.cd-popup').removeClass('is-visible');
              $(document.body).css({'overflow':'auto'});
            }
          });

          $('.last_button').on('click', function(event) {
            event.preventDefault();
            $('.cd-popup').removeClass('is-visible');
            $(document.body).css({'overflow':'auto'});
          }
          );

        });
