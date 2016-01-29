$(document).ready(function(){

   $(".breakpoverty-button").on("click", function(){
   		$(".beingamusician-main").hide();
   		$(".designingamessage-main").hide();
   		$('.breakpoverty-main').show();
   });

   $(".musician-button").on("click", function(){
   		$(".breakpoverty-main").hide();
   		$(".designingamessage-main").hide();
   		$(".beingamusician-main").show();
   });

   $(".message-button").on("click", function(){
   		$(".beingamusician-main").hide();
   		$(".breakpoverty-main").hide();
   		$(".designingamessage-main").show();
   });

});