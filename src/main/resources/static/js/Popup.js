window.onload = function() {
    // Находим кнопку и попап в DOM
    var openPopupButton = document.querySelector('.openPopup');
    var popup = document.getElementById('popup');

    // Добавляем обработчик события на кнопку
    openPopupButton.addEventListener('click', function() {
        // Показываем попап
        popup.classList.add('open');
    });

    var closePopupButton = document.getElementById('closePopup');

    // Добавляем обработчик события на кнопку
    closePopupButton.addEventListener('click', function() {
        // Скрываем попап
        popup.classList.remove('open');
    });
}