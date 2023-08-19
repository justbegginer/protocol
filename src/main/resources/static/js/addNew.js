
const newData = {
    icons: `
    <button class="confirm"><img class="confirm" src="/src/main/resources/static/pics/checkbox-marked.svg" alt="/src/main/resources/static/pics/checkbox-marked.svg"></button>
    <button id="openPopup" class="openPopup"><img class="delete" src="/src/main/resources/static/pics/close-box.svg" alt="/src/main/resources/static/pics/close-box.svg"></button>
    <button id="edit" class="edit"><img src="/src/main/resources/static/pics/pencil-box.svg" alt="/src/main/resources/static/pics/pencil-box.svg"></button>`,
    sportsman: `Тишкина Дарья`,
    date: `29.03.2003`,
    gender: `M`,
    class: `3Д-классический лук`,
    razryad: 'КМС',
    region: `Ленинградская облать`,
    member: `РОФСО СПФСЛ`,
    club: `СК Анонимные лучники`,
    phone: `+79051013295`
};

function addRow(newData) {
    const table = document.querySelector('table');
    const row = document.createElement('tr');

    row.innerHTML = `    
    <td class="empty">${newData.icons}</td>
    <td class="sportsman">${newData.sportsman}</td>
    <td class="date">${newData.date}</td>
    <td class="gender">${newData.gender}</td>
    <td class="class">${newData.class}</td>
    <td class="razryad">${newData.razryad}</td>
    <td class="region">${newData.region}</td>
    <td class="member">${newData.member}</td>
    <td class="club">${newData.club}</td>
    <td class="phone">${newData.phone}</td>`;

    if (table.rows.length % 2 === 0) {
        row.classList.add('even');
    } else {
        row.classList.add('odd');
    }

    table.appendChild(row);

    // Добавить обработчик события для кнопки удаления в этой строке
    const openButton = row.querySelector('.openPopup');
    openButton.addEventListener('click', () => {
        document.getElementById('popup').style.display = 'block';
    });
}

// Добавление строк
addRow(newData);
addRow(newData);
addRow(newData);
addRow(newData);
addRow(newData);
addRow(newData);
addRow(newData);
addRow(newData);