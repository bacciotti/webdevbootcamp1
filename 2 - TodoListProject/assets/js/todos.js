// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

// Click on X to delete Todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var todoText = $(this).val();
		$(this).val('');
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});