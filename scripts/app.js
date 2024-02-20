//-----------------VARIABLES FOR GRID-----------------//
const grid = document.querySelector(".grid");
const width = 10;
const cellCount = width * width;
const cells = [];
let playerCurrentPosition = 94;
//-----------------VARIABLES FOR OBJECTS THAT DO NOT MOVE--------------//
const lavaPositions = [
  40, 41, 42, 45, 46, 48, 9, 19, 29, 39, 49, 59, 69, 79, 89, 99,
];
const beachPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const coralPositions = [90, 91, 92, 93, 94, 95, 96, 97, 98];
//---------------ARRAYS FOR MOVEABLE OBJECTS---------------------//
let sharkRowOne = [86, 83, 80];
let sharkRowTwo = [62, 65, 68];
let sharkRowThree = [26, 23, 20];
// -------------TIMER VARIABLES--------------------------------//
let sharkTimer = null;
let sharkTimer2 = null;
let sharkTimer3 = null;
//--------------VARIABLES FOR LIVES AND SCORES-----------------//
let playerScore = 0;
let lives = 3;
// ---------------------DOM GRABBERS----------------------//
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
livesDisplay.innerText = 3;
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

//----------------FUNCTION TO CREATE GRID----------------------//
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement("div");
    cell.innerText = i;
    grid.appendChild(cell);
    cells.push(cell);
  }
  addPlayer(playerCurrentPosition);
  addLava(lavaPositions);
  addBeach(beachPositions);
  // addCoral(coralPositions);
  addShark(sharkRowOne);
  addShark(sharkRowTwo);
  addShark(sharkRowThree);
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
    playerCurrentPosition = 94;
    addPlayer(playerCurrentPosition);
    lives--;
    livesDisplay.innerText = lives;
  }
  if (lives === 0) {
    endGame();
  }
}

//----------- FUNCTIONS TO MAKE SHARKS MOVE--------------------------------------//
function moveSharkRowOne(interval) {
  sharkTimer = setInterval(() => {
    removeShark(sharkRowOne);
    if (sharkRowOne.includes(88)) {
      sharkRowOne = [86, 83, 80];
    } else {
      sharkRowOne = sharkRowOne.map((element) => {
        return (element += 1);
      });
    }
    addShark(sharkRowOne);
    impact();
  }, interval);
}

function moveSharkRowTwo(interval) {
  sharkTimer2 = setInterval(() => {
    removeShark(sharkRowTwo);
    if (sharkRowTwo.includes(66)) {
      sharkRowTwo = [62, 65, 68];
    } else {
      sharkRowTwo = sharkRowTwo.map((element) => {
        return (element -= 1);
      });
    }
    addShark(sharkRowTwo);
    impact();
  }, interval);
}

function moveSharkRowThree(interval) {
  sharkTimer3 = setInterval(() => {
    removeShark(sharkRowThree);
    if (sharkRowThree.includes(28)) {
      sharkRowThree = [26, 23, 20];
    } else {
      sharkRowThree = sharkRowThree.map((element) => {
        return (element += 1);
      });
    }
    addShark(sharkRowThree);
    impact();
  }, interval);
}

//------------------FUNCTION TO HANDLE SCORE -----------------------------//
function handleScore(event) {
  if (event.keyCode === 38) {
    playerScore = playerScore + 100;
    scoreDisplay.innerText = playerScore;
  }
}
// ----------------FUNCTION TO STARTGAME-------------------------------//
function startGame() {
  moveSharkRowOne(2000);
  moveSharkRowTwo(1500);
  moveSharkRowThree(1000);
}

// ------------------FUNCTION TO END GAME-------------------------------//
function endGame() {
  clearInterval(sharkTimer);
  clearInterval(sharkTimer2);
  clearInterval(sharkTimer3);
  removeShark(sharkRowOne);
  removeShark(sharkRowTwo);
  removeShark(sharkRowThree);
  removePlayer(playerCurrentPosition);
  console.log("End Game called");
}
// endButton = document.getElementById("sound");
// endButton.addEventListener("click", endGame);
// ------------------FUNCTION TO RESET GAME--------------------------//
function resetGame() {
  playerScore = 0;
  scoreDisplay.textContent = playerScore;
  lives = 3;
  livesDisplay.textContent = lives;
  removePlayer(playerCurrentPosition);
  playerCurrentPosition = 94;
  addPlayer(playerCurrentPosition);
  startGame();
}
// -----------------FUNCTION TO WIN GAME-----------------------------//
function winGame() {
  clearInterval(sharkTimer);
  clearInterval(sharkTimer2);
  clearInterval(sharkTimer3);
  removeShark(sharkRowOne);
  removeShark(sharkRowTwo);
  removeShark(sharkRowThree);
  alert(`You Win. Your Score is ${playerScore}`);
}
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
resetButton.addEventListener("click", resetGame);
