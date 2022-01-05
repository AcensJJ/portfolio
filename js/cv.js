
  function scrollToTop(){
	$('html, body').animate({ scrollTop: 0 }, 1200);
  }
  
  //Smooth scrolling animation function
  $(function() {
	$('a[href*="#"]:not([href="#"])').click(
	  function(){ 
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash); 
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		  var offset2 = target.offset().top - 50;
		  $('html, body').animate({
			scrollTop: offset2
		  }, 1200);
		  if(document.body.clientWidth < 768){$('.navbar-toggle').click();}
		  return false;
		}
	  }
	});
  });
  
  //Making items visible on scroll
  $(function() {
	'use strict';
	// define variables
	var items = document.querySelectorAll(".timeline li");
	var hrs = $('section');
	var items1 = $('.navbar-nav li');
	
	// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
	  var rect = el.getBoundingClientRect();
	  return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  );
	}
  
	function callbackFunc() {
	  for (var i = 0; i < items.length; i++) {
		if (isElementInViewport(items[i])) {
		  items[i].classList.add("in-view");
		}
	  }
	}
  
	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
  
  });
  

  /*------------END--------------*/