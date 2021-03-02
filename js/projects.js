$(document).ready(function($) {

  /*  Interactions */

  $('#probe').on('click', function(event) {
    event.preventDefault();
    $('.probe').addClass('is-visible');
    //document.documentElement.style.overflow = 'hidden';
    //document.body.scroll = "no";
    $(document.body).css({'overflow':'hidden'});
  });


    $('#embosight').on('click', function(event) {
      event.preventDefault();
      $('.embosight').addClass('is-visible');
      $(document.body).css({'overflow':'hidden'});
    });


      $('#bioplastic').on('click', function(event) {
        event.preventDefault();
        $('.bioplastic').addClass('is-visible');
        $(document.body).css({'overflow':'hidden'});
      });

        $('#energy-equity').on('click', function(event) {
          event.preventDefault();
          $('.energy-equity').addClass('is-visible');
          $(document.body).css({'overflow':'hidden'});
        });

          $('#iee').on('click', function(event) {
            event.preventDefault();
            $('.iee').addClass('is-visible');
            $(document.body).css({'overflow':'hidden'});
          });

            $('#power').on('click', function(event) {
              event.preventDefault();
              $('.power').addClass('is-visible');
              $(document.body).css({'overflow':'hidden'});
            });

              $('#covid-hack').on('click', function(event) {
                event.preventDefault();
                $('.covid-hack').addClass('is-visible');
                $(document.body).css({'overflow':'hidden'});
              });

                $('#bitl').on('click', function(event) {
                  event.preventDefault();
                  $('.bitl').addClass('is-visible');
                  $(document.body).css({'overflow':'hidden'});
                });

                  $('#senior-thesis').on('click', function(event) {
                    event.preventDefault();
                    $('.senior-thesis').addClass('is-visible');
                    $(document.body).css({'overflow':'hidden'});
                  });

                    $('#yoyodeler').on('click', function(event) {
                      event.preventDefault();
                      $('.yoyodeler').addClass('is-visible');
                      $(document.body).css({'overflow':'hidden'});
                    });

                      $('#inchworm').on('click', function(event) {
                        event.preventDefault();
                        $('.inchworm').addClass('is-visible');
                        $(document.body).css({'overflow':'hidden'});
                      });

                        $('#mousevr').on('click', function(event) {
                          event.preventDefault();
                          $('.mousevr').addClass('is-visible');
                          $(document.body).css({'overflow':'hidden'});
                        });

                          $('#rak').on('click', function(event) {
                            event.preventDefault();
                            $('.rak').addClass('is-visible');
                            $(document.body).css({'overflow':'hidden'});
                          });

                            $('#case').on('click', function(event) {
                              event.preventDefault();
                              $('.case').addClass('is-visible');
                              $(document.body).css({'overflow':'hidden'});
                            });

                              $('#makemit').on('click', function(event) {
                                event.preventDefault();
                                $('.makemit').addClass('is-visible');
                                $(document.body).css({'overflow':'hidden'});
                              });

                                $('#forfun').on('click', function(event) {
                                  event.preventDefault();
                                  $('.forfun').addClass('is-visible');
                                  $(document.body).css({'overflow':'hidden'});
                                });

          //close popup when clicking x or off popup
          $('.cd-popup').on('click', function(event) {
            if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
              event.preventDefault();
              $('.cd-popup').removeClass('is-visible');
               //document.documentElement.style.overflow = 'scroll';
              //document.body.scroll = "yes";
              $(document.body).css({'overflow':'auto'});
            }
          });

          //close popup when clicking the esc keyboard button
          $(document).keyup(function(event) {
            if (event.which == '27') {
              $('.cd-popup').removeClass('is-visible');
              //document.documentElement.style.overflow = 'scroll';
              //document.body.scroll = "yes";
              $(document.body).css({'overflow':'auto'});
            }
          });

          //Move to the next project by pressing the right arrow or button
          $(document).keyup(function(event) {
            if (event.which == '39') {
              $('.cd-popup').removeClass('is-visible');
              //$('.cd-popup').next().addClass('is-visible');
              //$(this).nextAll('.cd-popup').first().addClass('is-visible');
              $(document.body).css({'overflow':'auto'});
            }
          });
          $('.close_button').on('click', function(event) {
            event.preventDefault();
            $('.cd-popup').removeClass('is-visible');
            $(document.body).css({'overflow':'auto'});
          }
          );

          //Move to the previous project by clicking the left arrow or button
          $(document).keyup(function(event) {
            if (event.which == '37') {
              $('.cd-popup').removeClass('is-visible');
            //  $(".cd-popup").prev().addClass('is-visible');
            $(document.body).css({'overflow':'auto'});
            }
          });

          $('.last_button').on('click', function(event) {
            event.preventDefault();
            $('.cd-popup').removeClass('is-visible');
            //$(".cd-popup").prev().addClass('is-visible');
            $(document.body).css({'overflow':'auto'});
          }
          );

        });
