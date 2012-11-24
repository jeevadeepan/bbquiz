/**
 * --------------------------------------------------------------------------
 * This software is the confidential and proprietary information
 * ("Confidential Information") of BigMachines.com Corporation ("The Company").
 * You shall not disclose such Confidential Information and shall use
 * and alter it only in accordance with the terms of the agreement(s)
 * you entered into with BigMachines.com.
 * --------------------------------------------------------------------------
 *
 * Module: placeHolder.js
 * Product: BigMachines.com
 *
 * 
 * Pradeep S,Matt Nickell June 18, 2012 Creation
 *
 * Copyright (c) 2012 BigMachines.com Corporation
 *
 * -------------------------------------------------------------------------- */

/**
 * Uses Modernizer and provides cross browser support for place holder 
 * 
 * $input = undefined, All the input elements with place holder attribute will be updated with place holder and css class in IE8
 * $input = input element, input element to be updated with place holder and css class in IE8. 
 * 			Pass this argument,if the input elements which are hidden or dynamically generated to be updated with place holder
 */

 	/**
     * Define Bm.Common name space
     */
     if (typeof(window.Bm) == 'undefined') window.Bm = {};
     if (typeof(Bm.Common) == 'undefined') Bm.Common = {};

     
define(['jquery'],function($){
	Bm.Common.placeHolderIEFix = function ($input){
		if(!Modernizr.input.placeholder){
			var $selector = $input ? $input:$('[placeholder]');
			$selector.focus(function() {
				  var input = $(this);
				  if (input.val() == input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
					/*
					 * fix to show the text cursor, which disappers in IE, even while tabbing between the inputs
					 * $.support.submitBubbles -- to check if the browser is IE
					 */
					if($.support.submitBubbles){
						if(this.value == ""){
							var range = this.createTextRange();
							range.collapse(true);
							range.moveStart('character', 0);
							range.select();
						}
					}
				  }
				}).blur(function() {
				  var input = $(this);
				  if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				  }
				}).blur();			
		}
	}; 
});


