// jQuery.noConflict();
var regions4tel = ['Череповец', 'Омск', 'Кострома', 'Ярославль', 'Томск'];
var telMask = '+7 (999) 999-99-99';
var telPlaceholder = '+7 (___) ___-__-__';
// указываем регион как неизвестный
var region = undefined;
var agree = 0; // согласен с тем регионом, что предложил сайт

// при загрузке страницы отправляем запрос
changeRegion(1);
autoDetectRegionButtons();
getRegion();
if (typeof(region) === 'undefined') {
    //  если город не определен
    $.ajax({
        url: '/controllers/Region.php',
        method: 'post',
        dataType: 'json',
        data: {action: 'is-detect'},
        async: false,
        success: function (response) {
            if (response.result == 'ok') {
                autoDetectRegion();               // даем выбрать вручную
            } else {
                $('#modal-city').show();
                $('#modal-city').modal('show');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}

function modalXY(obj) {
    var modal = $('.modal.fade.in .modal-dialog');
    var wHeight = $(window).height()
    var hModal = modal.height();
    var wModal = modal.width();

    var topModal = (wHeight>hModal) ? ((wHeight-hModal)/2) : 30;

    modal.css({
        'margin-top': topModal,
        'margin-left': -wModal/2
    });
}

(function () {
    var self = $('.c-section-build');
    var dots = self.find('.c-section-build__scheme__dots');
    var nav = self.find('.c-section-build__scheme__nav');

    function setActive(index) {
        dots.find('li').eq(index).addClass('is-active').siblings().removeClass('is-active');
        nav.find('li').eq(index).addClass('is-active').siblings().removeClass('is-active');
        $("#с-build__active-text").find('p').eq(index).addClass('is-active').siblings().removeClass('is-active');
    }

    dots.find('li').on('click', function () {
        setActive($(this).index());
    });
    nav.find('li').on('click', function () {
        setActive($(this).index());
    });

})();

$(document).ready(function() {
    // Modals
    $('.modal').on('shown.bs.modal', function (e) {
        // modalXY();
    });

    // если город не выбран, не даем ничего сделать
    $('#modal-city, #modal-your-region').on('hidden.bs.modal', function () {
        if (typeof(region) === 'undefined' && agree == 0) {
            $('#modal-city').modal('show');
        }
    });
});

function regionSubmit(form){
    var data = $(form).serialize();

    $.ajax({
        url: $(form).attr('action'),
        method: 'post',
        dataType: 'json',
        data: data,
        success: function (response) {
            changeRegion(2, response);
            return;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })

    return false;
}


function setInputRegion() {
    $('.form-control[name="region"], input[name="user_address"]').each(function() {
        $(this).val(region);
        $(this).attr("placeholder", region);
        $(this).attr("onblur", "this.placeholder = '"+region+"'");
    });
}

function changeRegion(step, response) {
    if (typeof(step) === 'undefined' || step == 1) {
        $('#regionForm a').on('click', function (e) {
            e.preventDefault();
            $('#regionForm').find('input[name="region"]').val($(this).attr('data-name'));
            regionSubmit('#regionForm');
        });
    }
    if (step == 2) {
        if (typeof(response) !== 'undefined') {
            $('#modal-your-region').hide();
            region = response.region;
            var regionName = region;
            if (region == "Москва"){
                regionName = "Москва";
            } else if (region == "Юрга"){
                regionName = "Кемеровская обл.";
            }
            $('.top-block__city').find('#regionName').html(regionName).show();
            // меняем регионы во всех соответствующих инпутах
            setInputRegion();
        }
        $('#modal-city').modal('hide');
    }
}


// функция получает установленный системой регион
function getRegion() {
    $.ajax({
        url: '/controllers/Region.php',
        method: 'post',
        dataType: 'json',
        data: {action: 'get'},
        async: false,
        success: function (response) {
            console.log(response.result);
            if (response.result == 'ok') {
                region = response.region;
                var regionName = region;
                if (region == "Москва"){
                    regionName = "Москва";
                } else if (region == "Юрга"){
                    regionName = "Кемеровская обл.";
                }
                $('.top-block__city').find('#regionName').html(regionName).show();
                setInputRegion();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}

// показывает модальное окно с автоопределенным городом
function autoDetectRegion() {
    $('#modal-your-region').modal('show').find(".modal-dialog").addClass("pos-static");
    var marginTopRegion = (window.innerHeight - $('#modal-your-region').find(".modal-dialog").innerHeight()) / 2;
    $('#modal-your-region').find(".modal-dialog").css("margin-top", marginTopRegion);
}

// вешаем обработчики событий при автоопределении города
function autoDetectRegionButtons() {
    $('#modal-your-region button, #modal-your-region a').each(function () {
        if ($(this).attr('data-class') == 'close') {
            $(this).on('click', function () {
                $('#regionForm').find('input[name="region"]').val($('#modal-your-region').find('.city').attr('data-name'));
                regionSubmit('#regionForm');
                agree = 1;
                $('#modal-your-region').modal('hide');
            });
        }
        if ($(this).attr('data-class') == 'other') {
            $(this).on('click', function () {
                $('#modal-your-region').modal('hide');
                $('#modal-city').modal('show');
            });
        }
    })
}