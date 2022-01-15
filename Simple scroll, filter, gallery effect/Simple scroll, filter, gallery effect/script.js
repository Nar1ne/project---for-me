
$(document).ready(function(){


	// <!----------- simple scroll-------- -->

// $(".down").click(function() {
//      $('html, body').animate({
//          scrollTop: $(".up").offset().top
//      }, 1500);
//  });
// });

// $(document).ready(function() {
// $(".up").click(function() {
//      $('html, body').animate({
//          scrollTop: $(".down").offset().top
//      }, 1000);
//  });


// -------------------parallax scroll with JS--------------------

// function parallax() {
// 	var $slider = document.getElementById("slider");

// 	var yPos = window.pageYOffset / $slider.dataset.speed;
// 	yPos = -yPos;
	
// 	var coords = '0% '+ yPos + 'px';
	
// 	$slider.style.backgroundPosition = coords;
// }

// window.addEventListener("scroll", function(){
// 	parallax();	
// });






	// <!-- -  ----Image Gallery With  JQuery Hover Effect------------>





$(document).ready(function() {
  $('#worksample a h3').addClass( "hide" );
  $('#worksample a span').addClass( "hide" );

  $('#worksample a').hover(function() {
    /*fade in code*/
    $(this).find('h3').addClass('title');
    $(this).find('span').addClass('describtion');
    $(this).find('h3').removeClass('hide');
    $(this).find('span').removeClass('hide');
    $(this).find('figure img').addClass('imgeffect');
  }, function() {
    /*fade out code*/
    $(this).find('h3').removeClass('title');
    $(this).find('span').removeClass('describtion');
    $(this).find('h3').addClass('hide');
    $(this).find('span').addClass('hide');
    $(this).find('figure img').removeClass('imgeffect');
  });

});


// ------------filter by JavaScript--- ----------

// var $btns = $('.btn').click(function() {
//   if (this.id == 'all') {
//     $('#parent > div').fadeIn(450);
//   } else {
//     var $el = $('.' + this.id).fadeIn(450);
//     $('#parent > div').not($el).hide();
//   }
//   $btns.removeClass('active');
//   $(this).addClass('active');
// }) 
	



});




// -------------------filter by JavaScript-----------



	
		
