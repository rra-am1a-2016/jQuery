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

   $("div").css(cssObj)
           .click(function(){
              $(this).fadeOut(2000, function(){
                 alert("div is weg");
              });
           });

   




});