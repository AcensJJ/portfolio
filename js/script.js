$(window).on('load', function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	$('body').delay(350).css({'overflow':'visible'});
	$('.items').css('position','absolute');
})

//capture scroll any percentage
$(window).scroll(function(){
	var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
	var scrolled = (wintop/(docheight-winheight))*100;
	$('.scroll-line').css('width', (scrolled + '%'));
});

$(document).ready(function(){
    $(window).scroll(function(){

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

});
