$(document).ready(function(){
   var firstListItem = $("li:first");
   var lastListItem = $("li:last");

   //firstListItem.siblings().css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.siblings("li:last").css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.siblings("li:nth-child(4)").css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.siblings("li:even").css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.siblings("li:odd").css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.siblings("li:gt(2)").css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.siblings("li:lt(2)").css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.siblings("li:not(li:nth-child(3))").css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.siblings("li:gt(7)").css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.siblings("li:lt(2)").css({"background-color": "silver", "border": "3px solid black"});

   firstListItem.css({"background-color": "gold", "border": "3px solid black"});

   //firstListItem.next().css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.nextAll().css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.nextAll("li:nth-child(6)").css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.nextUntil().css({"background-color": "silver", "border": "3px solid black"});
   //firstListItem.nextUntil("li:nth-child(6)").css({"background-color": "silver", "border": "3px solid black"});
 
   lastListItem.css({"background-color": "red", "border": "3px solid black"});

   //lastListItem.prev().css({"background-color": "silver", "border": "3px solid black"});
   //lastListItem.prevAll().css({"background-color": "silver", "border": "3px solid black"});
   //lastListItem.prevAll("li:nth-child(7)").css({"background-color": "silver", "border": "3px solid black"});
   //lastListItem.prevUntil().css({"background-color": "silver", "border": "3px solid black"});
   lastListItem.prevUntil("li:nth-child(3)").css({"background-color": "silver", "border": "3px solid black"});  
});