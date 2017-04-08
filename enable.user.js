// ==UserScript==
// @name         Fanfiction.net Highlight Enable (test branch)
// @namespace    https://github.com/ThePhantomGamer/highlight-enable
// @version      0.2.0
// @description  Lets you highlight things on fanfiction.net
// @author       Yaseen S./ThePhantomGamer
// @match        http://www.fanfiction.net/*
// @match        https://www.fanfiction.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function(){
		if(document.readyState = 'interactive'){
	   		console.log("working...");
			document.getElementById("storytextp").setAttribute("style", "padding: 0px 0.5em");
		} else {
			console.log('not interactive');	
		}
	});  
})();


