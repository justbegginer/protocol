function getShieldNumberAndLetter(matchIndex) {   // не важно
  const shieldNumber = Math.floor(matchIndex / 2) + 1;
  const shieldLetter = matchIndex % 2 === 0 ? 'A' : 'B';
  return { number: shieldNumber, letter: shieldLetter };
}

function handleMatchInput(match, resultInputs1, resultInputs2, totalCell1, totalCell2) {
  let totalHomeScore = 0;
  let totalAwayScore = 0;

  resultInputs1.forEach(input => {
    totalHomeScore += parseInt(input.value) || 0;
  });

  resultInputs2.forEach(input => {
    totalAwayScore += parseInt(input.value) || 0;
  });

  if (isNaN(totalHomeScore)) totalHomeScore = 0;
  if (isNaN(totalAwayScore)) totalAwayScore = 0;

  totalCell1.textContent = totalHomeScore;
  totalCell2.textContent = totalAwayScore;

  return totalHomeScore > totalAwayScore ? match.home : match.away;
}

function moveWinnerToNextStage(nextStageMatch, winner) {
  nextStageMatch.home = winner;
}

function updateNextStageTable(nextStageContainer, matchIndex, winner, winnerCellIndex) {
  const nextStageMatches = nextStageContainer.querySelectorAll(".match");
  const matchElement = nextStageMatches[matchIndex];
  const sportsmanNames = matchElement.querySelectorAll(".sportsman-name");

  sportsmanNames[winnerCellIndex].textContent = winner;
  const nextStageMatchIndex = Math.floor(matchIndex / 2);
  const nextStageWinnerCellIndex = matchIndex % 2 === 0 ? 0 : 1;
  if (nextStageMatchIndex > 0) {
    // Update the winner's name in the previous match as well
    const previousMatchElement = nextStageMatches[nextStageMatchIndex - 1];
    const previousSportsmanNames = previousMatchElement.querySelectorAll(".sportsman-name");
    previousSportsmanNames[nextStageWinnerCellIndex].textContent = winner;

    // Recursively update winners in earlier stages
    updateNextStageTable(nextStageContainer, nextStageMatchIndex - 1, winner, nextStageWinnerCellIndex);
  }
}
function generatePlayoffBracket(maxStages, teams) {
  const bracket = [];

  for (let stage = 0; stage < maxStages; stage++) {
    const matches = [];
    const numMatches = Math.pow(2, maxStages - stage - 1);

    for (let i = 0; i < numMatches; i++) {
      const home = teams.shift();
      const away = teams.shift();
      matches.push({ home, away, winner: null, parentMatches: [] }); // Добавляем пустой массив parentMatches
    }
    bracket.push(matches);
  }
    const thirdPlaceMatch = { home: null, away: null, winner: null, parentMatches: [] };
    bracket.push([thirdPlaceMatch]);

    for (let stage = 1; stage < maxStages; stage++) {
      const currentStageMatches = bracket[stage];
      const previousStageMatches = bracket[stage - 1];

      for (let i = 0; i < currentStageMatches.length; i++) {
        const parentMatchIndex1 = i * 2;
        const parentMatchIndex2 = i * 2 + 1;

        if (previousStageMatches[parentMatchIndex1] && previousStageMatches[parentMatchIndex2]) {
          currentStageMatches[i].parentMatches = [
            previousStageMatches[parentMatchIndex1],
            previousStageMatches[parentMatchIndex2]
          ];
        } else {
          currentStageMatches[i].parentMatches = [];
        }
      }
    }
  return bracket;
}

function displayBracket(bracket) {
  const bracketContainer = document.getElementById("playoff-tree");
  bracketContainer.innerHTML = "";

  const initialMargin = 50;
  let marginMultiplier = 1.4;

  const finalStageContainer = document.createElement("div");
  finalStageContainer.classList.add("stage", "final-stage");

  const thirdPlaceFinalContainer = document.createElement("div");
  thirdPlaceFinalContainer.classList.add("stage", "final-stage");

  for (let stage = 0; stage < bracket.length; stage++) {

    const stageContainer = document.createElement("div");
    stageContainer.className = "stage";

    const stageNameElement = document.createElement("div");
    stageNameElement.className = "stage-name";
    const numMatchesOnStage = Math.pow(2, bracket.length - stage - 2);
    const stageNumber = numMatchesOnStage === 1 ? "Финал" : `1/${numMatchesOnStage}`;
    if (stageNumber === `1/0.5`) {
      stageNameElement.textContent = "Финал";
    } else if (stage === bracket.length-2) {
      stageNameElement.textContent = "Финал за третье место";
    } else {
      stageNameElement.textContent = `${stageNumber} финала`;
    }

    let prevTableWrappers = []; // Массив для хранения ссылок на предыдущие контейнеры
    let resultInputs = [];

    for (let matchIndex = 0; matchIndex < bracket[stage].length; matchIndex++) {
      const matchElement = document.createElement("div");
      matchElement.className = "match";

      const match = bracket[stage][matchIndex];

      const table = document.createElement("table");
      const row1 = document.createElement("tr");
      const row2 = document.createElement("tr");

      const shieldInfo = getShieldNumberAndLetter(matchIndex);

      const cell1_ = document.createElement("td");
      const target1 = document.createElement("span");
      target1.textContent = `${shieldInfo.number}${shieldInfo.letter}`;
      cell1_.appendChild(target1);
      row1.appendChild(cell1_);

      const cell2_ = document.createElement("td");
      const target2 = document.createElement("span");
      target2.textContent = `${shieldInfo.number+1}${shieldInfo.letter}`;
      cell2_.appendChild(target2);
      row2.appendChild(cell2_);

      const cell1 = document.createElement("td");
      cell1.className = "sportsman-name";
      cell1.textContent = match.home;
      row1.appendChild(cell1);

      const cell2 = document.createElement("td");
      cell2.className = "sportsman-name";
      cell2.textContent = match.away;
      row2.appendChild(cell2);

      const resultInputs1 = [];
      const resultInputs2 = [];

      for (let i = 0; i < 7; i++) {
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        if (i === 6) {
          const totalCell1 = document.createElement("td");
          const totalCell2 = document.createElement("td");
          totalCell1.className = "total-score";
          totalCell2.className = "total-score";
          row1.appendChild(totalCell1);
          row2.appendChild(totalCell2);
        } else {
          const input1 = document.createElement("input");
          const input2 = document.createElement("input");
          input1.className = "result-input";
          input2.className = "result-input";
          cell1.appendChild(input1);
          cell2.appendChild(input2);
          resultInputs1.push(input1);
          resultInputs2.push(input2);
          row1.appendChild(cell1);
          row2.appendChild(cell2);
        }
      }

      resultInputs.push(resultInputs1, resultInputs2);

      table.appendChild(row1);
      table.appendChild(row2);
      matchElement.appendChild(table);

      const tableWrapper = document.createElement("div");
      tableWrapper.className = "table-wrapper";
      tableWrapper.appendChild(table);

      stageContainer.appendChild(matchElement);

      if (matchIndex === 0) {
        prevTableWrappers[stage] = tableWrapper;
        const tempMatch = document.createElement("div");
        tempMatch.appendChild(stageNameElement);
        tempMatch.appendChild(tableWrapper);
        tableWrapper.style.marginTop = "20px";
        tableWrapper.style.marginBottom = "50px";
        matchElement.appendChild(tempMatch);
      } else {
         tableWrapper.style.marginBottom = "50px";
         matchElement.appendChild(tableWrapper);
      }

      matchElement.addEventListener("input", () => {
        let totalHomeScore = 0;
        let totalAwayScore = 0;

        const totalCell1 = row1.querySelector(".total-score");
        const totalCell2 = row2.querySelector(".total-score");

        const winner = handleMatchInput(match, resultInputs1, resultInputs2, totalCell1, totalCell2);
        console.log(winner);

        if (bracket[stage]) {
          const nextStageMatches = bracket[stage + 1];
          const matchIndexInNextStage = Math.floor(matchIndex / 2);
          const nextStageMatch = nextStageMatches[matchIndexInNextStage];


          const nextStageTable = stageContainer.querySelector("table");
          const nextStageRows = nextStageTable.querySelectorAll("tr");

          const allResultsFilled =
            resultInputs1.every((input) => input.value.trim() !== "") &&
            resultInputs2.every((input) => input.value.trim() !== "");

          if (allResultsFilled) {
            const nextStageContainer = stageContainer.nextElementSibling;
            if (nextStageContainer && nextStageContainer.classList.contains("stage")) {
              const nextStageMatchesForUpdate = nextStageMatches.filter(
                (_, index) => index % 2 === matchIndexInNextStage % 2
              );

              const winnerCellIndex = matchIndex % 2 === 0 ? 0 : 1;

              moveWinnerToNextStage(nextStageMatch, winner);
              updateNextStageTable(nextStageContainer, matchIndexInNextStage, winner, winnerCellIndex);
            }
          }
        }
      });

      if (stage === bracket.length - 1) {
        finalStageContainer.appendChild(stageContainer);
      } else if (stage === bracket.length - 2) {
        thirdPlaceFinalContainer.appendChild(stageContainer);
      } else {
        bracketContainer.appendChild(stageContainer);
      }
    }
  }
  const finalFinalStageContainer = document.createElement("div");
  finalFinalStageContainer.className = "final";

  finalFinalStageContainer.appendChild(finalStageContainer);
  finalFinalStageContainer.appendChild(thirdPlaceFinalContainer);
  bracketContainer.appendChild(finalFinalStageContainer);
}


const teams = ["Вася Пупкин", "Иван Голунов","Даша Тишкина", "Полина Пельменова",
                "fkmvklf LKDCM", "Pupka Zaluova", "Иван Петров", "Петр Иванов",
                 "fkmvklf LKDCM", "Pupka Zaluova", "Иван Петров", "Петр Иванов"];
//                 "зАЛУПА", "ГОВНО", "ЖОПА", "ВАся Иванов"];
const maxStages = 4;
const playoffBracket = generatePlayoffBracket(maxStages, teams);
displayBracket(playoffBracket);

