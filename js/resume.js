/*!
 * Start Bootstrap - Resume v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
/*!
 * Start Bootstrap - Resume v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
/*!
 * Start Bootstrap - Resume v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
/*!
 * Start Bootstrap - Resume v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
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
  $('#switch-lang').css("color", "rgba(255, 255, 255, .75");
  $('#switch-theme').css("color", "rgba(255, 255, 255, .75");

  $("#switch-lang").mouseenter(function() {
  	
  	var color = $(this).css("color");

  	if(color === 'rgba(0, 0, 0, 0.75)')
  	{
      $(this).css("color", "black");
	}
	else $(this).css("color", "white");
  }).mouseleave(function() {

  	 var color = $(this).css("color");

  	 if(color === 'rgb(0, 0, 0)' || color === "black")
  	 {
       $(this).css("color", "rgba(0, 0, 0, .75");
     }
     else 
     {
     	$(this).css("color", "rgba(255, 255, 255, .75");
     }
  });


  $("#switch-theme").mouseenter(function() {
  	
  	var color = $(this).css("color");

  	if(color === 'rgba(0, 0, 0, 0.75)')
  	{
      $(this).css("color", "black");
	}
	else 
	{
		$(this).css("color", "white");
	}
  }).mouseleave(function() {

  	 var color = $(this).css("color");

  	 if(color === 'rgb(0, 0, 0)' || color === 'black' || color === "rgba(0, 0, 0, 0.75)")
  	 {
       $(this).css("color", "rgba(0, 0, 0, .75");
     }
     else 
     {
     	$(this).css("color", "rgba(255, 255, 255, .75");
     }
  });

  $('#switch-theme').click(function() {

  	var color = $(this).css("color");

  	if(color === 'rgb(0, 0, 0)' || color === 'black')
  	{
		$('#switch-lang').css("color", "rgba(255, 255, 255, .75");
		$('#switch-theme').css("color", "white");
		$('.js-scroll-trigger').removeClass("nav-link-dark");

		$('.bg-primary').each(function () {
		    this.style.setProperty( 'background-color', '#198531', 'important' );
		});

		$('.text-primary').each(function () {
		    this.style.setProperty( 'color', '#198531', 'important' );
		});

		$('.list-icons .list-inline-item i:hover').css('color', '#198531');
		$('.list-social-icons a:hover').css('color', '#198531');

		refreshScrollSpy();
	}
	else 
	{
		$('#switch-lang').css("color", "rgba(0, 0, 0, .75");
		$('#switch-theme').css("color", "black");
		$('.js-scroll-trigger').addClass("nav-link-dark");

/*		$('.bg-primary').each(function () {
		    this.style.setProperty( 'background-color', '#361985', 'important' );
		});

		$('.text-primary').each(function () {
		    this.style.setProperty( 'color', '#361985', 'important' );
		});*/

		//$('.list-icons .list-inline-item i:hover').css('color', 'yellow');
		//$('i:hover').css('color', 'yellow');
		//$('.list-inline-item').css('color', 'yellow');
		//$('.list-icons').css('color', 'yellow');
		//$('li:hover').css('color', 'yellow');

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

