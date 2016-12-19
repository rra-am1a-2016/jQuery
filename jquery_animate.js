$(document).ready(function(){
   $("button").click(function(){

      $(this).attr("disabled", "disabled");
      $(this).css("cursor", "not-allowed");
      $("div").animate({"left": "1200px",
                        "background-color": "yellow",
                        "width": "50px",
                        "height": "50px",
                        "font-size": "0.5em",
                        "color": "black",
                        "border-color": "green"}, 4000, "easeOutBounce", function(){
         $(this).on("mouseenter", test);
         $(this).text("Mouse Enter me!");
         $("button").removeAttr("disabled").css("cursor", "default");

      });      
   });

   $()

   function test(){
      $("div").animate({"top": "200px"}, 1000, "easeOutBounce", function(){
         $(this).animate({"left": "0px"}, 4000, "easeOutBounce", function(){
            $(this).animate({"top": "0px"}, 1000, "easeOutBounce", function(){
               $(this).off("mouseenter");
               $(this).text("Geanimeerde div");
               loop();
            });
         });
      });
   }

   function loop()
   {
      $("div").animate({"width": "300px",
                        "height":"300px"}, 1000, "easeOutBounce", function(){
                           $(this).animate({"width": "50px",
                                            "height": "50px"}, 1000, function(){
                                               loop();
                                            })
                        })
   }
});