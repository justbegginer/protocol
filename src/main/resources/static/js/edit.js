document.addEventListener('DOMContentLoaded', (event) => {
const table = document.getElementById("myTable");
const buttons = document.querySelectorAll('button');
const openPopupButtons = document.querySelectorAll('.openPopup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');
const cancelButton = document.getElementById('btn-cancel');
let lastClickedButton = null;

closePopupButton.addEventListener('click', () => {
    openPopupButtons.forEach(openPopupButton => {
        openPopupButton.classList.remove('clicked');
        if (openPopupButton === lastClickedButton) {
            const img = openPopupButton.querySelector('img');
            img.src = openPopupButton.getAttribute('data-original-src');
        }
    });
    popup.classList.remove('open');
});

cancelButton.addEventListener('click', () => {
    openPopupButtons.forEach(openPopupButton => {
        openPopupButton.classList.remove('clicked');
        if (openPopupButton === lastClickedButton) {
            const img = openPopupButton.querySelector('img');
            img.src = openPopupButton.getAttribute('data-original-src');
        }
    });
    popup.classList.remove('open');
});

function deleteTableRow(row) {
    if (row) {
        row.remove();
        popup.classList.remove('open');
    }
}

    function updatePopupText(name) {
        const sportsmanSpan = document.querySelector('#popup .sportsman');
        sportsmanSpan.textContent = name;
    }
function openPopup(name) {
    updatePopupText(name);
    popup.classList.add('open');
}

popup.addEventListener('click', (event) => {
    const target = event.target;
    if (target.id === 'btn-delete') {
        const row = lastClickedButton.closest('tr');
        deleteTableRow(row);
    }
});

table.addEventListener('click', (event) => {
    const target = event.target;
    const openPopupButton = target.closest('.openPopup');

    if (openPopupButton) {
        const name = openPopupButton.closest('tr').querySelector('.sportsman').textContent;
        lastClickedButton = openPopupButton;
        openPopup(name);
    }
});
    let editable = {
        isEditing: false,
        editingRow: null,

        edit: (row) => {
            if (editable.isEditing) return;
            editable.isEditing = true;
            editable.editingRow = row;

            // Make all cells in the row, except the first one, editable
            for (let i = 1; i < row.cells.length; i++) {
                row.cells[i].contentEditable = 'true';
                row.cells[i].classList.add('edit');
            }

            window.addEventListener('click', editable.close);
        },

        close: (event) => {
            if (editable.isEditing) {
                let clickedCell = event.target.closest('td');
                if (!editable.editingRow.contains(clickedCell)) {
                    // Make all cells in the row, except the first one, non-editable
                    for (let i = 1; i < editable.editingRow.cells.length; i++) {
                        editable.editingRow.cells[i].contentEditable = 'false';
                        editable.editingRow.cells[i].classList.remove('edit');
                    }

                    editable.isEditing = false;
                    editable.editingRow = null;

                    window.removeEventListener('click', editable.close);
                }
            }
        }
    };

    document.querySelectorAll('.edit-button').forEach(button => {
        button.addEventListener('click', function (event) {
            let row = event.target.closest('tr');
            if (row) {
                editable.edit(row);
            }
        });
    });

    table.addEventListener('dblclick', function (event) {
        let row = event.target.closest('tr');
        if (row) {
            editable.edit(row);
        }
    });
    table.addEventListener("dblclick", function (evt) {
        const cell = evt.target.closest("td");
        if (cell) {
            editable.edit(cell);
        }
    });

    table.addEventListener("dblclick", function (evt) {
        const cell = evt.target.closest("td");
        if (cell) {
            editable.edit(cell);
        }
    });

table.addEventListener("click", function (evt) {
    const editButton = evt.target.closest(".edit");
    if (editButton) {
        const row = evt.target.closest("tr");

        if (row !== editable.selected) {
            if (editable.selected) {
                const selectedCells = editable.selected.querySelectorAll("td");
                for (let i = 0; i < selectedCells.length; i++) {
                    const selectedCell = selectedCells[i];
                    selectedCell.classList.remove("edit");
                    selectedCell.contentEditable = false;
                }
            }

            editable.edit(row);
        } else {
            editable.close(row);
        }
    }
});

buttons.forEach(button => {
    const img = button.querySelector('img');
    const originalSrc = img.src;

    button.setAttribute('data-original-src', img.src);

    button.addEventListener('mouseover', () => {
        img.src = originalSrc.replace('.svg', ' (1).svg');
    });

    button.addEventListener('mouseout', () => {
        if (!button.classList.contains('clicked')) {
            img.src = originalSrc;
        }
    });

    button.addEventListener('click', () => {
        if (button.classList.contains('clicked')) {
            button.classList.remove('clicked');
            img.src = originalSrc;

            if (button.classList.contains("edit"))  {
                img.src = originalSrc;
                editable.selected.querySelectorAll("td").forEach((cell, index) => {
                    if (index !== 0) {
                        cell.contentEditable = true;
                    }
                });
            }

            if (button.classList.contains('confirm')) {
                const row = button.closest('tr');
                const buttonsInRow = row.querySelectorAll('button');

                buttonsInRow.forEach(btn => {
                    if (btn !== button) {
                        btn.classList.remove('clicked');
                        const imgInRow = btn.querySelector('img');
                        imgInRow.src = btn.getAttribute('data-original-src').replace(' (2).svg', '.svg');
                        btn.disabled = false;
                    }
                });
            }
        } else {
            button.classList.add('clicked');

            if (button.classList.contains('edit')){
                img.src = originalSrc.replace(".svg", " (1).svg");
                editable.selected.querySelectorAll("td").forEach((cell) => {
                    cell.contentEditable = false;
                });
            }

            if (button.classList.contains('confirm')) {
                const row = button.closest('tr');
                const buttonsInRow = row.querySelectorAll('button');

                buttonsInRow.forEach(btn => {
                    if (btn !== button) {
                        if (btn.classList.contains('clicked')) {
                            btn.classList.remove('clicked');
                            const imgInRow = btn.querySelector('img');
                            imgInRow.src = btn.getAttribute('data-original-src').replace(' (2).svg', '.svg');
                        }
                        btn.disabled = true;
                        btn.classList.add('clicked');
                        const imgInRow = btn.querySelector('img');
                        imgInRow.src = btn.getAttribute('data-original-src').replace('.svg', ' (2).svg');
                    }
                });
            }
        }
    });
});
});
