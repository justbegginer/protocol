function addRow(newData) {
    const table = document.querySelector('table');
    const row = document.createElement('tr');

    if (table.rows.length % 2 === 0) {
        row.classList.add('even');
    } else {
        row.classList.add('odd');
    }

    const openButton = row.querySelector('.openPopup');
    openButton.addEventListener('click', () => {
        document.getElementById('popup').style.display = 'block';
    });
}
