	$(function(){
		$('div#ad2').children('a').hide().eq(Math.floor(Math.random() * $('div#ad2').children('a').length)).show();
		$('div#ad2').children('a').children('img').addClass('boxshadow pure-img');
		
		
		$('div#ad1').children('a').hide().eq(Math.floor(Math.random() * $('div#ad2').children('a').length)).show();
		$('div#ad1').children('a').children('img').addClass('pure-img');
	});


