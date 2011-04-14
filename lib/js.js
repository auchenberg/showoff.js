/**
 * Node Slideshow [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
jQuery(function(){
	var deck = jQuery('#deck'), slides = deck.children('section'), win = jQuery( window ), slide = 0, width, height, timeid;

  console.log('test');


  $('body').load('/slides/intro/1. title.md');



	// Slide Transition
	function change(){
		window.location.hash = slide + 1;
		deck.stop().animate( { marginLeft: ( slide * width ) * -1 }, Config.transitions );
	}


	// Handle page resizing
	win.resize(function(){
		// Dimensions
		width = win.width();
		height = win.height();

		// Reset dimensions
		slides.width( width - 60 ).height( height - 30 );
		deck.width( width * slides.length + 100 );

		// Wait for resizing to finish before handling adjustments
		if ( timeid ) {
			timeid = clearTimeout( timeid );
		}
		timeid = setTimeout( change, 200 );
	})
	// Allow custom slide views
	.keydown(function( event ) {
		switch ( event.keyCode ) {
			case 9: // Tab
			case 13: // Enter
			case 32: // Spacebar
			case 39: // Right Arrow
				if ( slide + 1 < slides.length ) {
					slide++;
					change();
				}
				return false;

			case 8: // Backspace
			case 37: // Left Arrow
				if ( slide > 0 ) {
					slide--;
					change();
				}
				return false;
		}
	})
	// Configure Dimensions
	.resize();


	// Auto select the slide so urls can be shared
	if ( window.location.hash && window.location.hash !== '' ) {
		slide = parseInt( window.location.hash.replace( /^.*#/, '' ), 10 ) - 1;
	}

	// Push the initial slide out
	change();
	});
