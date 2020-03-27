$(document).ready(function(){
    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });
    
    $(".nav-close").click(function(){
        $(".full-nav").removeClass("open");
    });
    
    $(window).scroll(function(){
        var sr = $(window).scrollTop();
        if( sr > 100){
            $(".navWrap").addClass("sticky");
        } else{
            $(".navWrap").removeClass("sticky");
        }
    });
    
    $(".nav > ul > li > a").click(function(e){
    	$(".nav > ul > li > a").removeClass("active").$(this).addClass("active");
    	e.preventDefault();
    });


    function aniWow(){
		var secNum = $("section");
		var scrollY = $("html").scrollTop();
			secNum.each(function (index){
			if(scrollY >= secNum.eq(index).offset().top-400){
				secNum.removeClass("action").eq(index).addClass("action");
			}
		});
	};
	$(window).scroll(function(){
		aniWow();
	});
});

$(".bxslider").bxSlider({
        mode:'horizontal',
        moveSlides:1,
        slideMargin:40,
        infiniteLoop:true,
        minSlides:1,
        maxSlides:1,
        speed:1000,
         auto: true
    });

var pSlider = $(".ProductBxslider").bxSlider({
        slideWidth:'200',
        controls:true,
        slideMargin:55,
        mode:'horizontal',
        moveSlides:1,
        infiniteLoop:true,
        minSlides:3,
        maxSlides:3,
        speed:600,
         auto: true,        
        autoHover: true
    });
$(".slider_next").click(function(){
        pSlider.goToNextSlide();
    });

    $(".slider_prev").click(function(){
       pSlider.goToPrevSlide();
    });



$("#gallery").magnificPopup({
   delegate:'a',
    type:'image',
    gallery:{
    enabled:true
    }
});


$("#gallery2").magnificPopup({
   delegate:'a',
    type:'image',
    gallery:{
    enabled:true
    }
});

$("#gallery3").magnificPopup({
   delegate:'a',
    type:'image',
    gallery:{
    enabled:true
    }
});

$("#gallery4").magnificPopup({
   delegate:'a',
    type:'image',
    gallery:{
    enabled:true
    }
});

$("#gallery6").magnificPopup({
   delegate:'a',
    type:'image',
    gallery:{
    enabled:true
    }
});

$("#gallery7").magnificPopup({
   delegate:'a',
    type:'image',
    gallery:{
    enabled:true
    }
});


if($(".swiper-container").hasClass("condom-slider")){
	var swiper = new Swiper('.swiper-container',{
		slidesPerView:3,
		allowTouchMove:true,
		loop:true,
		centeredSlides:true,
		slideToclickedslide:true,
		effect:"coverflow",
		grabcursor:true,
		autoplay:false,
		navigation:{
			nextEl:'.swiper-button-next',
			prevEl:'.swiper-button-prev',
		},
		coverflow:{
			rotate:0,
			stretch:100,
			depth:200,
			modifier:1,
			slideShadows:false
		}
		// breakpoints:{
		// 	560:{
		// 		slidesPerView:1,
		// 		centeredSlides:false,
		// 		effect:"slide"
		// 	}
		// }
	});
}



$("#work").magnificPopup({
	delegate:'a',
	type:'image',
	gallery:{
		enabled:true
	}
});




// $(".nav > ul > li").mouseenter(function(){
// 	$(this).addClass("hover");
// });
// $(".nav > ul > li").mouseleave(function(){
// 	$(this).removeClass("hover");
// });





