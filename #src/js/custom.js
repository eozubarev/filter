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

// Tabs start

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};

tab();

// Tabs end

// Dots dynamics start

(function () {
    var self = $('.section-build');
    var dots = self.find('.c-section-build__scheme__dots');
	var nav = self.find('.block__item');

	// console.log(self);
	// console.log(dots);
	// console.log(nav);
	
    function setActive(index) {
		dots.find('li').eq(index).addClass('is-active').siblings().removeClass('is-active');
		nav.children().eq(index).addClass('is-active').siblings().removeClass('is-active');
		$("#с-build__active-text").find('p').eq(index).addClass('is-active').siblings().removeClass('is-active');

		// nav.children(".block__title").addClass('is-active').siblings().removeClass('is-active');
		// nav.find('li').eq(index).addClass('is-active').siblings().removeClass('is-active');
		
		console.log(nav.find(".block__item").next().addClass('is-active').siblings().removeClass('is-active'));
	}

	// console.log(nav.children(".block__title").addClass('is-active').siblings().removeClass('is-active'));


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


