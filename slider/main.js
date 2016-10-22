var slider = (function() {

	// DOM ready function
 	$(document).ready(function() {

 		//  JQuery DOM element creation
		var redSlider = $('#redSlide');
		var greenSlider = $('#greenSlide');
		var blueSlider = $('#blueSlide');
		var alphaSlider = $('#alphaSlide');

		// Each Jquery DOM element has the .slider() method run on it
		// Then, a slide event listener is constructed and inserted into the corresponding value span element

		// Red slider
		redSlider.slider();
		redSlider.on('slide', function(slideEvt) {
			$('#red_slider_value').text(slideEvt.value);
		});

		// Green slider
		greenSlider.slider();
		greenSlider.on('slide', function(slideEvt) {
			$('#green_slider_value').text(slideEvt.value);
		});

		// Blue slider
		blueSlider.slider();
		blueSlider.on('slide', function(slideEvt) {
			$('#blue_slider_value').text(slideEvt.value);
		});
		
		// Alpha slider
		alphaSlider.slider();
		alphaSlider.on('slide', function(slideEvt) {
			$('#alpha_slider_value').text(slideEvt.value);
		});

  });

})();