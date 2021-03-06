$(document).ready(function($) {

  /*  Interactions */

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
