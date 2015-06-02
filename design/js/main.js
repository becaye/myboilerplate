// Main.js
// Ajouter une classe tous les n éléments

//$('#content .block:nth-child(2n)').addClass('pull-right');

// Ajout d'une classe sur les premiers et derniers éléments d'une liste

$("li:first-child").addClass("first");
$("li:last-child").addClass("last");

// Gestion d'une hauteur égale de blocs d'une MEME LIGNE
// Nécessite l'utilisation d'une classe .sameHeight sur les divs devant avoir la même hauteur 
// http://css-tricks.com/equal-height-blocks-in-rows

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

bigImage = function(container){
	$el = $(this);
	$(container).each(function() {
	$($el).css({'height':(($(window).height())-0)+'px'});
	});
}

$(window).load(function() {
  //equalheight('.main article');
  bigImage('.foulescreen'); 
});

$(window).resize(function(){
  //equalheight('.main article');
});


/*$(function(){
	$(window).load(function(){ // On load
		$('.grande_image_header .slide_img').css({'height':(($(window).height())-0)+'px'});
	});
	$(window).resize(function(){ // On resize
		$('.grande_image_header .slide_img').css({'height':(($(window).height())-0)+'px'});
	});
});*/