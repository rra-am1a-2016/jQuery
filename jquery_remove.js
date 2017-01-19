$(document).ready(function(){

   var popArtistsDied = [{"name": "David Bowie", "photoName": "David Bowie23.jpg"},
                         {"name": "Prince", "photoName": "Prince.jpg"},
                         {"name": "George Michael", "photoName": "George Michael.jpg"},
                         {"name": "Leonard Cohen", "photoName": "Leonard Cohen.jpg"},
                         {"name": "David Bowie", "photoName": "David Bowie.jpg"},
                         {"name": "Toots Thielemans", "photoName": "Toots Thielemans.jpg"},
                         {"name": "Muhammad Ali", "photoName": "Muhammad Ali.jpg"},
                         {"name": "George Martin", "photoName": "George Martin.jpg"},
                         {"name": "Carrie Fisher", "photoName": "Carrie Fisher.jpg"},
                         {"name": "Glen Frey", "photoName": "Glen Frey.jpg"}]
                         

   // Vul de <ol> met listitems (een lijst van 20 <li>). 
   // Gebruik een for loop en append
   // Pak steeds random een naam uit het bovenstaande array


   $("button").click(function(){
      $("ol").empty();

      for (var i = 0; i < 20; i++)
      {
         var index = Math.random() * popArtistsDied.length;
         index = Math.floor(index);
         $("ol").append("<li><span>" + popArtistsDied[index].name +  "</span></li>");
         $("li:last").click(function(){
            $(this).remove();
         });
         $("li:last span").mouseenter(function(){
            $(this).css({"background-color": "rgb(200,200,200)"});

            var artistName = $(this).text();

            var test = popArtistsDied.find(function(artist){
                  return artist.name === artistName;
            });
            
            console.debug(test);
            
            $("img").attr({"src": "./images/" + test.photoName, "alt": $(this).text()});
            // selector.attr({});
         });  
          $("li:last span").mouseleave(function(){
            $(this).css({"background-color": "rgb(255,255,255)"});             
          });
      }


   });
   
   

});

