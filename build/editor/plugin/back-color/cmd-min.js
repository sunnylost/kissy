/*
Copyright 2013, KISSY UI Library v1.40dev
MIT Licensed
build time: Jan 31 23:00
*/
KISSY.add("editor/plugin/back-color/cmd",function(e,c){var d={element:"span",styles:{"background-color":"#(color)"},overrides:[{element:"*",styles:{"background-color":null}}],childRule:function(){return!1}};return{init:function(a){a.hasCommand("backColor")||a.addCommand("backColor",{exec:function(b,a){b.execCommand("save");c.applyColor(b,a,d);b.execCommand("save")}})}}},{requires:["../color/cmd"]});
