$(function(){
	$("html").click(function(e){
		var element=document.getElementById("id");
		element.style.position='absolute';
		$("#id").animate({"left" : e.clientX+(Math.random()-0.5)*400+'px', "top" : e.clientY+(Math.random()-0.5)*400+'px'}, "fast");
		$("#id").animate({"left" : e.clientX+(Math.random()-0.5)*400+'px', "top" : e.clientY+(Math.random()-0.5)*400+'px'}, "fast");
		$("#id").animate({"left" : e.clientX-10+'px', "top" : e.clientY-10+'px'}, "fast");
	});
});
