$(function () {
    
    'use strict';
    
    $(window).on('scroll', function () {
        console.log($(this).scrollTop());
        if($(this).scrollTop() >= 100){    
            $("#home").addClass("black");
            $("#contact").removeClass("black");
            $("#test").removeClass("black");
            $("#portfolio").removeClass("black");
            $("#resume").removeClass("black");
        }    
        if($(this).scrollTop() >= 500){
            $('.rr').animate({
				top: "0px",
				
			},700);
            $("#resume").addClass("black");
            $("#services").removeClass("black");
            $("#test").removeClass("black");
            $("#portfolio").removeClass("black");
            $("#home").removeClass("black");
        }
        if($(this).scrollTop() >= 1500){
            $('.ss').animate({
				top: "0px",
				
			},700); 
            $(".green").addClass("back");
            $("#services").addClass("black");
            $("#test").removeClass("black");
            $("#portfolio").removeClass("black");
            $("#home").removeClass("black");
            $("#resume").removeClass("black");
        }
        if($(this).scrollTop() >= 2500){
            $('.pp').animate({
				top: "0px",
				
			},700);
            $("#portfolio").addClass("black");
            $("#services").removeClass("black");
            $("#contact").removeClass("black");
            $("#test").removeClass("black");
            $("#home").removeClass("black");

        }  
        if($(this).scrollTop() >= 3500){
            $('.tt').animate({
				top: "0px",
				
			},700);
            $("#test").addClass("black");
            $("#portfolio").removeClass("black");
            $("#contact").removeClass("black");
            $("#home").removeClass("black");
            $("#resume").removeClass("black");
        }
        if($(this).scrollTop() >= 4500){
            $('.cc').animate({
				top: "0px",
				
			},700);
            $("#contact").addClass("black");
            $("#test").removeClass("black");
            $("#portfolio").removeClass("black");
            $("#home").removeClass("black");
            $("#resume").removeClass("black");
        }
          });
  
    
    $('.b1').on('click',function(){
        $('.e1').css({display:'inline'});
        $('.e2').css({display:'inline'});
        $('.e3').css({display:'inline'});
        $('.e4').css({display:'inline'});
        $('.e5').css({display:'inline'});
        $('.e6').css({display:'inline'});
    });
$('.b2').on('click',function(){
        $('.e1').css({display:'none'});
        $('.e2').css({display:'none'});
       $('.e3').css({display:'inline'});
        $('.e4').css({display:'inline'});
        $('.e5').css({display:'inline'});
        $('.e6').css({display:'none'});
    });
    $('.b3').on('click',function(){
        $('.e1').css({display:'none'});
        $('.e2').css({display:'none'});
        $('.e3').css({display:'none'});
        $('.e4').css({display:'none'});
        $('.e5').css({display:'inline'});
        $('.e6').css({display:'inline'});
    });
$('.b4').on('click',function(){
        $('.e1').css({display:'inline'});
        $('.e2').css({display:'inline'});
        $('.e3').css({display:'none'});
        $('.e4').css({display:'none'});
        $('.e5').css({display:'none'});
        $('.e6').css({display:'none'});
});
    $('.b5').on('click',function(){
        $('.e1').css({display:'none'});
        $('.e2').css({display:'inline'});
        $('.e3').css({display:'inline'});
        $('.e4').css({display:'inline'});
        $('.e5').css({display:'inline'});
        $('.e6').css({display:'none'});
    });
        
    $('.b6').on('click',function(){
        $('.e1').css({display:'none'});
         $('.e2').css({display:'inline'});
        $('.e3').css({display:'inline'});
        $('.e4').css({display:'none'});
        $('.e5').css({display:'none'});
        $('.e6').css({display:'none'});
        });
    
    
    $('.b7').on('click',function(){
        $('.e1').css({display:'none'});
         $('.e2').css({display:'inline'});
        $('.e3').css({display:'inline'});
        $('.e4').css({display:'none'});
        $('.e5').css({display:'none'});
        $('.e6').css({display:'none'});
        });
    
    $('.b8').on('click',function(){
        $('.e1').css({display:'none'});
        $('.e2').css({display:'none'});
        $('.e3').css({display:'inline'});
        $('.e4').css({display:'inline'});
        $('.e5').css({display:'none'});
        $('.e6').css({display:'none'});
    });
    
    
    
    
    
    });
    
    

    
      




















            
               
              