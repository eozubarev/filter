$header = $('.header-page')

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $header.addClass("--scrolled-header");
    }
    else{
    $header.removeClass("--scrolled-header");
    }
    });