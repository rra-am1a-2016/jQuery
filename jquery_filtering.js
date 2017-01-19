$(document).ready(function(){
   var listItems = $("ol").children();

   listItems.first().css({"border": "3px solid orange"});
   listItems.last().css({"border": "3px solid green"});
   listItems.eq(4).css({"border": "3px solid blue"});

   listItems.filter("li:even").css({"background-color": "rgb(230,230,230)"});

   listItems.not("li:even").css({"background-color": "rgb(200,200,200)"});

   var teller = 1;
   listItems.each(function(){
      $(this).css({"font-size": (1.0 + teller * 0.2) + "em",
                   "margin-top": teller * 0.1 + "em",
                   "width": (100 + teller * 100) +"px"})
      teller++;
   });


});