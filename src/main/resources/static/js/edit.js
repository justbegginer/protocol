document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById("myTable");
    const buttons = document.querySelectorAll('button');
    const openPopupButtons = document.querySelectorAll('.openPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');
    const cancelButton = document.getElementById('btn-cancel');
    let lastClickedButton = null;

    function closePopup() {
        openPopupButtons.forEach(openPopupButton => {
            openPopupButton.classList.remove('clicked');
            if (openPopupButton === lastClickedButton) {
                const img = openPopupButton.querySelector('img');
                img.src = openPopupButton.getAttribute('data-original-src');
            }
        });
        popup.classList.remove('open');
    }

    closePopupButton.addEventListener('click', closePopup);
    cancelButton.addEventListener('click', closePopup);

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
        if (editable.selected) {
            finishEditing(editable.selected);
            const row = event.target.closest('tr');
            const editButton = row.querySelector('.edit');
            editButton.classList.remove('clicked');
        }
        if (target.id === 'btn-delete') {
            event.preventDefault();
            const sportsmanId = lastClickedButton.getAttribute('data-sportsman-id');
            const competitionId = lastClickedButton.getAttribute('competition-id');
            const url = `/registration/general/${competitionId}/${sportsmanId}`;
            console.log(sportsmanId);
            fetch(url, {
                method: 'DELETE',
            })
                .then(response => {
                    const row = lastClickedButton.closest('tr');
                    deleteTableRow(row);
                    lastClickedButton.closest('tr').remove();
                });
        }
    });


    table.addEventListener('click', (event) => {
        const target = event.target;
        const openPopupButton = target.closest('.openPopup');

        if (openPopupButton) {
            const name = openPopupButton.closest('tr').querySelector('.sportsman').textContent;
            const sportsmanId = openPopupButton.getAttribute('data-sportsman-id');
            console.log(sportsmanId);
            lastClickedButton = openPopupButton;
            openPopup(name);
        }
    });

    function startEditing(row) {
        if (editable.selected) {
            finishEditing(editable.selected);
        }

        editable.selected = row;
        row.classList.add('editing-row');

        const cellsToEdit = row.querySelectorAll('td:not(:first-child)');
        cellsToEdit.forEach(cell => {
            cell.contentEditable = true;
            cell.classList.add('edit');
        });
    }

    function finishEditing(row) {
        editable.selected = null;
        row.classList.remove('editing-row');

        const cellsToEdit = row.querySelectorAll('td:not(:first-child)');
        cellsToEdit.forEach(cell => {
            cell.contentEditable = false;
            cell.classList.remove('edit');
        });
    }

    const editable = {
        selected: null,

        startEditing: (row) => {
            if (editable.selected) {
                editable.finishEditing(editable.selected);
            }

            editable.selected = row;
            row.classList.add('editing-row');

            const cellsToEdit = row.querySelectorAll('td:not(:first-child)');
            cellsToEdit.forEach(cell => {
                cell.contentEditable = true;
                cell.classList.add('edit');
            });
        },

        finishEditing: (row) => {
            editable.selected = null;
            row.classList.remove('editing-row');

            const cellsToEdit = row.querySelectorAll('td:not(:first-child)');
            cellsToEdit.forEach(cell => {
                cell.contentEditable = false;
                cell.classList.remove('edit');
            });

            const editButton = row.querySelector('.edit');
            editButton.classList.remove('clicked');
        },

        close: (event) => {
            if (editable.selected) {
                const clickedCell = event.target.closest('td');
                if (!editable.selected.contains(clickedCell)) {
                    editable.finishEditing(editable.selected);
                }
            }
        }
    };

    document.querySelectorAll('.edit').forEach(button => {
        button.addEventListener('click', function (event) {
            const row = event.target.closest('tr');
            const sportsmanId = row.getAttribute('data-sportsman-id');
            if (row) {
                if (editable.selected === row) {
                    finishEditing(row);
                } else {
                    startEditing(row, sportsmanId);
                }
            }
        });
    });

    buttons.forEach(button => {
        const img = button.querySelector('img');
        const originalSrc = img.src;

        button.setAttribute('data-original-src', img.src);

        button.addEventListener('mouseover', () => {
            if (!button.disabled) {
                img.src = originalSrc.replace('.svg', ' (1).svg');
            }
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

                if (button.classList.contains("edit")) {
                    img.src = originalSrc.replace(" (1).svg", ".svg");
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

                if (button.classList.contains('edit')) {
                    img.src = originalSrc.replace(".svg", " (1).svg");
                }

                if (button.classList.contains('confirm')) {
                    const row = button.closest('tr');
                    const buttonsInRow = row.querySelectorAll('button');

                    if (editable.selected) {
                        finishEditing(editable.selected);
                    }

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
