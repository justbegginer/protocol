const categoriesData = [
    {
        title: 'Классический лук - женщины',
        participants: 1,
        sportsmen: [
            {
                target: 'Мишень 1',
                name: 'Спортсмен 1',
                birthdate: '01.01.1990',
                rank: 'Мастер спорта',
                club: 'Клуб 1'
            },            {
                target: 'Мишень 1',
                name: 'Спортсмен 1',
                birthdate: '01.01.1990',
                rank: 'Мастер спорта',
                club: 'Клуб 1'
            },            {
                target: 'Мишень 1',
                name: 'Спортсмен 1',
                birthdate: '01.01.1990',
                rank: 'Мастер спорта',
                club: 'Клуб 1'
            },
            {
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
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                target: 'Мишень 1',
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
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

    const line = document.createElement('div');
    line.className = 'line';
    container.appendChild(line);

    const table = document.createElement('table');
    table.className = 'categories-table rounded';

    const thead = document.createElement('thead');

    const titleCell = document.createElement('td');
    titleCell.className = 'class';
    titleCell.textContent = category.title;

    const participantsCell = document.createElement('td');
    participantsCell.id = 'participants';
    participantsCell.style.textAlign = 'left';
        if (category.sportsmen.length === 1 || category.sportsmen.length % 10 === 1) {
            participantsCell.textContent = category.sportsmen.length + ' участник';
        }
        else if ((category.sportsmen.length > 1 && category.sportsmen.length < 5) || (category.sportsmen.length % 10 > 1 && category.sportsmen.length % 10 < 5)) {
            participantsCell.textContent = category.sportsmen.length + ' участника';
        } else{
            participantsCell.textContent = category.sportsmen.length + ' участников';
        }


    const toggleButtonCell = document.createElement('td');
    toggleButtonCell.id = 'toggle';
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-button';
    toggleButton.textContent = 'Раскрыть список участников +';
    toggleButtonCell.appendChild(toggleButton);

    const headerRow = document.createElement('tr');
    const headers = ['Мишень', 'Спортсмен', 'Дата рождения', 'Разряд', 'Клуб', ' '];
    headerRow.id = 'header-row';
    headerRow.style.display = 'none';

    thead.classList.add('rounded');

    headers.forEach(function(header) {
        const th = document.createElement('th');
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
        const values = [sportsman.target, sportsman.name, sportsman.birthdate, sportsman.rank, sportsman.club];

        values.forEach(function(value) {
            const td = document.createElement('td');
            td.textContent = value;
            sportsmanRow.appendChild(td);
        });

        const pdfButtonCell = document.createElement('td');
        const pdfButton = document.createElement('button');
        pdfButton.className = 'pdf-button';

        fetch('/static/pics/file-pdf-box.svg')
            .then(response => response.text())
            .then(data => {
                const pdfButton = document.createElement('button');
                pdfButton.className = 'pdf-button';

                const textNode = document.createTextNode('Скачать карточку участника');

                const img = new Image();
                img.src = 'data:image/svg+xml,' + encodeURIComponent(data);
                img.style.marginLeft = '5px';

                pdfButton.appendChild(textNode);
                pdfButton.appendChild(img);

                pdfButtonCell.appendChild(pdfButton);
                sportsmanRow.appendChild(pdfButtonCell);

                pdfButton.addEventListener('click', function() {
                    // generatePdfCard(sportsman);
                });
            })
            .catch((error) => {
                console.error('Ошибка:', error);
            });
        pdfButtonCell.appendChild(pdfButton);
        sportsmanRow.appendChild(pdfButtonCell);

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
                this.style.color = "#3B6F98";
                headerRow.style.marginTop = '0';
                table.style.marginBottom = '20px';
            } else {
                tbody.style.display = 'none';
                headerRow.style.display = 'none';
                this.textContent = 'Раскрыть список участников +';
                this.style.color = "#4D8BBA";
                table.style.marginBottom = '0px';
            }
        });
    });
});