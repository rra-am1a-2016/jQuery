$(document).ready(function(){

// Maak een javascriptobject met property - value paren.
var cssObj = {
   "width": "200px",
   "height": "200px",
   "background-color": "rgba(220, 220, 220, 0.6)",
   "margin-bottom": "1em"
};

// Geef de css aan de twee div's door
$("div").css(cssObj)

// $("divs") bestaat uit twee div tags. Je kunt ieder
// afzonderlijk aanspreken met eq();
$("div").eq(0).css({"background-color": "red"});
$("div").eq(1).css({"background-color": "blue"});


var color;
$("div").dblclick(function(){
                     $(this).css({"border": "10px solid black"});
                  })
        .click(function(){
           $(this).css({"border-width": "0px"});
        })
        .mouseleave(function(){
           //window.location.href = "http://www.nu.nl";
        })
        .hover(function(){
           color = $(this).css("background-color");     
           $(this).css({"background-color": "yellow"});
        }, function(){
           $(this).css({"background-color": color});
        });









});

