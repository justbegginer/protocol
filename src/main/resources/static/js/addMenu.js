function setActiveMenu(currentPagePath) {
  var menuItems = document.getElementsByClassName('menu-item');
  var selectedMenuItem = sessionStorage.getItem('selectedMenuItem');

  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[i].getAttribute('data-page') === selectedMenuItem) {
      menuItems[i].classList.add('menu-item--active');
    } else {
      menuItems[i].classList.remove('menu-item--active');
    }
  }

  for (var i = 0; i < menuItems.length; i++) {
    var href = menuItems[i].getAttribute('href');
    if (href === currentPagePath) {
      menuItems[i].classList.add('menu-item--active');
    }
  }
}
const baseUrl = 'http://localhost:8080';
const menuUrl = baseUrl + '../../templates/competition/menu.html';

fetch(menuUrl)
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;
    var currentPagePath = window.location.pathname.split('/').pop();
    setActiveMenu(currentPagePath);

    var menuItems = document.getElementsByClassName('menu-item');
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', function() {
        sessionStorage.setItem('selectedMenuItem', this.getAttribute('data-page'));
      });
    }
  })
  .catch(error => {
    console.error('Ошибка загрузки меню:', error);
  });
