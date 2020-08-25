$(document).ready(function(){
	$('.content_toggle').click(function(){
		$('.content_block').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.content_toggle').html('Читать далее');
			} else {
				$('.content_toggle').html('Скрыть');
			}							
		});
		return false;
	});
});


$(document).ready(function(){
	$('.content_toggle2').click(function(){
		$('.content_block2').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.content_toggle2').html('Читать далее');
			} else {
				$('.content_toggle2').html('Скрыть');
			}							
		});
		return false;
	});
});

$(document).ready(function(){
	$('.content_toggle3').click(function(){
		$('.content_block3').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.content_toggle3').html('Читать далее');
			} else {
				$('.content_toggle3').html('Скрыть');
			}							
		});
		return false;
	});
});

