$(document).ready(function(){

   $(".education-button").on("click", function(){
   		$(".experience-main").hide();
   		$(".interests-main").hide();
   		$('.education-main').show();
   });

   $(".experience-button").on("click", function(){
   		$(".education-main").hide();
   		$(".interests-main").hide();
   		$(".experience-main").show();
   });

   $(".interests-button").on("click", function(){
   		$(".education-main").hide();
   		$(".experience-main").hide();
   		$(".interests-main").show();
   });

});