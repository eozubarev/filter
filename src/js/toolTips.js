/* Для использования данного компонента нужно воспользоваться следующей конструкцией
EXAMPLE:

    tippy('#id', {
        content: "any content",
        animation: 'scale',
      });
*/

// cert-international item text variables


// Кастомная настройка плагина

// Объявляем переменные в которых будет лежать текст, всплывающий при наведении
let companyAdressSpb = 
    "Санкт-Петербург, Ленинский пр-т, 168. Бизнес-центр «Энергия», офис 613"

let companyAdressMsc =
    "Москва, Киевское шоссе, Бизнес-парк «Румянцево», корпус А, 1 подъезд, 4 этаж"

let companyAdressKrasnodar =
    "г. Краснодар, х Октябрьский, ул. Подсолнечная, д. 44"

let companyAdressTyumen =
    "г. Тюмень, ул. Широтная, д. 200, стр. 58."

// cert-international item text variables


//Создаём коллекцию 

let certificatesMap = new Map();
certificatesMap.set("city-spb", companyAdressSpb)
certificatesMap.set("city-msc", companyAdressMsc)
certificatesMap.set("city-krs", companyAdressKrasnodar)
certificatesMap.set("city-tyum", companyAdressTyumen)

/* Создаём цикл где перебираем коллекцию и подставляем к нужному id нужный ключ и значение
   где ключ это "cert+number", значение, переменная с нужным текстом вызывая при это плагин tippy */

  for (var [key, value] of certificatesMap) {
    tippy('#'+ key, {
        content: value,
        animation: 'scale',
        trigger:'click',
      });
  }

// Далее компонентом можно пользоваться по примеру конструкции, которую я составил выше