'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var breakpoints = {};
breakpoints.current = '';
breakpoints.getValue = function () {
    this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
    return this.value;
};
breakpoints.triggerEvent = function () {
    $(window).trigger(breakpoints.value);
    console.log(breakpoints.value);
};

$(window).on('resize load', function () {
    breakpoints.getValue();
    if (breakpoints.value !== breakpoints.current) {
        breakpoints.current = breakpoints.value;
        breakpoints.triggerEvent();
    }
});

autosize($('.js-textarea'));
$('.js-input-phone').mask("+7(999) 999-99-99");

/*
* табы
**/

(function ($) {

    var methods = {
        init: function init(options) {

            var settings = $.extend({
                'active': 0,
                'vertical': false,
                'onChange': function onChange() {}
            }, options);
            var tabID = 0;

            return this.each(function () {
                var tabs = $(this);
                if (!tabs.is('.c-tabs-loaded')) {
                    tabID++;
                    var activeTab = tabs.find('.c-tabs__nav .c-tabs__link').eq(settings.active);

                    if (tabs.find('.c-tabs__nav  .c-tabs__link.is-active').length > 0) {
                        activeTab = tabs.find('.c-tabs__nav .c-tabs__link.is-active');
                    }
                    var target = activeTab.find('.c-tabs__link').attr('href');
                    var other = tabs.find('.c-tabs__nav .c-tabs__link').not(activeTab);

                    other.each(function () {
                        $(this).removeClass('is-active');
                        $($(this).attr('href')).hide();
                    }).promise().done(function () {
                        activeTab.addClass('is-active');
                        $(target).fadeIn();
                    });
                    tabs.trigger('change');

                    tabs.find('.c-tabs__nav  .c-tabs__link').on('click', function (event) {
                        var tab = $(this);
                        var target = $(this).attr('href');
                        var other = tabs.find('.c-tabs__nav  .c-tabs__link').not(tab);

                        other.each(function () {
                            $(this).removeClass('is-active');
                            $($(this).attr('href')).hide();
                        }).promise().done(function () {
                            tab.addClass('is-active');
                            $(target).fadeIn();
                        });

                        tabs.trigger('change');
                        event.preventDefault();
                    });

                    tabs.on('change', function () {
                        var data = {
                            'tab': tabs
                        };
                        settings.onChange(data);
                    });
                    tabs.addClass('c-tabs-loaded');
                }
            });
        },
        set: function set(val) {
            return this.each(function () {
                var tabs = $(this);
                var activeTab;
                var target;

                if ($(val).length > 0) {
                    activeTab = tabs.find('.c-tabs__nav li a[href="' + val + '"]').closest('li');
                    target = $(val);
                } else {
                    activeTab = tabs.find('.c-tabs__nav li').eq(val);
                    target = $(activeTab.find('a').attr('href'));
                }

                var other = tabs.find('.c-tabs__nav li').not(activeTab);

                other.each(function () {
                    $(this).removeClass('is-active');
                    $($(this).find('a').attr('href')).hide();
                }).promise().done(function () {
                    activeTab.addClass('is-active');
                    target.fadeIn();
                });
                tabs.trigger('change');
            });
        },
        destroy: function destroy() {
            return this.each(function () {
                var tabs = $(this);
                tabs.removeClass('c-tabs-loaded');
                tabs.find('.c-tabs__nav > li').removeClass('is-active');
                tabs.find('.c-tabs__nav li > a').each(function () {
                    var tab = $(this);
                    $(this).off('click');
                    $(tab.attr('href')).css('display', '');
                    $(tab.attr('href')).appendTo(tabs.find('.c-tabs__content'));
                });
            });
        }
    };
    $.fn.tabs = function (method) {
        // логика вызова метода
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует ');
        }
    };
})($);

//$('.tabs').tabs();
//$('.tabs').tabs('destroy');
//$('.tabs').tabs('set','1');
//$('.tabs').tabs('set','#tab-1');

function wrapTables(table) {
    table.each(function () {
        var table = $(this);
        table.wrap('<div class="c-table-wrapper"></div>');
        var wrapper = table.closest('.c-table-wrapper');

        $(window).on('load resize tabs-change', function () {
            if (table.width() > wrapper.width()) {
                wrapper.addClass('is-active');
                wrapper.mCustomScrollbar({
                    axis: 'x',
                    theme: 'dark-thick',
                    scrollButtons: {
                        enable: false
                    },
                    advanced: {
                        updateOnContentResize: true,
                        autoExpandHorizontalScroll: true
                    }
                });
            } else {
                wrapper.removeClass('is-active');
                wrapper.mCustomScrollbar('destroy');
            }
        });
    });
}
wrapTables($('.l-page-body table'));

$('.js-img-background').each(function () {
    var self = $(this);
    self.css('background-image', 'url(' + self.find('img').attr('src') + ')').find('img').css('opacity', '0').css('visibility', 'hidden');
    self.css('opacity', '');
});

var map,
    mapCoord = [55.633682, 37.438950];

function mapContactsResponsive() {
    if ($('#js-map').length > 0) {
        //map.setCenter(mapCoord);
        //map.panTo( 55.753321, 37.857773);
        map.setZoom(17);
        map.setCenter(mapCoord);

        if (breakpoints.current === 'xs') {
            map.behaviors.disable('drag');
            map.behaviors.enable('multiTouch');
        } else {
            map.behaviors.enable('drag');
            map.behaviors.enable('multiTouch');
        }
    }
}
