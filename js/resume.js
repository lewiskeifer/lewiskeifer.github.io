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
	$('.js-scroll-trigger').css("color", "yellow");
	$('#switch-lang').css("color", "yellow");
	$('#switch-theme').css("color", "yellow");
	//$('#sideNav').css("background-color", "yellow");
  });

  // Language options
  $('[lang="zh"]').hide();

  $('#switch-lang').click(function() {
	$('[lang="zh"]').toggle();
	$('[lang="en"]').toggle();
  });

  //Theme options
  $('#switch-theme').click(function() {

  	var color = $(this).css("color");

  	if(color === 'rgb(0, 0, 0)' || color === 'black')
  	{
		$(this).css("color", "white");
		$('#switch-lang').css("color", "white");
		$('#switch-theme').css("color", "white");
		//$('.js-scroll-trigger').css("color", "rgba(255, 255, 255, .5)");
		$('.js-scroll-trigger').removeClass("nav-link-dark").addClass("nav-link");
	}
	else 
	{
		$(this).css("color", "black");
		$('#switch-lang').css("color", "black");
		$('#switch-theme').css("color", "black");
		//$('.js-scroll-trigger').css("color", "black");
		
		//$('.nav-link:hover').css("border-color", "#000 #000 #000");

		//$('.js-scroll-trigger').removeClass("nav-tabs").addClass("nav-tabs-dark");
		$('.js-scroll-trigger').removeClass("nav-link").addClass("nav-link-dark");
		//$('.js-scroll-trigger').removeClass("nav-link:hover").addClass("nav-link-dark:hover");
	}
  });


})(jQuery); // End of use strict
