// Once the dom is ready, load our javascript
$(document).ready(function() { 

	// Store specific dom elements in variables
	var input = $('#user_text');
	var submitter = $('#sub_button');

	// Create a click event on one of our dom saved variables
	submitter.click(function() {

		// Set a variable that contains the user input value (user input value will be a single string)
		var userInput = input.val();
		
		// Use the split() method to separate the single string input value into the individual words
		var userValSplitArr = userInput.split(' ');

		// The map() method loops over each item in the array of user input values. We then split the individual letters of each item/value, reverse them, and rejoin them
		var userValRevArr = userValSplitArr.map(function (item) {
		    return item.split('').reverse().join('');
		});

		// Loop through the array of reversed input values
		for (var i = 0; i < userValRevArr.length; i++) {

			// Flag the palindromes by comparing the itemized values against the itemized reversed values
			if (userValSplitArr[i] == userValRevArr[i]) {

				// Store the reversed word output in a variable 
				var palindrome = $('#user_output').append('<span class="rev_word">' + userValRevArr[i] + '</span> <br/>');
		
				// Append our palindrome found text to the found palindrome variable
				palindrome.append('<figcaption> That is a palindrome. Cool! </figcaption>');

			} else {

				// Print out the reversed word without a palindrome flag
				$('#user_output').append('<span class="rev_word">' + userValRevArr[i] + '</span> <br/>');

			}

		}

		// Reset the input but setting the dom element's value to an empty string.
		input.val('');

	// Close the click event
	});

// Close the dom ready function
});