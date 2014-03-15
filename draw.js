// alert(event.screenX);
// alert("hello");
$(function(){
	$("html").click(function(e){
		var element=document.getElementById("id");
		element.style.position='absolute';
		// element.style.left=e.clientX-10+'px';
		// element.style.top=e.clientY-10+'px';
		$("#id").animate({"left" : e.clientX-10+'px', "top" : e.clientY-10+'px'}, "fast");
	});
});
