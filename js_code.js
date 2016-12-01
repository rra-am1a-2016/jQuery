// We gaan nu aan de slag met JQuery

$(document).ready(function(){
  
  $("#btn_01").click(function()
  {
      // Selecteer alle p-tags, deze manier heet chaining
      $("p").css("background-color","green")
            .css("width", "200px")
            .css("border", "5px solid yellow");

      // Toepassen van css d.m.v een javascript object
      var cssValues = {
         "font-family": "Verdana",
         "font-size": "1.2em"
      };

      $("p").css(cssValues);

      // Zet een javascript-object direct in de css method
      $("p").css({"color": "white", "border-radius": "0.5em"});

      var cssPTags = {
        "padding": "0.5em",
        "outline-style": "double",
        "outline-color": "red",
        "outline-width": "1em"
      };

      $("p").css(cssPTags);
  });

  $("p").click(function(){
     $(this).hide();
  });

  $("#btn_02").click(function(){
     $("p").show();
  });

  /*
  var buttonetje = document.getElementById("btn_03");
  buttonetje.onclick = test;

  function test()
  {
    alert("Hallo");
  }
  */

  $("#btn_03").click(function(){
    //alert("Hallo van jQuery");
    window.location.reload(true);
  });


});