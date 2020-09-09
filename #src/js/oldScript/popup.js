export default class Popup {
  constructor(formScripts) {
    this.formScripts = formScripts;
    this.popup = document.getElementsByClassName('js-popup')[0];
    this.popupContent = document.getElementsByClassName('js-popup-content')[0];
    this.triggers = [...document.querySelectorAll('[data-popup]')];
    this.closeButtons = [...document.querySelectorAll('[data-popup-close]')];

    this.listeners();
    this.setPromoTimeout(30000, 'salePopup');
    //this.setPromoTimeout(50000, 'buyPopup');
  }

  listeners() {
    // window.addEventListener('mousemove', event => {
    //   if (event.clientY < 15) {
    //     this.openHoldPopup('salePopup');
    //   }
    // });

    this.triggers.forEach(link => {
      link.addEventListener('click', event => {
        this.openPopup();
        this.setPopupContent(link);
      });
    });

    this.closeButtons.forEach(button => {
      button.addEventListener('click', event => {
        this.closePopup();
      });
    });

    // Закрытие на ESC
    document.addEventListener('keydown', event => {
      if (event.keyCode == 27) {
        this.closePopup();
      }
    });

    // Закрытие на клик по области вне контента
    this.popup.addEventListener('click', event => {
      let wrapper = document.querySelector('.popup__wrapper');
      let target = event.target;

      if (target == wrapper) {
        this.closePopup();
      }
    });
  }

  openPopup() {
    let isActive = false;
    let inputs = [...document.querySelectorAll('form .input__element')];

    inputs.forEach(input => {
      let value = input.value;
      if (value !== undefined && value !== '' && value !== '+7 (___) ___-__-__') {
        isActive = true;
      }
    });
    
    if (!isActive) {
      this.clearPopupContent();
      this.popup.classList.add('--active');
    }
  }

  closePopup() {
    this.clearPopupContent();
    this.popup.classList.remove('--active');
  }

  clearPopupContent() {
    this.popupContent.innerHTML = '';
  }

  openPromoPopup(name) {
    if (this.popup.classList.contains('--active')) return;
    this.openPopup();
    this.setPopupContent(name);
  }

  openHoldPopup(name) {
    if (this.popup.classList.contains('--active')) return;

    // Счетчик страниц для модалки с презентацией
    let viewsCounter = Number(sessionStorage.getItem('viewCounter'));

    if (localStorage.getItem('viewCounter')) localStorage.removeItem('viewCounter');

    // close.on('click', function() { // Если закрыли на крестик
    //   sessionStorage.setItem('viewCounter', '0'); // Обнуляем счетчик
    // });

    // $(document).keydown(function(event){
    //   if( event.which == 27 ){ // Если закрыли на ESC
    //     this.closePopup(); // Закрываем попап
    //     sessionStorage.setItem('viewCounter', '0'); // Обнуляем счетчик
    //   }
    // });

    // modal.mouseup(function (event){ // Если закрыли по клику
    //   let content = modal.find('.modal-content');
    //   if (!content.is(event.target) // Вне области контента модалки
    //       && content.has(event.target).length === 0) { // Вне области детей контента модалки
    //     sessionStorage.setItem('viewCounter', '0'); // Обнуляем счетчик
    //   }
    // });

    if (!viewsCounter // Если зашли первый раз - не стоит ключ счетчика
        || viewsCounter == 'disabled' // Или стоит старая блокировка
        || viewsCounter == 'NaN' // Или ошибка вычислений
        || viewsCounter > 2) { // Если по какой-то причине значение больше финального
      sessionStorage.setItem('viewCounter', '1'); // Ставим счетчик
    } else {
      // Проверяем значение счетчика
      if (viewsCounter === 2) { // Если это уже 3-я посещенная страница
        let count = 0;
        window.addEventListener('mousemove', event => {
          if (event.clientY < 15 && count !== 1) { //  Когда мышь уходит вверх ко вкладкам
            ++count;
            this.openPopup(); // Показываем попап
            this.setPopupContent(name);
            sessionStorage.setItem('viewCounter', '0'); // Обнуляем счетчик
          }
        });
      } else { // Если это еще не 3-я посещенная страница
        ++viewsCounter; // Увеличиваем счетчик
        sessionStorage.setItem('viewCounter', viewsCounter);
      }
    }
  }

  setPromoTimeout(delay, popup) {
    if (delay) {
      setTimeout(() => {
        this.openPromoPopup(popup);
      }, delay)
    } else {
      if (!delay) console.error('Передайте время таймера в функцию');
      if (!popup) console.error('Передайте id элемента с контентом');
    }
  }

  setPopupContent(el) {
    let value,
        content,
        form;

    if (!el.dataset) {
      value = el;
      content = document.querySelector('#' + value).cloneNode(true);

      if (content.querySelector('.form')) {
        form = content.querySelector('.form');
        this.initFormScripts(form);
      }
    } else {
      value = el.dataset.popup;
      content = document.querySelector('#' + value).cloneNode(true);
      
      if (content.querySelector('.form')) {
        form = content.querySelector('.form');
        this.initFormScripts(form);
      }
    }

    this.popupContent.appendChild(content);
  }

  initFormScripts(form) {
    let inputs = [...form.querySelectorAll('.input')];
    let inputFile = [...form.querySelectorAll('.js-inputFile')];

    inputFile.forEach(el => {
      el.addEventListener('change', event => {
        this.formScripts.showFilesCount(el);
      });
    });

    inputs.forEach(item => {
      let elements = [...item.querySelectorAll('.input__element')];

      elements.forEach(el => {
        el.addEventListener('change', event => {
          this.formScripts.checkValue(item);
        });

        el.addEventListener('input', event => {
          this.formScripts.checkValue(item);
        });

        el.addEventListener('focus', event => {
          this.formScripts.setFocus(item);
        });

        el.addEventListener('blur', event => {
          this.formScripts.removeFocus(item);
        });
      });
    });

    this.formScripts.initValidation(form);
  }
}