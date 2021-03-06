$(document).ready(function($) {

  /*  Interactions */
  $('#probe').on('click', function(event) {
    event.preventDefault();
    $('.probe').addClass('is-visible');
    //document.documentElement.style.overflow = 'hidden';
    //document.body.scroll = "no";
    $(document.body).css({'height': 'auto'});
    $(document.body).css({'overflow-y':'hidden'});
  });


    $('#embosight').on('click', function(event) {
      event.preventDefault();
      $('.embosight').addClass('is-visible');
      $(document.body).css({'height': 'auto'});
      $(document.body).css({'overflow-y':'hidden'});
    });


      $('#bioplastic').on('click', function(event) {
        event.preventDefault();
        $('.bioplastic').addClass('is-visible');
        $(document.body).css({'height': 'auto'});
        $(document.body).css({'overflow-y':'hidden'});
      });

        $('#energy-equity').on('click', function(event) {
          event.preventDefault();
          $('.energy-equity').addClass('is-visible');
          $(document.body).css({'height': 'auto'});
          $(document.body).css({'overflow-y':'hidden'});
        });

          $('#iee').on('click', function(event) {
            event.preventDefault();
            $('.iee').addClass('is-visible');
            $(document.body).css({'height': 'auto'});
            $(document.body).css({'overflow-y':'hidden'});
          });

            $('#power').on('click', function(event) {
              event.preventDefault();
              $('.power').addClass('is-visible');
              $(document.body).css({'height': 'auto'});
              $(document.body).css({'overflow-y':'hidden'});
            });

              $('#covid-hack').on('click', function(event) {
                event.preventDefault();
                $('.covid-hack').addClass('is-visible');
                $(document.body).css({'height': 'auto'});
                $(document.body).css({'overflow-y':'hidden'});
              });

                $('#bitl').on('click', function(event) {
                  event.preventDefault();
                  $('.bitl').addClass('is-visible');
                  $(document.body).css({'height': 'auto'});
                  $(document.body).css({'overflow-y':'hidden'});
                });

                  $('#senior-thesis').on('click', function(event) {
                    event.preventDefault();
                    $('.senior-thesis').addClass('is-visible');
                    $(document.body).css({'height': 'auto'});
                    $(document.body).css({'overflow-y':'hidden'});
                  });

                    $('#yoyodeler').on('click', function(event) {
                      event.preventDefault();
                      $('.yoyodeler').addClass('is-visible');
                      $(document.body).css({'height': 'auto'});
                      $(document.body).css({'overflow-y':'hidden'});
                    });

                      $('#inchworm').on('click', function(event) {
                        event.preventDefault();
                        $('.inchworm').addClass('is-visible');
                        $(document.body).css({'height': 'auto'});
                        $(document.body).css({'overflow-y':'hidden'});
                      });

                        $('#mousevr').on('click', function(event) {
                          event.preventDefault();
                          $('.mousevr').addClass('is-visible');
                          $(document.body).css({'height': 'auto'});
                          $(document.body).css({'overflow-y':'hidden'});
                        });

                          $('#rak').on('click', function(event) {
                            event.preventDefault();
                            $('.rak').addClass('is-visible');
                            $(document.body).css({'height': 'auto'});
                            $(document.body).css({'overflow-y':'hidden'});
                          });

                            $('#case').on('click', function(event) {
                              event.preventDefault();
                              $('.case').addClass('is-visible');
                              $(document.body).css({'height': 'auto'});
                              $(document.body).css({'overflow-y':'hidden'});
                            });

                              $('#makemit').on('click', function(event) {
                                event.preventDefault();
                                $('.makemit').addClass('is-visible');
                                $(document.body).css({'height': 'auto'});
                                $(document.body).css({'overflow-y':'hidden'});
                              });

                                $('#forfun').on('click', function(event) {
                                  event.preventDefault();
                                  $('.forfun').addClass('is-visible');
                                  $(document.body).css({'height': 'auto'});
                                  $(document.body).css({'overflow-y':'hidden'});
                                });

          //close popup when clicking x or off popup
          $('.cd-popup').on('click', function(event) {
            if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
              event.preventDefault();
              $('.cd-popup').removeClass('is-visible');
               //document.documentElement.style.overflow = 'scroll';
              //document.body.scroll = "yes";
              $(document.body).css({'overflow-y':'visible'});
            }
          });

          //close popup when clicking the esc keyboard button
          $(document).keyup(function(event) {
            if (event.which == '27') {
              $('.cd-popup').removeClass('is-visible');
              //document.documentElement.style.overflow = 'scroll';
              //document.body.scroll = "yes";
              $(document.body).css({'overflow-y':'visible'});
            }
          });

          //Move to the next project by pressing the right arrow or button
          $(document).keyup(function(event) {
            if (event.which == '39') {
              $('.cd-popup').removeClass('is-visible');
              //$('.cd-popup').next().addClass('is-visible');
              //$(this).nextAll('.cd-popup').first().addClass('is-visible');
              $(document.body).css({'overflow-y':'visible'});
            }
          });
          $('.close_button').on('click', function(event) {
            event.preventDefault();
            $('.cd-popup').removeClass('is-visible');
            $(document.body).css({'overflow-y':'visible'});
          }
          );

          //Move to the previous project by clicking the left arrow or button
          $(document).keyup(function(event) {
            if (event.which == '37') {
              $('.cd-popup').removeClass('is-visible');
            //  $(".cd-popup").prev().addClass('is-visible');
            $(document.body).css({'overflow-y':'visible'});
            }
          });

          $('.last_button').on('click', function(event) {
            event.preventDefault();
            $('.cd-popup').removeClass('is-visible');
            //$(".cd-popup").prev().addClass('is-visible');
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
