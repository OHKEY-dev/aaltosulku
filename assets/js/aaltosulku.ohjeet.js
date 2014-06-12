
$(function(){
	var number = 0;
	$(".cat-main").each(function(){
		$(this).children().each(function(){
			number = number + 1;
							//if-lause on tässä välttämätön!	
							if($(this).children(".cat-sub-title").text().length != 0){
								var thisText = $(this).children(".cat-sub-title").text();
								var thisTrimmerText = $(this).children(".cat-sub-title").text().replace(/ /g, '').trim();

								var Class="list-group-item";
								$(this).attr("id",thisTrimmerText);
								$(".toc-ul").append('<li class="' + Class + ' cat-sub-toc"><a href="#' + thisTrimmerText + '" class="' + Class + '">'+ number + '. ' + thisText + '</a></li>'); 
							}

							else {
								return;	
							}
						});
	});
});



$(function(){
	$("#scrolltop").click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});
});





