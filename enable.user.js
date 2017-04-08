// ==UserScript==
// @name         Fanfiction.net Highlight Enable
// @namespace    https://github.com/ThePhantomGamer/highlight-enable
// @version      0.1.4
// @description  Lets you highlight things on fanfiction.net
// @author       Yaseen S./ThePhantomGamer
// @match        http://www.fanfiction.net/*
// @match        https://www.fanfiction.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) { 
		console.log("working...");
        document.getElementById("storytextp").setAttribute("style", "padding: 0px 0.5em");
	});  
})();


