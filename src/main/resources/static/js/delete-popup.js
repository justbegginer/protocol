document.addEventListener('DOMContentLoaded', function() {
    let openButton = document.querySelector('#openPopup');
    let popup = document.getElementById('popup');
    // let closeButton = document.getElementById('closePopup');
    // let cancelButton = document.getElementById('btn-cancel');
    // let deleteButton = document.getElementById('btn-delete');

    openButton.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    // closeButton.addEventListener('click', function() {
    //     popup.style.display = 'none';
    // });
    //
    // cancelButton.addEventListener('click', function () {
    //     popup.style.display = 'none';
    // });
    //
    // deleteButton.addEventListener('click', function (){
    //     table.addEventListener('click', function(evt){
    //         if(evt.target.closest('.delete')) {
    //             evt.target.closest('tr').remove()
    //         }
    //     })
    // });

});
