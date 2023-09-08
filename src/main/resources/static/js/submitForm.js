document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  // const competitionId = form.getAttribute('th:value');

  const gotoRegButton = document.getElementById('gotoReg');
  const addAnotherMemberButton = document.getElementById('addAnotherMember');

  console.log(competitionId);

  gotoRegButton.addEventListener('click', function(event) {
    event.preventDefault();
    form.action = `/registration/preliminary/add_new/${competitionId}/general`;
    form.submit();
  });

  addAnotherMemberButton.addEventListener('click', function(event) {
    event.preventDefault();
    form.action = `/registration/preliminary/add_new/${competitionId}/preliminary`;
    form.submit();
  });
});
