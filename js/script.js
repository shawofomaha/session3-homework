<!-- dummy   $("div").slideDown('slow'); -->
$(document).ready(function() {
    
  $("button").click(function(){
     ("nav").fadeIn(8000);
  });
    
  $("#middle").fadeIn(8000);
  $("#bottom").fadeIn(10000);
    
  $("header").click(function(){
    
       $("header").css( "background-color", "#9DA2A3");  
        
  });

});
