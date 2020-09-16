
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PromixScheme = function () {
    function PromixScheme() {
        _classCallCheck(this, PromixScheme);

        this.tabs = [].concat(_toConsumableArray(document.querySelectorAll('.promix__scheme-tab')));
        this.dots = [].concat(_toConsumableArray(document.querySelectorAll('.promix__scheme-dot')));

        this.paddingTab = 15;
        this.schemeTabActive = 'promix__scheme-tab--active';
        this.schemeDotActive = 'promix__scheme-dot--active';

        this.listeners();
    }

    _createClass(PromixScheme, [{
        key: 'listeners',
        value: function listeners() {
            var _this = this;

            this.tabs.forEach(function (tab, i) {
                i === 0 ? _this.activeTab(tab) : '';
                tab.addEventListener('click', function (event) {
                    event.preventDefault();
                    if (!tab.classList.contains(_this.schemeTabActive)) {
                        _this.activeTab(tab);
                        _this.changeDot(tab);
                    }
                });
            });

            this.dots.forEach(function (dot, i) {
                i === 0 ? _this.activeDot(dot) : '';
                dot.addEventListener('click', function (event) {
                    event.preventDefault();
                    if (!dot.classList.contains(_this.schemeDotActive)) {
                        _this.activeDot(dot);
                        _this.changeTab(dot);
                    }
                });
            });
        }
    }, {
        key: 'activeTab',
        value: function activeTab(tab) {
            var content = tab.querySelector('.promix__scheme-tab-content');
            var contentInner = tab.querySelector('.promix__scheme-tab-info');
            var padding = this.paddingTab + 'px';
            var height = contentInner.getBoundingClientRect().height + this.paddingTab + 'px';

            this.closeTabs();
            content.style.maxHeight = height;
            content.style.paddingTop = padding;
            tab.classList.add(this.schemeTabActive);
        }
    }, {
        key: 'changeTab',
        value: function changeTab(dot) {
            var _this2 = this;

            var currentDot = dot.dataset.schemeDot;
            this.tabs.forEach(function (tab) {
                var currentTab = tab.dataset.schemeTab;
                if (currentTab === currentDot) {
                    _this2.activeTab(tab);
                }
            });
        }
    }, {
        key: 'closeTabs',
        value: function closeTabs() {
            var _this3 = this;

            this.tabs.forEach(function (tab) {
                var content = tab.querySelector('.promix__scheme-tab-content');
                tab.classList.remove(_this3.schemeTabActive);
                content.style.maxHeight = 0;
                content.style.paddingTop = 0;
            });
        }
    }, {
        key: 'activeDot',
        value: function activeDot(dot) {
            this.closeDots();
            dot.classList.add(this.schemeDotActive);
        }
    }, {
        key: 'changeDot',
        value: function changeDot(tab) {
            var _this4 = this;

            var currentTab = tab.dataset.schemeTab;
            this.dots.forEach(function (dot) {
                var currentDot = dot.dataset.schemeDot;
                if (currentTab === currentDot) {
                    _this4.activeDot(dot);
                }
            });
        }
    }, {
        key: 'closeDots',
        value: function closeDots() {
            var _this5 = this;

            this.dots.forEach(function (dot) {
                dot.classList.remove(_this5.schemeDotActive);
            });
        }
    }]);

    return PromixScheme;
}();