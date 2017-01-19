$(document).ready(function(){

   var selection = $("li:nth-child(6)");
   selection.css({"border": "5px solid #ff66ff"});
   //selection.parent().css({"border": "5px solid black"});
   //selection.parents().css({"border": "5px solid black"});
   //selection.parents("div").css({"border": "5px solid black", "margin": "2em"});
   selection.parentsUntil("html").css({"border": "5px solid black", "margin": "2em"});
});