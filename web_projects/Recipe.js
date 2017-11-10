$(document).ready(function(){

	$(".wholeRecipe").hide();
	$("section:even").css("background-color","orange");
	$("section:odd").css("background-color","white");
	
	
	$(".recipeName").click(function(){
		var currentArticle = $('.current');
		$(".wholeRecipe").hide();
		$(this).next().show();

	});
	
	$(".sideList li").hover(function(){
		$(this).css("background-color","blue");
	});
	
	$(".sideList li").mouseleave(function(){
		$(this).css("background-color","white");
	});

});
	

