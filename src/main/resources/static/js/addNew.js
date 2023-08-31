
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
    <td class="sportsman" th:text="${sportsman.name}"></td>
    <td class="date" th:text="${sportsman.date}"></td>
    <td class="gender" th:text="${sportsman.gender}"></td>
    <td class="class" th:text="${sportsman.class}"> </td>
    <td class="razryad" th:text="${sportsman.category}"></td>
    <td class="region" th:text="${sportsman.region}"></td>
    <td class="member" th:text="${sportsman.federationMembership}"></td>
    <td class="club" th:text="${sportsman.club}"></td>
    <td class="phone" th:text="${sportsman.phone}"></td>`;

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