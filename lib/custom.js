// Creates a namespace object with the variable name if one doesn't already exist.
var rsol = rsol || {};

// A function that establishes some variables which point to internal functions
// that eventually return data to the user's screen.
rsol.bttf = (function() {

	// Prevents certain actions from being taken and throws more exceptions.
	// It prevents, or throws errors, when relatively 'unsafe' actions are taken
	// (such as gaining access to the global object) and disables features that
	// are confusing or poorly thought out.
	'use strict';

	var loaded = function () {
	};

	/**
	 * Gets today's date and displays the date in a readable format in each of
	 * the boxes that fit in the board image.
	 */
	var presentTime = function () {
		// Gets today's date.
		var presentTime = moment();
		// Display the dates in readable format.
		$('#presentTime .month').text(presentTime.format('MMM'));
		$('#presentTime .day').text(presentTime.format('DD'));
		$('#presentTime .year').text(presentTime.format('YYYY'));
		$('#presentTime .hour').text(presentTime.format('HH'));
		$('#presentTime .min').text(presentTime.format('mm'));
	};

	/**
	 * Transforms the date string into an actual MomentJS date and displays the
	 * date in a readable format in the board image boxes.
	 */
	var lastTimeDeparted = function () {
		// Create a moment from the date string.
		var lastTimeDeparted = moment('1985-10-26 01:20');
		// Display the dates in readable format.
		$('#lastTimeDeparted .month').text(lastTimeDeparted.format('MMM'));
		$('#lastTimeDeparted .day').text(lastTimeDeparted.format('DD'));
		$('#lastTimeDeparted .year').text(lastTimeDeparted.format('YYYY'));
		$('#lastTimeDeparted .hour').text(lastTimeDeparted.format('HH'));
		$('#lastTimeDeparted .min').text(lastTimeDeparted.format('mm'));
	};

	// Returns the respective function to the objects listed below.
	return {
		'loaded': loaded
	};

// The () right before the end of the function makes sure that this function is called
// as soon as the page is loaded and returns the value that will then be stored in the
// main function.
}());

// Binds an event handler to the load JavaScript event for when the page has
// finished loading and calls the function stated below as soon as this happens.
$(window).load(rsol.bttf.loaded);