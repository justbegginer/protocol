document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.querySelector('button[type="submit"]');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const forms = document.querySelectorAll('form');

    forms.forEach(function(form) {
      form.submit();
    });
  });
});
// не работает перенаправление не заходит в листнер
document.getElementById('gotoReg').addEventListener('click', function() {
  var url = '/registration/preliminary/add_new/' + competitionId + '/general';
  console.log(url);
  window.location.href = url;
});
document.getElementById('addAnotherMember').addEventListener('click', function() {
  var url = '/registration/preliminary/add_new/' + competitionId + '/preliminary';
  console.log(url);
  window.location.href = url;
});