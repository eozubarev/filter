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

;


export default class Mask {
  constructor(element,options = {}){
    if (!element) return;
    var _this = this;
    this.symbol = options.symbol || '_'; // Символ заменитель незаполненных ячеек
    this.mask = options.mask || '+7 (___) ___-__-__'; // Маска с учётом символа заменителя
    this.allowedChars = options.allowedChars || '[0-9]'; // Разрешённые символы (будут частью регекспа)
    this.empty = options.empty || 'false'; // Разрешить пустое поле
    this.legalLength = options.legalLength; // Допустимые длины заполнения

    this.element = element;
    element.value = this.value = this.mask;

    this.regex = `${this.allowedChars}|${this.symbol}`;
    this.maskSymbols = this.mask.match(new RegExp(this.regex,'gi'));
    this.allowedCharsLength = 0;
    this.maskSymbols.forEach( elem => {
      if (elem == this.symbol)
        this.allowedCharsLength++;
    });

    // Это индикатор того, вводилась ли первой 8 или еще нет
    // Далее на 93 строку
    this.phonePrefix = false;

    this.checkKeyCodeSupport();

    element.addEventListener('focus', function() {
      requestAnimationFrame( ()=>{
        requestAnimationFrame( ()=>{
          var indexedSymbol = _this.element.value.indexOf(_this.symbol);
          if (indexedSymbol != -1)
            _this.caretPosition = indexedSymbol;
          else
            _this.caretPosition = _this.element.value.length;

          _this.setCaretPosition(_this.element,_this.caretPosition,_this.caretPosition);
        });
      });
    });

    element.addEventListener('blur', function() {

      if (!_this.element.value) _this.element.value = _this.mask;

    });

    element.addEventListener('paste', (e) => {
      if (this.method == 'mask') this.pasteWithMask(e);
      if (this.method == 'simpleMask') this.pasteWithSimpleMask(e);
    });

    this.__bindedRoute = this.route.bind(this);
    element.addEventListener('load', this.__bindedRoute);
    // element.addEventListener('input', this.__bindedRoute);
    element.addEventListener('keydown', this.__bindedRoute);


  }

  route(e){

    if (e.keyCode === 0 || e.keyCode === 229)
      this.__simpleMask(e);
    else
      this.__mask(e);
  }

  __simpleMask(e){

    var stack = new Promise((resolve,reject) => {
      requestAnimationFrame( ()=>{
        requestAnimationFrame( ()=>{
          if (this.value && this.value.length >= this.element.value.length) {
            reject();
            this.value = this.element.value;
          }

          resolve(this.element.value);
        });
      });

    });

    stack.then( result => {
      var numbers = result.match(new RegExp(this.allowedChars,'ig'));
      return numbers;
    })
    .then( result => {
      var maskArray = this.mask.split('');
      var maskArrayChars = this.mask.match(new RegExp(this.allowedChars,'ig'));
      var count = 0;

      // Если первой ввели 8, то мы ее удаляем и переключаем флаг того,
      // Что 8 первой уже вводили и теперь уже можно вводить ее еще раз
      if (result[1] == 8 && result.length < 3 && !this.phonePrefix) {
        result.pop();
        this.phonePrefix = true;
      } else {
        this.phonePrefix = false;
      }

      for (var i = 0; i < maskArray.length; i++) {
        if (maskArrayChars && maskArrayChars[count]) {
          if (result && maskArrayChars[count] == result[count]){
            count++;
            continue;
          }
        }
        if (maskArray[i] == this.symbol && result && result[count]) {
          maskArray[i] = result[count];
          this.carerPosition = i + 1;
          count++;
        } else if (maskArray[i] == this.symbol && result && !result[count]) {
          maskArray = maskArray.slice(0,i);
          this.carerPosition = i + 1;
        }
      }

      return maskArray;
    })
    .then( result => {
      this.value = result.join('');
    })
    .then( ()=>{
      this.displayResult();
    })
    .catch( e => {

    });
  }

  __mask(e){

    if(e.key == "Meta"
    || e.keyIdentifier == "Meta"
    || e.keyCode == 91
    || e.metaKey == true
    || e.ctrlKey == true) {

    } else {
      e.preventDefault();
    }
    var key = this.whatIsKey(e);
    var keys = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete'];

    !this.keysArray && (this.keysArray = []);

    if (keys.indexOf(key) === -1) {
      return;
    }

    if (key == 'Backspace' || key == 'Delete') {
      if (!this.keysArray.length) return;
      this.keysArray.pop();
    } else {
      var symbolsInMask = this.mask.match(new RegExp(this.symbol,'ig'));

      if (symbolsInMask.length > this.keysArray.length)
        this.keysArray.push(key);
      // Если первая 8, то увеличиваем длину массива
      else if (this.keysArray[0] == 8 && symbolsInMask.length == this.keysArray.length) {
        this.keysArray.push(key);
      } else return;
    }

    if (this.keysArray.length == 0) {

      this.value = this.mask;
      this.carerPosition = this.mask.indexOf(this.symbol);

    } else {
      var maskArray = this.mask.split('');
      var count = 0;

      // Если первая 8, то не пишем ее и оставляем каретку на месте
      if (this.keysArray[0] == 8) {
        count++;
        this.carerPosition = 4;
      }

      for (var i = 0; i < maskArray.length; i++) {
        if (maskArray[i] == this.symbol && this.keysArray[count]) {
          maskArray[i] = this.keysArray[count];
          this.carerPosition = i + 1;
          count++;
        }
      }

      this.value = maskArray.join('');

    }

    this.displayResult();
  }

  setCaretPosition(ctrl, start, end) {
    // IE >= 9 and other browsers
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(start, end);
    }
    // IE < 9
    else if (ctrl.createTextRange) {
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd('character', end);
      range.moveStart('character', start);
      range.select();
    }
  }

  whatIsKey(e){
    var key = null;

    if (e.key) {
      key = e.key;
    }
    else if (event.keyCode) {
      switch ('' + event.keyCode) {
        case '48': key = '0'; break;
        case '49': key = '1'; break;
        case '50': key = '2'; break;
        case '51': key = '3'; break;
        case '52': key = '4'; break;
        case '53': key = '5'; break;
        case '54': key = '6'; break;
        case '55': key = '7'; break;
        case '56': key = '8'; break;
        case '57': key = '9'; break;
        case '8':  key = 'Backspace'; break;
        case '46': key = 'Delete'; break;
      }
    }
    else if (event.keyIdentifier) {
      switch ('' + event.keyIdentifier) {
        case 'U+0030': key = '0'; break;
        case 'U+0031': key = '1'; break;
        case 'U+0032': key = '2'; break;
        case 'U+0033': key = '3'; break;
        case 'U+0034': key = '4'; break;
        case 'U+0035': key = '5'; break;
        case 'U+0036': key = '6'; break;
        case 'U+0037': key = '7'; break;
        case 'U+0038': key = '8'; break;
        case 'U+0039': key = '9'; break;
        case 'U+0008': key = 'Backspace'; break;
      }
    }

    return key;
  }

  pasteWithMask(e){
    var pasteData = e.clipboardData && e.clipboardData.getData('Text');

      Promise.resolve()
      .then( () => {
        if (pasteData) {
          e.preventDefault();
          return pasteData.match(new RegExp(this.allowedChars,'gi'));
        } else {
          return new Promise( resolve => {
            requestAnimationFrame( ()=>{
              requestAnimationFrame( ()=>{
                resolve(this.element.value.match(new RegExp(this.allowedChars,'gi')));
              });
            });
          });
        }
      })
      .then( data => {
        if (!data) throw new Error('Пусто во вставке')
        if (data.length >= this.maskSymbols.length) {
          this.checkDoubleMaskSymbols(data)
        } else {
          for (var i = 0; i < data.length; i++) {
            if (this.keysArray.length < this.allowedCharsLength)
              this.keysArray.push(data[i]);
          }
        }
      })
      .then( () => {
        var maskArray = this.mask.split('');
        var count = 0;

        for (var i = 0; i < maskArray.length; i++) {
          if (maskArray[i] == this.symbol && this.keysArray[count]) {
            maskArray[i] = this.keysArray[count];
            this.carerPosition = i + 1;
            count++;
          }
        }
        this.value = maskArray.join('');
        this.displayResult();

      })
      .catch((e)=>{
        console.log('Пустота',e);
      });
  }

  pasteWithSimpleMask() {
    this.__simpleMask();
  }

  displayResult(){
    var lengthAllowedChars = this.value && this.value.match( new RegExp(this.allowedChars,'gi') );
    if (this.maskSymbols.length === lengthAllowedChars) {
      if (this.value != this.lastValue) {

        this.lastValue = this.value;
      }
    }

    this.element.value = this.value;
    this.setCaretPosition(this.element,this.carerPosition,this.carerPosition);
    this.element.dispatchEvent(new Event('input'));
  }
  checkKeyCodeSupport(){
    this.method = 'mask';

    var checkKeyCode = (e) => {
      if (this.allowedChars == '[0-9]' && e.keyCode !== 0 || e.keyCode !== 229){
        this.method = 'mask';
      } else {
        this.method = 'simpleMask';
      }
      removeEventListener('keydown',checkKeyCode)
    };

    addEventListener('keydown',checkKeyCode);
  }

  checkDoubleMaskSymbols(data) {
    this.keysArray = [];
    for (var i = 0; i < this.maskSymbols.length; i++) {
      if (data[i] != this.maskSymbols[i] && this.keysArray.length < this.allowedCharsLength) {
        this.keysArray.push(data[i])
      }
    }

    for (;i < data.length;i++) {
      if (this.keysArray.length < this.allowedCharsLength)
        this.keysArray.push(data[i])
      else
        break;
    }
  }

  test(){
    let regexp = new RegExp(this.symbol);
    return !regexp.test(this.value);
  }

  clear() {
    this.keysArray = []
    this.element.value =''
  }
}
;


class Validation {
  constructor(form) {
    this.form = form;
    
    this.setMask(form);
    this.formListeners(form);
  }

  formListeners(form) {
    let inputName = this.setMask(form).name;
    let inputPhone = this.setMask(form).phone;
    let inputEmail = this.setMask(form).email;
    let inputComment = this.setMask(form).comment;

    // let buttonReturn = form.querySelector('.checkNumber__button.--return');
    // let buttonSubmit = form.querySelector('.checkNumber__button.--submit');

    form.addEventListener('change', event => {
      this.checkAgree(form);
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      //let phone = inputPhone.el;
      //let phoneValue = phone.value;
      try {
        if (this.checkFormInputs(form, inputName, inputPhone, inputEmail, inputComment)) {
          this.submitForm(form);
          this.sendYandexMetricaReachGoal(form);
  
          // Это все дополнительная проверка номера
          // this.openCheckEl(form, phoneValue);
  
          // buttonReturn.addEventListener('click', event => {
          //   this.closeCheckEl(form, phone);
          // });
  
          // buttonSubmit.addEventListener('click', event => {
          //   // Снова проверяем, что все заполнено
          //   if (this.checkFormInputs(form, inputName, inputPhone)) {
          //     this.submitForm(form);
          //   } else this.closeCheckEl(form, phone);
          // });
        }
      } catch {
        console.error('Ошибка при отправке формы');
      }
    });

  }

  sendYandexMetricaReachGoal(form) {
    if (!form.querySelector('[name="ymName"]')) return;
    let ymName = String(form.querySelector('[name="ymName"]').value);
    yaCounter54273208.reachGoal(ymName);
  }

  // Отправка данных
  submitForm(form) {
    let formEl = form.querySelector('form');
    let source = formEl.getAttribute('action');

    if (form.querySelector('[name="location"]')) {
      let location = form.querySelector('[name="location"]');
      location.value = window.location.href;
      location.setAttribute('value', window.location.href);
    }

    fetch(source, {
      method: 'POST',
      body: new FormData(formEl)
    })
    .then(res => {
      // this.closeCheckEl(form);

      if (res.status == 200) {
        console.log('Форма отправилась');
        this.sayThanks(form);
      } else {
        console.log('Форма не отправилась');
      }
    })
    .catch(err => {
      console.error(err)
    });
  }

  sayThanks(form) {
    form.classList.add('--thanks');
  }

  openCheckEl(form, value) {
    let phoneText = form.querySelector('.checkNumber__number');

    form.classList.add('--check');
    phoneText.textContent = value;
  }

  closeCheckEl(form, input) {
    form.classList.remove('--check');

    if (!input) return;
    input.focus();
  }

  checkFormInputs(form, name, phone, email, comment) {
    let check = false;
    let checkName,
        checkPhone,
        checkEmail,
        checkComment,
        checkCheckbox;

    // Проверка инпута name (больше 1 символа)
    if (!name.test()) {
      checkName = false;
      event.preventDefault();
      name.label.classList.add('--hasError');
    } else {
      checkName = true;
      name.label.classList.remove('--hasError');
    }

    // Проверка инпута phone
    if (phone.test() && this.checkPhoneNumbers(phone.el)) {
      checkPhone = true;
      phone.label.classList.remove('--hasError');
    } else {
      checkPhone = false;
      event.preventDefault();
      phone.label.classList.add('--hasError');
    }

    // Проверка инпута email
    if (email.el != null) {
      if (email.test()) {
        checkEmail = true;
        email.label.classList.remove('--hasError');
      } else {
        checkEmail = false;
        event.preventDefault();
        email.label.classList.add('--hasError');
      }
    } else {
      checkEmail = true;
    }

    // Проверка инпута comment
    if (comment.el != null) {
      if (comment.test()) {
        checkComment = true;
        comment.label.classList.remove('--hasError');
      } else {
        checkComment = false;
        event.preventDefault();
        comment.label.classList.add('--hasError');
      }
    } else {
      checkComment = true;
    }

    // Проверка checkbox
    if (!this.checkAgree(form)) {
      checkCheckbox = false;
      event.preventDefault();
    } else checkCheckbox = true;

    // Итоговая проверка, чтобы все инпуты были корректны
    checkName && checkPhone && checkEmail && checkComment && checkCheckbox ? check = true : check = false;

    return check;
  }

  // Проверка для Android
  checkPhoneNumbers(input) {
    var check = false;
    var value = input.value;
    var valueArray = value.split('');

    var number = [];

    for (let i = 0; i < valueArray.length; i++) {
      let char = +valueArray[i];

      switch (char) {
        case 0: number.push(char); break;
        case 1: number.push(char); break;
        case 2: number.push(char); break;
        case 3: number.push(char); break;
        case 4: number.push(char); break;
        case 5: number.push(char); break;
        case 6: number.push(char); break;
        case 7: number.push(char); break;
        case 8: number.push(char); break;
        case 9: number.push(char); break;
        default: break;
      }
    }

    if (number.length > 12) {
      check = true;
    }

    return check;
  }

  checkAgree(form) {
    if (!form) return;

    let checkbox = form.querySelector('[type="checkbox"]');
    let submit = form.querySelector('[type="submit"]');

    if (!checkbox.checked) {
      submit.setAttribute('disabled', 'disabled');
      return false;
    } else {
      submit.removeAttribute('disabled');
      return true;
    }
  }

  setMask(form) {
    if (!form) return;

    var phoneLabel = form.querySelector('.input--phone');
    var phoneEl = form.querySelector('input.--phone');
    var phoneMask = new Mask(phoneEl);
    var phone = {
      el: phoneEl,
      label: phoneLabel,
      test: function test() {
        return phoneMask.test();
      },
      focus: function focus() {
        this.el.focus();
      },
      clear() {
        phoneMask.clear()
      }
    }

    var nameLabel = form.querySelector('.input--name');
    var nameEl = form.querySelector('input.--name');
    var name = {
      el: nameEl,
      label: nameLabel,
      test: function test() {
        if (this.el.value.length > 1) {
          let regexp = new RegExp('^([a-zа-яё]+|\d+)$','gi');
          return regexp.test(this.el.value);
        } else {
          return false;
        }
      },
      focus: function focus() {
        this.el.focus();
      }
    };

    var emailLabel = form.querySelector('.input--email');
    var emailEl = form.querySelector('input.--email');
    var email = {
      el: emailEl,
      label: emailLabel,
      test: function test() {
        // Если ничего не вводили, то не проверяем
        if (this.el.value == '') {
          return true;
        }

        // проверка на наличие символа до собачки, собачку, текст между собачкой и точкой, точку и текст после точки
        var regexp = new RegExp('.@.+?\\.\\D{2}', 'gi');
        return regexp.test(this.el.value);
      },
      focus: function focus() {
        this.el.focus();
      }
    };

    if (form.querySelector('.input.--textarea')) {
      var commentLabel = form.querySelector('.input.--textarea');
      var commentEl = commentLabel.querySelector('.input__element');
      var comment = {
        el: commentEl,
        label: commentLabel,
        test: function test() {
          // Если ничего не вводили, то не проверяем
          if (this.el.value == '') {
            return true;
          }
  
          if (this.el.value.length > 1) {
            let regexp = new RegExp('[<=>:/\+\|]','gi');
            return !regexp.test(this.el.value);
          } else {
            return false;
          }
        },
        focus: function focus() {
          this.el.focus();
        }
      };
    }
  
    return {
      phone: phone,
      name: name,
      email: email,
      comment: comment
    }
  }
}
;


 class Form {
  constructor() {
    this.forms = [document.querySelectorAll('.form')];
    this.inputs = [document.querySelectorAll('.input')];
    this.inputFile = [document.querySelectorAll('.js-inputFile')];

    this.forms.forEach(form => {
      this.initValidation(form);
    });

    this.listeners();
  }

  listeners() {
    this.inputFile.forEach(el => {
      el.addEventListener('change', event => {
        this.showFilesCount(el);
      });
    });

    this.inputs.forEach(item => {
      let elements = [...item.querySelectorAll('.input__element')];

      elements.forEach(el => {
        el.addEventListener('change', event => {
          this.checkValue(item);
        });

        el.addEventListener('input', event => {
          this.checkValue(item);
        });

        el.addEventListener('focus', event => {
          this.setFocus(item);
        });

        el.addEventListener('blur', event => {
          this.removeFocus(item);
        });
      });
    });
  }

  initValidation(form) {
    new Validation(form);
  }

  setFocus(item) {
    item.classList.add('--focused');
  }

  removeFocus(item) {
    item.classList.remove('--focused');
  }

  showFilesCount(el) {
    let input = el.querySelector('input[type="file"]');
    let counter = el.querySelector('.js-inputFileCount');
    let files = input.files;
    let length = files.length;
    let text = 'Загруженные файлы:<br> ';
    let size = 0;

    if (length > 0) {
      for (let i = 0; i < length; i++) {
        let name = files[i].name;
        text += i + 1 + '. ' + name + ',<br> ';
        counter.innerHTML = text;
      }

      for (let i = 0; i < length; i++) {
        size += files[i].size;
      }
  
      size = size / 1024 / 1024; // Mb
      size = size.toFixed(2);

      if (size > 5) {
        counter.classList.add('--error');
        text = 'Размер файлов не должен превышать 5Мб'
        counter.innerHTML = text;
        input.value = '';
      } else {
        counter.classList.remove('--error');
      }

    } else {
      counter.textContent = '';
    }
  }

  checkValue(item) {
    let input = item.getElementsByClassName('input__element')[0];

    if (input.value !== '' && input.value !== undefined && input.value !== '+7 (___) ___-__-__') {
      item.classList.add('--hasValue');
    } else {
      item.classList.remove('--hasValue');
    }
  }
};
