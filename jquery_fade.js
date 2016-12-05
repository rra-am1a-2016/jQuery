$(document).ready(function(){

   var cssObj = {
      "width": "200px",
      "height": "200px",
      "background-color": "grey",
      "margin-bottom": "0.1em",
      "font-size": "4em",
      "font-family": "Verdana",
      "text-align": "center",
      "color": "white"
   };

   var time = 2000;

   $("div").css(cssObj)
           .click(function(){
              $(this).fadeOut(time, function(){
                 //alert("div is weg");
              });
           });

   $("button").click(function(){
      $("div").fadeIn(time);
   });
   

   




});