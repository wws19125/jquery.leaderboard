/*!
 * jqLeaderboard Plugin
 * https://github.com/boostbob/jquery.leaderboard
 *
 * Copyright 2013
 * Released under the MIT license
 *
 * Created: 04/2013
 * Author: Bob Wang
 * https://github.com/boostbob/
 */

(function($) { 
	"use strict";

	var pluginName = 'jqLeaderboard';
	var defaults = {};
	var exclude = ".title, .rank";

	function jqLeaderboard(element, options) { 
		this._container = $(element);
		this._options = $.extend({}, defaults, options);
		this._name = pluginName;
		this._defaults = defaults;

		// initialize
		this.init();
	};

	jqLeaderboard.prototype.init = function() { 
		var _this = this;
		_this._generate_markup();
		_this._select_first();
	};

	jqLeaderboard.prototype._generate_markup = function() {  
		var _this = this;

		_this._container.find("ul").each(function() {
			$(this).find("li").not(exclude).tsort({attr: 'data-value', order: 'desc'});
		});

		_this._container.find("ul li").not(exclude).each(function() {
			$(this).append('<span class="value">$' + $(this).attr('data-value') + '</span>');
		});

		_this._container.find("ul li").not(exclude).bind('mouseover', function() {
		    var code = $(this).attr("data-rel");

		    $(".leaderboard ul li").not(".title, .rank").each(function() {
		        if($(this).attr('data-rel') == code.toUpperCase()) {
		            $(this).toggleClass("hover");
		        } else {
		            $(this).removeClass("hover");
		        }
		    });
		});

		_this._container.find("ul li").not(exclude).bind('click', function() {
		    var total = 0;
		    var code = $(this).attr("data-rel");

		    $(".leaderboard ul li").not(".title, .rank").each(function() {
		        if($(this).attr('data-rel') == code.toUpperCase()) {
		            $(this).toggleClass("selected");
		            total += $(this).attr('data-value') * 1;
		            $(this).parent().children(".rank").first().css('display', 'block').html($(this).prevAll().length - 1);
		        } else {
		            $(this).removeClass("selected");
		        }
		    });

		    $(".leaderboard .total").html("Total: $" +  total);
		});
	};

	// public methods here
	jqLeaderboard.prototype._select_first = function(e) {
		_this._container.find("ul li").not(exclude).not(".title, .rank").first().trigger('click');
	};

	$.fn.jqleaderboard = function(options) {
		return this.each(function() {
			var element = $(this);

			// already done
			if(element.data("leaderboard")) return;

			var leaderboard = new jqLeaderboard(this, options);
			element.data("leaderboard", leaderboard);
		});
	};
}(jQuery, window));