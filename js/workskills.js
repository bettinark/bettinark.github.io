$(document).ready(function($) {

  /*  Interactions */

  $('#teaching').on('click', function(event) {
    event.preventDefault();
    $('.teaching').addClass('is-visible');
    $(document.body).css({'height': 'auto'});
    $(document.body).css({'overflow-y':'hidden'});
  });


    $('#ibm').on('click', function(event) {
      event.preventDefault();
      $('.ibm').addClass('is-visible');
      $(document.body).css({'height': 'auto'});
      $(document.body).css({'overflow-y':'hidden'});
        });


      $('#mentor').on('click', function(event) {
        event.preventDefault();
        $('.mentor').addClass('is-visible');
        $(document.body).css({'height': 'auto'});
        $(document.body).css({'overflow-y':'hidden'});
          });


          //close popup when clicking x or off popup
          $('.cd-popup').on('click', function(event) {
            if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
              event.preventDefault();
              $('.cd-popup').removeClass('is-visible');
              $(document.body).css({'overflow-y':'visible'});
            }
          });

          //close popup when clicking the esc keyboard button
          $(document).keyup(function(event) {
            if (event.which == '27') {
              $('.cd-popup').removeClass('is-visible');
              $(document.body).css({'overflow-y':'visible'});
            }
          });

          //Move to the next project by pressing the right arrow
          $(document).keyup(function(event) {
            if (event.which == '39') {
              $('.cd-popup').removeClass('is-visible');
              $(document.body).css({'overflow-y':'visible'});
            }
          });
          $('.close_button').on('click', function(event) {
            event.preventDefault();
            $('.cd-popup').removeClass('is-visible');
            $(document.body).css({'overflow-y':'visible'});
          }
          );

          //Move to the previous project by clicking the left arrow
          $(document).keyup(function(event) {
            if (event.which == '37') {
              $('.cd-popup').removeClass('is-visible');
              $(document.body).css({'overflow-y':'visible'});
            }
          });

          $('.last_button').on('click', function(event) {
            event.preventDefault();
            $('.cd-popup').removeClass('is-visible');
            $(document.body).css({'overflow-y':'visible'});
          }
          );

          // Scroll to top button appear
          $(document).scroll(function() {
            var scrollDistance = $(this).scrollTop();
            if (scrollDistance > 100) {
              $('.scroll-to-top').fadeIn();
            } else {
              $('.scroll-to-top').fadeOut();
            }

          });

          if ($(window).width() < 800) {
            $("#menu").hide();
          /* Anything that gets to the document
             will hide the dropdown */
          $(document).click(function(){
            $("#menu").hide();
            $('#show-menu').prop("checked", false);
          });

          /* Clicks within the dropdown won't make
             it past the dropdown itself */
          $(".mobile-menu").click(function(e){
            if(!document.getElementById('show-menu').checked){
              $("#menu").hide();
            } else {
              $("#menu").show();
              e.stopPropagation();
            }

          });
        } else {
          $("#menu").show();
           }

        });
