$(document).ready(function(){
   
   var fruit = ["Komkommer", "Peer", "Mandarijn", "Banaan", "Druif", "Watermeloen", "Mango", "Appel", "Sinaasappel"];



   $('button').eq(0).click(function(){
      // Maak een random geheel getal tussen de 0 en de lengte van het fruit-array
      var index = Math.floor(Math.random() * fruit.length);

      var choise = $("input[type=radio]:checked").val();

      if ( choise == "append")
      {
         // Voeg een listItem toe
         $("ol").eq(0).append("<li>" + fruit[index] + "</li>");
      }
      else if (choise == "prepend")
      {
         $("ol").eq(0).prepend("<li>" + fruit[index] + "</li>");
      }
      else{
         $("h3").eq(0).text("Kies append of prepend").animate({"height": "30px",
                                                         "border-width": "2px",
                                                         "background-color": "yellow"}, 1000, "easeOutBounce");
      }

      $("input[type=radio]").focus(function(){
         $("h3").remove();
      });

      // Voeg een click-verwijder event toe aan de listItems
      $("ol li:last").click(function(){
         $(this).remove();
      });
   });

   var ictThings = ["jQuery", "Javascript", "HTML5", "CSS", "SQL", "PHP", "JSON", "AJAX"];

   $("button").eq(1).click(function(){

      var index1 = Math.floor(Math.random() * ictThings.length); 

      

      var choice1 = $("input[type=radio][name=choiseI]:checked").val();

      if (choice1 == "after")
      {
            $("ol:last li:last").after("<li>" + ictThings[index1] + "</li>");
      }
      else if (choice1 == "before")
      {
            $("ol:last li:first").before("<li>" + ictThings[index1] + "</li>");         
      }
   });

});