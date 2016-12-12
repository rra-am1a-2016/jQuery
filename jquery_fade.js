$(document).ready(function(){
var cssObj = {
      "width": "200px",
      "height": "200px",
      "background-color": "grey",
      "margin-bottom": "0.1em",
      "font-size": "4em",
      "font-family": "Verdana",
      "text-align": "center",
      "color": "white",
      "border": "4px solid black",
      "border-radius": "0.5em"
   };

   var time = 2000;  // 2000 milliseconde = 2 seconde

   $("img").css(cssObj);

   $("div").css(cssObj)
           .click(function(){
              $(this).fadeOut(time, function(){
                 //alert("div is weg");
              });
           });
 
   $("#btn_01").click(function(){
      $("div").fadeIn(time);
   });

   var btn = $("#btn_02"); 
   
   btn.dblclick(function(){
           alert("Er is gedubbelklikt");
   });

   btn.click(function(){
      btn = $(this);
      $("img").fadeToggle(100, function(){
         btn.dblclick();
      });
   });

  
});