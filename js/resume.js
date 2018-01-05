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

  function refreshScrollSpy() {
    $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy('refresh');
    }); 
   };

  // Smashball
  $("#p6").click(function() {
	$('body').css("background-color", "white");
  });

  // Power Ranger
  $("#p5").click(function() {
	$('body').css("background-color", "green");
  });

  // Wario
  $("#p4").click(function() {
	$('body').css("background-color", "purple");
  });

  // DBZ
  $("#p3").click(function() {
	$('body').css("background-color", "black");
  });

  // Psyduck
  $("#p2").click(function() {
	$('body').css("background-color", "yellow");
  });

  // Toad
  $("#p1").click(function() {
	$('body').css("background-color", "red");
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
		$('#switch-lang').css("color", "white");
		$('#switch-theme').css("color", "white");
		$('.js-scroll-trigger').removeClass("nav-link-dark");

		refreshScrollSpy();
	}
	else 
	{
		$('#switch-lang').css("color", "black");
		$('#switch-theme').css("color", "black");
		$('.js-scroll-trigger').addClass("nav-link-dark");

		refreshScrollSpy();
	}
  });

  //Picture options
  $('#k1').click(function() {
	var source = document.getElementById("k1").src;
	source = source.substr(source.length-10);

	if(source === "keifer.png") document.getElementById("k1").src="img/keifer2.jpg";
	else document.getElementById("k1").src="img/keifer.png";

  });

})(jQuery); // End of use strict