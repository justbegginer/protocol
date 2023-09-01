
const categoriesData = [
    {
        title: 'Классический лук - женщины',
        participants: 1,
        sportsmen: [
            {
                name: 'Спортсмен 1',
                birthdate: '01.01.1990',
                rank: 'Мастер спорта',
                club: 'Клуб 1'
            },            {
                name: 'Спортсмен 1',
                birthdate: '01.01.1990',
                rank: 'Мастер спорта',
                club: 'Клуб 1'
            },            {
                name: 'Спортсмен 1',
                birthdate: '01.01.1990',
                rank: 'Мастер спорта',
                club: 'Клуб 1'
            },            {
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
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
                name: 'Спортсмен 2',
                birthdate: '02.02.1995',
                rank: 'Кандидат в мастера спорта',
                club: 'Клуб 2'
            },{
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
    if (category.sportsmen.length === 1 || category.sportsmen.length % 10 === 1) {
        participantsCell.textContent = category.sportsmen.length + ' участник';
    }
    else if ((category.sportsmen.length > 1 && category.sportsmen.length < 5) || (category.sportsmen.length % 10 > 1 && category.sportsmen.length % 10 < 5)) {
        participantsCell.textContent = category.sportsmen.length + ' участника';
    } else{
        participantsCell.textContent = category.sportsmen.length + ' участников';
    }

    if (category.sportsmen.length < 5){
        const mergeButton = document.createElement('button');
        mergeButton.id = 'merge-btn';
        mergeButton.className = 'merge-btn';
        mergeButton.textContent = 'Объединить дивизион';
        participantsCell.style.color = '#C26060';
        participantsCell.appendChild(mergeButton);
    }
    else{
        participantsCell.style.color = '#59AB66';
    }

    const toggleButtonCell = document.createElement('td');
    toggleButtonCell.id = 'toggle';
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-button';
    toggleButton.textContent = 'Раскрыть список участников +';
    toggleButtonCell.appendChild(toggleButton);

    const headerRow = document.createElement('tr');
    const headers = ['Спортсмен', 'Дата рождения', 'Разряд', 'Клуб'];
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
    thead.appendChild(enoughCell);
    thead.appendChild(toggleButtonCell);


    const tbody = document.createElement('tbody');
    tbody.id = 'myTable';
    tbody.style.display = 'none';
    const tbodyContainer = document.createElement('div');
    tbodyContainer.className = 'tbody-container';

    category.sportsmen.forEach(function(sportsman) {
        const sportsmanRow = document.createElement('tr');
        const values = [sportsman.name, sportsman.birthdate, sportsman.rank, sportsman.club];

        values.forEach(function(value) {
            const td = document.createElement('td');
            td.textContent = value;
            sportsmanRow.appendChild(td);
        });

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

const popup = document.getElementById('popup');

document.addEventListener('DOMContentLoaded', function() {
    const mergeButtons = document.getElementsByClassName('merge-btn');
    const popup = document.getElementById('popup');
    const popupTextCategory = document.querySelector('.popup-text .sportsman');
    const popupTextParticipants = document.querySelector('.popup-text .participants');
    const categoryButtonsContainer = document.querySelector('.category-buttons');

    for (let i = 0; i < mergeButtons.length; i++) {
        mergeButtons[i].addEventListener('click', function() {
            const categoryContainer = this.closest('.division-container');
            const categoryTitle = categoryContainer.querySelector('.class').textContent;
            const participantsCount = categoryContainer.querySelector('tbody').querySelectorAll('tr').length;

            popupTextCategory.textContent = categoryTitle;

            if (participantsCount === 1 || participantsCount % 10 === 1) {
                popupTextParticipants.textContent = participantsCount + ' участник';
            } else if ((participantsCount > 1 && participantsCount < 5) || (participantsCount % 10 > 1 && participantsCount % 10 < 5)) {
                popupTextParticipants.textContent = participantsCount + ' участника';
            } else {
                popupTextParticipants.textContent = participantsCount + ' участников';
            }

            categoryButtonsContainer.innerHTML = '';

            const allCategories = document.querySelectorAll('.division-container');
            for (let j = 0; j < allCategories.length; j++) {
                if (allCategories[j] !== categoryContainer) {
                    const categoryTitle = allCategories[j].querySelector('.class').textContent;
                    const participantsCount = allCategories[j].querySelector('tbody').querySelectorAll('tr').length;
                    const categoryForm = document.createElement('form');
                    const categoryButton = document.createElement('button');
                    categoryButton.type = 'button';
                    categoryForm.id = 'categoryForm';
                    categoryButton.classList.add('category-button');
                    let participantsLabel = 'участников';
                    if (participantsCount === 1 || participantsCount % 10 === 1) {
                        participantsLabel = 'участник';
                    } else if ((participantsCount > 1 && participantsCount < 5) || (participantsCount % 10 > 1 && participantsCount % 10 < 5)) {
                        participantsLabel = 'участника';
                    }
                    categoryButton.innerHTML = `<span class="category-title">${categoryTitle}</span><span class="participants-count">${participantsCount} ${participantsLabel}</span>`;
                    categoryForm.appendChild(categoryButton);
                    categoryButtonsContainer.appendChild(categoryForm);
                    const participantsCountSpan = categoryButton.querySelector('.participants-count');
                    categoryButton.addEventListener('click', function() {
                        const allCategoryButtons = document.querySelectorAll('.category-button');
                        allCategoryButtons.forEach(button => button.classList.remove('selected'));
                        categoryButton.classList.remove('hover');
                        categoryButton.classList.toggle('selected');
                    });
                }
            }
            popup.classList.add('open');

            const categoryButtons = document.querySelectorAll('.category-button');
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const allCategoryButtons = document.querySelectorAll('.category-button');
                    allCategoryButtons.forEach(button => button.classList.remove('selected'));

                    button.classList.remove('hover');
                    button.classList.toggle('selected');
                });
            });
        });
    }

    const mergeButton = document.getElementById('merge-divisions')
    mergeButton.addEventListener('click', function(){
        //добавить обновление таблиц
        popup.classList.remove('open');
    })

    const closePopupButton = document.getElementById('closePopup');
    closePopupButton.addEventListener('click', function() {
        popup.classList.remove('open');
    });
});
