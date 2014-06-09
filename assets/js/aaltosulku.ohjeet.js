
		$(function(){
			//var mainId = 0;
			//var subId = 0;
			var number = 0;
			$(".cat-main").each(function(){
				//mainId = mainId+1;
				//$(this).attr("id","cat-main-num-"+mainId);

			/*	var thisText = $(this).children(".cat-main-title").text();
				var thisTrimmerText = $(this).children(".cat-main-title").text().replace(/ /g, '').trim();
				$(this).attr("id",thisTrimmerText);
				//var Href="#cat-main-num-"+mainId;
				var Class="list-group-item";
				var hClass="list-group-item-heading";
				$(".toc-ul").append('<li class="' + Class +' '+ hClass +'"><a href="#' + thisTrimmerText + '"><div class="cat-title-mark"></div>' + thisText + '</a></li>');
*/

				
				$(this).children().each(function(){
					number = number + 1;
							//if-lause on tässä välttämätön!	
							if($(this).children(".cat-sub-title").text().length != 0){
							
								//$(this).attr("id","cat-sub-num-"+subId);
								var thisText = $(this).children(".cat-sub-title").text();
								var thisTrimmerText = $(this).children(".cat-sub-title").text().replace(/ /g, '').trim();
								//var Href="#cat-sub-num-"+subId;
								var Class="list-group-item";
								$(this).attr("id",thisTrimmerText);
								$(".toc-ul").append('<li class="' + Class + ' cat-sub-toc"><a href="#' + thisTrimmerText + '" class="' + Class + '">'+ number + '. ' + thisText + '</a></li>'); 
								//alert(thisTrimmerText);
								

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





