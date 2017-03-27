var owl = $('.owl-carouselMain');
      owl.owlCarousel({
        margin: 10,
        loop: true,
        touchDrag: true,
        dots: true,
        dotsEach: 1,
        pullDrag: true,
        slideBy: 1,
        navText: ["<i class='fa fa-chevron-circle-right'></i>","<i class='fa fa-chevron-circle-left'></i>"],
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        nav:true
        })

;





var owltwo = $('.owl-carouselTop');
      owltwo.owlCarousel({
        margin: 10,
        loop: true,
        touchDrag: true,
        dots: true,
        dotsEach: 1,
        pullDrag: true,
        slideBy: 1,
        navText: ["<i class='fa fa-chevron-circle-right'></i>","<i class='fa fa-chevron-circle-left'></i>"],
        autoplay: true,
        // items: 3,
        // autoplay: true,
        autoplayTimeout: 3000,
        nav:true,
        responsive: {
          0: {
            items: 1 
          },
          767: { 
            items: 2 
          },
          1200: {
            items: 3
          }
        }



      })

;



var owltwo = $('.owl-carouselNew');
      owltwo.owlCarousel({
        margin: 10,
        loop: true,
        touchDrag: true,
        dots: true,
        dotsEach: 1,
        pullDrag: true,
        slideBy: 1,
        navText: ["<i class='fa fa-chevron-circle-right'></i>","<i class='fa fa-chevron-circle-left'></i>"],
        autoplay: true,
        // items: 3,
        // autoplay: true,
        autoplayTimeout: 5000,
        nav:true,
        responsive: {
          0: { 
            items: 1 
          },
          1200: {
            items: 2
          }
        }



      })

;







$('.ul_nav li').click(function(){
      $('.ul_nav>li').removeClass('activeLi');
      $(this).toggleClass('activeLi');
      })
$('.ul_nav li a').click(function(){
      $('.ul_nav>li>a').removeClass('activeLi>a');
      $(this).toggleClass('activeLi>a');
      });




$(document).ready(function() {

 // _____header_container____
var options = {
  offset: 600
};
var header = new Headhesive('.header_container', options);





  // _____section_Main____
$(".section_main").on("mouseover",'.owl-carouselMain', function (){
 $(this).find(".owl-nav").show();
});
$(".section_main").on("mouseout",'.owl-carouselMain', function (){
 $(this).find(".owl-nav").hide();
});
  

// _____section_News____
$(".section_new").on("mouseover",'.owl-carousel', function (){
 $(this).find(".owl-nav").show();
});
$(".section_new").on("mouseout",'.owl-carousel', function (){
 $(this).find(".owl-nav").hide();
});



















});
