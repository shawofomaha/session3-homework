<!-- dummy   $("div").slideDown('slow'); -->
$(document).ready(function() {
    
  $("button").click(function(){
     $(".navbar").fadeOut(4500);
     $("div").slideDown('slow');
  });
    
  $("#middle").fadeIn(8000);
  $("#bottom").fadeIn(slow);
    
  $("header").click(function(){
    
       $("header").css( "background-color", "#9DA2A3");  
        
  });

});
