//capture scroll any percentage
$(window).scroll(function(){
	var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
	var scrolled = (wintop/(docheight-winheight))*100;
	$('.scroll-line').css('width', (scrolled + '%'));
});

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
		}

		if(this.scrollY > 250){
            $('.navbar').removeClass("fixed-nav");
        }else{
            $('.navbar').addClass("fixed-nav");
		}
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["étudiant 42", "développeur", "sportif"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["étudiant 42", "développeur", "sportif"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

VanillaTilt.init(document.querySelectorAll(".button-move"), {
	max: 5,
	speed: 200
});

VanillaTilt.init(document.querySelectorAll(".moving"), {
	max: 20,
	speed: 250
});
