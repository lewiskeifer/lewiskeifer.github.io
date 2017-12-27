(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // testing on Wario
  $("#foo").click(function() {
  	$('a').css("color", "white");
  });

  // Language options
  $('[lang="zh"]').hide();

  $('#switch-lang').click(function() {
	$('[lang="zh"]').toggle();
	$('[lang="en"]').toggle();
  });

  //Theme options
  $('#switch-theme').click(function() {
  	//if($(this).css("color")=="black")
  	//{
	//	$(this).css("color", "white");
	//}
	//else 
		$(this).css("color", "black");
  });


})(jQuery); // End of use strict
