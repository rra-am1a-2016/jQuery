$(document).ready(function(){
   $("button").click(function()
   {
      var altValue = $("img").attr("alt");

      if ( altValue == "lof")
      {
         var jsObj = {
            "src": "./images/baby-spinazie.jpg",
            "alt": "baby-spinazie"
         };

         $("img").attr(jsObj);

         $("button").html("Laat <b>lof</b> zien!");

         $("h3").html("I'm strong to the finish, cause I eats me spinach.");
      }
      else if ( altValue == "baby-spinazie"){
         
         var jsObj = {
            "src": "./images/lof.jpg",
            "alt": "lof"
         };

         $("img").attr(jsObj);

         $("button").html("Laat <b>spinazie</b> zien!");

         $("h3").html("In deze moestuin oogsten de groten der aarden alle lof op hun dooie akkertje.");

      }
   });
});