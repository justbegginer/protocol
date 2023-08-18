document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const forms = document.querySelectorAll('form');

    forms.forEach(function(form) {
      form.submit();
    });
  });
});