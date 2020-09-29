function loadData() {
    return new Promise((resolve, reject) => {
      // setTimeout не является частью решения
      // Код ниже должен быть заменен на логику подходящую для решения вашей задачи
      setTimeout(resolve, 700);
    })
  }
  
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('cube-loader');
      preloaderEl.classList.add('hidden');
      preloaderEl.classList.remove('visible');
    });