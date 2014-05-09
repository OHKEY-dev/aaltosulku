
$(function() {  
	var pull        = $('#pull');  
	menu        = $('.toc-ul');  
	menuHeight  = menu.height();  
	
	$(pull).on('click', function(e) {  
		e.preventDefault();  
		menu.slideToggle();  
	});  
});  


