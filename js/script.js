$(document).ready(function(){

  $("#list").hide();
  $(".info").hide();

  $("#ingredients").click(function(){
    $("#list").toggle(200);
  })

  $("#ingredients").mouseover(function(){
    $("#ingredients").css("background-color","lightgrey")
  })

  $("#ingredients").mouseleave(function(){
    $("#ingredients").css("background-color","white")
  })

  $("#write").click(function(){
    $(".ex").html("Joseph Sharon<br>Coder Extroardinaire")
  })

  $("#erase").click(function(){
    $(".ex").html("")
  })

  $("#all").click(function(){
    $(".info").toggle(200);
  })



  $("#step1").mouseover(function(){
    $("#step1").css("background-color", "lightgrey")
  })

  $("#step1").mouseleave(function(){
    $("#step1").css("background-color","white")
  })

  $("#step2").mouseover(function(){
    $("#step2").css("background-color", "lightgrey")
  })

  $("#step2").mouseleave(function(){
    $("#step2").css("background-color","white")
  })

  $("#step3").mouseover(function(){
    $("#step3").css("background-color", "lightgrey")
  })

  $("#step3").mouseleave(function(){
    $("#step3").css("background-color","white")
  })

  $("#step4").mouseover(function(){
    $("#step4").css("background-color", "lightgrey")
  })

  $("#step4").mouseleave(function(){
    $("#step4").css("background-color","white")
  })

  $("#step5").mouseover(function(){
    $("#step5").css("background-color", "lightgrey")
  })

  $("#step5").mouseleave(function(){
    $("#step5").css("background-color","white")
  })

  $("#step1").mouseover(function(){
    $("#step1").css("background-color", "lightgrey")
  })

  $("#step1").mouseleave(function(){
    $("#step1").css("background-color","white")
  })


})
