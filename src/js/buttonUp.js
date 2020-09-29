$buttonUp = $('.buttonUp')

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $buttonUp.addClass("--active");
    }
    else{
    $buttonUp.removeClass("--active");
    }
    });