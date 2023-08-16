const categoriesData = [
    {
        title: 'Классический лук - женщины',
        participants: 1,
        sportsmen: [
            {
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 1',
                birthdate: '01.01.1990',
                rank: 'Мастер спорта',
                club: 'Клуб 1'
            },            {
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 1',
                birthdate: '01.01.1990',
                rank: 'Мастер спорта',
                club: 'Клуб 1'
            },            {
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 1',
                birthdate: '01.01.1990',
                rank: 'Мастер спорта',
                club: 'Клуб 1'
            },
            {
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 1',
                birthdate: '01.01.1990',
                rank: 'Мастер спорта',
                club: 'Клуб 1'
            },
            // {
            //     name: 'Спортсмен 1',
            //     birthdate: '01.01.1990',
            //     rank: 'Мастер спорта',
            //     club: 'Клуб 1'
            // },
        ]
    },
    {
        title: 'Блочный лук (новички) - женщины',
        participants: 10,
        sportsmen: [
            {
                place: '1',
                target: 'Мишень 1',
                name: 'Вася Пупкин',
                birthdate: '01.01.1990',
                rank: 'Мастер спорта',
                club: 'Клуб 1'
            },
            // {
            //     name: 'Василий Попочкин',
            //     birthdate: '01.01.1990',
            //     rank: 'Мастер спорта',
            //     club: 'Клуб 1'
            // },
        ]
    },
    {
        title: 'Классический лук (Новички) - Женщины',
        participants: 8,
        sportsmen: [
            {
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                place: '1',
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },
            // Добавьте других спортсменов
        ]
    },
    // Добавьте другие категории
];

function generateTable(category) {
    const container = document.createElement('div');
    container.className = 'division-container';

    const table = document.createElement('table');
    table.className = 'categories-table rounded';

    const thead = document.createElement('thead');

    const titleCell = document.createElement('td');
    titleCell.className = 'class';
    titleCell.textContent = category.title;

    const participantsCell = document.createElement('td');
    participantsCell.id = 'participants';
    participantsCell.textContent = category.sportsmen.length + ' участников:';     //???


    const toggleButtonCell = document.createElement('td');
    toggleButtonCell.id = 'toggle';
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-button';
    toggleButton.textContent = 'Раскрыть список участников +';
    toggleButtonCell.appendChild(toggleButton);

    const headerRow = document.createElement('tr');
    const headers = ['Место', 'Спортсмен', 'Дата рождения', 'Разряд', 'Клуб', '18м-1', '18м-2', 'Итог', '10’s', '9’s', 'Вып. разряд'];
    headerRow.id = 'header-row';
    headerRow.style.display = 'none';

    thead.classList.add('rounded');

    headers.forEach(function(header) {
        const th = document.createElement('th');
        th.className = 'intermediate-res';
        th.textContent = header;
        headerRow.appendChild(th);
    });

    thead.appendChild(titleCell);
    thead.appendChild(participantsCell);
    thead.appendChild(toggleButtonCell);


    const tbody = document.createElement('tbody');
    tbody.id = 'myTable';
    tbody.style.display = 'none';
    const tbodyContainer = document.createElement('div');
    tbodyContainer.className = 'tbody-container';

    category.sportsmen.forEach(function(sportsman) {
        const sportsmanRow = document.createElement('tr');
        const values = [sportsman.place, sportsman.name, sportsman.birthdate, sportsman.rank, sportsman.club];
        const columnWidths = ['80px', '200px', '110px', '90px', '200px'];
        const columnWidthsEmpty = ['80px', '80px', '80px', '80px', '80px', '80px'];


        values.forEach(function (value, index) {
            const td = document.createElement('td');
            td.textContent = value;
            td.style.width = columnWidths[index];
            sportsmanRow.appendChild(td);
        });

        for (let i = 0; i < 6; i++) {
            const emptyTd = document.createElement('td');
            emptyTd.style.width = columnWidthsEmpty[i];
            emptyTd.setAttribute('contenteditable', 'true');
            sportsmanRow.appendChild(emptyTd);
        }

        tbody.appendChild(sportsmanRow);
    });

    tbodyContainer.appendChild(headerRow);
    tbodyContainer.appendChild(tbody);

    table.appendChild(thead);
    table.appendChild(tbodyContainer);

    container.appendChild(table);

    return container;
}
function addTablesToPage() {
    const container = document.getElementById('container');

    categoriesData.forEach(function(category) {
        const table = generateTable(category);
        container.appendChild(table);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    addTablesToPage();

    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const table = this.closest('table');
            const tbody = table.querySelector('#myTable');
            const headerRow = table.querySelector('#header-row');

            if (tbody.style.display === 'none') {
                tbody.style.display = 'table-row-group';
                headerRow.style.display = 'table-row';
                this.textContent = 'Закрыть список участников -';
                headerRow.style.marginTop = '0';
                table.style.marginBottom = '20px';
            } else {
                tbody.style.display = 'none';
                headerRow.style.display = 'none';
                this.textContent = 'Раскрыть список участников +';
                table.style.marginBottom = '0px';
            }
        });
    });
});