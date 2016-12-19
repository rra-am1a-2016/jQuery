window.history.forward(1);
$(document).ready(function(){
   //$("button").eq().css({"font-size": "4em"});
   $("button").eq(0).click(function(){
      $("img").slideUp(1000, "easeOutBounce");
   });

   $("button").eq(1).click(function(){
      $("img").slideDown(2000);
   });

   $("button").eq(2).click(function(){
      $("img").slideToggle(2000);
   });


});