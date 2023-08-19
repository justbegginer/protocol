fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    // Вставка содержимого в элемент с id "menu"
    document.getElementById('menu').innerHTML = data;

    var menuItems = document.getElementsByClassName('menu-item');

//    for (var i = 0; i < menuItems.length; i++) {
//      menuItems[i].addEventListener('click', function() {
//        var currentPage = document.querySelector('.menu-item--active');
//        if (currentPage) {
//          currentPage.classList.remove('menu-item--active');
//        }
//        this.classList.add('menu-item--active');
//      });
//    }
  })
  .catch(error => {
    console.error('Ошибка загрузки меню:', error);
  });

window.addEventListener('DOMContentLoaded', function() {
  var menuItems = document.getElementsByClassName('menu-item');
  var currentPage = location.pathname.split('/').pop();

  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[i].getAttribute('data-page') === currentPage) {
      menuItems[i].classList.add('menu-item--active');
      break; // Выход из цикла после установки активного класса
    }
  }
});
