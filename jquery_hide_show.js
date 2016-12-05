$(document).ready(function(){
   //alert("Hallo van jQuery");

   $("p").click(function(){
      $(this).css({"font-size": "6em"})
             .hide(2000, function()
             {
                alert("De hide method is klaar");
             } );
   });

   $("h3").click(function(){
      $("p").css({"font-size": "1em"})
      $("p").show(2000);
   });

   $("button").click(function(){
      $("p").toggle(5000);
      var text = $(this).text();
      if ( text == "Verberg de paragrafen")
      {
         $("button").text("Laat de p-tags zien!");
      }
      else
      {
         $("button").text("Verberg de paragrafen");         
      }
   });


     
});

