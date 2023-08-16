window.onload = function() {
    var input = document.querySelector('.form__input');
  
    input.addEventListener('focus', function() {
      this.classList.add('input-focus');
      this.classList.remove('input-blur');
    });
  
    input.addEventListener('blur', function() {
      this.classList.add('input-blur');
      this.classList.remove('input-focus');
    });
  };