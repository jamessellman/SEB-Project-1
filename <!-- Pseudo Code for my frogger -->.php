<!-- Pseudo Code for my frogger -->
<!------------------ HTML ----------------------------------->
<!-- create a header with h1 (done)-->
<!-- create a div for score, highscore and lives (done)-->
<!-- create elements for score highscore and lives most likely a <P> (done)-->
<!-- create a div container for the grid (done)-->
<!-- create a div for start button and sound button (done) -->
<!-- create a start button (done)-->
<!-- create a toggle sound button (done)-->

<!---------------- JAVASCRIPT ------------------------------>
<!-- grab grid container and put it in a const (done)-->
<!-- make nesscary styling in CSS most likely for grid 10x10 (done)-->
<!-- create conts for cellCount, width and cells for the next function to create a grid (done)-->
<!-- make a function with a loop that will push cells to the grid div (done)-->
<!-- create a function to add player character (done)-->
<!-- create a function to remove player character (done)-->
<!-- create a function to handle key presses that will make player move and set boundarys (done) -->
<!-- add styling to grid to divide playable area with start and end zones (done) -->
<!-- add more styling to decide which rows will have moving hazards and death zones (done) -->
<!-- create function to add hazards(something like a car) (done) -->
<!-- create a function that will handle if player or hazard enter the same cell, to remove player (done) -->
<!-- hazards will move across boards using incriments and find a way to make this happen automatically on a timer , ie every 2 seconds move left one cell -->
<!-- timings for hazards -->

<!--  create a function to the start game-->
<!-- lives & display lives -->
<!--  create a function that will allow the player to scoere 10 points every time the player moves a row forward score & display score-->
<!-- dymanically display and update the score -->
<!-- store highscore and compare to player -->
<!-- create an end game function and displays player score on screen -->
<!-- reset game function -->
<!-- how to play window -->
<!-- sound effects and playlist -->

<!---------------------- CSS --------------------------->
<!-- set up standard styling ie border & box sizing (done) -->
<!-- set up grid with styling from example (done) -->
<!-- set up grid.div width height & border (done)-->
<!-- style backgrounds -->



<!-- function moveSharkRowOne(interval, row) {
  sharkTimer = setInterval(() => {
    removeShark(row);
    if (row.includes(88)) {
      //CHANGE THE STOP CRITERA! 
      row = [86, 83, 80];
    } else {
      console.log(sharkRowOne);
      row = row.map((element) => {
        return (element += 1);
      });
    }

    addShark(row);
  }, interval);
}
moveSharkRowOne(1000, sharkRowOne); -->
<!-- sharkrowOne = { start : [1,2,3], end: [5,6,7] }
function(interval, row) { if ( row.current.includes(row.end): // set row.current = row.start }
sharkrowOne = { start : [1,2,3], end: [5,6,7] , current: [1,2,3]} -->

<!-- //-----------------VARIABLES FOR GRID-----------------//
const grid = document.querySelector(".grid");
const width = 9;
const cellCount = width * 10;
const cells = [];
let playerCurrentPosition = 85;
//-----------------VARIABLES FOR OBJECTS THAT DO NOT MOVE--------------//
const lavaPositions = [36, 37, 39, 40, 41, 43, 44, 63, 65, 67, 69, 71];
const beachPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const coralPositions = [81, 82, 83, 84, 85, 86, 87, 88, 89];
//---------------ARRAYS FOR MOVEABLE OBJECTS---------------------//
let sharkRowOne = [72, 75, 78];
let sharkRowTwo = [56, 59, 62];
let sharkRowThree = [27, 29, 31, 33];
let sharkRowFour = [9, 12, 15];
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
  addShark(sharkRowOne);
  addShark(sharkRowTwo);
  addShark(sharkRowThree);
  addShark(sharkRowFour);
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
function moveSharkRowOne(interval) {
  sharkTimer = setInterval(() => {
    removeShark(sharkRowOne);
    if (sharkRowOne.includes(80)) {
      sharkRowOne = [72, 75, 78];
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
    if (sharkRowTwo.includes(54)) {
      sharkRowTwo = [56, 59, 62];
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
    if (sharkRowThree.includes(35)) {
      sharkRowThree = [27, 30, 33];
    } else {
      sharkRowThree = sharkRowThree.map((element) => {
        return (element += 1);
      });
    }
    addShark(sharkRowThree);
    impact();
  }, interval);
}
function moveSharkRowFour(interval) {
  sharkTimer4 = setInterval(() => {
    removeShark(sharkRowFour);
    if (sharkRowFour.includes(17)) {
      sharkRowFour = [9, 12, 15];
    } else {
      sharkRowFour = sharkRowFour.map((element) => {
        return (element += 1);
      });
    }
    addShark(sharkRowFour);
    impact();
  }, interval);
}

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
  moveSharkRowOne(1000);
  moveSharkRowTwo(750);
  moveSharkRowThree(500);
  moveSharkRowFour(250);
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
startButton.addEventListener("click", startGame); -->
