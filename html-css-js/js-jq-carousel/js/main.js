// primo test
// al click dell'oggetto next le img scorrono senza condizioni
// idem al click dell'oggetto prev
// la funzione click dell'oggetto next non sa quando tornare alla prima immagine
// la funzione click dell'oggetto prev non sa quando tornare all'ultima immagine

/*

$(document).ready(function() {

  // $('.next').click(function() {
  //   alert('click freccia avanti');
	// });
	
	// $('.prev').click(function() {
  //   alert('click freccia indietro');
	// });
	
	$('.next').click(function() {
		//.next(); prossimo oggetto (class="next")
		// var obj = $('.images');
		// console.log(obj);

		// cosi prendo tutte le img nell'oggetto images (non serve >)
		// var obj = $('.images img');
		// console.log(obj);

		// toglie active dalla prima img e la mette a tutte le altre
		// $('.images img').removeClass('active').next().addClass('active');
		
		// toglie active alla prima img e alla successiva la aggiunge
		$('.images img.active').removeClass('active').next().addClass('active');		

	});

	$('.prev').click(function() {
		$('.images img.active').removeClass('active').prev().addClass('active');
	});

});

*/

$(document).ready(function() {

	// var objImages = $('.images img');
	// console.log(objImages.length);

	// console.log($('img.first'));

	// var objSlider = $('img')
	// console.log(objSlider);

	// // 0, 1, 2, 3, 4 come array
	// var objSliderLast = objSlider.length;
	// console.log(objSliderLast);

	// img = $('img');
	// var imgFirst = img.first();
	// var imgLast = img.last();
	// var i = 0;
	// // var imgLastIndex = img.length;
	// console.log(imgFirst);
	// console.log(imgLast);

	// after in class room correction
	$('.next').click(function() {
		if ($('img.active').hasClass('last')) {
			$('img.active').removeClass('active');
			$('img.first').addClass('active');
		} else {
			$('img.active').removeClass('active').next().addClass('active');
		}
	});

	$('.prev').click(function() {
		if ($('img.active').hasClass('first')) {
			$('img.active').removeClass('active');
			$('img.last').addClass('active');
		} else {
			$('img.active').removeClass('active').prev().addClass('active');
		}
	});
});