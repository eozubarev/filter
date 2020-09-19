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
