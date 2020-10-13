$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});



// new class Nav {
//   constructor() {
//     this.header = document.querySelector('header.header-page');
//     this.headerHeight = this.header.getBoundingClientRect().height;
//     this.links = [...document.querySelectorAll('[href*="#"]')];
//     this.navItems = [...document.querySelectorAll('.header-page__link')];

//     this.listeners();
//     this.scrollToEl(this.links);
//   }

//   listeners() {
//     this.navItems.forEach(item => {
//       item.addEventListener('click', event => {
//         this.toggleActiveClass(this.navItems, item, '--active');
//       });
//     });
//   }

//   toggleActiveClass(items, item, activeClass) {
//     if (!item.classList.contains(activeClass)) {

//       items.forEach(another => {
//         another.classList.remove(activeClass);
//       })

//       item.classList.add(activeClass);
//     }
//   }

//   scrollToEl(links) {
//     links.forEach(link => {

//       try {
//         let href = link.getAttribute('href');
  
//         if (href !== '#' && href !== '') {
//           link.addEventListener('click', event => {
//             event.preventDefault();
          
//             if (document.querySelector(href)) {
//               let target = document.querySelector(href);
//               // Величина верхнего отступа, к которой скролить, вместе с посчитанной высотой фикс. шапки
//               let destination = target.getBoundingClientRect().top - this.headerHeight;
//               let currentPosition = pageYOffset;
//               let speed = 0.15;
//               let start = null;
//               function scrolling(time) {
//                 if (start === null) {
//                   start = time;
//                 }
          
//                 let progress = time - start;
//                 let nowScroll = null;
          
//                 destination < 0 ? nowScroll = Math.max(currentPosition - progress / speed, currentPosition + destination) :
//                                   nowScroll = Math.min(currentPosition + progress / speed, currentPosition + destination);
          
//                 window.scrollTo(0, nowScroll);
//                 if (nowScroll != currentPosition + destination) {
//                   requestAnimationFrame(scrolling);
//                 }
//               }
//               requestAnimationFrame(scrolling);
//             }
//           });
//         }
//       } catch {
//         console.error('Ошибка анимации скролла');
//       }
//     });
//   }
// }