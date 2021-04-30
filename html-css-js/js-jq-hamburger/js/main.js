// $('.hamburger-menu').show();

// $(".header-right > a").click(function() {
// 	alert( "Handler for .click() called." );
// });

/*
// 1. metodo - jQuery
// apri menu
$(".header-right > a ").click(function() {
	$(".hamburger-menu").show();
});

// chiudi menu
$(".hamburger-menu > a ").click(function() {
	$(".hamburger-menu").hide();
});
*/


// 2. metodo - jQuery 
// in caso di ridimensionamento dello screen (es. ruoto il tablet) il menu scompare 
// apri menu
$(".header-right > a ").click(function() {
	$(".hamburger-menu").addClass('active');
});

// chiudi menu
$(".hamburger-menu > a ").click(function() {
	$(".hamburger-menu").removeClass('active');
});

// prove
// document.getElementsByClassName('hamburger-menu')[0].style.display = 'block';

// var obj = document.getElementsByClassName('hamburger-menu')[0];
// console.log(obj);

// document.getElementsByClassName('hamburger-menu')[0].classList.add('show'); IE9 +

// var stylesheets = document.styleSheets;
// var stylesheet = document.styleSheets[2];
// console.log(stylesheet);

// var obj = document.getElementsByClassName('hamburger-menu')[0];
// obj.setAttribute('style', 'display: block');




