//--------------------------------------------------------------------------------//

						//convert hex to rgba

//--------------------------------------------------------------------------------//

function hexTOrgba(hex,opacity){
  hex = hex.replace('#','');
  r = parseInt(hex.substring(0,2), 16);
  g = parseInt(hex.substring(2,4), 16);
  b = parseInt(hex.substring(4,6), 16);

  result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  return result;
}

//--------------------------------------------------------------------------------//

						//regular javascript function (golden ratio)

//--------------------------------------------------------------------------------//

// function golden_ratio(width){
//   return width/1.61803399;
// }

//--------------------------------------------------------------------------------//

						// Preloader

//--------------------------------------------------------------------------------//
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery("#status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery("#preloader").delay(1000).fadeOut("slow");
    jQuery(".header_container").delay(1500).fadeIn('slow');
});