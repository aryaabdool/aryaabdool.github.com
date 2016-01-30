$(document).ready(function(){

   $(".education-button").on("click", function(){
   		$(".experience-main").hide();
   		$(".interests-main").hide();
   		$('.education-main').show();
   		$("img.placeholder-proto.edu-proto").show();
   		$("img.placeholder-proto.experience-proto").hide();
   		$("img.placeholder-proto.interest-proto").hide();
   });

   $(".experience-button").on("click", function(){
   		$(".education-main").hide();
   		$(".interests-main").hide();
   		$(".experience-main").show();
   		$("img.placeholder-proto.experience-proto").show();
   		$("img.placeholder-proto.edu-proto").hide();
   		$("img.placeholder-proto.interest-proto").hide();
   });

   $(".interests-button").on("click", function(){
   		$(".education-main").hide();
   		$(".experience-main").hide();
   		$(".interests-main").show();
   		$("img.placeholder-proto.interest-proto").show();
   		$("img.placeholder-proto.edu-proto").hide();
   		$("img.placeholder-proto.experience-proto").hide();
   });

   $('a.resume').on('click', function(){
   		$(".education-main").hide();
   		$(".interests-main").hide();
   		$(".experience-main").show();
   		$("img.placeholder-proto.experience-proto").show();
   		$("img.placeholder-proto.edu-proto").hide();
   		$("img.placeholder-proto.interest-proto").hide();
   });

});