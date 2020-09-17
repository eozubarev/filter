
// Dots dynamics start

(function  () {
    var self = $('.section-build');
    var dots = self.find('.c-section-build__scheme__dots');
	var nav = self.find('.block__item');
	
    function setActive(index) {
		dots.find('li').eq(index).addClass('is-active').siblings().removeClass('is-active');
		nav.find('li').eq(index).addClass('is-active').siblings().removeClass('is-active');
		
		// console.log(nav.children(".block__title").eq(index).addClass('is-active'));

		// console.log( nav.find('.block__title').eq(index).addClass('is-active') );

	}

    dots.find('li').on('click', function () {
        setActive($(this).index());
    });
    nav.on('click', function () {
        setActive($(this).index());
	});

})();


// Dots dynamics end

// Spoiler start

$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

// Spoiler end