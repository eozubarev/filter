//Прелоадер для сайта

// в myLib лежат кастомные скрипты
  /* myLib */
  
  //В библиотеку я положил функцию на нативном js, которая убивает скролл когда таб открыт 

  (function() {
    window.myLib = {};
  
    window.myLib.body = document.querySelector("body");
  
    window.myLib.closestAttr = function(item, attr) {
      var node = item;
  
      while (node) {
        var attrValue = node.getAttribute(attr);
        if (attrValue) {
          return attrValue;
        }
  
        node = node.parentElement;
      }
  
      return null;
    };
  
    window.myLib.closestItemByClass = function(item, className) {
      var node = item;
  
      while (node) {
        if (node.classList.contains(className)) {
          return node;
        }
  
        node = node.parentElement;
      }
  
      return null;
    };
  
    window.myLib.toggleScroll = function() {
      myLib.body.classList.toggle("no-scroll");
    };
  })();
  
  /* myLib */;

// Подключаем все скрипты
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

// Tabs end;

// Скролл шапки и добавлении стилей с position: fixed.
$header = $('.header-page')

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $header.addClass("--scrolled-header");
    }
    else{
    $header.removeClass("--scrolled-header");
    }
    });;

// Кнопка которая скроллит "домой"
$buttonUp = $('.buttonUp')

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $buttonUp.addClass("--active");
    }
    else{
    $buttonUp.removeClass("--active");
    }
    });;

// Скрипт схемы (Принципиальная схема установки)
 new class PromixScheme {
    constructor() {
        this.tabs = [...document.querySelectorAll('.promix__scheme-tab')];
        this.dots = [...document.querySelectorAll('.promix__scheme-dot')];

        this.paddingTab = 15;
        this.schemeTabActive = 'promix__scheme-tab--active';
        this.schemeDotActive = 'promix__scheme-dot--active';

        this.listeners();
    }

    listeners() {
        this.tabs.forEach((tab, i) => {
            i === 0 ? this.activeTab(tab) : '';
            tab.addEventListener('click', event => {
                event.preventDefault();
                if (!tab.classList.contains(this.schemeTabActive)) {
                    this.activeTab(tab);
                    this.changeDot(tab);
                }
            });
        });

        this.dots.forEach((dot, i) => {
            i === 0 ? this.activeDot(dot) : '';
            dot.addEventListener('click', event => {
                event.preventDefault();
                if (!dot.classList.contains(this.schemeDotActive)) {
                    this.activeDot(dot);
                    this.changeTab(dot);
                }
            });
        });
    }

    activeTab(tab) {
        let content = tab.querySelector('.promix__scheme-tab-content');
        let contentInner = tab.querySelector('.promix__scheme-tab-info');
        let padding = this.paddingTab + 'px';
        let height = contentInner.getBoundingClientRect().height + this.paddingTab + 'px';

        this.closeTabs();
        content.style.maxHeight = height;
        content.style.paddingTop = padding;
        tab.classList.add(this.schemeTabActive);
    }

    changeTab(dot) {
        let currentDot = dot.dataset.schemeDot;
        this.tabs.forEach(tab => {
            let currentTab = tab.dataset.schemeTab;
            if (currentTab === currentDot) {
                this.activeTab(tab);
            }
        });
    }

    closeTabs() {
        this.tabs.forEach(tab => {
            let content = tab.querySelector('.promix__scheme-tab-content');
            tab.classList.remove(this.schemeTabActive);
            content.style.maxHeight = 0;
            content.style.paddingTop = 0;
        });
    }

    activeDot(dot) {
        this.closeDots();
        dot.classList.add(this.schemeDotActive);
    }

    changeDot(tab) {
        let currentTab = tab.dataset.schemeTab;
        this.dots.forEach(dot => {
            let currentDot = dot.dataset.schemeDot;
            if (currentTab === currentDot) {
                this.activeDot(dot);
            }
        });
    }

    closeDots() {
        this.dots.forEach(dot => {
            dot.classList.remove(this.schemeDotActive);
        });
    }
}
;

// Скрипт кнопки "читать далее"
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
});;

// Popup меню
/* popup */
  /* myLib */
  
  //В библиотеку я положил функцию на нативном js, которая убивает скролл когда таб открыт 

  (function() {
    window.myLib = {};
  
    window.myLib.body = document.querySelector("body");
  
    window.myLib.closestAttr = function(item, attr) {
      var node = item;
  
      while (node) {
        var attrValue = node.getAttribute(attr);
        if (attrValue) {
          return attrValue;
        }
  
        node = node.parentElement;
      }
  
      return null;
    };
  
    window.myLib.closestItemByClass = function(item, className) {
      var node = item;
  
      while (node) {
        if (node.classList.contains(className)) {
          return node;
        }
  
        node = node.parentElement;
      }
  
      return null;
    };
  
    window.myLib.toggleScroll = function() {
      myLib.body.classList.toggle("no-scroll");
    };
  })();
  
  /* myLib */;
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            alignToTop: true,
            behavior: 'smooth'
        });
    });
});
;

(function() {
    var showPopup = function(target) {
      target.classList.add("is-active");
    };
  
    var closePopup = function(target) {
      target.classList.remove("is-active");
    };
  
    myLib.body.addEventListener("click", function(e) {
      var target = e.target;
      var popupClass = myLib.closestAttr(target, "data-popup");
  
      if (popupClass === null) {
        return;
      }
  
      e.preventDefault();
      var popup = document.querySelector("." + popupClass);
  
      if (popup) {
        showPopup(popup);
        myLib.toggleScroll();
      }
    });
  
    myLib.body.addEventListener("click", function(e) {
      var target = e.target;
  
      if (
        target.classList.contains("popup-close") ||
        target.classList.contains("popup__inner")
      ) {
        var popup = myLib.closestItemByClass(target, "popup");
  
        closePopup(popup);
        myLib.toggleScroll();
      }
    });
  
    myLib.body.addEventListener("keydown", function(e) {
      if (e.keyCode !== 27) {
        return;
      }
  
      var popup = document.querySelector(".popup.is-active");
  
      if (popup) {
        closePopup(popup);
        myLib.toggleScroll();
      }
    });
  })();
  
  /* popup */;

// Скролл к секциям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            alignToTop: true,
            behavior: 'smooth'
        });
    });
});
;

// Полфилл для кроссбраузерности скролла


'use strict';

// polyfill
function polyfill() {
  // aliases
  var w = window;
  var d = document;

  // return if scroll behavior is supported and polyfill is not forced
  if (
    'scrollBehavior' in d.documentElement.style &&
    w.__forceSmoothScrollPolyfill__ !== true
  ) {
    return;
  }

  // globals
  var Element = w.HTMLElement || w.Element;
  var SCROLL_TIME = 468;

  // object gathering original scroll methods
  var original = {
    scroll: w.scroll || w.scrollTo,
    scrollBy: w.scrollBy,
    elementScroll: Element.prototype.scroll || scrollElement,
    scrollIntoView: Element.prototype.scrollIntoView
  };

  // define timing method
  var now =
    w.performance && w.performance.now
      ? w.performance.now.bind(w.performance)
      : Date.now;

  /**
   * indicates if a the current browser is made by Microsoft
   * @method isMicrosoftBrowser
   * @param {String} userAgent
   * @returns {Boolean}
   */
  function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
  }

  /*
   * IE has rounding bug rounding down clientHeight and clientWidth and
   * rounding up scrollHeight and scrollWidth causing false positives
   * on hasScrollableSpace
   */
  var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

  /**
   * changes scroll position inside an element
   * @method scrollElement
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */
  function scrollElement(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
  }

  /**
   * returns result of applying ease math function to a number
   * @method ease
   * @param {Number} k
   * @returns {Number}
   */
  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }

  /**
   * indicates if a smooth behavior should be applied
   * @method shouldBailOut
   * @param {Number|Object} firstArg
   * @returns {Boolean}
   */
  function shouldBailOut(firstArg) {
    if (
      firstArg === null ||
      typeof firstArg !== 'object' ||
      firstArg.behavior === undefined ||
      firstArg.behavior === 'auto' ||
      firstArg.behavior === 'instant'
    ) {
      // first argument is not an object/null
      // or behavior is auto, instant or undefined
      return true;
    }

    if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
      // first argument is an object and behavior is smooth
      return false;
    }

    // throw error when behavior is not supported
    throw new TypeError(
      'behavior member of ScrollOptions ' +
        firstArg.behavior +
        ' is not a valid value for enumeration ScrollBehavior.'
    );
  }

  /**
   * indicates if an element has scrollable space in the provided axis
   * @method hasScrollableSpace
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function hasScrollableSpace(el, axis) {
    if (axis === 'Y') {
      return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
    }

    if (axis === 'X') {
      return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
    }
  }

  /**
   * indicates if an element has a scrollable overflow property in the axis
   * @method canOverflow
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function canOverflow(el, axis) {
    var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

    return overflowValue === 'auto' || overflowValue === 'scroll';
  }

  /**
   * indicates if an element can be scrolled in either axis
   * @method isScrollable
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function isScrollable(el) {
    var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
    var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

    return isScrollableY || isScrollableX;
  }

  /**
   * finds scrollable parent of an element
   * @method findScrollableParent
   * @param {Node} el
   * @returns {Node} el
   */
  function findScrollableParent(el) {
    while (el !== d.body && isScrollable(el) === false) {
      el = el.parentNode || el.host;
    }

    return el;
  }

  /**
   * self invoked function that, given a context, steps through scrolling
   * @method step
   * @param {Object} context
   * @returns {undefined}
   */
  function step(context) {
    var time = now();
    var value;
    var currentX;
    var currentY;
    var elapsed = (time - context.startTime) / SCROLL_TIME;

    // avoid elapsed times higher than one
    elapsed = elapsed > 1 ? 1 : elapsed;

    // apply easing to elapsed time
    value = ease(elapsed);

    currentX = context.startX + (context.x - context.startX) * value;
    currentY = context.startY + (context.y - context.startY) * value;

    context.method.call(context.scrollable, currentX, currentY);

    // scroll more if we have not reached our destination
    if (currentX !== context.x || currentY !== context.y) {
      w.requestAnimationFrame(step.bind(w, context));
    }
  }

  /**
   * scrolls window or element with a smooth behavior
   * @method smoothScroll
   * @param {Object|Node} el
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */
  function smoothScroll(el, x, y) {
    var scrollable;
    var startX;
    var startY;
    var method;
    var startTime = now();

    // define scroll context
    if (el === d.body) {
      scrollable = w;
      startX = w.scrollX || w.pageXOffset;
      startY = w.scrollY || w.pageYOffset;
      method = original.scroll;
    } else {
      scrollable = el;
      startX = el.scrollLeft;
      startY = el.scrollTop;
      method = scrollElement;
    }

    // scroll looping over a frame
    step({
      scrollable: scrollable,
      method: method,
      startTime: startTime,
      startX: startX,
      startY: startY,
      x: x,
      y: y
    });
  }

  // ORIGINAL METHODS OVERRIDES
  // w.scroll and w.scrollTo
  w.scroll = w.scrollTo = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scroll.call(
        w,
        arguments[0].left !== undefined
          ? arguments[0].left
          : typeof arguments[0] !== 'object'
            ? arguments[0]
            : w.scrollX || w.pageXOffset,
        // use top prop, second argument if present or fallback to scrollY
        arguments[0].top !== undefined
          ? arguments[0].top
          : arguments[1] !== undefined
            ? arguments[1]
            : w.scrollY || w.pageYOffset
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      w,
      d.body,
      arguments[0].left !== undefined
        ? ~~arguments[0].left
        : w.scrollX || w.pageXOffset,
      arguments[0].top !== undefined
        ? ~~arguments[0].top
        : w.scrollY || w.pageYOffset
    );
  };

  // w.scrollBy
  w.scrollBy = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0])) {
      original.scrollBy.call(
        w,
        arguments[0].left !== undefined
          ? arguments[0].left
          : typeof arguments[0] !== 'object' ? arguments[0] : 0,
        arguments[0].top !== undefined
          ? arguments[0].top
          : arguments[1] !== undefined ? arguments[1] : 0
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      w,
      d.body,
      ~~arguments[0].left + (w.scrollX || w.pageXOffset),
      ~~arguments[0].top + (w.scrollY || w.pageYOffset)
    );
  };

  // Element.prototype.scroll and Element.prototype.scrollTo
  Element.prototype.scroll = Element.prototype.scrollTo = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      // if one number is passed, throw error to match Firefox implementation
      if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
        throw new SyntaxError('Value could not be converted');
      }

      original.elementScroll.call(
        this,
        // use left prop, first number argument or fallback to scrollLeft
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
        // use top prop, second argument or fallback to scrollTop
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
      );

      return;
    }

    var left = arguments[0].left;
    var top = arguments[0].top;

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      this,
      this,
      typeof left === 'undefined' ? this.scrollLeft : ~~left,
      typeof top === 'undefined' ? this.scrollTop : ~~top
    );
  };

  // Element.prototype.scrollBy
  Element.prototype.scrollBy = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.elementScroll.call(
        this,
        arguments[0].left !== undefined
          ? ~~arguments[0].left + this.scrollLeft
          : ~~arguments[0] + this.scrollLeft,
        arguments[0].top !== undefined
          ? ~~arguments[0].top + this.scrollTop
          : ~~arguments[1] + this.scrollTop
      );

      return;
    }

    this.scroll({
      left: ~~arguments[0].left + this.scrollLeft,
      top: ~~arguments[0].top + this.scrollTop,
      behavior: arguments[0].behavior
    });
  };

  // Element.prototype.scrollIntoView
  Element.prototype.scrollIntoView = function() {
    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scrollIntoView.call(
        this,
        arguments[0] === undefined ? true : arguments[0]
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    var scrollableParent = findScrollableParent(this);
    var parentRects = scrollableParent.getBoundingClientRect();
    var clientRects = this.getBoundingClientRect();

    if (scrollableParent !== d.body) {
      // reveal element inside parent
      smoothScroll.call(
        this,
        scrollableParent,
        scrollableParent.scrollLeft + clientRects.left - parentRects.left,
        scrollableParent.scrollTop + clientRects.top - parentRects.top
      );

      // reveal parent in viewport unless is fixed
      if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
        w.scrollBy({
          left: parentRects.left,
          top: parentRects.top,
          behavior: 'smooth'
        });
      }
    } else {
      // reveal element in viewport
      w.scrollBy({
        left: clientRects.left,
        top: clientRects.top,
        behavior: 'smooth'
      });
    }
  };
}

if (typeof exports === 'object' && typeof module !== 'undefined') {
  // commonjs
  module.exports = { polyfill: polyfill };
} else {
  // global
  polyfill();
};

// Бибилиотека с формами
!(function (e) {
    var t = {};
    function s(i) {
        if (t[i]) return t[i].exports;
        var a = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
    }
    (s.m = e),
        (s.c = t),
        (s.d = function (e, t, i) {
            s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (s.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (s.t = function (e, t) {
            if ((1 & t && (e = s(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((s.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var a in e)
                    s.d(
                        i,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return i;
        }),
        (s.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return s.d(t, "a", t), t;
        }),
        (s.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (s.p = ""),
        s((s.s = 0));
})([
    function (e, t, s) {
        "use strict";
        s.r(t);
        s(1);
        var i =
                "undefined" == typeof document
                    ? {
                          body: {},
                          addEventListener: function () {},
                          removeEventListener: function () {},
                          activeElement: { blur: function () {}, nodeName: "" },
                          querySelector: function () {
                              return null;
                          },
                          querySelectorAll: function () {
                              return [];
                          },
                          getElementById: function () {
                              return null;
                          },
                          createEvent: function () {
                              return { initEvent: function () {} };
                          },
                          createElement: function () {
                              return {
                                  children: [],
                                  childNodes: [],
                                  style: {},
                                  setAttribute: function () {},
                                  getElementsByTagName: function () {
                                      return [];
                                  },
                              };
                          },
                          location: { hash: "" },
                      }
                    : document,
            a =
                "undefined" == typeof window
                    ? {
                          document: i,
                          navigator: { userAgent: "" },
                          location: {},
                          history: {},
                          CustomEvent: function () {
                              return this;
                          },
                          addEventListener: function () {},
                          removeEventListener: function () {},
                          getComputedStyle: function () {
                              return {
                                  getPropertyValue: function () {
                                      return "";
                                  },
                              };
                          },
                          Image: function () {},
                          Date: function () {},
                          screen: {},
                          setTimeout: function () {},
                          clearTimeout: function () {},
                      }
                    : window;
        class n {
            constructor(e) {
                const t = this;
                for (let s = 0; s < e.length; s += 1) t[s] = e[s];
                return (t.length = e.length), this;
            }
        }
        function r(e, t) {
            const s = [];
            let r = 0;
            if (e && !t && e instanceof n) return e;
            if (e)
                if ("string" == typeof e) {
                    let a, n;
                    const o = e.trim();
                    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                        let e = "div";
                        for (
                            0 === o.indexOf("<li") && (e = "ul"),
                                0 === o.indexOf("<tr") && (e = "tbody"),
                                (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (e = "tr"),
                                0 === o.indexOf("<tbody") && (e = "table"),
                                0 === o.indexOf("<option") && (e = "select"),
                                (n = i.createElement(e)).innerHTML = o,
                                r = 0;
                            r < n.childNodes.length;
                            r += 1
                        )
                            s.push(n.childNodes[r]);
                    } else for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])], r = 0; r < a.length; r += 1) a[r] && s.push(a[r]);
                } else if (e.nodeType || e === a || e === i) s.push(e);
                else if (e.length > 0 && e[0].nodeType) for (r = 0; r < e.length; r += 1) s.push(e[r]);
            return new n(s);
        }
        function o(e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t;
        }
        (r.fn = n.prototype), (r.Class = n), (r.Dom7 = n);
        "resize scroll".split(" ");
        const l = {
            addClass: function (e) {
                if (void 0 === e) return this;
                const t = e.split(" ");
                for (let e = 0; e < t.length; e += 1) for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[e]);
                return this;
            },
            removeClass: function (e) {
                const t = e.split(" ");
                for (let e = 0; e < t.length; e += 1) for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[e]);
                return this;
            },
            hasClass: function (e) {
                return !!this[0] && this[0].classList.contains(e);
            },
            toggleClass: function (e) {
                const t = e.split(" ");
                for (let e = 0; e < t.length; e += 1) for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[e]);
                return this;
            },
            attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (let s = 0; s < this.length; s += 1)
                    if (2 === arguments.length) this[s].setAttribute(e, t);
                    else for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
                return this;
            },
            removeAttr: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this;
            },
            data: function (e, t) {
                let s;
                if (void 0 !== t) {
                    for (let i = 0; i < this.length; i += 1) (s = this[i]).dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), (s.dom7ElementDataStorage[e] = t);
                    return this;
                }
                if ((s = this[0])) {
                    if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage) return s.dom7ElementDataStorage[e];
                    const t = s.getAttribute(`data-${e}`);
                    return t || void 0;
                }
            },
            transform: function (e) {
                for (let t = 0; t < this.length; t += 1) {
                    const s = this[t].style;
                    (s.webkitTransform = e), (s.transform = e);
                }
                return this;
            },
            transition: function (e) {
                "string" != typeof e && (e = `${e}ms`);
                for (let t = 0; t < this.length; t += 1) {
                    const s = this[t].style;
                    (s.webkitTransitionDuration = e), (s.transitionDuration = e);
                }
                return this;
            },
            on: function (...e) {
                let [t, s, i, a] = e;
                function n(e) {
                    const t = e.target;
                    if (!t) return;
                    const a = e.target.dom7EventData || [];
                    if ((a.indexOf(e) < 0 && a.unshift(e), r(t).is(s))) i.apply(t, a);
                    else {
                        const e = r(t).parents();
                        for (let t = 0; t < e.length; t += 1) r(e[t]).is(s) && i.apply(e[t], a);
                    }
                }
                function o(e) {
                    const t = (e && e.target && e.target.dom7EventData) || [];
                    t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
                }
                "function" == typeof e[1] && (([t, i, a] = e), (s = void 0)), a || (a = !1);
                const l = t.split(" ");
                let d;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (s)
                        for (d = 0; d < l.length; d += 1) {
                            const e = l[d];
                            t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({ listener: i, proxyListener: n }), t.addEventListener(e, n, a);
                        }
                    else
                        for (d = 0; d < l.length; d += 1) {
                            const e = l[d];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({ listener: i, proxyListener: o }), t.addEventListener(e, o, a);
                        }
                }
                return this;
            },
            off: function (...e) {
                let [t, s, i, a] = e;
                "function" == typeof e[1] && (([t, i, a] = e), (s = void 0)), a || (a = !1);
                const n = t.split(" ");
                for (let e = 0; e < n.length; e += 1) {
                    const t = n[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const n = this[e];
                        let r;
                        if ((!s && n.dom7Listeners ? (r = n.dom7Listeners[t]) : s && n.dom7LiveListeners && (r = n.dom7LiveListeners[t]), r && r.length))
                            for (let e = r.length - 1; e >= 0; e -= 1) {
                                const s = r[e];
                                i && s.listener === i
                                    ? (n.removeEventListener(t, s.proxyListener, a), r.splice(e, 1))
                                    : i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i
                                    ? (n.removeEventListener(t, s.proxyListener, a), r.splice(e, 1))
                                    : i || (n.removeEventListener(t, s.proxyListener, a), r.splice(e, 1));
                            }
                    }
                }
                return this;
            },
            trigger: function (...e) {
                const t = e[0].split(" "),
                    s = e[1];
                for (let n = 0; n < t.length; n += 1) {
                    const r = t[n];
                    for (let t = 0; t < this.length; t += 1) {
                        const n = this[t];
                        let o;
                        try {
                            o = new a.CustomEvent(r, { detail: s, bubbles: !0, cancelable: !0 });
                        } catch (e) {
                            (o = i.createEvent("Event")).initEvent(r, !0, !0), (o.detail = s);
                        }
                        (n.dom7EventData = e.filter((e, t) => t > 0)), n.dispatchEvent(o), (n.dom7EventData = []), delete n.dom7EventData;
                    }
                }
                return this;
            },
            transitionEnd: function (e) {
                const t = ["webkitTransitionEnd", "transitionend"],
                    s = this;
                let i;
                function a(n) {
                    if (n.target === this) for (e.call(this, n), i = 0; i < t.length; i += 1) s.off(t[i], a);
                }
                if (e) for (i = 0; i < t.length; i += 1) s.on(t[i], a);
                return this;
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            css: function (e, t) {
                let s;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (s = 0; s < this.length; s += 1) for (let t in e) this[s].style[t] = e[t];
                        return this;
                    }
                    if (this[0]) return a.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                    return this;
                }
                return this;
            },
            each: function (e) {
                if (!e) return this;
                for (let t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
                return this;
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            },
            text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this;
            },
            is: function (e) {
                const t = this[0];
                let s, o;
                if (!t || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (t.matches) return t.matches(e);
                    if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                    if (t.msMatchesSelector) return t.msMatchesSelector(e);
                    for (s = r(e), o = 0; o < s.length; o += 1) if (s[o] === t) return !0;
                    return !1;
                }
                if (e === i) return t === i;
                if (e === a) return t === a;
                if (e.nodeType || e instanceof n) {
                    for (s = e.nodeType ? [e] : e, o = 0; o < s.length; o += 1) if (s[o] === t) return !0;
                    return !1;
                }
                return !1;
            },
            index: function () {
                let e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                    return e;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                const t = this.length;
                let s;
                return new n(e > t - 1 ? [] : e < 0 ? ((s = t + e) < 0 ? [] : [this[s]]) : [this[e]]);
            },
            append: function (...e) {
                let t;
                for (let s = 0; s < e.length; s += 1) {
                    t = e[s];
                    for (let e = 0; e < this.length; e += 1)
                        if ("string" == typeof t) {
                            const s = i.createElement("div");
                            for (s.innerHTML = t; s.firstChild; ) this[e].appendChild(s.firstChild);
                        } else if (t instanceof n) for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                        else this[e].appendChild(t);
                }
                return this;
            },
            prepend: function (e) {
                let t, s;
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        const a = i.createElement("div");
                        for (a.innerHTML = e, s = a.childNodes.length - 1; s >= 0; s -= 1) this[t].insertBefore(a.childNodes[s], this[t].childNodes[0]);
                    } else if (e instanceof n) for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                return this;
            },
            next: function (e) {
                return this.length > 0
                    ? e
                        ? this[0].nextElementSibling && r(this[0].nextElementSibling).is(e)
                            ? new n([this[0].nextElementSibling])
                            : new n([])
                        : this[0].nextElementSibling
                        ? new n([this[0].nextElementSibling])
                        : new n([])
                    : new n([]);
            },
            nextAll: function (e) {
                const t = [];
                let s = this[0];
                if (!s) return new n([]);
                for (; s.nextElementSibling; ) {
                    const i = s.nextElementSibling;
                    e ? r(i).is(e) && t.push(i) : t.push(i), (s = i);
                }
                return new n(t);
            },
            prev: function (e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e ? (t.previousElementSibling && r(t.previousElementSibling).is(e) ? new n([t.previousElementSibling]) : new n([])) : t.previousElementSibling ? new n([t.previousElementSibling]) : new n([]);
                }
                return new n([]);
            },
            prevAll: function (e) {
                const t = [];
                let s = this[0];
                if (!s) return new n([]);
                for (; s.previousElementSibling; ) {
                    const i = s.previousElementSibling;
                    e ? r(i).is(e) && t.push(i) : t.push(i), (s = i);
                }
                return new n(t);
            },
            parent: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? r(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                return r(o(t));
            },
            parents: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    let i = this[s].parentNode;
                    for (; i; ) e ? r(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
                }
                return r(o(t));
            },
            closest: function (e) {
                let t = this;
                return void 0 === e ? new n([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
            },
            find: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s].querySelectorAll(e);
                    for (let e = 0; e < i.length; e += 1) t.push(i[e]);
                }
                return new n(t);
            },
            children: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s].childNodes;
                    for (let s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && r(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
                }
                return new n(o(t));
            },
            remove: function () {
                for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            },
            add: function (...e) {
                const t = this;
                let s, i;
                for (s = 0; s < e.length; s += 1) {
                    const a = r(e[s]);
                    for (i = 0; i < a.length; i += 1) (t[t.length] = a[i]), (t.length += 1);
                }
                return t;
            },
            styles: function () {
                return this[0] ? a.getComputedStyle(this[0], null) : {};
            },
        };
        Object.keys(l).forEach((e) => {
            r.fn[e] = l[e];
        });
        const d = {
                deleteProps(e) {
                    const t = e;
                    Object.keys(t).forEach((e) => {
                        try {
                            t[e] = null;
                        } catch (e) {}
                        try {
                            delete t[e];
                        } catch (e) {}
                    });
                },
                nextTick: (e, t = 0) => setTimeout(e, t),
                now: () => Date.now(),
                getTranslate(e, t = "x") {
                    let s, i, n;
                    const r = a.getComputedStyle(e, null);
                    return (
                        a.WebKitCSSMatrix
                            ? ((i = r.transform || r.webkitTransform).split(",").length > 6 &&
                                  (i = i
                                      .split(", ")
                                      .map((e) => e.replace(",", "."))
                                      .join(", ")),
                              (n = new a.WebKitCSSMatrix("none" === i ? "" : i)))
                            : (s = (n = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                        "x" === t && (i = a.WebKitCSSMatrix ? n.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
                        "y" === t && (i = a.WebKitCSSMatrix ? n.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
                        i || 0
                    );
                },
                parseUrlQuery(e) {
                    const t = {};
                    let s,
                        i,
                        n,
                        r,
                        o = e || a.location.href;
                    if ("string" == typeof o && o.length)
                        for (r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((e) => "" !== e)).length, s = 0; s < r; s += 1)
                            (n = i[s].replace(/#\S+/g, "").split("=")), (t[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "");
                    return t;
                },
                isObject: (e) => "object" == typeof e && null !== e && e.constructor && e.constructor === Object,
                extend(...e) {
                    const t = Object(e[0]);
                    for (let s = 1; s < e.length; s += 1) {
                        const i = e[s];
                        if (null != i) {
                            const e = Object.keys(Object(i));
                            for (let s = 0, a = e.length; s < a; s += 1) {
                                const a = e[s],
                                    n = Object.getOwnPropertyDescriptor(i, a);
                                void 0 !== n && n.enumerable && (d.isObject(t[a]) && d.isObject(i[a]) ? d.extend(t[a], i[a]) : !d.isObject(t[a]) && d.isObject(i[a]) ? ((t[a] = {}), d.extend(t[a], i[a])) : (t[a] = i[a]));
                            }
                        }
                    }
                    return t;
                },
            },
            c = (function () {
                const e = i.createElement("div");
                return {
                    touch: (a.Modernizr && !0 === a.Modernizr.touch) || !!(a.navigator.maxTouchPoints > 0 || "ontouchstart" in a || (a.DocumentTouch && i instanceof a.DocumentTouch)),
                    pointerEvents: !!(a.navigator.pointerEnabled || a.PointerEvent || ("maxTouchPoints" in a.navigator && a.navigator.maxTouchPoints > 0)),
                    prefixedPointerEvents: !!a.navigator.msPointerEnabled,
                    transition: (function () {
                        const t = e.style;
                        return "transition" in t || "webkitTransition" in t || "MozTransition" in t;
                    })(),
                    transforms3d:
                        (a.Modernizr && !0 === a.Modernizr.csstransforms3d) ||
                        (function () {
                            const t = e.style;
                            return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t;
                        })(),
                    flexbox: (function () {
                        const t = e.style,
                            s = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");
                        for (let e = 0; e < s.length; e += 1) if (s[e] in t) return !0;
                        return !1;
                    })(),
                    observer: "MutationObserver" in a || "WebkitMutationObserver" in a,
                    passiveListener: (function () {
                        let e = !1;
                        try {
                            const t = Object.defineProperty({}, "passive", {
                                get() {
                                    e = !0;
                                },
                            });
                            a.addEventListener("testPassiveListener", null, t);
                        } catch (e) {}
                        return e;
                    })(),
                    gestures: "ongesturestart" in a,
                };
            })(),
            p = (function () {
                return {
                    isIE: !!a.navigator.userAgent.match(/Trident/g) || !!a.navigator.userAgent.match(/MSIE/g),
                    isEdge: !!a.navigator.userAgent.match(/Edge/g),
                    isSafari: (function () {
                        const e = a.navigator.userAgent.toLowerCase();
                        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
                    })(),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent),
                };
            })();
        class u {
            constructor(e = {}) {
                const t = this;
                (t.params = e),
                    (t.eventsListeners = {}),
                    t.params &&
                        t.params.on &&
                        Object.keys(t.params.on).forEach((e) => {
                            t.on(e, t.params.on[e]);
                        });
            }
            on(e, t, s) {
                const i = this;
                if ("function" != typeof t) return i;
                const a = s ? "unshift" : "push";
                return (
                    e.split(" ").forEach((e) => {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t);
                    }),
                    i
                );
            }
            once(e, t, s) {
                const i = this;
                if ("function" != typeof t) return i;
                function a(...s) {
                    t.apply(i, s), i.off(e, a), a.f7proxy && delete a.f7proxy;
                }
                return (a.f7proxy = t), i.on(e, a, s);
            }
            off(e, t) {
                const s = this;
                return s.eventsListeners
                    ? (e.split(" ").forEach((e) => {
                          void 0 === t
                              ? (s.eventsListeners[e] = [])
                              : s.eventsListeners[e] &&
                                s.eventsListeners[e].length &&
                                s.eventsListeners[e].forEach((i, a) => {
                                    (i === t || (i.f7proxy && i.f7proxy === t)) && s.eventsListeners[e].splice(a, 1);
                                });
                      }),
                      s)
                    : s;
            }
            emit(...e) {
                const t = this;
                if (!t.eventsListeners) return t;
                let s, i, a;
                return (
                    "string" == typeof e[0] || Array.isArray(e[0]) ? ((s = e[0]), (i = e.slice(1, e.length)), (a = t)) : ((s = e[0].events), (i = e[0].data), (a = e[0].context || t)),
                    (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
                        if (t.eventsListeners && t.eventsListeners[e]) {
                            const s = [];
                            t.eventsListeners[e].forEach((e) => {
                                s.push(e);
                            }),
                                s.forEach((e) => {
                                    e.apply(a, i);
                                });
                        }
                    }),
                    t
                );
            }
            useModulesParams(e) {
                const t = this;
                t.modules &&
                    Object.keys(t.modules).forEach((s) => {
                        const i = t.modules[s];
                        i.params && d.extend(e, i.params);
                    });
            }
            useModules(e = {}) {
                const t = this;
                t.modules &&
                    Object.keys(t.modules).forEach((s) => {
                        const i = t.modules[s],
                            a = e[s] || {};
                        i.instance &&
                            Object.keys(i.instance).forEach((e) => {
                                const s = i.instance[e];
                                t[e] = "function" == typeof s ? s.bind(t) : s;
                            }),
                            i.on &&
                                t.on &&
                                Object.keys(i.on).forEach((e) => {
                                    t.on(e, i.on[e]);
                                }),
                            i.create && i.create.bind(t)(a);
                    });
            }
            static set components(e) {
                this.use && this.use(e);
            }
            static installModule(e, ...t) {
                const s = this;
                s.prototype.modules || (s.prototype.modules = {});
                const i = e.name || `${Object.keys(s.prototype.modules).length}_${d.now()}`;
                return (
                    (s.prototype.modules[i] = e),
                    e.proto &&
                        Object.keys(e.proto).forEach((t) => {
                            s.prototype[t] = e.proto[t];
                        }),
                    e.static &&
                        Object.keys(e.static).forEach((t) => {
                            s[t] = e.static[t];
                        }),
                    e.install && e.install.apply(s, t),
                    s
                );
            }
            static use(e, ...t) {
                const s = this;
                return Array.isArray(e) ? (e.forEach((e) => s.installModule(e)), s) : s.installModule(e, ...t);
            }
        }
        var h = {
            updateSize: function () {
                const e = this;
                let t, s;
                const i = e.$el;
                (t = void 0 !== e.params.width ? e.params.width : i[0].clientWidth),
                    (s = void 0 !== e.params.height ? e.params.height : i[0].clientHeight),
                    (0 === t && e.isHorizontal()) ||
                        (0 === s && e.isVertical()) ||
                        ((t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10)),
                        (s = s - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10)),
                        d.extend(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
            },
            updateSlides: function () {
                const e = this,
                    t = e.params,
                    { $wrapperEl: s, size: i, rtlTranslate: n, wrongRTL: r } = e,
                    o = e.virtual && t.virtual.enabled,
                    l = o ? e.virtual.slides.length : e.slides.length,
                    p = s.children(`.${e.params.slideClass}`),
                    u = o ? e.virtual.slides.length : p.length;
                let h = [];
                const m = [],
                    f = [];
                let v = t.slidesOffsetBefore;
                "function" == typeof v && (v = t.slidesOffsetBefore.call(e));
                let g = t.slidesOffsetAfter;
                "function" == typeof g && (g = t.slidesOffsetAfter.call(e));
                const y = e.snapGrid.length,
                    b = e.snapGrid.length;
                let w,
                    x,
                    E = t.spaceBetween,
                    T = -v,
                    S = 0,
                    C = 0;
                if (void 0 === i) return;
                "string" == typeof E && E.indexOf("%") >= 0 && (E = (parseFloat(E.replace("%", "")) / 100) * i),
                    (e.virtualSize = -E),
                    n ? p.css({ marginLeft: "", marginTop: "" }) : p.css({ marginRight: "", marginBottom: "" }),
                    t.slidesPerColumn > 1 &&
                        ((w = Math.floor(u / t.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / t.slidesPerColumn) * t.slidesPerColumn),
                        "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
                const k = t.slidesPerColumn,
                    $ = w / k,
                    M = Math.floor(u / t.slidesPerColumn);
                for (let s = 0; s < u; s += 1) {
                    x = 0;
                    const n = p.eq(s);
                    if (t.slidesPerColumn > 1) {
                        let i, a, r;
                        "column" === t.slidesPerColumnFill
                            ? ((r = s - (a = Math.floor(s / k)) * k),
                              (a > M || (a === M && r === k - 1)) && (r += 1) >= k && ((r = 0), (a += 1)),
                              (i = a + (r * w) / k),
                              n.css({ "-webkit-box-ordinal-group": i, "-moz-box-ordinal-group": i, "-ms-flex-order": i, "-webkit-order": i, order: i }))
                            : (a = s - (r = Math.floor(s / $)) * $),
                            n
                                .css(`margin-${e.isHorizontal() ? "top" : "left"}`, 0 !== r && t.spaceBetween && `${t.spaceBetween}px`)
                                .attr("data-swiper-column", a)
                                .attr("data-swiper-row", r);
                    }
                    if ("none" !== n.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            const s = a.getComputedStyle(n[0], null),
                                i = n[0].style.transform,
                                r = n[0].style.webkitTransform;
                            if ((i && (n[0].style.transform = "none"), r && (n[0].style.webkitTransform = "none"), t.roundLengths)) x = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                const e = parseFloat(s.getPropertyValue("width")),
                                    t = parseFloat(s.getPropertyValue("padding-left")),
                                    i = parseFloat(s.getPropertyValue("padding-right")),
                                    a = parseFloat(s.getPropertyValue("margin-left")),
                                    n = parseFloat(s.getPropertyValue("margin-right")),
                                    r = s.getPropertyValue("box-sizing");
                                x = r && "border-box" === r ? e + a + n : e + t + i + a + n;
                            } else {
                                const e = parseFloat(s.getPropertyValue("height")),
                                    t = parseFloat(s.getPropertyValue("padding-top")),
                                    i = parseFloat(s.getPropertyValue("padding-bottom")),
                                    a = parseFloat(s.getPropertyValue("margin-top")),
                                    n = parseFloat(s.getPropertyValue("margin-bottom")),
                                    r = s.getPropertyValue("box-sizing");
                                x = r && "border-box" === r ? e + a + n : e + t + i + a + n;
                            }
                            i && (n[0].style.transform = i), r && (n[0].style.webkitTransform = r), t.roundLengths && (x = Math.floor(x));
                        } else (x = (i - (t.slidesPerView - 1) * E) / t.slidesPerView), t.roundLengths && (x = Math.floor(x)), p[s] && (e.isHorizontal() ? (p[s].style.width = `${x}px`) : (p[s].style.height = `${x}px`));
                        p[s] && (p[s].swiperSlideSize = x),
                            f.push(x),
                            t.centeredSlides
                                ? ((T = T + x / 2 + S / 2 + E),
                                  0 === S && 0 !== s && (T = T - i / 2 - E),
                                  0 === s && (T = T - i / 2 - E),
                                  Math.abs(T) < 0.001 && (T = 0),
                                  t.roundLengths && (T = Math.floor(T)),
                                  C % t.slidesPerGroup == 0 && h.push(T),
                                  m.push(T))
                                : (t.roundLengths && (T = Math.floor(T)), C % t.slidesPerGroup == 0 && h.push(T), m.push(T), (T = T + x + E)),
                            (e.virtualSize += x + E),
                            (S = x),
                            (C += 1);
                    }
                }
                let P;
                if (
                    ((e.virtualSize = Math.max(e.virtualSize, i) + g),
                    n && r && ("slide" === t.effect || "coverflow" === t.effect) && s.css({ width: `${e.virtualSize + t.spaceBetween}px` }),
                    (c.flexbox && !t.setWrapperSize) || (e.isHorizontal() ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` }) : s.css({ height: `${e.virtualSize + t.spaceBetween}px` })),
                    t.slidesPerColumn > 1 &&
                        ((e.virtualSize = (x + t.spaceBetween) * w),
                        (e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                        e.isHorizontal() ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` }) : s.css({ height: `${e.virtualSize + t.spaceBetween}px` }),
                        t.centeredSlides))
                ) {
                    P = [];
                    for (let s = 0; s < h.length; s += 1) {
                        let i = h[s];
                        t.roundLengths && (i = Math.floor(i)), h[s] < e.virtualSize + h[0] && P.push(i);
                    }
                    h = P;
                }
                if (!t.centeredSlides) {
                    P = [];
                    for (let s = 0; s < h.length; s += 1) {
                        let a = h[s];
                        t.roundLengths && (a = Math.floor(a)), h[s] <= e.virtualSize - i && P.push(a);
                    }
                    (h = P), Math.floor(e.virtualSize - i) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - i);
                }
                if ((0 === h.length && (h = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? (n ? p.css({ marginLeft: `${E}px` }) : p.css({ marginRight: `${E}px` })) : p.css({ marginBottom: `${E}px` })), t.centerInsufficientSlides)) {
                    let e = 0;
                    if (
                        (f.forEach((s) => {
                            e += s + (t.spaceBetween ? t.spaceBetween : 0);
                        }),
                        (e -= t.spaceBetween) < i)
                    ) {
                        const t = (i - e) / 2;
                        h.forEach((e, s) => {
                            h[s] = e - t;
                        }),
                            m.forEach((e, s) => {
                                m[s] = e + t;
                            });
                    }
                }
                d.extend(e, { slides: p, snapGrid: h, slidesGrid: m, slidesSizesGrid: f }),
                    u !== l && e.emit("slidesLengthChange"),
                    h.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                    m.length !== b && e.emit("slidesGridLengthChange"),
                    (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
            },
            updateAutoHeight: function (e) {
                const t = this,
                    s = [];
                let i,
                    a = 0;
                if (("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1))
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length) break;
                        s.push(t.slides.eq(e)[0]);
                    }
                else s.push(t.slides.eq(t.activeIndex)[0]);
                for (i = 0; i < s.length; i += 1)
                    if (void 0 !== s[i]) {
                        const e = s[i].offsetHeight;
                        a = e > a ? e : a;
                    }
                a && t.$wrapperEl.css("height", `${a}px`);
            },
            updateSlidesOffset: function () {
                const e = this,
                    t = e.slides;
                for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
            },
            updateSlidesProgress: function (e = (this && this.translate) || 0) {
                const t = this,
                    s = t.params,
                    { slides: i, rtlTranslate: a } = t;
                if (0 === i.length) return;
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                let n = -e;
                a && (n = e), i.removeClass(s.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
                for (let e = 0; e < i.length; e += 1) {
                    const r = i[e],
                        o = (n + (s.centeredSlides ? t.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + s.spaceBetween);
                    if (s.watchSlidesVisibility) {
                        const a = -(n - r.swiperSlideOffset),
                            o = a + t.slidesSizesGrid[e];
                        ((a >= 0 && a < t.size) || (o > 0 && o <= t.size) || (a <= 0 && o >= t.size)) && (t.visibleSlides.push(r), t.visibleSlidesIndexes.push(e), i.eq(e).addClass(s.slideVisibleClass));
                    }
                    r.progress = a ? -o : o;
                }
                t.visibleSlides = r(t.visibleSlides);
            },
            updateProgress: function (e = (this && this.translate) || 0) {
                const t = this,
                    s = t.params,
                    i = t.maxTranslate() - t.minTranslate();
                let { progress: a, isBeginning: n, isEnd: r } = t;
                const o = n,
                    l = r;
                0 === i ? ((a = 0), (n = !0), (r = !0)) : ((n = (a = (e - t.minTranslate()) / i) <= 0), (r = a >= 1)),
                    d.extend(t, { progress: a, isBeginning: n, isEnd: r }),
                    (s.watchSlidesProgress || s.watchSlidesVisibility) && t.updateSlidesProgress(e),
                    n && !o && t.emit("reachBeginning toEdge"),
                    r && !l && t.emit("reachEnd toEdge"),
                    ((o && !n) || (l && !r)) && t.emit("fromEdge"),
                    t.emit("progress", a);
            },
            updateSlidesClasses: function () {
                const e = this,
                    { slides: t, params: s, $wrapperEl: i, activeIndex: a, realIndex: n } = e,
                    r = e.virtual && s.virtual.enabled;
                let o;
                t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
                    (o = r ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${a}"]`) : t.eq(a)).addClass(s.slideActiveClass),
                    s.loop &&
                        (o.hasClass(s.slideDuplicateClass)
                            ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass)
                            : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass));
                let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                s.loop && 0 === l.length && (l = t.eq(0)).addClass(s.slideNextClass);
                let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                s.loop && 0 === d.length && (d = t.eq(-1)).addClass(s.slidePrevClass),
                    s.loop &&
                        (l.hasClass(s.slideDuplicateClass)
                            ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass)
                            : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
                        d.hasClass(s.slideDuplicateClass)
                            ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)
                            : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass));
            },
            updateActiveIndex: function (e) {
                const t = this,
                    s = t.rtlTranslate ? t.translate : -t.translate,
                    { slidesGrid: i, snapGrid: a, params: n, activeIndex: r, realIndex: o, snapIndex: l } = t;
                let c,
                    p = e;
                if (void 0 === p) {
                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? (s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? (p = e) : s >= i[e] && s < i[e + 1] && (p = e + 1)) : s >= i[e] && (p = e);
                    n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
                }
                if (((c = a.indexOf(s) >= 0 ? a.indexOf(s) : Math.floor(p / n.slidesPerGroup)) >= a.length && (c = a.length - 1), p === r)) return void (c !== l && ((t.snapIndex = c), t.emit("snapIndexChange")));
                const u = parseInt(t.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                d.extend(t, { snapIndex: c, realIndex: u, previousIndex: r, activeIndex: p }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== u && t.emit("realIndexChange"), t.emit("slideChange");
            },
            updateClickedSlide: function (e) {
                const t = this,
                    s = t.params,
                    i = r(e.target).closest(`.${s.slideClass}`)[0];
                let a = !1;
                if (i) for (let e = 0; e < t.slides.length; e += 1) t.slides[e] === i && (a = !0);
                if (!i || !a) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
                (t.clickedSlide = i),
                    t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(r(i).attr("data-swiper-slide-index"), 10)) : (t.clickedIndex = r(i).index()),
                    s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
            },
        };
        var m = {
            getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
                const { params: t, rtlTranslate: s, translate: i, $wrapperEl: a } = this;
                if (t.virtualTranslate) return s ? -i : i;
                let n = d.getTranslate(a[0], e);
                return s && (n = -n), n || 0;
            },
            setTranslate: function (e, t) {
                const s = this,
                    { rtlTranslate: i, params: a, $wrapperEl: n, progress: r } = s;
                let o,
                    l = 0,
                    d = 0;
                s.isHorizontal() ? (l = i ? -e : e) : (d = e),
                    a.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
                    a.virtualTranslate || (c.transforms3d ? n.transform(`translate3d(${l}px, ${d}px, 0px)`) : n.transform(`translate(${l}px, ${d}px)`)),
                    (s.previousTranslate = s.translate),
                    (s.translate = s.isHorizontal() ? l : d);
                const p = s.maxTranslate() - s.minTranslate();
                (o = 0 === p ? 0 : (e - s.minTranslate()) / p) !== r && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
            },
            minTranslate: function () {
                return -this.snapGrid[0];
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
        };
        var f = {
            setTransition: function (e, t) {
                this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
                const s = this,
                    { activeIndex: i, params: a, previousIndex: n } = s;
                a.autoHeight && s.updateAutoHeight();
                let r = t;
                if ((r || (r = i > n ? "next" : i < n ? "prev" : "reset"), s.emit("transitionStart"), e && i !== n)) {
                    if ("reset" === r) return void s.emit("slideResetTransitionStart");
                    s.emit("slideChangeTransitionStart"), "next" === r ? s.emit("slideNextTransitionStart") : s.emit("slidePrevTransitionStart");
                }
            },
            transitionEnd: function (e = !0, t) {
                const s = this,
                    { activeIndex: i, previousIndex: a } = s;
                (s.animating = !1), s.setTransition(0);
                let n = t;
                if ((n || (n = i > a ? "next" : i < a ? "prev" : "reset"), s.emit("transitionEnd"), e && i !== a)) {
                    if ("reset" === n) return void s.emit("slideResetTransitionEnd");
                    s.emit("slideChangeTransitionEnd"), "next" === n ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd");
                }
            },
        };
        var v = {
            slideTo: function (e = 0, t = this.params.speed, s = !0, i) {
                const a = this;
                let n = e;
                n < 0 && (n = 0);
                const { params: r, snapGrid: o, slidesGrid: l, previousIndex: d, activeIndex: p, rtlTranslate: u } = a;
                if (a.animating && r.preventInteractionOnTransition) return !1;
                let h = Math.floor(n / r.slidesPerGroup);
                h >= o.length && (h = o.length - 1), (p || r.initialSlide || 0) === (d || 0) && s && a.emit("beforeSlideChangeStart");
                const m = -o[h];
                if ((a.updateProgress(m), r.normalizeSlideIndex)) for (let e = 0; e < l.length; e += 1) -Math.floor(100 * m) >= Math.floor(100 * l[e]) && (n = e);
                if (a.initialized && n !== p) {
                    if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
                    if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (p || 0) !== n) return !1;
                }
                let f;
                return (
                    (f = n > p ? "next" : n < p ? "prev" : "reset"),
                    (u && -m === a.translate) || (!u && m === a.translate)
                        ? (a.updateActiveIndex(n), r.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== r.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(s, f), a.transitionEnd(s, f)), !1)
                        : (0 !== t && c.transition
                              ? (a.setTransition(t),
                                a.setTranslate(m),
                                a.updateActiveIndex(n),
                                a.updateSlidesClasses(),
                                a.emit("beforeTransitionStart", t, i),
                                a.transitionStart(s, f),
                                a.animating ||
                                    ((a.animating = !0),
                                    a.onSlideToWrapperTransitionEnd ||
                                        (a.onSlideToWrapperTransitionEnd = function (e) {
                                            a &&
                                                !a.destroyed &&
                                                e.target === this &&
                                                (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                                a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                                                (a.onSlideToWrapperTransitionEnd = null),
                                                delete a.onSlideToWrapperTransitionEnd,
                                                a.transitionEnd(s, f));
                                        }),
                                    a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                    a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)))
                              : (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, f), a.transitionEnd(s, f)),
                          !0)
                );
            },
            slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
                const a = this;
                let n = e;
                return a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, s, i);
            },
            slideNext: function (e = this.params.speed, t = !0, s) {
                const i = this,
                    { params: a, animating: n } = i;
                return a.loop ? !n && (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, s)) : i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, s);
            },
            slidePrev: function (e = this.params.speed, t = !0, s) {
                const i = this,
                    { params: a, animating: n, snapGrid: r, slidesGrid: o, rtlTranslate: l } = i;
                if (a.loop) {
                    if (n) return !1;
                    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
                }
                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                }
                const c = d(l ? i.translate : -i.translate),
                    p = r.map((e) => d(e)),
                    u = (o.map((e) => d(e)), r[p.indexOf(c)], r[p.indexOf(c) - 1]);
                let h;
                return void 0 !== u && (h = o.indexOf(u)) < 0 && (h = i.activeIndex - 1), i.slideTo(h, e, t, s);
            },
            slideReset: function (e = this.params.speed, t = !0, s) {
                return this.slideTo(this.activeIndex, e, t, s);
            },
            slideToClosest: function (e = this.params.speed, t = !0, s) {
                const i = this;
                let a = i.activeIndex;
                const n = Math.floor(a / i.params.slidesPerGroup);
                if (n < i.snapGrid.length - 1) {
                    const e = i.rtlTranslate ? i.translate : -i.translate,
                        t = i.snapGrid[n];
                    e - t > (i.snapGrid[n + 1] - t) / 2 && (a = i.params.slidesPerGroup);
                }
                return i.slideTo(a, e, t, s);
            },
            slideToClickedSlide: function () {
                const e = this,
                    { params: t, $wrapperEl: s } = e,
                    i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let a,
                    n = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    (a = parseInt(r(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
                        t.centeredSlides
                            ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2
                                ? (e.loopFix(),
                                  (n = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
                                  d.nextTick(() => {
                                      e.slideTo(n);
                                  }))
                                : e.slideTo(n)
                            : n > e.slides.length - i
                            ? (e.loopFix(),
                              (n = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
                              d.nextTick(() => {
                                  e.slideTo(n);
                              }))
                            : e.slideTo(n);
                } else e.slideTo(n);
            },
        };
        var g = {
            loopCreate: function () {
                const e = this,
                    { params: t, $wrapperEl: s } = e;
                s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                let a = s.children(`.${t.slideClass}`);
                if (t.loopFillGroupWithBlank) {
                    const e = t.slidesPerGroup - (a.length % t.slidesPerGroup);
                    if (e !== t.slidesPerGroup) {
                        for (let a = 0; a < e; a += 1) {
                            const e = r(i.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                            s.append(e);
                        }
                        a = s.children(`.${t.slideClass}`);
                    }
                }
                "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length),
                    (e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10)),
                    (e.loopedSlides += t.loopAdditionalSlides),
                    e.loopedSlides > a.length && (e.loopedSlides = a.length);
                const n = [],
                    o = [];
                a.each((t, s) => {
                    const i = r(s);
                    t < e.loopedSlides && o.push(s), t < a.length && t >= a.length - e.loopedSlides && n.push(s), i.attr("data-swiper-slide-index", t);
                });
                for (let e = 0; e < o.length; e += 1) s.append(r(o[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
                for (let e = n.length - 1; e >= 0; e -= 1) s.prepend(r(n[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
            },
            loopFix: function () {
                const e = this,
                    { params: t, activeIndex: s, slides: i, loopedSlides: a, allowSlidePrev: n, allowSlideNext: r, snapGrid: o, rtlTranslate: l } = e;
                let d;
                (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                const c = -o[s] - e.getTranslate();
                s < a
                    ? ((d = i.length - 3 * a + s), (d += a), e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c))
                    : (("auto" === t.slidesPerView && s >= 2 * a) || s >= i.length - a) && ((d = -i.length + s + a), (d += a), e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c));
                (e.allowSlidePrev = n), (e.allowSlideNext = r);
            },
            loopDestroy: function () {
                const { $wrapperEl: e, params: t, slides: s } = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index");
            },
        };
        var y = {
            setGrabCursor: function (e) {
                if (c.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked)) return;
                const t = this.el;
                (t.style.cursor = "move"), (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
                c.touch || (this.params.watchOverflow && this.isLocked) || (this.el.style.cursor = "");
            },
        };
        var b = {
            appendSlide: function (e) {
                const t = this,
                    { $wrapperEl: s, params: i } = t;
                if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)) for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
                else s.append(e);
                i.loop && t.loopCreate(), (i.observer && c.observer) || t.update();
            },
            prependSlide: function (e) {
                const t = this,
                    { params: s, $wrapperEl: i, activeIndex: a } = t;
                s.loop && t.loopDestroy();
                let n = a + 1;
                if ("object" == typeof e && "length" in e) {
                    for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
                    n = a + e.length;
                } else i.prepend(e);
                s.loop && t.loopCreate(), (s.observer && c.observer) || t.update(), t.slideTo(n, 0, !1);
            },
            addSlide: function (e, t) {
                const s = this,
                    { $wrapperEl: i, params: a, activeIndex: n } = s;
                let r = n;
                a.loop && ((r -= s.loopedSlides), s.loopDestroy(), (s.slides = i.children(`.${a.slideClass}`)));
                const o = s.slides.length;
                if (e <= 0) return void s.prependSlide(t);
                if (e >= o) return void s.appendSlide(t);
                let l = r > e ? r + 1 : r;
                const d = [];
                for (let t = o - 1; t >= e; t -= 1) {
                    const e = s.slides.eq(t);
                    e.remove(), d.unshift(e);
                }
                if ("object" == typeof t && "length" in t) {
                    for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
                    l = r > e ? r + t.length : r;
                } else i.append(t);
                for (let e = 0; e < d.length; e += 1) i.append(d[e]);
                a.loop && s.loopCreate(), (a.observer && c.observer) || s.update(), a.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1);
            },
            removeSlide: function (e) {
                const t = this,
                    { params: s, $wrapperEl: i, activeIndex: a } = t;
                let n = a;
                s.loop && ((n -= t.loopedSlides), t.loopDestroy(), (t.slides = i.children(`.${s.slideClass}`)));
                let r,
                    o = n;
                if ("object" == typeof e && "length" in e) {
                    for (let s = 0; s < e.length; s += 1) (r = e[s]), t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1);
                    o = Math.max(o, 0);
                } else (r = e), t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1), (o = Math.max(o, 0));
                s.loop && t.loopCreate(), (s.observer && c.observer) || t.update(), s.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
            },
            removeAllSlides: function () {
                const e = this,
                    t = [];
                for (let s = 0; s < e.slides.length; s += 1) t.push(s);
                e.removeSlide(t);
            },
        };
        const w = (function () {
            const e = a.navigator.userAgent,
                t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: a.cordova || a.phonegap, phonegap: a.cordova || a.phonegap },
                s = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                r = e.match(/(iPad).*OS\s([\d_]+)/),
                o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (
                (s && ((t.os = "windows"), (t.osVersion = s[2]), (t.windows = !0)),
                n && !s && ((t.os = "android"), (t.osVersion = n[2]), (t.android = !0), (t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0)),
                (r || l || o) && ((t.os = "ios"), (t.ios = !0)),
                l && !o && ((t.osVersion = l[2].replace(/_/g, ".")), (t.iphone = !0)),
                r && ((t.osVersion = r[2].replace(/_/g, ".")), (t.ipad = !0)),
                o && ((t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null), (t.iphone = !0)),
                t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
                (t.desktop = !(t.os || t.android || t.webView)),
                (t.webView = (l || r || o) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
                t.os && "ios" === t.os)
            ) {
                const e = t.osVersion.split("."),
                    s = i.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (o || l) && (1 * e[0] == 7 ? 1 * e[1] >= 1 : 1 * e[0] > 7) && s && s.getAttribute("content").indexOf("minimal-ui") >= 0;
            }
            return (t.pixelRatio = a.devicePixelRatio || 1), t;
        })();
        function x() {
            const e = this,
                { params: t, el: s } = e;
            if (s && 0 === s.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const { allowSlideNext: i, allowSlidePrev: a, snapGrid: n } = e;
            if (((e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), t.freeMode)) {
                const s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            (e.allowSlidePrev = a), (e.allowSlideNext = i), e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
        }
        var E = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
        };
        const T = {
                update: h,
                translate: m,
                transition: f,
                slide: v,
                loop: g,
                grabCursor: y,
                manipulation: b,
                events: {
                    attachEvents: function () {
                        const e = this,
                            { params: t, touchEvents: s, el: n, wrapperEl: o } = e;
                        (e.onTouchStart = function (e) {
                            const t = this,
                                s = t.touchEventsData,
                                { params: n, touches: o } = t;
                            if (t.animating && n.preventInteractionOnTransition) return;
                            let l = e;
                            if ((l.originalEvent && (l = l.originalEvent), (s.isTouchEvent = "touchstart" === l.type), !s.isTouchEvent && "which" in l && 3 === l.which)) return;
                            if (!s.isTouchEvent && "button" in l && l.button > 0) return;
                            if (s.isTouched && s.isMoved) return;
                            if (n.noSwiping && r(l.target).closest(n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`)[0]) return void (t.allowClick = !0);
                            if (n.swipeHandler && !r(l).closest(n.swipeHandler)[0]) return;
                            (o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX), (o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
                            const c = o.currentX,
                                p = o.currentY,
                                u = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                                h = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                            if (!u || !(c <= h || c >= a.screen.width - h)) {
                                if (
                                    (d.extend(s, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                                    (o.startX = c),
                                    (o.startY = p),
                                    (s.touchStartTime = d.now()),
                                    (t.allowClick = !0),
                                    t.updateSize(),
                                    (t.swipeDirection = void 0),
                                    n.threshold > 0 && (s.allowThresholdMove = !1),
                                    "touchstart" !== l.type)
                                ) {
                                    let e = !0;
                                    r(l.target).is(s.formElements) && (e = !1), i.activeElement && r(i.activeElement).is(s.formElements) && i.activeElement !== l.target && i.activeElement.blur();
                                    const a = e && t.allowTouchMove && n.touchStartPreventDefault;
                                    (n.touchStartForcePreventDefault || a) && l.preventDefault();
                                }
                                t.emit("touchStart", l);
                            }
                        }.bind(e)),
                            (e.onTouchMove = function (e) {
                                const t = this,
                                    s = t.touchEventsData,
                                    { params: a, touches: n, rtlTranslate: o } = t;
                                let l = e;
                                if ((l.originalEvent && (l = l.originalEvent), !s.isTouched)) return void (s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", l));
                                if (s.isTouchEvent && "mousemove" === l.type) return;
                                const c = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
                                    p = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                if (l.preventedByNestedSwiper) return (n.startX = c), void (n.startY = p);
                                if (!t.allowTouchMove) return (t.allowClick = !1), void (s.isTouched && (d.extend(n, { startX: c, startY: p, currentX: c, currentY: p }), (s.touchStartTime = d.now())));
                                if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                                    if (t.isVertical()) {
                                        if ((p < n.startY && t.translate <= t.maxTranslate()) || (p > n.startY && t.translate >= t.minTranslate())) return (s.isTouched = !1), void (s.isMoved = !1);
                                    } else if ((c < n.startX && t.translate <= t.maxTranslate()) || (c > n.startX && t.translate >= t.minTranslate())) return;
                                if (s.isTouchEvent && i.activeElement && l.target === i.activeElement && r(l.target).is(s.formElements)) return (s.isMoved = !0), void (t.allowClick = !1);
                                if ((s.allowTouchCallbacks && t.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1)) return;
                                (n.currentX = c), (n.currentY = p);
                                const u = n.currentX - n.startX,
                                    h = n.currentY - n.startY;
                                if (t.params.threshold && Math.sqrt(u ** 2 + h ** 2) < t.params.threshold) return;
                                if (void 0 === s.isScrolling) {
                                    let e;
                                    (t.isHorizontal() && n.currentY === n.startY) || (t.isVertical() && n.currentX === n.startX)
                                        ? (s.isScrolling = !1)
                                        : u * u + h * h >= 25 && ((e = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI), (s.isScrolling = t.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle));
                                }
                                if ((s.isScrolling && t.emit("touchMoveOpposite", l), void 0 === s.startMoving && ((n.currentX === n.startX && n.currentY === n.startY) || (s.startMoving = !0)), s.isScrolling))
                                    return void (s.isTouched = !1);
                                if (!s.startMoving) return;
                                (t.allowClick = !1),
                                    l.preventDefault(),
                                    a.touchMoveStopPropagation && !a.nested && l.stopPropagation(),
                                    s.isMoved ||
                                        (a.loop && t.loopFix(),
                                        (s.startTranslate = t.getTranslate()),
                                        t.setTransition(0),
                                        t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                        (s.allowMomentumBounce = !1),
                                        !a.grabCursor || (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) || t.setGrabCursor(!0),
                                        t.emit("sliderFirstMove", l)),
                                    t.emit("sliderMove", l),
                                    (s.isMoved = !0);
                                let m = t.isHorizontal() ? u : h;
                                (n.diff = m), (m *= a.touchRatio), o && (m = -m), (t.swipeDirection = m > 0 ? "prev" : "next"), (s.currentTranslate = m + s.startTranslate);
                                let f = !0,
                                    v = a.resistanceRatio;
                                if (
                                    (a.touchReleaseOnEdges && (v = 0),
                                    m > 0 && s.currentTranslate > t.minTranslate()
                                        ? ((f = !1), a.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + m) ** v))
                                        : m < 0 && s.currentTranslate < t.maxTranslate() && ((f = !1), a.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - m) ** v)),
                                    f && (l.preventedByNestedSwiper = !0),
                                    !t.allowSlideNext && "next" === t.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
                                    !t.allowSlidePrev && "prev" === t.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
                                    a.threshold > 0)
                                ) {
                                    if (!(Math.abs(m) > a.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
                                    if (!s.allowThresholdMove)
                                        return (
                                            (s.allowThresholdMove = !0),
                                            (n.startX = n.currentX),
                                            (n.startY = n.currentY),
                                            (s.currentTranslate = s.startTranslate),
                                            void (n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                                        );
                                }
                                a.followFinger &&
                                    ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()),
                                    a.freeMode &&
                                        (0 === s.velocities.length && s.velocities.push({ position: n[t.isHorizontal() ? "startX" : "startY"], time: s.touchStartTime }),
                                        s.velocities.push({ position: n[t.isHorizontal() ? "currentX" : "currentY"], time: d.now() })),
                                    t.updateProgress(s.currentTranslate),
                                    t.setTranslate(s.currentTranslate));
                            }.bind(e)),
                            (e.onTouchEnd = function (e) {
                                const t = this,
                                    s = t.touchEventsData,
                                    { params: i, touches: a, rtlTranslate: n, $wrapperEl: r, slidesGrid: o, snapGrid: l } = t;
                                let c = e;
                                if ((c.originalEvent && (c = c.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", c), (s.allowTouchCallbacks = !1), !s.isTouched))
                                    return s.isMoved && i.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
                                i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                                const p = d.now(),
                                    u = p - s.touchStartTime;
                                if (
                                    (t.allowClick &&
                                        (t.updateClickedSlide(c),
                                        t.emit("tap", c),
                                        u < 300 &&
                                            p - s.lastClickTime > 300 &&
                                            (s.clickTimeout && clearTimeout(s.clickTimeout),
                                            (s.clickTimeout = d.nextTick(() => {
                                                t && !t.destroyed && t.emit("click", c);
                                            }, 300))),
                                        u < 300 && p - s.lastClickTime < 300 && (s.clickTimeout && clearTimeout(s.clickTimeout), t.emit("doubleTap", c))),
                                    (s.lastClickTime = d.now()),
                                    d.nextTick(() => {
                                        t.destroyed || (t.allowClick = !0);
                                    }),
                                    !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff || s.currentTranslate === s.startTranslate)
                                )
                                    return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
                                let h;
                                if (((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1), (h = i.followFinger ? (n ? t.translate : -t.translate) : -s.currentTranslate), i.freeMode)) {
                                    if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                                    if (h > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                                    if (i.freeModeMomentum) {
                                        if (s.velocities.length > 1) {
                                            const e = s.velocities.pop(),
                                                a = s.velocities.pop(),
                                                n = e.position - a.position,
                                                r = e.time - a.time;
                                            (t.velocity = n / r), (t.velocity /= 2), Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (r > 150 || d.now() - e.time > 300) && (t.velocity = 0);
                                        } else t.velocity = 0;
                                        (t.velocity *= i.freeModeMomentumVelocityRatio), (s.velocities.length = 0);
                                        let e = 1e3 * i.freeModeMomentumRatio;
                                        const a = t.velocity * e;
                                        let o = t.translate + a;
                                        n && (o = -o);
                                        let c,
                                            p = !1;
                                        const u = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                        let h;
                                        if (o < t.maxTranslate())
                                            i.freeModeMomentumBounce ? (o + t.maxTranslate() < -u && (o = t.maxTranslate() - u), (c = t.maxTranslate()), (p = !0), (s.allowMomentumBounce = !0)) : (o = t.maxTranslate()),
                                                i.loop && i.centeredSlides && (h = !0);
                                        else if (o > t.minTranslate())
                                            i.freeModeMomentumBounce ? (o - t.minTranslate() > u && (o = t.minTranslate() + u), (c = t.minTranslate()), (p = !0), (s.allowMomentumBounce = !0)) : (o = t.minTranslate()),
                                                i.loop && i.centeredSlides && (h = !0);
                                        else if (i.freeModeSticky) {
                                            let e;
                                            for (let t = 0; t < l.length; t += 1)
                                                if (l[t] > -o) {
                                                    e = t;
                                                    break;
                                                }
                                            o = -(o = Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) || "next" === t.swipeDirection ? l[e] : l[e - 1]);
                                        }
                                        if (
                                            (h &&
                                                t.once("transitionEnd", () => {
                                                    t.loopFix();
                                                }),
                                            0 !== t.velocity)
                                        )
                                            e = n ? Math.abs((-o - t.translate) / t.velocity) : Math.abs((o - t.translate) / t.velocity);
                                        else if (i.freeModeSticky) return void t.slideToClosest();
                                        i.freeModeMomentumBounce && p
                                            ? (t.updateProgress(c),
                                              t.setTransition(e),
                                              t.setTranslate(o),
                                              t.transitionStart(!0, t.swipeDirection),
                                              (t.animating = !0),
                                              r.transitionEnd(() => {
                                                  t &&
                                                      !t.destroyed &&
                                                      s.allowMomentumBounce &&
                                                      (t.emit("momentumBounce"),
                                                      t.setTransition(i.speed),
                                                      t.setTranslate(c),
                                                      r.transitionEnd(() => {
                                                          t && !t.destroyed && t.transitionEnd();
                                                      }));
                                              }))
                                            : t.velocity
                                            ? (t.updateProgress(o),
                                              t.setTransition(e),
                                              t.setTranslate(o),
                                              t.transitionStart(!0, t.swipeDirection),
                                              t.animating ||
                                                  ((t.animating = !0),
                                                  r.transitionEnd(() => {
                                                      t && !t.destroyed && t.transitionEnd();
                                                  })))
                                            : t.updateProgress(o),
                                            t.updateActiveIndex(),
                                            t.updateSlidesClasses();
                                    } else if (i.freeModeSticky) return void t.slideToClosest();
                                    return void ((!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()));
                                }
                                let m = 0,
                                    f = t.slidesSizesGrid[0];
                                for (let e = 0; e < o.length; e += i.slidesPerGroup)
                                    void 0 !== o[e + i.slidesPerGroup] ? h >= o[e] && h < o[e + i.slidesPerGroup] && ((m = e), (f = o[e + i.slidesPerGroup] - o[e])) : h >= o[e] && ((m = e), (f = o[o.length - 1] - o[o.length - 2]));
                                const v = (h - o[m]) / f;
                                if (u > i.longSwipesMs) {
                                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                                    "next" === t.swipeDirection && (v >= i.longSwipesRatio ? t.slideTo(m + i.slidesPerGroup) : t.slideTo(m)),
                                        "prev" === t.swipeDirection && (v > 1 - i.longSwipesRatio ? t.slideTo(m + i.slidesPerGroup) : t.slideTo(m));
                                } else {
                                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                                    "next" === t.swipeDirection && t.slideTo(m + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(m);
                                }
                            }.bind(e)),
                            (e.onClick = function (e) {
                                const t = this;
                                t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
                            }.bind(e));
                        const l = "container" === t.touchEventsTarget ? n : o,
                            p = !!t.nested;
                        if (c.touch || (!c.pointerEvents && !c.prefixedPointerEvents)) {
                            if (c.touch) {
                                const i = !("touchstart" !== s.start || !c.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                                l.addEventListener(s.start, e.onTouchStart, i), l.addEventListener(s.move, e.onTouchMove, c.passiveListener ? { passive: !1, capture: p } : p), l.addEventListener(s.end, e.onTouchEnd, i);
                            }
                            ((t.simulateTouch && !w.ios && !w.android) || (t.simulateTouch && !c.touch && w.ios)) &&
                                (l.addEventListener("mousedown", e.onTouchStart, !1), i.addEventListener("mousemove", e.onTouchMove, p), i.addEventListener("mouseup", e.onTouchEnd, !1));
                        } else l.addEventListener(s.start, e.onTouchStart, !1), i.addEventListener(s.move, e.onTouchMove, p), i.addEventListener(s.end, e.onTouchEnd, !1);
                        (t.preventClicks || t.preventClicksPropagation) && l.addEventListener("click", e.onClick, !0), e.on(w.ios || w.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x, !0);
                    },
                    detachEvents: function () {
                        const e = this,
                            { params: t, touchEvents: s, el: a, wrapperEl: n } = e,
                            r = "container" === t.touchEventsTarget ? a : n,
                            o = !!t.nested;
                        if (c.touch || (!c.pointerEvents && !c.prefixedPointerEvents)) {
                            if (c.touch) {
                                const i = !("onTouchStart" !== s.start || !c.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                                r.removeEventListener(s.start, e.onTouchStart, i), r.removeEventListener(s.move, e.onTouchMove, o), r.removeEventListener(s.end, e.onTouchEnd, i);
                            }
                            ((t.simulateTouch && !w.ios && !w.android) || (t.simulateTouch && !c.touch && w.ios)) &&
                                (r.removeEventListener("mousedown", e.onTouchStart, !1), i.removeEventListener("mousemove", e.onTouchMove, o), i.removeEventListener("mouseup", e.onTouchEnd, !1));
                        } else r.removeEventListener(s.start, e.onTouchStart, !1), i.removeEventListener(s.move, e.onTouchMove, o), i.removeEventListener(s.end, e.onTouchEnd, !1);
                        (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(w.ios || w.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x);
                    },
                },
                breakpoints: {
                    setBreakpoint: function () {
                        const e = this,
                            { activeIndex: t, initialized: s, loopedSlides: i = 0, params: a } = e,
                            n = a.breakpoints;
                        if (!n || (n && 0 === Object.keys(n).length)) return;
                        const r = e.getBreakpoint(n);
                        if (r && e.currentBreakpoint !== r) {
                            const o = r in n ? n[r] : void 0;
                            o &&
                                ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach((e) => {
                                    const t = o[e];
                                    void 0 !== t && (o[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                                });
                            const l = o || e.originalParams,
                                c = l.direction && l.direction !== a.direction,
                                p = a.loop && (l.slidesPerView !== a.slidesPerView || c);
                            c && s && e.changeDirection(),
                                d.extend(e.params, l),
                                d.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                                (e.currentBreakpoint = r),
                                p && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)),
                                e.emit("breakpoint", l);
                        }
                    },
                    getBreakpoint: function (e) {
                        const t = this;
                        if (!e) return;
                        let s = !1;
                        const i = [];
                        Object.keys(e).forEach((e) => {
                            i.push(e);
                        }),
                            i.sort((e, t) => parseInt(e, 10) - parseInt(t, 10));
                        for (let e = 0; e < i.length; e += 1) {
                            const n = i[e];
                            t.params.breakpointsInverse ? n <= a.innerWidth && (s = n) : n >= a.innerWidth && !s && (s = n);
                        }
                        return s || "max";
                    },
                },
                checkOverflow: {
                    checkOverflow: function () {
                        const e = this,
                            t = e.isLocked;
                        (e.isLocked = 1 === e.snapGrid.length),
                            (e.allowSlideNext = !e.isLocked),
                            (e.allowSlidePrev = !e.isLocked),
                            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                            t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
                    },
                },
                classes: {
                    addClasses: function () {
                        const { classNames: e, params: t, rtl: s, $el: i } = this,
                            a = [];
                        a.push("initialized"),
                            a.push(t.direction),
                            t.freeMode && a.push("free-mode"),
                            c.flexbox || a.push("no-flexbox"),
                            t.autoHeight && a.push("autoheight"),
                            s && a.push("rtl"),
                            t.slidesPerColumn > 1 && a.push("multirow"),
                            w.android && a.push("android"),
                            w.ios && a.push("ios"),
                            (p.isIE || p.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && a.push(`wp8-${t.direction}`),
                            a.forEach((s) => {
                                e.push(t.containerModifierClass + s);
                            }),
                            i.addClass(e.join(" "));
                    },
                    removeClasses: function () {
                        const { $el: e, classNames: t } = this;
                        e.removeClass(t.join(" "));
                    },
                },
                images: {
                    loadImage: function (e, t, s, i, n, r) {
                        let o;
                        function l() {
                            r && r();
                        }
                        e.complete && n ? l() : t ? (((o = new a.Image()).onload = l), (o.onerror = l), i && (o.sizes = i), s && (o.srcset = s), t && (o.src = t)) : l();
                    },
                    preloadImages: function () {
                        const e = this;
                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                            const i = e.imagesToLoad[s];
                            e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
                        }
                    },
                },
            },
            S = {};
        class C extends u {
            constructor(...e) {
                let t, s;
                1 === e.length && e[0].constructor && e[0].constructor === Object ? (s = e[0]) : ([t, s] = e),
                    s || (s = {}),
                    (s = d.extend({}, s)),
                    t && !s.el && (s.el = t),
                    super(s),
                    Object.keys(T).forEach((e) => {
                        Object.keys(T[e]).forEach((t) => {
                            C.prototype[t] || (C.prototype[t] = T[e][t]);
                        });
                    });
                const i = this;
                void 0 === i.modules && (i.modules = {}),
                    Object.keys(i.modules).forEach((e) => {
                        const t = i.modules[e];
                        if (t.params) {
                            const e = Object.keys(t.params)[0],
                                i = t.params[e];
                            if ("object" != typeof i || null === i) return;
                            if (!(e in s && "enabled" in i)) return;
                            !0 === s[e] && (s[e] = { enabled: !0 }), "object" != typeof s[e] || "enabled" in s[e] || (s[e].enabled = !0), s[e] || (s[e] = { enabled: !1 });
                        }
                    });
                const a = d.extend({}, E);
                i.useModulesParams(a), (i.params = d.extend({}, a, S, s)), (i.originalParams = d.extend({}, i.params)), (i.passedParams = d.extend({}, s)), (i.$ = r);
                const n = r(i.params.el);
                if (!(t = n[0])) return;
                if (n.length > 1) {
                    const e = [];
                    return (
                        n.each((t, i) => {
                            const a = d.extend({}, s, { el: i });
                            e.push(new C(a));
                        }),
                        e
                    );
                }
                (t.swiper = i), n.data("swiper", i);
                const o = n.children(`.${i.params.wrapperClass}`);
                return (
                    d.extend(i, {
                        $el: n,
                        el: t,
                        $wrapperEl: o,
                        wrapperEl: o[0],
                        classNames: [],
                        slides: r(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === i.params.direction,
                        isVertical: () => "vertical" === i.params.direction,
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
                        rtlTranslate: "horizontal" === i.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === o.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: i.params.allowSlideNext,
                        allowSlidePrev: i.params.allowSlidePrev,
                        touchEvents: (function () {
                            const e = ["touchstart", "touchmove", "touchend"];
                            let t = ["mousedown", "mousemove", "mouseup"];
                            return (
                                c.pointerEvents ? (t = ["pointerdown", "pointermove", "pointerup"]) : c.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                                (i.touchEventsTouch = { start: e[0], move: e[1], end: e[2] }),
                                (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                                c.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
                            );
                        })(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: d.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0,
                        },
                        allowClick: !0,
                        allowTouchMove: i.params.allowTouchMove,
                        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                        imagesToLoad: [],
                        imagesLoaded: 0,
                    }),
                    i.useModules(),
                    i.params.init && i.init(),
                    i
                );
            }
            slidesPerViewDynamic() {
                const { params: e, slides: t, slidesGrid: s, size: i, activeIndex: a } = this;
                let n = 1;
                if (e.centeredSlides) {
                    let e,
                        s = t[a].swiperSlideSize;
                    for (let r = a + 1; r < t.length; r += 1) t[r] && !e && ((n += 1), (s += t[r].swiperSlideSize) > i && (e = !0));
                    for (let r = a - 1; r >= 0; r -= 1) t[r] && !e && ((n += 1), (s += t[r].swiperSlideSize) > i && (e = !0));
                } else for (let e = a + 1; e < t.length; e += 1) s[e] - s[a] < i && (n += 1);
                return n;
            }
            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const { snapGrid: t, params: s } = e;
                function i() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
                }
                let a;
                s.breakpoints && e.setBreakpoint(),
                    e.updateSize(),
                    e.updateSlides(),
                    e.updateProgress(),
                    e.updateSlidesClasses(),
                    e.params.freeMode
                        ? (i(), e.params.autoHeight && e.updateAutoHeight())
                        : (a = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
                    s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                    e.emit("update");
            }
            changeDirection(e, t = !0) {
                const s = this,
                    i = s.params.direction;
                return (
                    e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                    e === i || ("horizontal" !== e && "vertical" !== e)
                        ? s
                        : ("vertical" === i &&
                              (s.$el.removeClass(`${s.params.containerModifierClass}vertical wp8-vertical`).addClass(`${s.params.containerModifierClass}${e}`),
                              (p.isIE || p.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && s.$el.addClass(`${s.params.containerModifierClass}wp8-${e}`)),
                          "horizontal" === i &&
                              (s.$el.removeClass(`${s.params.containerModifierClass}horizontal wp8-horizontal`).addClass(`${s.params.containerModifierClass}${e}`),
                              (p.isIE || p.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && s.$el.addClass(`${s.params.containerModifierClass}wp8-${e}`)),
                          (s.params.direction = e),
                          s.slides.each((t, s) => {
                              "vertical" === e ? (s.style.width = "") : (s.style.height = "");
                          }),
                          s.emit("changeDirection"),
                          t && s.update(),
                          s)
                );
            }
            init() {
                const e = this;
                e.initialized ||
                    (e.emit("beforeInit"),
                    e.params.breakpoints && e.setBreakpoint(),
                    e.addClasses(),
                    e.params.loop && e.loopCreate(),
                    e.updateSize(),
                    e.updateSlides(),
                    e.params.watchOverflow && e.checkOverflow(),
                    e.params.grabCursor && e.setGrabCursor(),
                    e.params.preloadImages && e.preloadImages(),
                    e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                    e.attachEvents(),
                    (e.initialized = !0),
                    e.emit("init"));
            }
            destroy(e = !0, t = !0) {
                const s = this,
                    { params: i, $el: a, $wrapperEl: n, slides: r } = s;
                return void 0 === s.params || s.destroyed
                    ? null
                    : (s.emit("beforeDestroy"),
                      (s.initialized = !1),
                      s.detachEvents(),
                      i.loop && s.loopDestroy(),
                      t &&
                          (s.removeClasses(),
                          a.removeAttr("style"),
                          n.removeAttr("style"),
                          r &&
                              r.length &&
                              r
                                  .removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" "))
                                  .removeAttr("style")
                                  .removeAttr("data-swiper-slide-index")
                                  .removeAttr("data-swiper-column")
                                  .removeAttr("data-swiper-row")),
                      s.emit("destroy"),
                      Object.keys(s.eventsListeners).forEach((e) => {
                          s.off(e);
                      }),
                      !1 !== e && ((s.$el[0].swiper = null), s.$el.data("swiper", null), d.deleteProps(s)),
                      (s.destroyed = !0),
                      null);
            }
            static extendDefaults(e) {
                d.extend(S, e);
            }
            static get extendedDefaults() {
                return S;
            }
            static get defaults() {
                return E;
            }
            static get Class() {
                return u;
            }
            static get $() {
                return r;
            }
        }
        var k = { name: "device", proto: { device: w }, static: { device: w } },
            $ = { name: "support", proto: { support: c }, static: { support: c } },
            M = { name: "browser", proto: { browser: p }, static: { browser: p } },
            P = {
                name: "resize",
                create() {
                    const e = this;
                    d.extend(e, {
                        resize: {
                            resizeHandler() {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                            },
                            orientationChangeHandler() {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange");
                            },
                        },
                    });
                },
                on: {
                    init() {
                        a.addEventListener("resize", this.resize.resizeHandler), a.addEventListener("orientationchange", this.resize.orientationChangeHandler);
                    },
                    destroy() {
                        a.removeEventListener("resize", this.resize.resizeHandler), a.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
                    },
                },
            };
        const L = {
            func: a.MutationObserver || a.WebkitMutationObserver,
            attach(e, t = {}) {
                const s = this,
                    i = new (0, L.func)((e) => {
                        if (1 === e.length) return void s.emit("observerUpdate", e[0]);
                        const t = function () {
                            s.emit("observerUpdate", e[0]);
                        };
                        a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
                    });
                i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), s.observer.observers.push(i);
            },
            init() {
                const e = this;
                if (c.observer && e.params.observer) {
                    if (e.params.observeParents) {
                        const t = e.$el.parents();
                        for (let s = 0; s < t.length; s += 1) e.observer.attach(t[s]);
                    }
                    e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
                }
            },
            destroy() {
                this.observer.observers.forEach((e) => {
                    e.disconnect();
                }),
                    (this.observer.observers = []);
            },
        };
        var z = {
            name: "observer",
            params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
            create() {
                d.extend(this, { observer: { init: L.init.bind(this), attach: L.attach.bind(this), destroy: L.destroy.bind(this), observers: [] } });
            },
            on: {
                init() {
                    this.observer.init();
                },
                destroy() {
                    this.observer.destroy();
                },
            },
        };
        const I = {
            update(e) {
                const t = this,
                    { slidesPerView: s, slidesPerGroup: i, centeredSlides: a } = t.params,
                    { addSlidesBefore: n, addSlidesAfter: r } = t.params.virtual,
                    { from: o, to: l, slides: c, slidesGrid: p, renderSlide: u, offset: h } = t.virtual;
                t.updateActiveIndex();
                const m = t.activeIndex || 0;
                let f, v, g;
                (f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"), a ? ((v = Math.floor(s / 2) + i + n), (g = Math.floor(s / 2) + i + r)) : ((v = s + (i - 1) + n), (g = i + r));
                const y = Math.max((m || 0) - g, 0),
                    b = Math.min((m || 0) + v, c.length - 1),
                    w = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
                function x() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
                }
                if ((d.extend(t.virtual, { from: y, to: b, offset: w, slidesGrid: t.slidesGrid }), o === y && l === b && !e)) return t.slidesGrid !== p && w !== h && t.slides.css(f, `${w}px`), void t.updateProgress();
                if (t.params.virtual.renderExternal)
                    return (
                        t.params.virtual.renderExternal.call(t, {
                            offset: w,
                            from: y,
                            to: b,
                            slides: (function () {
                                const e = [];
                                for (let t = y; t <= b; t += 1) e.push(c[t]);
                                return e;
                            })(),
                        }),
                        void x()
                    );
                const E = [],
                    T = [];
                if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
                else for (let e = o; e <= l; e += 1) (e < y || e > b) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
                for (let t = 0; t < c.length; t += 1) t >= y && t <= b && (void 0 === l || e ? T.push(t) : (t > l && T.push(t), t < o && E.push(t)));
                T.forEach((e) => {
                    t.$wrapperEl.append(u(c[e], e));
                }),
                    E.sort((e, t) => t - e).forEach((e) => {
                        t.$wrapperEl.prepend(u(c[e], e));
                    }),
                    t.$wrapperEl.children(".swiper-slide").css(f, `${w}px`),
                    x();
            },
            renderSlide(e, t) {
                const s = this,
                    i = s.params.virtual;
                if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
                const a = i.renderSlide ? r(i.renderSlide.call(s, e, t)) : r(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (s.virtual.cache[t] = a), a;
            },
            appendSlide(e) {
                const t = this;
                if ("object" == typeof e && "length" in e) for (let s = 0; s < e.length; s += 1) e[s] && t.virtual.slides.push(e[s]);
                else t.virtual.slides.push(e);
                t.virtual.update(!0);
            },
            prependSlide(e) {
                const t = this,
                    s = t.activeIndex;
                let i = s + 1,
                    a = 1;
                if (Array.isArray(e)) {
                    for (let s = 0; s < e.length; s += 1) e[s] && t.virtual.slides.unshift(e[s]);
                    (i = s + e.length), (a = e.length);
                } else t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    const e = t.virtual.cache,
                        s = {};
                    Object.keys(e).forEach((t) => {
                        s[parseInt(t, 10) + a] = e[t];
                    }),
                        (t.virtual.cache = s);
                }
                t.virtual.update(!0), t.slideTo(i, 0);
            },
            removeSlide(e) {
                const t = this;
                if (null == e) return;
                let s = t.activeIndex;
                if (Array.isArray(e)) for (let i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < s && (s -= 1), (s = Math.max(s, 0));
                else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < s && (s -= 1), (s = Math.max(s, 0));
                t.virtual.update(!0), t.slideTo(s, 0);
            },
            removeAllSlides() {
                const e = this;
                (e.virtual.slides = []), e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
            },
        };
        var A = {
            name: "virtual",
            params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
            create() {
                d.extend(this, {
                    virtual: {
                        update: I.update.bind(this),
                        appendSlide: I.appendSlide.bind(this),
                        prependSlide: I.prependSlide.bind(this),
                        removeSlide: I.removeSlide.bind(this),
                        removeAllSlides: I.removeAllSlides.bind(this),
                        renderSlide: I.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {},
                    },
                });
            },
            on: {
                beforeInit() {
                    const e = this;
                    if (!e.params.virtual.enabled) return;
                    e.classNames.push(`${e.params.containerModifierClass}virtual`);
                    const t = { watchSlidesProgress: !0 };
                    d.extend(e.params, t), d.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
                },
                setTranslate() {
                    this.params.virtual.enabled && this.virtual.update();
                },
            },
        };
        const D = {
            handle(e) {
                const t = this,
                    { rtlTranslate: s } = t;
                let n = e;
                n.originalEvent && (n = n.originalEvent);
                const r = n.keyCode || n.charCode;
                if (!t.allowSlideNext && ((t.isHorizontal() && 39 === r) || (t.isVertical() && 40 === r))) return !1;
                if (!t.allowSlidePrev && ((t.isHorizontal() && 37 === r) || (t.isVertical() && 38 === r))) return !1;
                if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || (i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase())))) {
                    if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                        let e = !1;
                        if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                        const i = a.innerWidth,
                            n = a.innerHeight,
                            r = t.$el.offset();
                        s && (r.left -= t.$el[0].scrollLeft);
                        const o = [
                            [r.left, r.top],
                            [r.left + t.width, r.top],
                            [r.left, r.top + t.height],
                            [r.left + t.width, r.top + t.height],
                        ];
                        for (let t = 0; t < o.length; t += 1) {
                            const s = o[t];
                            s[0] >= 0 && s[0] <= i && s[1] >= 0 && s[1] <= n && (e = !0);
                        }
                        if (!e) return;
                    }
                    t.isHorizontal()
                        ? ((37 !== r && 39 !== r) || (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)), ((39 === r && !s) || (37 === r && s)) && t.slideNext(), ((37 === r && !s) || (39 === r && s)) && t.slidePrev())
                        : ((38 !== r && 40 !== r) || (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)), 40 === r && t.slideNext(), 38 === r && t.slidePrev()),
                        t.emit("keyPress", r);
                }
            },
            enable() {
                this.keyboard.enabled || (r(i).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
            },
            disable() {
                this.keyboard.enabled && (r(i).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
            },
        };
        var O = {
            name: "keyboard",
            params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
            create() {
                d.extend(this, { keyboard: { enabled: !1, enable: D.enable.bind(this), disable: D.disable.bind(this), handle: D.handle.bind(this) } });
            },
            on: {
                init() {
                    const e = this;
                    e.params.keyboard.enabled && e.keyboard.enable();
                },
                destroy() {
                    const e = this;
                    e.keyboard.enabled && e.keyboard.disable();
                },
            },
        };
        const N = {
            lastScrollTime: d.now(),
            event:
                a.navigator.userAgent.indexOf("firefox") > -1
                    ? "DOMMouseScroll"
                    : (function () {
                          let e = "onwheel" in i;
                          if (!e) {
                              const t = i.createElement("div");
                              t.setAttribute("onwheel", "return;"), (e = "function" == typeof t.onwheel);
                          }
                          return !e && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (e = i.implementation.hasFeature("Events.wheel", "3.0")), e;
                      })()
                    ? "wheel"
                    : "mousewheel",
            normalize(e) {
                let t = 0,
                    s = 0,
                    i = 0,
                    a = 0;
                return (
                    "detail" in e && (s = e.detail),
                    "wheelDelta" in e && (s = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
                    (i = 10 * t),
                    (a = 10 * s),
                    "deltaY" in e && (a = e.deltaY),
                    "deltaX" in e && (i = e.deltaX),
                    (i || a) && e.deltaMode && (1 === e.deltaMode ? ((i *= 40), (a *= 40)) : ((i *= 800), (a *= 800))),
                    i && !t && (t = i < 1 ? -1 : 1),
                    a && !s && (s = a < 1 ? -1 : 1),
                    { spinX: t, spinY: s, pixelX: i, pixelY: a }
                );
            },
            handleMouseEnter() {
                this.mouseEntered = !0;
            },
            handleMouseLeave() {
                this.mouseEntered = !1;
            },
            handle(e) {
                let t = e;
                const s = this,
                    i = s.params.mousewheel;
                if (!s.mouseEntered && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                let n = 0;
                const r = s.rtlTranslate ? -1 : 1,
                    o = N.normalize(t);
                if (i.forceToAxis)
                    if (s.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        n = o.pixelX * r;
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        n = o.pixelY;
                    }
                else n = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
                if (0 === n) return !0;
                if ((i.invert && (n = -n), s.params.freeMode)) {
                    s.params.loop && s.loopFix();
                    let e = s.getTranslate() + n * i.sensitivity;
                    const a = s.isBeginning,
                        r = s.isEnd;
                    if (
                        (e >= s.minTranslate() && (e = s.minTranslate()),
                        e <= s.maxTranslate() && (e = s.maxTranslate()),
                        s.setTransition(0),
                        s.setTranslate(e),
                        s.updateProgress(),
                        s.updateActiveIndex(),
                        s.updateSlidesClasses(),
                        ((!a && s.isBeginning) || (!r && s.isEnd)) && s.updateSlidesClasses(),
                        s.params.freeModeSticky &&
                            (clearTimeout(s.mousewheel.timeout),
                            (s.mousewheel.timeout = d.nextTick(() => {
                                s.slideToClosest();
                            }, 300))),
                        s.emit("scroll", t),
                        s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(),
                        e === s.minTranslate() || e === s.maxTranslate())
                    )
                        return !0;
                } else {
                    if (d.now() - s.mousewheel.lastScrollTime > 60)
                        if (n < 0)
                            if ((s.isEnd && !s.params.loop) || s.animating) {
                                if (i.releaseOnEdges) return !0;
                            } else s.slideNext(), s.emit("scroll", t);
                        else if ((s.isBeginning && !s.params.loop) || s.animating) {
                            if (i.releaseOnEdges) return !0;
                        } else s.slidePrev(), s.emit("scroll", t);
                    s.mousewheel.lastScrollTime = new a.Date().getTime();
                }
                return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
            },
            enable() {
                const e = this;
                if (!N.event) return !1;
                if (e.mousewheel.enabled) return !1;
                let t = e.$el;
                return (
                    "container" !== e.params.mousewheel.eventsTarged && (t = r(e.params.mousewheel.eventsTarged)),
                    t.on("mouseenter", e.mousewheel.handleMouseEnter),
                    t.on("mouseleave", e.mousewheel.handleMouseLeave),
                    t.on(N.event, e.mousewheel.handle),
                    (e.mousewheel.enabled = !0),
                    !0
                );
            },
            disable() {
                const e = this;
                if (!N.event) return !1;
                if (!e.mousewheel.enabled) return !1;
                let t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = r(e.params.mousewheel.eventsTarged)), t.off(N.event, e.mousewheel.handle), (e.mousewheel.enabled = !1), !0;
            },
        };
        const B = {
            update() {
                const e = this,
                    t = e.params.navigation;
                if (e.params.loop) return;
                const { $nextEl: s, $prevEl: i } = e.navigation;
                i && i.length > 0 && (e.isBeginning ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                    s && s.length > 0 && (e.isEnd ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
            },
            onPrevClick(e) {
                e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
            },
            onNextClick(e) {
                e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
            },
            init() {
                const e = this,
                    t = e.params.navigation;
                if (!t.nextEl && !t.prevEl) return;
                let s, i;
                t.nextEl && ((s = r(t.nextEl)), e.params.uniqueNavElements && "string" == typeof t.nextEl && s.length > 1 && 1 === e.$el.find(t.nextEl).length && (s = e.$el.find(t.nextEl))),
                    t.prevEl && ((i = r(t.prevEl)), e.params.uniqueNavElements && "string" == typeof t.prevEl && i.length > 1 && 1 === e.$el.find(t.prevEl).length && (i = e.$el.find(t.prevEl))),
                    s && s.length > 0 && s.on("click", e.navigation.onNextClick),
                    i && i.length > 0 && i.on("click", e.navigation.onPrevClick),
                    d.extend(e.navigation, { $nextEl: s, nextEl: s && s[0], $prevEl: i, prevEl: i && i[0] });
            },
            destroy() {
                const e = this,
                    { $nextEl: t, $prevEl: s } = e.navigation;
                t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", e.navigation.onPrevClick), s.removeClass(e.params.navigation.disabledClass));
            },
        };
        const H = {
            update() {
                const e = this,
                    t = e.rtl,
                    s = e.params.pagination;
                if (!s.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    a = e.pagination.$el;
                let n;
                const o = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (
                    (e.params.loop
                        ? ((n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (n -= i - 2 * e.loopedSlides),
                          n > o - 1 && (n -= o),
                          n < 0 && "bullets" !== e.params.paginationType && (n = o + n))
                        : (n = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
                    "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0)
                ) {
                    const i = e.pagination.bullets;
                    let o, l, d;
                    if (
                        (s.dynamicBullets &&
                            ((e.pagination.bulletSize = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                            a.css(e.isHorizontal() ? "width" : "height", `${e.pagination.bulletSize * (s.dynamicMainBullets + 4)}px`),
                            s.dynamicMainBullets > 1 &&
                                void 0 !== e.previousIndex &&
                                ((e.pagination.dynamicBulletIndex += n - e.previousIndex),
                                e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? (e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1) : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                            (o = n - e.pagination.dynamicBulletIndex),
                            (d = ((l = o + (Math.min(i.length, s.dynamicMainBullets) - 1)) + o) / 2)),
                        i.removeClass(`${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`),
                        a.length > 1)
                    )
                        i.each((e, t) => {
                            const i = r(t),
                                a = i.index();
                            a === n && i.addClass(s.bulletActiveClass),
                                s.dynamicBullets &&
                                    (a >= o && a <= l && i.addClass(`${s.bulletActiveClass}-main`),
                                    a === o && i.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`),
                                    a === l && i.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`));
                        });
                    else {
                        if ((i.eq(n).addClass(s.bulletActiveClass), s.dynamicBullets)) {
                            const e = i.eq(o),
                                t = i.eq(l);
                            for (let e = o; e <= l; e += 1) i.eq(e).addClass(`${s.bulletActiveClass}-main`);
                            e.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), t.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`);
                        }
                    }
                    if (s.dynamicBullets) {
                        const a = Math.min(i.length, s.dynamicMainBullets + 4),
                            n = (e.pagination.bulletSize * a - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                            r = t ? "right" : "left";
                        i.css(e.isHorizontal() ? r : "top", `${n}px`);
                    }
                }
                if (("fraction" === s.type && (a.find(`.${s.currentClass}`).text(s.formatFractionCurrent(n + 1)), a.find(`.${s.totalClass}`).text(s.formatFractionTotal(o))), "progressbar" === s.type)) {
                    let t;
                    t = s.progressbarOpposite ? (e.isHorizontal() ? "vertical" : "horizontal") : e.isHorizontal() ? "horizontal" : "vertical";
                    const i = (n + 1) / o;
                    let r = 1,
                        l = 1;
                    "horizontal" === t ? (r = i) : (l = i), a.find(`.${s.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${l})`).transition(e.params.speed);
                }
                "custom" === s.type && s.renderCustom ? (a.html(s.renderCustom(e, n + 1, o)), e.emit("paginationRender", e, a[0])) : e.emit("paginationUpdate", e, a[0]),
                    a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
            },
            render() {
                const e = this,
                    t = e.params.pagination;
                if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    i = e.pagination.$el;
                let a = "";
                if ("bullets" === t.type) {
                    const n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    for (let s = 0; s < n; s += 1) t.renderBullet ? (a += t.renderBullet.call(e, s, t.bulletClass)) : (a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
                    i.html(a), (e.pagination.bullets = i.find(`.${t.bulletClass}`));
                }
                "fraction" === t.type && ((a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span>` + " / " + `<span class="${t.totalClass}"></span>`), i.html(a)),
                    "progressbar" === t.type && ((a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), i.html(a)),
                    "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
            },
            init() {
                const e = this,
                    t = e.params.pagination;
                if (!t.el) return;
                let s = r(t.el);
                0 !== s.length &&
                    (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && 1 === e.$el.find(t.el).length && (s = e.$el.find(t.el)),
                    "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
                    s.addClass(t.modifierClass + t.type),
                    "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), (e.pagination.dynamicBulletIndex = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                    "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass),
                    t.clickable &&
                        s.on("click", `.${t.bulletClass}`, function (t) {
                            t.preventDefault();
                            let s = r(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (s += e.loopedSlides), e.slideTo(s);
                        }),
                    d.extend(e.pagination, { $el: s, el: s[0] }));
            },
            destroy() {
                const e = this.params.pagination;
                if (!e.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length) return;
                const t = this.pagination.$el;
                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", `.${e.bulletClass}`);
            },
        };
        const V = {
            setTranslate() {
                const e = this;
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const { scrollbar: t, rtlTranslate: s, progress: i } = e,
                    { dragSize: a, trackSize: n, $dragEl: r, $el: o } = t,
                    l = e.params.scrollbar;
                let d = a,
                    p = (n - a) * i;
                s ? ((p = -p) > 0 ? ((d = a - p), (p = 0)) : -p + a > n && (d = n + p)) : p < 0 ? ((d = a + p), (p = 0)) : p + a > n && (d = n - p),
                    e.isHorizontal()
                        ? (c.transforms3d ? r.transform(`translate3d(${p}px, 0, 0)`) : r.transform(`translateX(${p}px)`), (r[0].style.width = `${d}px`))
                        : (c.transforms3d ? r.transform(`translate3d(0px, ${p}px, 0)`) : r.transform(`translateY(${p}px)`), (r[0].style.height = `${d}px`)),
                    l.hide &&
                        (clearTimeout(e.scrollbar.timeout),
                        (o[0].style.opacity = 1),
                        (e.scrollbar.timeout = setTimeout(() => {
                            (o[0].style.opacity = 0), o.transition(400);
                        }, 1e3)));
            },
            setTransition(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
            },
            updateSize() {
                const e = this;
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const { scrollbar: t } = e,
                    { $dragEl: s, $el: i } = t;
                (s[0].style.width = ""), (s[0].style.height = "");
                const a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                    n = e.size / e.virtualSize,
                    r = n * (a / e.size);
                let o;
                (o = "auto" === e.params.scrollbar.dragSize ? a * n : parseInt(e.params.scrollbar.dragSize, 10)),
                    e.isHorizontal() ? (s[0].style.width = `${o}px`) : (s[0].style.height = `${o}px`),
                    (i[0].style.display = n >= 1 ? "none" : ""),
                    e.params.scrollbar.hide && (i[0].style.opacity = 0),
                    d.extend(t, { trackSize: a, divider: n, moveDivider: r, dragSize: o }),
                    t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
            },
            setDragPosition(e) {
                const { scrollbar: t, rtlTranslate: s } = this,
                    { $el: i, dragSize: a, trackSize: n } = t;
                let r, o;
                (o =
                    ((r = this.isHorizontal()
                        ? "touchstart" === e.type || "touchmove" === e.type
                            ? e.targetTouches[0].pageX
                            : e.pageX || e.clientX
                        : "touchstart" === e.type || "touchmove" === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY || e.clientY) -
                        i.offset()[this.isHorizontal() ? "left" : "top"] -
                        a / 2) /
                    (n - a)),
                    (o = Math.max(Math.min(o, 1), 0)),
                    s && (o = 1 - o);
                const l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
                this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
            },
            onDragStart(e) {
                const t = this.params.scrollbar,
                    { scrollbar: s, $wrapperEl: i } = this,
                    { $el: a, $dragEl: n } = s;
                (this.scrollbar.isTouched = !0),
                    e.preventDefault(),
                    e.stopPropagation(),
                    i.transition(100),
                    n.transition(100),
                    s.setDragPosition(e),
                    clearTimeout(this.scrollbar.dragTimeout),
                    a.transition(0),
                    t.hide && a.css("opacity", 1),
                    this.emit("scrollbarDragStart", e);
            },
            onDragMove(e) {
                const { scrollbar: t, $wrapperEl: s } = this,
                    { $el: i, $dragEl: a } = t;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t.setDragPosition(e), s.transition(0), i.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
            },
            onDragEnd(e) {
                const t = this,
                    s = t.params.scrollbar,
                    { scrollbar: i } = t,
                    { $el: a } = i;
                t.scrollbar.isTouched &&
                    ((t.scrollbar.isTouched = !1),
                    s.hide &&
                        (clearTimeout(t.scrollbar.dragTimeout),
                        (t.scrollbar.dragTimeout = d.nextTick(() => {
                            a.css("opacity", 0), a.transition(400);
                        }, 1e3))),
                    t.emit("scrollbarDragEnd", e),
                    s.snapOnRelease && t.slideToClosest());
            },
            enableDraggable() {
                const e = this;
                if (!e.params.scrollbar.el) return;
                const { scrollbar: t, touchEventsTouch: s, touchEventsDesktop: a, params: n } = e,
                    r = t.$el[0],
                    o = !(!c.passiveListener || !n.passiveListeners) && { passive: !1, capture: !1 },
                    l = !(!c.passiveListener || !n.passiveListeners) && { passive: !0, capture: !1 };
                c.touch
                    ? (r.addEventListener(s.start, e.scrollbar.onDragStart, o), r.addEventListener(s.move, e.scrollbar.onDragMove, o), r.addEventListener(s.end, e.scrollbar.onDragEnd, l))
                    : (r.addEventListener(a.start, e.scrollbar.onDragStart, o), i.addEventListener(a.move, e.scrollbar.onDragMove, o), i.addEventListener(a.end, e.scrollbar.onDragEnd, l));
            },
            disableDraggable() {
                const e = this;
                if (!e.params.scrollbar.el) return;
                const { scrollbar: t, touchEventsTouch: s, touchEventsDesktop: a, params: n } = e,
                    r = t.$el[0],
                    o = !(!c.passiveListener || !n.passiveListeners) && { passive: !1, capture: !1 },
                    l = !(!c.passiveListener || !n.passiveListeners) && { passive: !0, capture: !1 };
                c.touch
                    ? (r.removeEventListener(s.start, e.scrollbar.onDragStart, o), r.removeEventListener(s.move, e.scrollbar.onDragMove, o), r.removeEventListener(s.end, e.scrollbar.onDragEnd, l))
                    : (r.removeEventListener(a.start, e.scrollbar.onDragStart, o), i.removeEventListener(a.move, e.scrollbar.onDragMove, o), i.removeEventListener(a.end, e.scrollbar.onDragEnd, l));
            },
            init() {
                const e = this;
                if (!e.params.scrollbar.el) return;
                const { scrollbar: t, $el: s } = e,
                    i = e.params.scrollbar;
                let a = r(i.el);
                e.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === s.find(i.el).length && (a = s.find(i.el));
                let n = a.find(`.${e.params.scrollbar.dragClass}`);
                0 === n.length && ((n = r(`<div class="${e.params.scrollbar.dragClass}"></div>`)), a.append(n)), d.extend(t, { $el: a, el: a[0], $dragEl: n, dragEl: n[0] }), i.draggable && t.enableDraggable();
            },
            destroy() {
                this.scrollbar.disableDraggable();
            },
        };
        const G = {
            setTransform(e, t) {
                const { rtl: s } = this,
                    i = r(e),
                    a = s ? -1 : 1,
                    n = i.attr("data-swiper-parallax") || "0";
                let o = i.attr("data-swiper-parallax-x"),
                    l = i.attr("data-swiper-parallax-y");
                const d = i.attr("data-swiper-parallax-scale"),
                    c = i.attr("data-swiper-parallax-opacity");
                if (
                    (o || l ? ((o = o || "0"), (l = l || "0")) : this.isHorizontal() ? ((o = n), (l = "0")) : ((l = n), (o = "0")),
                    (o = o.indexOf("%") >= 0 ? `${parseInt(o, 10) * t * a}%` : `${o * t * a}px`),
                    (l = l.indexOf("%") >= 0 ? `${parseInt(l, 10) * t}%` : `${l * t}px`),
                    null != c)
                ) {
                    const e = c - (c - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = e;
                }
                if (null == d) i.transform(`translate3d(${o}, ${l}, 0px)`);
                else {
                    const e = d - (d - 1) * (1 - Math.abs(t));
                    i.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`);
                }
            },
            setTranslate() {
                const e = this,
                    { $el: t, slides: s, progress: i, snapGrid: a } = e;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((t, s) => {
                    e.parallax.setTransform(s, i);
                }),
                    s.each((t, s) => {
                        let n = s.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - i * (a.length - 1)),
                            (n = Math.min(Math.max(n, -1), 1)),
                            r(s)
                                .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                                .each((t, s) => {
                                    e.parallax.setTransform(s, n);
                                });
                    });
            },
            setTransition(e = this.params.speed) {
                const { $el: t } = this;
                t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((t, s) => {
                    const i = r(s);
                    let a = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), i.transition(a);
                });
            },
        };
        const q = {
            getDistanceBetweenTouches(e) {
                if (e.targetTouches.length < 2) return 1;
                const t = e.targetTouches[0].pageX,
                    s = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt((i - t) ** 2 + (a - s) ** 2);
            },
            onGestureStart(e) {
                const t = this,
                    s = t.params.zoom,
                    i = t.zoom,
                    { gesture: a } = i;
                if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !c.gestures)) {
                    if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                    (i.fakeGestureTouched = !0), (a.scaleStart = q.getDistanceBetweenTouches(e));
                }
                (a.$slideEl && a.$slideEl.length) ||
                ((a.$slideEl = r(e.target).closest(".swiper-slide")),
                0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)),
                (a.$imageEl = a.$slideEl.find("img, svg, canvas")),
                (a.$imageWrapEl = a.$imageEl.parent(`.${s.containerClass}`)),
                (a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                0 !== a.$imageWrapEl.length)
                    ? (a.$imageEl.transition(0), (t.zoom.isScaling = !0))
                    : (a.$imageEl = void 0);
            },
            onGestureChange(e) {
                const t = this.params.zoom,
                    s = this.zoom,
                    { gesture: i } = s;
                if (!c.gestures) {
                    if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                    (s.fakeGestureMoved = !0), (i.scaleMove = q.getDistanceBetweenTouches(e));
                }
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    (c.gestures ? (s.scale = e.scale * s.currentScale) : (s.scale = (i.scaleMove / i.scaleStart) * s.currentScale),
                    s.scale > i.maxRatio && (s.scale = i.maxRatio - 1 + (s.scale - i.maxRatio + 1) ** 0.5),
                    s.scale < t.minRatio && (s.scale = t.minRatio + 1 - (t.minRatio - s.scale + 1) ** 0.5),
                    i.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`));
            },
            onGestureEnd(e) {
                const t = this.params.zoom,
                    s = this.zoom,
                    { gesture: i } = s;
                if (!c.gestures) {
                    if (!s.fakeGestureTouched || !s.fakeGestureMoved) return;
                    if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !w.android)) return;
                    (s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1);
                }
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    ((s.scale = Math.max(Math.min(s.scale, i.maxRatio), t.minRatio)),
                    i.$imageEl.transition(this.params.speed).transform(`translate3d(0,0,0) scale(${s.scale})`),
                    (s.currentScale = s.scale),
                    (s.isScaling = !1),
                    1 === s.scale && (i.$slideEl = void 0));
            },
            onTouchStart(e) {
                const t = this.zoom,
                    { gesture: s, image: i } = t;
                s.$imageEl &&
                    0 !== s.$imageEl.length &&
                    (i.isTouched ||
                        (w.android && e.preventDefault(),
                        (i.isTouched = !0),
                        (i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
            },
            onTouchMove(e) {
                const t = this,
                    s = t.zoom,
                    { gesture: i, image: a, velocity: n } = s;
                if (!i.$imageEl || 0 === i.$imageEl.length) return;
                if (((t.allowClick = !1), !a.isTouched || !i.$slideEl)) return;
                a.isMoved ||
                    ((a.width = i.$imageEl[0].offsetWidth),
                    (a.height = i.$imageEl[0].offsetHeight),
                    (a.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0),
                    (a.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0),
                    (i.slideWidth = i.$slideEl[0].offsetWidth),
                    (i.slideHeight = i.$slideEl[0].offsetHeight),
                    i.$imageWrapEl.transition(0),
                    t.rtl && ((a.startX = -a.startX), (a.startY = -a.startY)));
                const r = a.width * s.scale,
                    o = a.height * s.scale;
                if (!(r < i.slideWidth && o < i.slideHeight)) {
                    if (
                        ((a.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
                        (a.maxX = -a.minX),
                        (a.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                        (a.maxY = -a.minY),
                        (a.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (a.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                        !a.isMoved && !s.isScaling)
                    ) {
                        if (t.isHorizontal() && ((Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x) || (Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x)))
                            return void (a.isTouched = !1);
                        if (!t.isHorizontal() && ((Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y) || (Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y)))
                            return void (a.isTouched = !1);
                    }
                    e.preventDefault(),
                        e.stopPropagation(),
                        (a.isMoved = !0),
                        (a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX),
                        (a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY),
                        a.currentX < a.minX && (a.currentX = a.minX + 1 - (a.minX - a.currentX + 1) ** 0.8),
                        a.currentX > a.maxX && (a.currentX = a.maxX - 1 + (a.currentX - a.maxX + 1) ** 0.8),
                        a.currentY < a.minY && (a.currentY = a.minY + 1 - (a.minY - a.currentY + 1) ** 0.8),
                        a.currentY > a.maxY && (a.currentY = a.maxY - 1 + (a.currentY - a.maxY + 1) ** 0.8),
                        n.prevPositionX || (n.prevPositionX = a.touchesCurrent.x),
                        n.prevPositionY || (n.prevPositionY = a.touchesCurrent.y),
                        n.prevTime || (n.prevTime = Date.now()),
                        (n.x = (a.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2),
                        (n.y = (a.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2),
                        Math.abs(a.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
                        Math.abs(a.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
                        (n.prevPositionX = a.touchesCurrent.x),
                        (n.prevPositionY = a.touchesCurrent.y),
                        (n.prevTime = Date.now()),
                        i.$imageWrapEl.transform(`translate3d(${a.currentX}px, ${a.currentY}px,0)`);
                }
            },
            onTouchEnd() {
                const e = this.zoom,
                    { gesture: t, image: s, velocity: i } = e;
                if (!t.$imageEl || 0 === t.$imageEl.length) return;
                if (!s.isTouched || !s.isMoved) return (s.isTouched = !1), void (s.isMoved = !1);
                (s.isTouched = !1), (s.isMoved = !1);
                let a = 300,
                    n = 300;
                const r = i.x * a,
                    o = s.currentX + r,
                    l = i.y * n,
                    d = s.currentY + l;
                0 !== i.x && (a = Math.abs((o - s.currentX) / i.x)), 0 !== i.y && (n = Math.abs((d - s.currentY) / i.y));
                const c = Math.max(a, n);
                (s.currentX = o), (s.currentY = d);
                const p = s.width * e.scale,
                    u = s.height * e.scale;
                (s.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
                    (s.maxX = -s.minX),
                    (s.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
                    (s.maxY = -s.minY),
                    (s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX)),
                    (s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY)),
                    t.$imageWrapEl.transition(c).transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`);
            },
            onTransitionEnd() {
                const e = this.zoom,
                    { gesture: t } = e;
                t.$slideEl &&
                    this.previousIndex !== this.activeIndex &&
                    (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), (e.scale = 1), (e.currentScale = 1), (t.$slideEl = void 0), (t.$imageEl = void 0), (t.$imageWrapEl = void 0));
            },
            toggle(e) {
                const t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in(e) {
                const t = this,
                    s = t.zoom,
                    i = t.params.zoom,
                    { gesture: a, image: n } = s;
                if (
                    (a.$slideEl || ((a.$slideEl = t.clickedSlide ? r(t.clickedSlide) : t.slides.eq(t.activeIndex)), (a.$imageEl = a.$slideEl.find("img, svg, canvas")), (a.$imageWrapEl = a.$imageEl.parent(`.${i.containerClass}`))),
                    !a.$imageEl || 0 === a.$imageEl.length)
                )
                    return;
                let o, l, d, c, p, u, h, m, f, v, g, y, b, w, x, E, T, S;
                a.$slideEl.addClass(`${i.zoomedSlideClass}`),
                    void 0 === n.touchesStart.x && e
                        ? ((o = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (l = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
                        : ((o = n.touchesStart.x), (l = n.touchesStart.y)),
                    (s.scale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                    (s.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                    e
                        ? ((T = a.$slideEl[0].offsetWidth),
                          (S = a.$slideEl[0].offsetHeight),
                          (p = (d = a.$slideEl.offset().left) + T / 2 - o),
                          (u = (c = a.$slideEl.offset().top) + S / 2 - l),
                          (f = a.$imageEl[0].offsetWidth),
                          (v = a.$imageEl[0].offsetHeight),
                          (g = f * s.scale),
                          (y = v * s.scale),
                          (x = -(b = Math.min(T / 2 - g / 2, 0))),
                          (E = -(w = Math.min(S / 2 - y / 2, 0))),
                          (h = p * s.scale) < b && (h = b),
                          h > x && (h = x),
                          (m = u * s.scale) < w && (m = w),
                          m > E && (m = E))
                        : ((h = 0), (m = 0)),
                    a.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${m}px,0)`),
                    a.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
            },
            out() {
                const e = this,
                    t = e.zoom,
                    s = e.params.zoom,
                    { gesture: i } = t;
                i.$slideEl || ((i.$slideEl = e.clickedSlide ? r(e.clickedSlide) : e.slides.eq(e.activeIndex)), (i.$imageEl = i.$slideEl.find("img, svg, canvas")), (i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`))),
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        ((t.scale = 1),
                        (t.currentScale = 1),
                        i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        i.$slideEl.removeClass(`${s.zoomedSlideClass}`),
                        (i.$slideEl = void 0));
            },
            enable() {
                const e = this,
                    t = e.zoom;
                if (t.enabled) return;
                t.enabled = !0;
                const s = !("touchstart" !== e.touchEvents.start || !c.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                c.gestures
                    ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, s))
                    : "touchstart" === e.touchEvents.start &&
                      (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s),
                      e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s),
                      e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)),
                    e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove);
            },
            disable() {
                const e = this,
                    t = e.zoom;
                if (!t.enabled) return;
                e.zoom.enabled = !1;
                const s = !("touchstart" !== e.touchEvents.start || !c.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                c.gestures
                    ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, s))
                    : "touchstart" === e.touchEvents.start &&
                      (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s),
                      e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s),
                      e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)),
                    e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove);
            },
        };
        const Y = {
            loadInSlide(e, t = !0) {
                const s = this,
                    i = s.params.lazy;
                if (void 0 === e) return;
                if (0 === s.slides.length) return;
                const a = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`) : s.slides.eq(e);
                let n = a.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
                !a.hasClass(i.elementClass) || a.hasClass(i.loadedClass) || a.hasClass(i.loadingClass) || (n = n.add(a[0])),
                    0 !== n.length &&
                        n.each((e, n) => {
                            const o = r(n);
                            o.addClass(i.loadingClass);
                            const l = o.attr("data-background"),
                                d = o.attr("data-src"),
                                c = o.attr("data-srcset"),
                                p = o.attr("data-sizes");
                            s.loadImage(o[0], d || l, c, p, !1, () => {
                                if (null != s && s && (!s || s.params) && !s.destroyed) {
                                    if (
                                        (l
                                            ? (o.css("background-image", `url("${l}")`), o.removeAttr("data-background"))
                                            : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))),
                                        o.addClass(i.loadedClass).removeClass(i.loadingClass),
                                        a.find(`.${i.preloaderClass}`).remove(),
                                        s.params.loop && t)
                                    ) {
                                        const e = a.attr("data-swiper-slide-index");
                                        if (a.hasClass(s.params.slideDuplicateClass)) {
                                            const t = s.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${s.params.slideDuplicateClass})`);
                                            s.lazy.loadInSlide(t.index(), !1);
                                        } else {
                                            const t = s.$wrapperEl.children(`.${s.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                            s.lazy.loadInSlide(t.index(), !1);
                                        }
                                    }
                                    s.emit("lazyImageReady", a[0], o[0]);
                                }
                            }),
                                s.emit("lazyImageLoad", a[0], o[0]);
                        });
            },
            load() {
                const e = this,
                    { $wrapperEl: t, params: s, slides: i, activeIndex: a } = e,
                    n = e.virtual && s.virtual.enabled,
                    o = s.lazy;
                let l = s.slidesPerView;
                function d(e) {
                    if (n) {
                        if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0;
                    } else if (i[e]) return !0;
                    return !1;
                }
                function c(e) {
                    return n ? r(e).attr("data-swiper-slide-index") : r(e).index();
                }
                if (("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility))
                    t.children(`.${s.slideVisibleClass}`).each((t, s) => {
                        const i = n ? r(s).attr("data-swiper-slide-index") : r(s).index();
                        e.lazy.loadInSlide(i);
                    });
                else if (l > 1) for (let t = a; t < a + l; t += 1) d(t) && e.lazy.loadInSlide(t);
                else e.lazy.loadInSlide(a);
                if (o.loadPrevNext)
                    if (l > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
                        const t = o.loadPrevNextAmount,
                            s = l,
                            n = Math.min(a + s + Math.max(t, s), i.length),
                            r = Math.max(a - Math.max(s, t), 0);
                        for (let t = a + l; t < n; t += 1) d(t) && e.lazy.loadInSlide(t);
                        for (let t = r; t < a; t += 1) d(t) && e.lazy.loadInSlide(t);
                    } else {
                        const i = t.children(`.${s.slideNextClass}`);
                        i.length > 0 && e.lazy.loadInSlide(c(i));
                        const a = t.children(`.${s.slidePrevClass}`);
                        a.length > 0 && e.lazy.loadInSlide(c(a));
                    }
            },
        };
        const F = {
            LinearSpline: function (e, t) {
                const s = (function () {
                    let e, t, s;
                    return (i, a) => {
                        for (t = -1, e = i.length; e - t > 1; ) i[(s = (e + t) >> 1)] <= a ? (t = s) : (e = s);
                        return e;
                    };
                })();
                let i, a;
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function (e) {
                        return e ? ((a = s(this.x, e)), (i = a - 1), ((e - this.x[i]) * (this.y[a] - this.y[i])) / (this.x[a] - this.x[i]) + this.y[i]) : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction(e) {
                const t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new F.LinearSpline(t.slidesGrid, e.slidesGrid) : new F.LinearSpline(t.snapGrid, e.snapGrid));
            },
            setTranslate(e, t) {
                const s = this,
                    i = s.controller.control;
                let a, n;
                function r(e) {
                    const t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), (n = -s.controller.spline.interpolate(-t))),
                        (n && "container" !== s.params.controller.by) || ((a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate())), (n = (t - s.minTranslate()) * a + e.minTranslate())),
                        s.params.controller.inverse && (n = e.maxTranslate() - n),
                        e.updateProgress(n),
                        e.setTranslate(n, s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                if (Array.isArray(i)) for (let e = 0; e < i.length; e += 1) i[e] !== t && i[e] instanceof C && r(i[e]);
                else i instanceof C && t !== i && r(i);
            },
            setTransition(e, t) {
                const s = this,
                    i = s.controller.control;
                let a;
                function n(t) {
                    t.setTransition(e, s),
                        0 !== e &&
                            (t.transitionStart(),
                            t.params.autoHeight &&
                                d.nextTick(() => {
                                    t.updateAutoHeight();
                                }),
                            t.$wrapperEl.transitionEnd(() => {
                                i && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
                            }));
                }
                if (Array.isArray(i)) for (a = 0; a < i.length; a += 1) i[a] !== t && i[a] instanceof C && n(i[a]);
                else i instanceof C && t !== i && n(i);
            },
        };
        const X = {
            makeElFocusable: (e) => (e.attr("tabIndex", "0"), e),
            addElRole: (e, t) => (e.attr("role", t), e),
            addElLabel: (e, t) => (e.attr("aria-label", t), e),
            disableEl: (e) => (e.attr("aria-disabled", !0), e),
            enableEl: (e) => (e.attr("aria-disabled", !1), e),
            onEnterKey(e) {
                const t = this,
                    s = t.params.a11y;
                if (13 !== e.keyCode) return;
                const i = r(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? t.a11y.notify(s.lastSlideMessage) : t.a11y.notify(s.nextSlideMessage)),
                    t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? t.a11y.notify(s.firstSlideMessage) : t.a11y.notify(s.prevSlideMessage)),
                    t.pagination && i.is(`.${t.params.pagination.bulletClass}`) && i[0].click();
            },
            notify(e) {
                const t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation() {
                const e = this;
                if (e.params.loop) return;
                const { $nextEl: t, $prevEl: s } = e.navigation;
                s && s.length > 0 && (e.isBeginning ? e.a11y.disableEl(s) : e.a11y.enableEl(s)), t && t.length > 0 && (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t));
            },
            updatePagination() {
                const e = this,
                    t = e.params.a11y;
                e.pagination &&
                    e.params.pagination.clickable &&
                    e.pagination.bullets &&
                    e.pagination.bullets.length &&
                    e.pagination.bullets.each((s, i) => {
                        const a = r(i);
                        e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
                    });
            },
            init() {
                const e = this;
                e.$el.append(e.a11y.liveRegion);
                const t = e.params.a11y;
                let s, i;
                e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
                    s && (e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.nextSlideMessage), s.on("keydown", e.a11y.onEnterKey)),
                    i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey);
            },
            destroy() {
                const e = this;
                let t, s;
                e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(),
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
                    t && t.off("keydown", e.a11y.onEnterKey),
                    s && s.off("keydown", e.a11y.onEnterKey),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey);
            },
        };
        const R = {
            init() {
                const e = this;
                if (!e.params.history) return;
                if (!a.history || !a.history.pushState) return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
                const t = e.history;
                (t.initialized = !0),
                    (t.paths = R.getPathValues()),
                    (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || a.addEventListener("popstate", e.history.setHistoryPopState));
            },
            destroy() {
                const e = this;
                e.params.history.replaceState || a.removeEventListener("popstate", e.history.setHistoryPopState);
            },
            setHistoryPopState() {
                (this.history.paths = R.getPathValues()), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
            },
            getPathValues() {
                const e = a.location.pathname
                        .slice(1)
                        .split("/")
                        .filter((e) => "" !== e),
                    t = e.length;
                return { key: e[t - 2], value: e[t - 1] };
            },
            setHistory(e, t) {
                if (!this.history.initialized || !this.params.history.enabled) return;
                const s = this.slides.eq(t);
                let i = R.slugify(s.attr("data-history"));
                a.location.pathname.includes(e) || (i = `${e}/${i}`);
                const n = a.history.state;
                (n && n.value === i) || (this.params.history.replaceState ? a.history.replaceState({ value: i }, null, i) : a.history.pushState({ value: i }, null, i));
            },
            slugify: (e) =>
                e
                    .toString()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, ""),
            scrollToSlide(e, t, s) {
                const i = this;
                if (t)
                    for (let a = 0, n = i.slides.length; a < n; a += 1) {
                        const n = i.slides.eq(a);
                        if (R.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            const t = n.index();
                            i.slideTo(t, e, s);
                        }
                    }
                else i.slideTo(0, e, s);
            },
        };
        const j = {
            onHashCange() {
                const e = this,
                    t = i.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    const s = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if (void 0 === s) return;
                    e.slideTo(s);
                }
            },
            setHash() {
                const e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && a.history && a.history.replaceState) a.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || "");
                    else {
                        const t = e.slides.eq(e.activeIndex),
                            s = t.attr("data-hash") || t.attr("data-history");
                        i.location.hash = s || "";
                    }
            },
            init() {
                const e = this;
                if (!e.params.hashNavigation.enabled || (e.params.history && e.params.history.enabled)) return;
                e.hashNavigation.initialized = !0;
                const t = i.location.hash.replace("#", "");
                if (t) {
                    const s = 0;
                    for (let i = 0, a = e.slides.length; i < a; i += 1) {
                        const a = e.slides.eq(i);
                        if ((a.attr("data-hash") || a.attr("data-history")) === t && !a.hasClass(e.params.slideDuplicateClass)) {
                            const t = a.index();
                            e.slideTo(t, s, e.params.runCallbacksOnInit, !0);
                        }
                    }
                }
                e.params.hashNavigation.watchState && r(a).on("hashchange", e.hashNavigation.onHashCange);
            },
            destroy() {
                const e = this;
                e.params.hashNavigation.watchState && r(a).off("hashchange", e.hashNavigation.onHashCange);
            },
        };
        const _ = {
            run() {
                const e = this,
                    t = e.slides.eq(e.activeIndex);
                let s = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    (e.autoplay.timeout = d.nextTick(() => {
                        e.params.autoplay.reverseDirection
                            ? e.params.loop
                                ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.isBeginning
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay"))
                                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                            : e.params.loop
                            ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                            : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                            : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
                    }, s));
            },
            start() {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && ((this.autoplay.running = !0), this.emit("autoplayStart"), this.autoplay.run(), !0);
            },
            stop() {
                const e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)), (e.autoplay.running = !1), e.emit("autoplayStop"), !0);
            },
            pause(e) {
                const t = this;
                t.autoplay.running &&
                    (t.autoplay.paused ||
                        (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                        (t.autoplay.paused = !0),
                        0 !== e && t.params.autoplay.waitForTransition
                            ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd))
                            : ((t.autoplay.paused = !1), t.autoplay.run())));
            },
        };
        const W = {
            setTranslate() {
                const e = this,
                    { slides: t } = e;
                for (let s = 0; s < t.length; s += 1) {
                    const t = e.slides.eq(s);
                    let i = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (i -= e.translate);
                    let a = 0;
                    e.isHorizontal() || ((a = i), (i = 0));
                    const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    t.css({ opacity: n }).transform(`translate3d(${i}px, ${a}px, 0px)`);
                }
            },
            setTransition(e) {
                const t = this,
                    { slides: s, $wrapperEl: i } = t;
                if ((s.transition(e), t.params.virtualTranslate && 0 !== e)) {
                    let e = !1;
                    s.transitionEnd(() => {
                        if (e) return;
                        if (!t || t.destroyed) return;
                        (e = !0), (t.animating = !1);
                        const s = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < s.length; e += 1) i.trigger(s[e]);
                    });
                }
            },
        };
        const U = {
            setTranslate() {
                const { $el: e, $wrapperEl: t, slides: s, width: i, height: a, rtlTranslate: n, size: o } = this,
                    l = this.params.cubeEffect,
                    d = this.isHorizontal(),
                    c = this.virtual && this.params.virtual.enabled;
                let u,
                    h = 0;
                l.shadow &&
                    (d
                        ? (0 === (u = t.find(".swiper-cube-shadow")).length && ((u = r('<div class="swiper-cube-shadow"></div>')), t.append(u)), u.css({ height: `${i}px` }))
                        : 0 === (u = e.find(".swiper-cube-shadow")).length && ((u = r('<div class="swiper-cube-shadow"></div>')), e.append(u)));
                for (let e = 0; e < s.length; e += 1) {
                    const t = s.eq(e);
                    let i = e;
                    c && (i = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let a = 90 * i,
                        p = Math.floor(a / 360);
                    n && ((a = -a), (p = Math.floor(-a / 360)));
                    const u = Math.max(Math.min(t[0].progress, 1), -1);
                    let m = 0,
                        f = 0,
                        v = 0;
                    i % 4 == 0 ? ((m = 4 * -p * o), (v = 0)) : (i - 1) % 4 == 0 ? ((m = 0), (v = 4 * -p * o)) : (i - 2) % 4 == 0 ? ((m = o + 4 * p * o), (v = o)) : (i - 3) % 4 == 0 && ((m = -o), (v = 3 * o + 4 * o * p)),
                        n && (m = -m),
                        d || ((f = m), (m = 0));
                    const g = `rotateX(${d ? 0 : -a}deg) rotateY(${d ? a : 0}deg) translate3d(${m}px, ${f}px, ${v}px)`;
                    if ((u <= 1 && u > -1 && ((h = 90 * i + 90 * u), n && (h = 90 * -i - 90 * u)), t.transform(g), l.slideShadows)) {
                        let e = d ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = d ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && ((e = r(`<div class="swiper-slide-shadow-${d ? "left" : "top"}"></div>`)), t.append(e)),
                            0 === s.length && ((s = r(`<div class="swiper-slide-shadow-${d ? "right" : "bottom"}"></div>`)), t.append(s)),
                            e.length && (e[0].style.opacity = Math.max(-u, 0)),
                            s.length && (s[0].style.opacity = Math.max(u, 0));
                    }
                }
                if ((t.css({ "-webkit-transform-origin": `50% 50% -${o / 2}px`, "-moz-transform-origin": `50% 50% -${o / 2}px`, "-ms-transform-origin": `50% 50% -${o / 2}px`, "transform-origin": `50% 50% -${o / 2}px` }), l.shadow))
                    if (d) u.transform(`translate3d(0px, ${i / 2 + l.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${l.shadowScale})`);
                    else {
                        const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            t = 1.5 - (Math.sin((2 * e * Math.PI) / 360) / 2 + Math.cos((2 * e * Math.PI) / 360) / 2),
                            s = l.shadowScale,
                            i = l.shadowScale / t,
                            n = l.shadowOffset;
                        u.transform(`scale3d(${s}, 1, ${i}) translate3d(0px, ${a / 2 + n}px, ${-a / 2 / i}px) rotateX(-90deg)`);
                    }
                const m = p.isSafari || p.isUiWebView ? -o / 2 : 0;
                t.transform(`translate3d(0px,0,${m}px) rotateX(${this.isHorizontal() ? 0 : h}deg) rotateY(${this.isHorizontal() ? -h : 0}deg)`);
            },
            setTransition(e) {
                const { $el: t, slides: s } = this;
                s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
            },
        };
        const K = {
            setTranslate() {
                const e = this,
                    { slides: t, rtlTranslate: s } = e;
                for (let i = 0; i < t.length; i += 1) {
                    const a = t.eq(i);
                    let n = a[0].progress;
                    e.params.flipEffect.limitRotation && (n = Math.max(Math.min(a[0].progress, 1), -1));
                    let o = -180 * n,
                        l = 0,
                        d = -a[0].swiperSlideOffset,
                        c = 0;
                    if ((e.isHorizontal() ? s && (o = -o) : ((c = d), (d = 0), (l = -o), (o = 0)), (a[0].style.zIndex = -Math.abs(Math.round(n)) + t.length), e.params.flipEffect.slideShadows)) {
                        let t = e.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                            s = e.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                        0 === t.length && ((t = r(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "left" : "top"}"></div>`)), a.append(t)),
                            0 === s.length && ((s = r(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "right" : "bottom"}"></div>`)), a.append(s)),
                            t.length && (t[0].style.opacity = Math.max(-n, 0)),
                            s.length && (s[0].style.opacity = Math.max(n, 0));
                    }
                    a.transform(`translate3d(${d}px, ${c}px, 0px) rotateX(${l}deg) rotateY(${o}deg)`);
                }
            },
            setTransition(e) {
                const t = this,
                    { slides: s, activeIndex: i, $wrapperEl: a } = t;
                if ((s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e)) {
                    let e = !1;
                    s.eq(i).transitionEnd(function () {
                        if (e) return;
                        if (!t || t.destroyed) return;
                        (e = !0), (t.animating = !1);
                        const s = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < s.length; e += 1) a.trigger(s[e]);
                    });
                }
            },
        };
        const Z = {
            setTranslate() {
                const { width: e, height: t, slides: s, $wrapperEl: i, slidesSizesGrid: a } = this,
                    n = this.params.coverflowEffect,
                    o = this.isHorizontal(),
                    l = this.translate,
                    d = o ? e / 2 - l : t / 2 - l,
                    p = o ? n.rotate : -n.rotate,
                    u = n.depth;
                for (let e = 0, t = s.length; e < t; e += 1) {
                    const t = s.eq(e),
                        i = a[e],
                        l = ((d - t[0].swiperSlideOffset - i / 2) / i) * n.modifier;
                    let c = o ? p * l : 0,
                        h = o ? 0 : p * l,
                        m = -u * Math.abs(l),
                        f = o ? 0 : n.stretch * l,
                        v = o ? n.stretch * l : 0;
                    Math.abs(v) < 0.001 && (v = 0), Math.abs(f) < 0.001 && (f = 0), Math.abs(m) < 0.001 && (m = 0), Math.abs(c) < 0.001 && (c = 0), Math.abs(h) < 0.001 && (h = 0);
                    const g = `translate3d(${v}px,${f}px,${m}px)  rotateX(${h}deg) rotateY(${c}deg)`;
                    if ((t.transform(g), (t[0].style.zIndex = 1 - Math.abs(Math.round(l))), n.slideShadows)) {
                        let e = o ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = o ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && ((e = r(`<div class="swiper-slide-shadow-${o ? "left" : "top"}"></div>`)), t.append(e)),
                            0 === s.length && ((s = r(`<div class="swiper-slide-shadow-${o ? "right" : "bottom"}"></div>`)), t.append(s)),
                            e.length && (e[0].style.opacity = l > 0 ? l : 0),
                            s.length && (s[0].style.opacity = -l > 0 ? -l : 0);
                    }
                }
                if (c.pointerEvents || c.prefixedPointerEvents) {
                    i[0].style.perspectiveOrigin = `${d}px 50%`;
                }
            },
            setTransition(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
            },
        };
        const Q = {
            init() {
                const e = this,
                    { thumbs: t } = e.params,
                    s = e.constructor;
                t.swiper instanceof s
                    ? ((e.thumbs.swiper = t.swiper), d.extend(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), d.extend(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                    : d.isObject(t.swiper) && ((e.thumbs.swiper = new s(d.extend({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (e.thumbs.swiperCreated = !0)),
                    e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                    e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
            },
            onThumbClick() {
                const e = this,
                    t = e.thumbs.swiper;
                if (!t) return;
                const s = t.clickedIndex,
                    i = t.clickedSlide;
                if (i && r(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
                if (null == s) return;
                let a;
                if (((a = t.params.loop ? parseInt(r(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s), e.params.loop)) {
                    let t = e.activeIndex;
                    e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), (e._clientLeft = e.$wrapperEl[0].clientLeft), (t = e.activeIndex));
                    const s = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${a}"]`).eq(0).index(),
                        i = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${a}"]`).eq(0).index();
                    a = void 0 === s ? i : void 0 === i ? s : i - t < t - s ? i : s;
                }
                e.slideTo(a);
            },
            update(e) {
                const t = this,
                    s = t.thumbs.swiper;
                if (!s) return;
                const i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
                if (t.realIndex !== s.realIndex) {
                    let a,
                        n = s.activeIndex;
                    if (s.params.loop) {
                        s.slides.eq(n).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft), (n = s.activeIndex));
                        const e = s.slides.eq(n).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                            i = s.slides.eq(n).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        a = void 0 === e ? i : void 0 === i ? e : i - n == n - e ? n : i - n < n - e ? i : e;
                    } else a = t.realIndex;
                    s.visibleSlidesIndexes.indexOf(a) < 0 && (s.params.centeredSlides ? (a = a > n ? a - Math.floor(i / 2) + 1 : a + Math.floor(i / 2) - 1) : a > n && (a = a - i + 1), s.slideTo(a, e ? 0 : void 0));
                }
                let a = 1;
                const n = t.params.thumbs.slideThumbActiveClass;
                if ((t.params.slidesPerView > 1 && !t.params.centeredSlides && (a = t.params.slidesPerView), s.slides.removeClass(n), s.params.loop))
                    for (let e = 0; e < a; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(n);
                else for (let e = 0; e < a; e += 1) s.slides.eq(t.realIndex + e).addClass(n);
            },
        };
        const J = [
            k,
            $,
            M,
            P,
            z,
            A,
            O,
            {
                name: "mousewheel",
                params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
                create() {
                    d.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: N.enable.bind(this),
                            disable: N.disable.bind(this),
                            handle: N.handle.bind(this),
                            handleMouseEnter: N.handleMouseEnter.bind(this),
                            handleMouseLeave: N.handleMouseLeave.bind(this),
                            lastScrollTime: d.now(),
                        },
                    });
                },
                on: {
                    init() {
                        this.params.mousewheel.enabled && this.mousewheel.enable();
                    },
                    destroy() {
                        this.mousewheel.enabled && this.mousewheel.disable();
                    },
                },
            },
            {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create() {
                    d.extend(this, { navigation: { init: B.init.bind(this), update: B.update.bind(this), destroy: B.destroy.bind(this), onNextClick: B.onNextClick.bind(this), onPrevClick: B.onPrevClick.bind(this) } });
                },
                on: {
                    init() {
                        this.navigation.init(), this.navigation.update();
                    },
                    toEdge() {
                        this.navigation.update();
                    },
                    fromEdge() {
                        this.navigation.update();
                    },
                    destroy() {
                        this.navigation.destroy();
                    },
                    click(e) {
                        const t = this,
                            { $nextEl: s, $prevEl: i } = t.navigation;
                        if (t.params.navigation.hideOnClick && !r(e.target).is(i) && !r(e.target).is(s)) {
                            let e;
                            s ? (e = s.hasClass(t.params.navigation.hiddenClass)) : i && (e = i.hasClass(t.params.navigation.hiddenClass)),
                                !0 === e ? t.emit("navigationShow", t) : t.emit("navigationHide", t),
                                s && s.toggleClass(t.params.navigation.hiddenClass),
                                i && i.toggleClass(t.params.navigation.hiddenClass);
                        }
                    },
                },
            },
            {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: (e) => e,
                        formatFractionTotal: (e) => e,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock",
                    },
                },
                create() {
                    d.extend(this, { pagination: { init: H.init.bind(this), render: H.render.bind(this), update: H.update.bind(this), destroy: H.destroy.bind(this), dynamicBulletIndex: 0 } });
                },
                on: {
                    init() {
                        this.pagination.init(), this.pagination.render(), this.pagination.update();
                    },
                    activeIndexChange() {
                        const e = this;
                        e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update();
                    },
                    snapIndexChange() {
                        const e = this;
                        e.params.loop || e.pagination.update();
                    },
                    slidesLengthChange() {
                        const e = this;
                        e.params.loop && (e.pagination.render(), e.pagination.update());
                    },
                    snapGridLengthChange() {
                        const e = this;
                        e.params.loop || (e.pagination.render(), e.pagination.update());
                    },
                    destroy() {
                        this.pagination.destroy();
                    },
                    click(e) {
                        const t = this;
                        if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !r(e.target).hasClass(t.params.pagination.bulletClass)) {
                            !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
                        }
                    },
                },
            },
            {
                name: "scrollbar",
                params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                create() {
                    d.extend(this, {
                        scrollbar: {
                            init: V.init.bind(this),
                            destroy: V.destroy.bind(this),
                            updateSize: V.updateSize.bind(this),
                            setTranslate: V.setTranslate.bind(this),
                            setTransition: V.setTransition.bind(this),
                            enableDraggable: V.enableDraggable.bind(this),
                            disableDraggable: V.disableDraggable.bind(this),
                            setDragPosition: V.setDragPosition.bind(this),
                            onDragStart: V.onDragStart.bind(this),
                            onDragMove: V.onDragMove.bind(this),
                            onDragEnd: V.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null,
                        },
                    });
                },
                on: {
                    init() {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
                    },
                    update() {
                        this.scrollbar.updateSize();
                    },
                    resize() {
                        this.scrollbar.updateSize();
                    },
                    observerUpdate() {
                        this.scrollbar.updateSize();
                    },
                    setTranslate() {
                        this.scrollbar.setTranslate();
                    },
                    setTransition(e) {
                        this.scrollbar.setTransition(e);
                    },
                    destroy() {
                        this.scrollbar.destroy();
                    },
                },
            },
            {
                name: "parallax",
                params: { parallax: { enabled: !1 } },
                create() {
                    d.extend(this, { parallax: { setTransform: G.setTransform.bind(this), setTranslate: G.setTranslate.bind(this), setTransition: G.setTransition.bind(this) } });
                },
                on: {
                    beforeInit() {
                        this.params.parallax.enabled && ((this.params.watchSlidesProgress = !0), (this.originalParams.watchSlidesProgress = !0));
                    },
                    init() {
                        this.params.parallax.enabled && this.parallax.setTranslate();
                    },
                    setTranslate() {
                        this.params.parallax.enabled && this.parallax.setTranslate();
                    },
                    setTransition(e) {
                        this.params.parallax.enabled && this.parallax.setTransition(e);
                    },
                },
            },
            {
                name: "zoom",
                params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                create() {
                    const e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {},
                            },
                            velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((s) => {
                        t[s] = q[s].bind(e);
                    }),
                        d.extend(e, { zoom: t });
                    let s = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: () => s,
                        set(t) {
                            if (s !== t) {
                                const s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                    i = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                e.emit("zoomChange", t, s, i);
                            }
                            s = t;
                        },
                    });
                },
                on: {
                    init() {
                        const e = this;
                        e.params.zoom.enabled && e.zoom.enable();
                    },
                    destroy() {
                        this.zoom.disable();
                    },
                    touchStart(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e);
                    },
                    touchEnd(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e);
                    },
                    doubleTap(e) {
                        const t = this;
                        t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
                    },
                    transitionEnd() {
                        const e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
                    },
                },
            },
            {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                },
                create() {
                    d.extend(this, { lazy: { initialImageLoaded: !1, load: Y.load.bind(this), loadInSlide: Y.loadInSlide.bind(this) } });
                },
                on: {
                    beforeInit() {
                        const e = this;
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
                    },
                    init() {
                        const e = this;
                        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
                    },
                    scroll() {
                        const e = this;
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
                    },
                    resize() {
                        const e = this;
                        e.params.lazy.enabled && e.lazy.load();
                    },
                    scrollbarDragMove() {
                        const e = this;
                        e.params.lazy.enabled && e.lazy.load();
                    },
                    transitionStart() {
                        const e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
                    },
                    transitionEnd() {
                        const e = this;
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
                    },
                },
            },
            {
                name: "controller",
                params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                create() {
                    d.extend(this, {
                        controller: { control: this.params.controller.control, getInterpolateFunction: F.getInterpolateFunction.bind(this), setTranslate: F.setTranslate.bind(this), setTransition: F.setTransition.bind(this) },
                    });
                },
                on: {
                    update() {
                        const e = this;
                        e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                    },
                    resize() {
                        const e = this;
                        e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                    },
                    observerUpdate() {
                        const e = this;
                        e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                    },
                    setTranslate(e, t) {
                        this.controller.control && this.controller.setTranslate(e, t);
                    },
                    setTransition(e, t) {
                        this.controller.control && this.controller.setTransition(e, t);
                    },
                },
            },
            {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                    },
                },
                create() {
                    const e = this;
                    d.extend(e, { a11y: { liveRegion: r(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`) } }),
                        Object.keys(X).forEach((t) => {
                            e.a11y[t] = X[t].bind(e);
                        });
                },
                on: {
                    init() {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
                    },
                    toEdge() {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    fromEdge() {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    paginationUpdate() {
                        this.params.a11y.enabled && this.a11y.updatePagination();
                    },
                    destroy() {
                        this.params.a11y.enabled && this.a11y.destroy();
                    },
                },
            },
            {
                name: "history",
                params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                create() {
                    d.extend(this, {
                        history: { init: R.init.bind(this), setHistory: R.setHistory.bind(this), setHistoryPopState: R.setHistoryPopState.bind(this), scrollToSlide: R.scrollToSlide.bind(this), destroy: R.destroy.bind(this) },
                    });
                },
                on: {
                    init() {
                        const e = this;
                        e.params.history.enabled && e.history.init();
                    },
                    destroy() {
                        const e = this;
                        e.params.history.enabled && e.history.destroy();
                    },
                    transitionEnd() {
                        const e = this;
                        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
                    },
                },
            },
            {
                name: "hash-navigation",
                params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                create() {
                    d.extend(this, { hashNavigation: { initialized: !1, init: j.init.bind(this), destroy: j.destroy.bind(this), setHash: j.setHash.bind(this), onHashCange: j.onHashCange.bind(this) } });
                },
                on: {
                    init() {
                        const e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.init();
                    },
                    destroy() {
                        const e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.destroy();
                    },
                    transitionEnd() {
                        const e = this;
                        e.hashNavigation.initialized && e.hashNavigation.setHash();
                    },
                },
            },
            {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                create() {
                    const e = this;
                    d.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: _.run.bind(e),
                            start: _.start.bind(e),
                            stop: _.stop.bind(e),
                            pause: _.pause.bind(e),
                            onTransitionEnd(t) {
                                e &&
                                    !e.destroyed &&
                                    e.$wrapperEl &&
                                    t.target === this &&
                                    (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                                    e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                                    (e.autoplay.paused = !1),
                                    e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                            },
                        },
                    });
                },
                on: {
                    init() {
                        const e = this;
                        e.params.autoplay.enabled && e.autoplay.start();
                    },
                    beforeTransitionStart(e, t) {
                        const s = this;
                        s.autoplay.running && (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop());
                    },
                    sliderFirstMove() {
                        const e = this;
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
                    },
                    destroy() {
                        const e = this;
                        e.autoplay.running && e.autoplay.stop();
                    },
                },
            },
            {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create() {
                    d.extend(this, { fadeEffect: { setTranslate: W.setTranslate.bind(this), setTransition: W.setTransition.bind(this) } });
                },
                on: {
                    beforeInit() {
                        if ("fade" !== this.params.effect) return;
                        this.classNames.push(`${this.params.containerModifierClass}fade`);
                        const e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        d.extend(this.params, e), d.extend(this.originalParams, e);
                    },
                    setTranslate() {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate();
                    },
                    setTransition(e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-cube",
                params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                create() {
                    d.extend(this, { cubeEffect: { setTranslate: U.setTranslate.bind(this), setTransition: U.setTransition.bind(this) } });
                },
                on: {
                    beforeInit() {
                        if ("cube" !== this.params.effect) return;
                        this.classNames.push(`${this.params.containerModifierClass}cube`), this.classNames.push(`${this.params.containerModifierClass}3d`);
                        const e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                        d.extend(this.params, e), d.extend(this.originalParams, e);
                    },
                    setTranslate() {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate();
                    },
                    setTransition(e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create() {
                    d.extend(this, { flipEffect: { setTranslate: K.setTranslate.bind(this), setTransition: K.setTransition.bind(this) } });
                },
                on: {
                    beforeInit() {
                        if ("flip" !== this.params.effect) return;
                        this.classNames.push(`${this.params.containerModifierClass}flip`), this.classNames.push(`${this.params.containerModifierClass}3d`);
                        const e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        d.extend(this.params, e), d.extend(this.originalParams, e);
                    },
                    setTranslate() {
                        "flip" === this.params.effect && this.flipEffect.setTranslate();
                    },
                    setTransition(e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-coverflow",
                params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
                create() {
                    d.extend(this, { coverflowEffect: { setTranslate: Z.setTranslate.bind(this), setTransition: Z.setTransition.bind(this) } });
                },
                on: {
                    beforeInit() {
                        "coverflow" === this.params.effect &&
                            (this.classNames.push(`${this.params.containerModifierClass}coverflow`),
                            this.classNames.push(`${this.params.containerModifierClass}3d`),
                            (this.params.watchSlidesProgress = !0),
                            (this.originalParams.watchSlidesProgress = !0));
                    },
                    setTranslate() {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
                    },
                    setTransition(e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
                    },
                },
            },
            {
                name: "thumbs",
                params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                create() {
                    d.extend(this, { thumbs: { swiper: null, init: Q.init.bind(this), update: Q.update.bind(this), onThumbClick: Q.onThumbClick.bind(this) } });
                },
                on: {
                    beforeInit() {
                        const { thumbs: e } = this.params;
                        e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
                    },
                    slideChange() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    update() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    resize() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    observerUpdate() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    setTransition(e) {
                        const t = this.thumbs.swiper;
                        t && t.setTransition(e);
                    },
                    beforeDestroy() {
                        const e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy();
                    },
                },
            },
        ];
        void 0 === C.use && ((C.use = C.Class.use), (C.installModule = C.Class.installModule)), C.use(J);
        var ee = C;
        function te(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        var se = (function () {
            function e(t) {
                var s = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (
                    ((function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    t)
                ) {
                    var a = this;
                    (this.symbol = i.symbol || "_"),
                        (this.mask = i.mask || "+7 (___) ___-__-__"),
                        (this.allowedChars = i.allowedChars || "[0-9]"),
                        (this.empty = i.empty || "false"),
                        (this.legalLength = i.legalLength),
                        (this.element = t),
                        (t.value = this.value = this.mask),
                        (this.regex = "".concat(this.allowedChars, "|").concat(this.symbol)),
                        (this.maskSymbols = this.mask.match(new RegExp(this.regex, "gi"))),
                        (this.allowedCharsLength = 0),
                        this.maskSymbols.forEach(function (e) {
                            e == s.symbol && s.allowedCharsLength++;
                        }),
                        (this.phonePrefix = !1),
                        this.checkKeyCodeSupport(),
                        t.addEventListener("focus", function () {
                            requestAnimationFrame(function () {
                                requestAnimationFrame(function () {
                                    var e = a.element.value.indexOf(a.symbol);
                                    (a.caretPosition = -1 != e ? e : a.element.value.length), a.setCaretPosition(a.element, a.caretPosition, a.caretPosition);
                                });
                            });
                        }),
                        t.addEventListener("blur", function () {
                            a.element.value || (a.element.value = a.mask);
                        }),
                        t.addEventListener("paste", function (e) {
                            "mask" == s.method && s.pasteWithMask(e), "simpleMask" == s.method && s.pasteWithSimpleMask(e);
                        }),
                        (this.__bindedRoute = this.route.bind(this)),
                        t.addEventListener("load", this.__bindedRoute),
                        t.addEventListener("keydown", this.__bindedRoute);
                }
            }
            var t, s, i;
            return (
                (t = e),
                (s = [
                    {
                        key: "route",
                        value: function (e) {
                            0 === e.keyCode || 229 === e.keyCode ? this.__simpleMask(e) : this.__mask(e);
                        },
                    },
                    {
                        key: "__simpleMask",
                        value: function (e) {
                            var t = this;
                            new Promise(function (e, s) {
                                requestAnimationFrame(function () {
                                    requestAnimationFrame(function () {
                                        t.value && t.value.length >= t.element.value.length && (s(), (t.value = t.element.value)), e(t.element.value);
                                    });
                                });
                            })
                                .then(function (e) {
                                    return e.match(new RegExp(t.allowedChars, "ig"));
                                })
                                .then(function (e) {
                                    var s = t.mask.split(""),
                                        i = t.mask.match(new RegExp(t.allowedChars, "ig")),
                                        a = 0;
                                    8 == e[1] && e.length < 3 && !t.phonePrefix ? (e.pop(), (t.phonePrefix = !0)) : (t.phonePrefix = !1);
                                    for (var n = 0; n < s.length; n++)
                                        i && i[a] && e && i[a] == e[a]
                                            ? a++
                                            : s[n] == t.symbol && e && e[a]
                                            ? ((s[n] = e[a]), (t.carerPosition = n + 1), a++)
                                            : s[n] == t.symbol && e && !e[a] && ((s = s.slice(0, n)), (t.carerPosition = n + 1));
                                    return s;
                                })
                                .then(function (e) {
                                    t.value = e.join("");
                                })
                                .then(function () {
                                    t.displayResult();
                                })
                                .catch(function (e) {});
                        },
                    },
                    {
                        key: "__mask",
                        value: function (e) {
                            "Meta" == e.key || "Meta" == e.keyIdentifier || 91 == e.keyCode || 1 == e.metaKey || 1 == e.ctrlKey || e.preventDefault();
                            var t = this.whatIsKey(e);
                            if ((!this.keysArray && (this.keysArray = []), -1 !== ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "Delete"].indexOf(t))) {
                                if ("Backspace" == t || "Delete" == t) {
                                    if (!this.keysArray.length) return;
                                    this.keysArray.pop();
                                } else {
                                    var s = this.mask.match(new RegExp(this.symbol, "ig"));
                                    if (s.length > this.keysArray.length) this.keysArray.push(t);
                                    else {
                                        if (8 != this.keysArray[0] || s.length != this.keysArray.length) return;
                                        this.keysArray.push(t);
                                    }
                                }
                                if (0 == this.keysArray.length) (this.value = this.mask), (this.carerPosition = this.mask.indexOf(this.symbol));
                                else {
                                    var i = this.mask.split(""),
                                        a = 0;
                                    8 == this.keysArray[0] && (a++, (this.carerPosition = 4));
                                    for (var n = 0; n < i.length; n++) i[n] == this.symbol && this.keysArray[a] && ((i[n] = this.keysArray[a]), (this.carerPosition = n + 1), a++);
                                    this.value = i.join("");
                                }
                                this.displayResult();
                            }
                        },
                    },
                    {
                        key: "setCaretPosition",
                        value: function (e, t, s) {
                            if (e.setSelectionRange) e.focus(), e.setSelectionRange(t, s);
                            else if (e.createTextRange) {
                                var i = e.createTextRange();
                                i.collapse(!0), i.moveEnd("character", s), i.moveStart("character", t), i.select();
                            }
                        },
                    },
                    {
                        key: "whatIsKey",
                        value: function (e) {
                            var t = null;
                            if (e.key) t = e.key;
                            else if (event.keyCode)
                                switch ("" + event.keyCode) {
                                    case "48":
                                        t = "0";
                                        break;
                                    case "49":
                                        t = "1";
                                        break;
                                    case "50":
                                        t = "2";
                                        break;
                                    case "51":
                                        t = "3";
                                        break;
                                    case "52":
                                        t = "4";
                                        break;
                                    case "53":
                                        t = "5";
                                        break;
                                    case "54":
                                        t = "6";
                                        break;
                                    case "55":
                                        t = "7";
                                        break;
                                    case "56":
                                        t = "8";
                                        break;
                                    case "57":
                                        t = "9";
                                        break;
                                    case "8":
                                        t = "Backspace";
                                        break;
                                    case "46":
                                        t = "Delete";
                                }
                            else if (event.keyIdentifier)
                                switch ("" + event.keyIdentifier) {
                                    case "U+0030":
                                        t = "0";
                                        break;
                                    case "U+0031":
                                        t = "1";
                                        break;
                                    case "U+0032":
                                        t = "2";
                                        break;
                                    case "U+0033":
                                        t = "3";
                                        break;
                                    case "U+0034":
                                        t = "4";
                                        break;
                                    case "U+0035":
                                        t = "5";
                                        break;
                                    case "U+0036":
                                        t = "6";
                                        break;
                                    case "U+0037":
                                        t = "7";
                                        break;
                                    case "U+0038":
                                        t = "8";
                                        break;
                                    case "U+0039":
                                        t = "9";
                                        break;
                                    case "U+0008":
                                        t = "Backspace";
                                }
                            return t;
                        },
                    },
                    {
                        key: "pasteWithMask",
                        value: function (e) {
                            var t = this,
                                s = e.clipboardData && e.clipboardData.getData("Text");
                            Promise.resolve()
                                .then(function () {
                                    return s
                                        ? (e.preventDefault(), s.match(new RegExp(t.allowedChars, "gi")))
                                        : new Promise(function (e) {
                                              requestAnimationFrame(function () {
                                                  requestAnimationFrame(function () {
                                                      e(t.element.value.match(new RegExp(t.allowedChars, "gi")));
                                                  });
                                              });
                                          });
                                })
                                .then(function (e) {
                                    if (!e) throw new Error("Пусто во вставке");
                                    if (e.length >= t.maskSymbols.length) t.checkDoubleMaskSymbols(e);
                                    else for (var s = 0; s < e.length; s++) t.keysArray.length < t.allowedCharsLength && t.keysArray.push(e[s]);
                                })
                                .then(function () {
                                    for (var e = t.mask.split(""), s = 0, i = 0; i < e.length; i++) e[i] == t.symbol && t.keysArray[s] && ((e[i] = t.keysArray[s]), (t.carerPosition = i + 1), s++);
                                    (t.value = e.join("")), t.displayResult();
                                })
                                .catch(function (e) {
                                    console.log("Пустота", e);
                                });
                        },
                    },
                    {
                        key: "pasteWithSimpleMask",
                        value: function () {
                            this.__simpleMask();
                        },
                    },
                    {
                        key: "displayResult",
                        value: function () {
                            var e = this.value && this.value.match(new RegExp(this.allowedChars, "gi"));
                            this.maskSymbols.length === e && this.value != this.lastValue && (this.lastValue = this.value),
                                (this.element.value = this.value),
                                this.setCaretPosition(this.element, this.carerPosition, this.carerPosition),
                                this.element.dispatchEvent(new Event("input"));
                        },
                    },
                    {
                        key: "checkKeyCodeSupport",
                        value: function () {
                            var e = this;
                            this.method = "mask";
                            addEventListener("keydown", function t(s) {
                                ("[0-9]" == e.allowedChars && 0 !== s.keyCode) || 229 !== s.keyCode ? (e.method = "mask") : (e.method = "simpleMask"), removeEventListener("keydown", t);
                            });
                        },
                    },
                    {
                        key: "checkDoubleMaskSymbols",
                        value: function (e) {
                            this.keysArray = [];
                            for (var t = 0; t < this.maskSymbols.length; t++) e[t] != this.maskSymbols[t] && this.keysArray.length < this.allowedCharsLength && this.keysArray.push(e[t]);
                            for (; t < e.length && this.keysArray.length < this.allowedCharsLength; t++) this.keysArray.push(e[t]);
                        },
                    },
                    {
                        key: "test",
                        value: function () {
                            return !new RegExp(this.symbol).test(this.value);
                        },
                    },
                    {
                        key: "clear",
                        value: function () {
                            (this.keysArray = []), (this.element.value = "");
                        },
                    },
                ]) && te(t.prototype, s),
                i && te(t, i),
                e
            );
        })();
        function ie(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        var ae = (function () {
            function e(t) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.form = t),
                    this.setMask(t),
                    this.formListeners(t);
            }
            var t, s, i;
            return (
                (t = e),
                (s = [
                    {
                        key: "formListeners",
                        value: function (e) {
                            var t = this,
                                s = this.setMask(e).name,
                                i = this.setMask(e).phone,
                                a = this.setMask(e).email;
                            e.addEventListener("change", function (s) {
                                t.checkAgree(e);
                            }),
                                e.addEventListener("submit", function (n) {
                                    n.preventDefault();
                                    try {
                                        t.checkFormInputs(e, s, i, a) && (t.submitForm(e), t.sendYandexMetricaReachGoal(e));
                                    } catch (e) {
                                        console.error("Ошибка при отправке формы");
                                    }
                                });
                        },
                    },
                    {
                        key: "sendYandexMetricaReachGoal",
                        value: function (e) {
                            if (e.querySelector('[name="ymName"]')) {
                                var t = String(e.querySelector('[name="ymName"]').value);
                                yaCounter54273208.reachGoal(t);
                            }
                        },
                    },
                    {
                        key: "submitForm",
                        value: function (e) {
                            var t = this,
                                s = e.querySelector("form"),
                                i = s.getAttribute("action");
                            if (e.querySelector('[name="location"]')) {
                                var a = e.querySelector('[name="location"]');
                                (a.value = window.location.href), a.setAttribute("value", window.location.href);
                            }
                            fetch(i, { method: "POST", body: new FormData(s) })
                                .then(function (s) {
                                    200 == s.status ? (console.log("Форма отправилась"), t.sayThanks(e)) : console.log("Форма не отправилась");
                                })
                                .catch(function (e) {
                                    console.error(e);
                                });
                        },
                    },
                    {
                        key: "sayThanks",
                        value: function (e) {
                            e.classList.add("--thanks");
                        },
                    },
                    {
                        key: "openCheckEl",
                        value: function (e, t) {
                            var s = e.querySelector(".checkNumber__number");
                            e.classList.add("--check"), (s.textContent = t);
                        },
                    },
                    {
                        key: "closeCheckEl",
                        value: function (e, t) {
                            e.classList.remove("--check"), t && t.focus();
                        },
                    },
                    {
                        key: "checkFormInputs",
                        value: function (e, t, s, i) {
                            var a, n, r, o;
                            return (
                                t.test() ? ((a = !0), t.label.classList.remove("--hasError")) : ((a = !1), event.preventDefault(), t.label.classList.add("--hasError")),
                                s.test() && this.checkPhoneNumbers(s.el) ? ((n = !0), s.label.classList.remove("--hasError")) : ((n = !1), event.preventDefault(), s.label.classList.add("--hasError")),
                                console.log(i.el),
                                null != i.el ? (i.test() ? ((r = !0), i.label.classList.remove("--hasError")) : ((r = !1), event.preventDefault(), i.label.classList.add("--hasError"))) : (r = !0),
                                this.checkAgree(e) ? (o = !0) : ((o = !1), event.preventDefault()),
                                !!(a && n && r && o)
                            );
                        },
                    },
                    {
                        key: "checkPhoneNumbers",
                        value: function (e) {
                            for (var t = !1, s = e.value.split(""), i = [], a = 0; a < s.length; a++) {
                                var n = +s[a];
                                switch (n) {
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                    case 7:
                                    case 8:
                                    case 9:
                                        i.push(n);
                                }
                            }
                            return i.length > 12 && (t = !0), t;
                        },
                    },
                    {
                        key: "checkAgree",
                        value: function (e) {
                            if (e) {
                                var t = e.querySelector('[type="checkbox"]'),
                                    s = e.querySelector('[type="submit"]');
                                return t.checked ? (s.removeAttribute("disabled"), !0) : (s.setAttribute("disabled", "disabled"), !1);
                            }
                        },
                    },
                    {
                        key: "setMask",
                        value: function (e) {
                            if (e) {
                                var t = e.querySelector(".input--phone"),
                                    s = e.querySelector("input.--phone"),
                                    i = new se(s),
                                    a = {
                                        el: s,
                                        label: t,
                                        test: function () {
                                            return i.test();
                                        },
                                        focus: function () {
                                            this.el.focus();
                                        },
                                        clear: function () {
                                            i.clear();
                                        },
                                    },
                                    n = e.querySelector(".input--name"),
                                    r = {
                                        el: e.querySelector("input.--name"),
                                        label: n,
                                        test: function () {
                                            return this.el.value.length > 1 ? 1 : 0;
                                        },
                                        focus: function () {
                                            this.el.focus();
                                        },
                                    },
                                    o = e.querySelector(".input--email");
                                return {
                                    phone: a,
                                    name: r,
                                    email: {
                                        el: e.querySelector("input.--email"),
                                        label: o,
                                        test: function () {
                                            return "" == this.el.value || new RegExp(".@.+?\\.\\D{2}", "gi").test(this.el.value);
                                        },
                                        focus: function () {
                                            this.el.focus();
                                        },
                                    },
                                };
                            }
                        },
                    },
                ]) && ie(t.prototype, s),
                i && ie(t, i),
                e
            );
        })();
        function ne(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, s = new Array(e.length); t < e.length; t++) s[t] = e[t];
                        return s;
                    }
                })(e) ||
                (function (e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                })()
            );
        }
        function re(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        var oe = (function () {
            function e() {
                var t = this;
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.forms = ne(document.querySelectorAll(".form"))),
                    (this.inputs = ne(document.querySelectorAll(".input"))),
                    (this.inputFile = ne(document.querySelectorAll(".js-inputFile"))),
                    this.forms.forEach(function (e) {
                        t.initValidation(e);
                    }),
                    this.listeners();
            }
            var t, s, i;
            return (
                (t = e),
                (s = [
                    {
                        key: "listeners",
                        value: function () {
                            var e = this;
                            this.inputFile.forEach(function (t) {
                                t.addEventListener("change", function (s) {
                                    e.showFilesCount(t);
                                });
                            }),
                                this.inputs.forEach(function (t) {
                                    ne(t.querySelectorAll(".input__element")).forEach(function (s) {
                                        s.addEventListener("change", function (s) {
                                            e.checkValue(t);
                                        }),
                                            s.addEventListener("input", function (s) {
                                                e.checkValue(t);
                                            }),
                                            s.addEventListener("focus", function (s) {
                                                e.setFocus(t);
                                            }),
                                            s.addEventListener("blur", function (s) {
                                                e.removeFocus(t);
                                            });
                                    });
                                });
                        },
                    },
                    {
                        key: "initValidation",
                        value: function (e) {
                            new ae(e);
                        },
                    },
                    {
                        key: "setFocus",
                        value: function (e) {
                            e.classList.add("--focused");
                        },
                    },
                    {
                        key: "removeFocus",
                        value: function (e) {
                            e.classList.remove("--focused");
                        },
                    },
                    {
                        key: "showFilesCount",
                        value: function (e) {
                            var t = e.querySelector('input[type="file"]'),
                                s = e.querySelector(".js-inputFileCount"),
                                i = t.files,
                                a = i.length,
                                n = "Загруженные файлы:<br> ",
                                r = 0;
                            if (a > 0) {
                                for (var o = 0; o < a; o++) {
                                    (n += o + 1 + ". " + i[o].name + ",<br> "), (s.innerHTML = n);
                                }
                                for (var l = 0; l < a; l++) r += i[l].size;
                                (r = (r = r / 1024 / 1024).toFixed(2)) > 5 ? (s.classList.add("--error"), (n = "Размер файлов не должен превышать 5Мб"), (s.innerHTML = n), (t.value = "")) : s.classList.remove("--error");
                            } else s.textContent = "";
                        },
                    },
                    {
                        key: "checkValue",
                        value: function (e) {
                            var t = e.getElementsByClassName("input__element")[0];
                            "" !== t.value && void 0 !== t.value && "+7 (___) ___-__-__" !== t.value ? e.classList.add("--hasValue") : e.classList.remove("--hasValue");
                        },
                    },
                ]) && re(t.prototype, s),
                i && re(t, i),
                e
            );
        })();
        function le(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        function ce(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, s = new Array(e.length); t < e.length; t++) s[t] = e[t];
                        return s;
                    }
                })(e) ||
                (function (e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                })()
            );
        }
        function pe(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        function he(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, s = new Array(e.length); t < e.length; t++) s[t] = e[t];
                        return s;
                    }
                })(e) ||
                (function (e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                })()
            );
        }
        function me(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        var fe = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.accordion = document.getElementsByClassName("js-accordion")[0]),
                    (this.tabs = he(this.accordion.querySelectorAll(".accordion__tab"))),
                    (this.content = he(this.accordion.querySelectorAll(".accordion__el"))),
                    (this.activeClass = "--active"),
                    this.listeners(),
                    this.changeContent(0);
            }
            var t, s, i;
            return (
                (t = e),
                (s = [
                    {
                        key: "listeners",
                        value: function () {
                            var e = this;
                            this.tabs.forEach(function (t, s) {
                                t.addEventListener("click", function (i) {
                                    e.removeActiveClasses(), e.changeTab(t), e.changeContent(s);
                                });
                            });
                        },
                    },
                    {
                        key: "changeTab",
                        value: function (e) {
                            e.classList.contains(this.activeClass) || e.classList.add(this.activeClass);
                        },
                    },
                    {
                        key: "changeContent",
                    },
                    {
                        key: "removeActiveClasses",
                        value: function () {
                            var e = this;
                            this.tabs.forEach(function (t) {
                                t.classList.remove(e.activeClass);
                            }),
                                this.content.forEach(function (t) {
                                    (t.style.maxHeight = 0), t.classList.remove(e.activeClass);
                                });
                        },
                    },
                ]) && me(t.prototype, s),
                i && me(t, i),
                e
            );
        })();
        function ve(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, s = new Array(e.length); t < e.length; t++) s[t] = e[t];
                        return s;
                    }
                })(e) ||
                (function (e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                })()
            );
        }
        function ge(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        var ye = (function () {
            function e(t) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.formScripts = t),
                    (this.popup = document.getElementsByClassName("js-popup")[0]),
                    (this.popupContent = document.getElementsByClassName("js-popup-content")[0]),
                    (this.triggers = ve(document.querySelectorAll("[data-popup]"))),
                    (this.closeButtons = ve(document.querySelectorAll("[data-popup-close]"))),
                    this.listeners(),
                    this.setPromoTimeout(15e3, "salePopup"),
                    this.setPromoTimeout(5e4, "buyPopup");
            }
            var t, s, i;
            return (
                (t = e),
                (s = [
                    {
                        key: "listeners",
                        value: function () {
                            var e = this;
                            window.addEventListener("mousemove", function (t) {
                                t.clientY < 15 && e.openPromoPopup("salePopup");
                            }),
                                this.triggers.forEach(function (t) {
                                    t.addEventListener("click", function (s) {
                                        e.openPopup(), e.setPopupContent(t);
                                    });
                                }),
                                this.closeButtons.forEach(function (t) {
                                    t.addEventListener("click", function (t) {
                                        e.closePopup();
                                    });
                                }),
                                document.addEventListener("keydown", function (t) {
                                    27 == t.keyCode && e.closePopup();
                                }),
                                this.popup.addEventListener("click", function (t) {
                                    var s = document.querySelector(".popup__wrapper");
                                    t.target == s && e.closePopup();
                                });
                        },
                    },
                    {
                        key: "openPopup",
                        value: function () {
                            this.clearPopupContent(), this.popup.classList.add("--active");
                        },
                    },
                    {
                        key: "closePopup",
                        value: function () {
                            this.clearPopupContent(), this.popup.classList.remove("--active");
                        },
                    },
                    {
                        key: "clearPopupContent",
                        value: function () {
                            this.popupContent.innerHTML = "";
                        },
                    },
                    {
                        key: "openPromoPopup",
                        value: function (e) {
                            this.popup.classList.contains("--active") || (this.openPopup(), this.setPopupContent(e));
                        },
                    },
                    {
                        key: "setPromoTimeout",
                        value: function (e, t) {
                            var s = this;
                            e
                                ? setTimeout(function () {
                                      s.openPromoPopup(t);
                                  }, e)
                                : (e || console.error("Передайте время таймера в функцию"), t || console.error("Передайте id элемента с контентом"));
                        },
                    },
                    {
                        key: "setPopupContent",
                        value: function (e) {
                            var t, s, i;
                            e.dataset
                                ? ((t = e.dataset.popup), (s = document.querySelector("#" + t).cloneNode(!0)).querySelector(".form") && ((i = s.querySelector(".form")), this.initFormScripts(i)))
                                : ((t = e), (s = document.querySelector("#" + t).cloneNode(!0)).querySelector(".form") && ((i = s.querySelector(".form")), this.initFormScripts(i))),
                                this.popupContent.appendChild(s);
                        },
                    },
                    {
                        key: "initFormScripts",
                        value: function (e) {
                            var t = this,
                                s = ve(e.querySelectorAll(".input"));
                            ve(e.querySelectorAll(".js-inputFile")).forEach(function (e) {
                                e.addEventListener("change", function (s) {
                                    t.formScripts.showFilesCount(e);
                                });
                            }),
                                s.forEach(function (e) {
                                    ve(e.querySelectorAll(".input__element")).forEach(function (s) {
                                        s.addEventListener("change", function (s) {
                                            t.formScripts.checkValue(e);
                                        }),
                                            s.addEventListener("input", function (s) {
                                                t.formScripts.checkValue(e);
                                            }),
                                            s.addEventListener("focus", function (s) {
                                                t.formScripts.setFocus(e);
                                            }),
                                            s.addEventListener("blur", function (s) {
                                                t.formScripts.removeFocus(e);
                                            });
                                    });
                                }),
                                this.formScripts.initValidation(e);
                        },
                    },
                ]) && ge(t.prototype, s),
                i && ge(t, i),
                e
            );
        })();
        function be(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, s = new Array(e.length); t < e.length; t++) s[t] = e[t];
                        return s;
                    }
                })(e) ||
                (function (e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                })()
            );
        }
        function we(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        var xe = (function () {
            function e() {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    (this.header = document.getElementsByClassName("header")[0]),
                    (this.burger = document.getElementsByClassName("js-burger")[0]),
                    (this.menu = document.getElementsByClassName("js-burger-menu")[0]),
                    (this.menuLinks = be(this.menu.querySelectorAll(".header__menu-link"))),
                    this.listeners();
            }
            var t, s, i;
            return (
                (t = e),
                (s = [
                    {
                        key: "listeners",
                        value: function () {
                            var e = this;
                            this.burger.addEventListener("click", function (t) {
                                e.header.classList.contains("--active") ? e.closeMenu() : e.openMenu();
                            }),
                                this.menuLinks.forEach(function (t) {
                                    t.addEventListener("click", function (t) {
                                        e.closeMenu();
                                    });
                                });
                        },
                    },
                    {
                        key: "openMenu",
                        value: function () {
                            this.header.classList.add("--active");
                        },
                    },
                    {
                        key: "closeMenu",
                        value: function () {
                            this.header.classList.remove("--active");
                        },
                    },
                ]) && we(t.prototype, s),
                i && we(t, i),
                e
            );
        })();
        function Ee(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        document.addEventListener("DOMContentLoaded", function (e) {
            var t = new oe();
            function s() {
                document.body.clientWidth < 767 && new ee(".dealer .swiper-container", { slidesPerView: 1, loop: !0, autoplay: { delay: 3e3 }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } });
            }

                new ee(".banner .swiper-container", { slidesPerView: 1, speed: 850, parallax: !0, autoplay: { delay: 3e3 }, pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 } }),
                new ee(".benefits__slider .swiper-container", {
                    slidesPerView: 4,
                    loop: !0,
                    autoplay: { delay: 3e3 },
                    breakpoints: { 1200: { slidesPerView: 3 }, 1024: { slidesPerView: 2 }, 767: { slidesPerView: 1 } },
                    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                }),
                s(),
                window.addEventListener("resize", function (e) {
                    s();
                });
        });
    },
    function (e, t) {},
]);
//# sourceMappingURL=common.js.map
;

