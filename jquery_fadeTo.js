// Voeg toe document ready
// maak een div op je html
// maak een knop op je html
// Verzorg met jquery en jsObject de css-opmaak
// Door het klikken op de knop wordt de div steeds 0,1 doorzichtiger
// 1 is volledig zichtbaar, 0 is niet zichtbaar
// Gebruik hiervoor fadeTo
// Als de zichtbaarheid onder 0 komt moet de div weer volledig 
// Zichtbaar worden.

$(document).ready(function()
{
   var opmaak = {
      "width": "200px",
      "height": "200px",
      "border": "4px solid black",
      "border-radius": "0.8em",
      "background-color": "orange",
      "color": "grey",
      "font-size": "3em",
      "padding": "1em 0em 0em 1em"
   };

   var opmaakBtn = {
      "padding": "0.5em",
      "border-radius": "0.3em",
      "margin-top": "1em"
   }

   var btn = $("button");
   var div = $("div")
   
   div.css(opmaak);
   btn.css(opmaakBtn);

   var transparancy = 1.0;

   btn.click(function(){
      div.fadeTo(500, transparancy, function(){
         div.text("Hoi" + transparancy);
         if ( transparancy > 0)
         {
            transparancy -= 0.1;
         }
         else
         {
            transparancy = 1.0;
         }
         //alert("Ik ben nu half zo goed zichtbaar. transparancy: " + transparancy);
      });
   });


});

