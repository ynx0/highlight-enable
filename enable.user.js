// ==UserScript==
// @name         Fanfiction.net Highlight Enable
// @namespace    https://github.com/ThePhantomGamer/highlight-enable
// @version      0.1.3
// @updateURL    https://github.com/ThePhantomGamer/highlight-enable/raw/master/enable.user.js
// @description  Lets you highlight things on fanfiction.net
// @author       Yaseen S./ThePhantomGamer
// @match        http://www.fanfiction.net/*
// @match        https://www.fanfiction.net/*
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


