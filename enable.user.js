// ==UserScript==
// @name         Highlight Enable
// @namespace    https://github.com/ThePhantomGamer/highlight-enable
// @version      0.1
// @description  Lets you highlight things on fanfiction.net
// @author       Yaseen S./ThePhantomGamer
// @match        http://fanfiction.net/*
// @match        https://fanfiction.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = window.setTimeout(
    function(){
        console.log("working...");
        document.getElementById("storytextp").setAttribute("style", "padding: 0px 0.5em");
    }, 150);
    
})();


