//-----------------VARIABLES FOR GRID-----------------//
const grid = document.querySelector(".grid");
const width = 9;
const cellCount = width * 10;
const cells = [];
let playerCurrentPosition = 85;
//-----------------VARIABLES FOR OBJECTS THAT DO NOT MOVE--------------//
const lavaPositions = [36, 37, 39, 40, 41, 43, 44, 63, 65, 67, 69, 71];
const beachPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const coralPositions = [81, 82, 83, 84, 85, 86, 87, 88, 89];
//---------------OBJECT FOR MOVEABLE OBJECTS---------------------//

let sharkRowOne = {
  start: [72, 75, 78],
  current: [72, 75, 78],
  end: 80,
};
let sharkRowTwo = {
  start: [54, 57, 60],
  current: [54, 57, 60],
  end: 62,
};
let sharkRowThree = {
  start: [27, 30, 33],
  current: [27, 30, 33],
  end: 35,
};
let sharkRowFour = {
  start: [9, 12, 15],
  current: [9, 12, 15],
  end: 17,
};

// -------------TIMER VARIABLES--------------------------------//
let sharkTimer = null;
let sharkTimer2 = null;
let sharkTimer3 = null;
let sharkTimer4 = null;
//--------------VARIABLES FOR LIVES AND SCORES-----------------//
let playerScore = 0;
let lives = 3;
// ---------------------DOM GRABBERS----------------------//
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
livesDisplay.innerText = 3;
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const restartButton = document.getElementById("restart");
const highScoreDisplay = document.getElementById("highscore");
let highScore = localStorage.getItem("high-score");

//--------------VARIABLES FOR INTRO AND EXIT PAGES---------------//
// const introPage = document.getElementById("intro-page");

//----------------FUNCTION TO CREATE GRID----------------------//
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement("div");
    // cell.innerText = i;
    grid.appendChild(cell);
    cells.push(cell);
  }
  addPlayer(playerCurrentPosition);
  addLava(lavaPositions);
  addBeach(beachPositions);
  // addCoral(coralPositions);
  addShark(sharkRowOne.start);
  addShark(sharkRowTwo.start);
  addShark(sharkRowThree.start);
  addShark(sharkRowFour.start);
}
createGrid();
//-----------------FUNCTIONS TO ADD & REMOVE PLAYER---------------------//
function addPlayer(playerCurrentPosition) {
  cells[playerCurrentPosition].classList.add("player");
}
function removePlayer(playerCurrentPosition) {
  cells[playerCurrentPosition].classList.remove("player");
}
//-------------------FUNCTIONS TO ADD IMMOVABLE OBJECTS-------------------//
function addLava(lavaPositions) {
  for (let i = 0; i < lavaPositions.length; i++) {
    cells[lavaPositions[i]].classList.add("lava");
  }
}
function addBeach(beachPositions) {
  for (let i = 0; i < beachPositions.length; i++) {
    cells[beachPositions[i]].classList.add("beach");
  }
}
function addCoral(coralPositions) {
  for (let i = 0; i < coralPositions.length; i++) {
    cells[coralPositions[i]].classList.add("coral");
  }
}
//------------FUNCTIONS TO ADD SHARKS AND REMOVE SHARKS---------------------//
function addShark(sharkRow) {
  for (let i = 0; i < sharkRow.length; i++) {
    cells[sharkRow[i]].classList.add("shark");
  }
}
function removeShark(sharkRow) {
  for (let i = 0; i < sharkRow.length; i++) {
    cells[sharkRow[i]].classList.remove("shark");
  }
}

//---------------FUNCTION TO HANDLE PLAYER AND OBJECT BEING IN THE SAME CELL-----//
function impact() {
  if (
    (cells[playerCurrentPosition].classList.contains("player") &&
      cells[playerCurrentPosition].classList.contains("shark")) ||
    cells[playerCurrentPosition].classList.contains("lava")
  ) {
    removePlayer(playerCurrentPosition);
    console.log("hit obsticle");
    playerCurrentPosition = 85;
    addPlayer(playerCurrentPosition);
    lives--;
    livesDisplay.innerText = lives;
  }
  if (lives === 0) {
    endGame();
  }
}

//----------- FUNCTIONS TO MAKE SHARKS MOVE--------------------------------------//
function moveSharkRow(interval, sharkRow) {
  sharkTimer = setInterval(() => {
    removeShark(sharkRow.current);
    if (sharkRow.current.includes(sharkRow.end)) {
      sharkRow.current = sharkRow.start;
    } else {
      console.log(sharkRow);
      sharkRow.current = sharkRow.current.map((element) => {
        return (element += 1);
      });
    }
    addShark(sharkRow.current);
    impact();
  }, interval);
}

// function moveSharkRowTwo(interval) {
//   sharkTimer2 = setInterval(() => {
//     removeShark(sharkRowTwo);
//     if (sharkRowTwo.includes(54)) {
//       sharkRowTwo = [56, 59, 62];
//     } else {
//       sharkRowTwo = sharkRowTwo.map((element) => {
//         return (element -= 1);
//       });
//     }
//     addShark(sharkRowTwo);
//     impact();
//   }, interval);
// }

// function moveSharkRowThree(interval) {
//   sharkTimer3 = setInterval(() => {
//     removeShark(sharkRowThree);
//     if (sharkRowThree.includes(35)) {
//       sharkRowThree = [27, 30, 33];
//     } else {
//       sharkRowThree = sharkRowThree.map((element) => {
//         return (element += 1);
//       });
//     }
//     addShark(sharkRowThree);
//     impact();
//   }, interval);
// }
// function moveSharkRowFour(interval) {
//   sharkTimer4 = setInterval(() => {
//     removeShark(sharkRowFour);
//     if (sharkRowFour.includes(17)) {
//       sharkRowFour = [9, 12, 15];
//     } else {
//       sharkRowFour = sharkRowFour.map((element) => {
//         return (element += 1);
//       });
//     }
//     addShark(sharkRowFour);
//     impact();
//   }, interval);
// }

//------------------FUNCTION TO HANDLE SCORE -----------------------------//
function handleScore(event) {
  if (event.keyCode === 38) {
    playerScore = playerScore + 100;
    scoreDisplay.innerText = playerScore;
  }
  if (event.keyCode == 40) {
    playerScore = playerScore - 100;
    scoreDisplay.innerText = playerScore;
  }
}
// ----------------FUNCTION TO STARTGAME-------------------------------//
function startGame() {
  moveSharkRow(1000, sharkRowOne);
  moveSharkRow(750, sharkRowTwo);
  moveSharkRow(500, sharkRowThree);
  moveSharkRow(250, sharkRowFour);
  // moveSharkRowOne(1000);
  // moveSharkRowTwo(750);
  // moveSharkRowThree(500);
  // moveSharkRowFour(250);
  highScoreDisplay.innerText = highScore;
}

// ------------------FUNCTION TO END GAME-------------------------------//
function endGame() {
  clearInterval(sharkTimer);
  clearInterval(sharkTimer2);
  clearInterval(sharkTimer3);
  clearInterval(sharkTimer4);
  removeShark(sharkRowOne);
  removeShark(sharkRowTwo);
  removeShark(sharkRowThree);
  removeShark(sharkRowFour);
  removePlayer(playerCurrentPosition);
  loseModel();
  console.log("End Game called");
  // alert(
  //   ` You lose! Your score was ${playerScore}. You cannot set a highscore if you do not reach safety!`
  // );
}
// ------------------FUNCTION TO RESET GAME--------------------------//
function resetGame() {
  playerScore = 0;
  scoreDisplay.textContent = playerScore;
  lives = 3;
  livesDisplay.textContent = lives;
  removePlayer(playerCurrentPosition);
  playerCurrentPosition = 85;
  addPlayer(playerCurrentPosition);
  startGame();
  highScoreDisplay.innerText = highScore;
}
// -----------------FUNCTION TO WIN GAME-----------------------------//
function winGame() {
  removePlayer(playerCurrentPosition);
  clearInterval(sharkTimer);
  clearInterval(sharkTimer2);
  clearInterval(sharkTimer3);
  clearInterval(sharkTimer4);
  removeShark(sharkRowOne);
  removeShark(sharkRowTwo);
  removeShark(sharkRowThree);
  removeShark(sharkRowFour);
  winModel();
  localStorage.getItem("high-score");
  if (playerScore > highScore) {
    localStorage.setItem("high-score", playerScore);
  }
}

//--------------FUNCTION FOR ADDING AND REMOVING OPENING MODAL-------------------//

const openingModal = document.getElementById("opening-modal");
window.onload = function openModel() {
  openingModal.style.display = "block";
};
function closeOpeningModal() {
  openingModal.style.display = "none";
}
startButton.addEventListener("click", closeOpeningModal);
// ------------FUNCTION TO ADD AND REMOVING LOSING MODAL-------------------------//
let loseScore = document.getElementById("modal-lose-score");
const loseModal = document.getElementById("lose-modal");
function loseModel() {
  loseModal.style.display = "block";
  loseScore.innerText = ` You lose! Your score was ${playerScore}. You cannot set a highscore if you do not reach safety!`;
}
function closeLosingModal() {
  loseModal.style.display = "none";
  resetGame();
}
resetButton.addEventListener("click", closeLosingModal);

//-----------FUNCTION TO ADD AND REMOVE WINNING MODAL----------------//
const winScore = document.getElementById("modal-win-score");
const winModal = document.getElementById("win-modal");
function winModel() {
  winModal.style.display = "block";
  winScore.innerText = ` Your score was ${playerScore} but the high score is ${highScore}`;
}
function closeWinModal() {
  winModal.style.display = "none";
  resetGame();
}
restartButton.addEventListener("click", closeWinModal);

//-FUNCTION TO ALLOW PLAYER TO MOVE & OUTLINE BORDERS THAT PLAYER CAN MOVE WITHIN--//
function handleKeyDown(event) {
  removePlayer(playerCurrentPosition);
  if (event.keyCode === 37 && playerCurrentPosition % width !== 0) {
    playerCurrentPosition--;
  } else if (event.keyCode === 38 && playerCurrentPosition >= width) {
    playerCurrentPosition -= width;
  } else if (
    event.keyCode === 39 &&
    playerCurrentPosition % width !== width - 1
  ) {
    playerCurrentPosition++;
  } else if (
    event.keyCode === 40 &&
    playerCurrentPosition < cellCount - width
  ) {
    playerCurrentPosition += width;
  }
  addPlayer(playerCurrentPosition);
  console.log(`player at position:${playerCurrentPosition}`);
  impact();
  if (cells[playerCurrentPosition].classList.contains("beach")) {
    winGame();
  }
}

// --------------------EVENT LISTENERS----------------------------------//
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keydown", handleScore);
startButton.addEventListener("click", startGame);
