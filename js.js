// √ Store moves in an array
// √ Add input field to enter moves
// √ Add button to save moves
// Load moves from local storage
// Save moves to local storage
// Save combos to local storage
// Pretty print moves and combos
// Maybe stores moves in a dictionary to help prevent users adding duplicates
//  + when a duplicate is added, highlight the move so the user is aware
// Show the moves as tiles with "X" in the corner for move deletion
// Ability to select which moves to use in the combo and which to leave out
// + by default have every move available. Can use dictionary for this functionality
// Export moves and combos as txt file? GitHub pages supports???

// BONUS: Achievement system for moves added and combos saved (use a dictionary?)
// put ads for moneti Yeah, right.

console.log("js loaded");

// on page load
// check for moves in storage
// if moves exist, load them onto the page
// if moves are empty, save an empty dict and show "no moves yet" text

setupLocalStorage();

// TODO untested
function setupLocalStorage() {
  let movesFromStorage = localStorage.getItem("moves");

  if (movesFromStorage === null) {
    console.log("no moves");
  } else {
    movesFromStorage = JSON.parse(movesFromStorage);
    let moves = Object.keys(movesFromStorage);
    document.getElementById("p_moves").innerText = moves;
    console.log(movesFromStorage);
  }
}

// let moves = ["1 step", "2 step", "toprock basic", "toprock 3 step", "backspin", "turtle freeze"]; // todo: grab from local storage

function saveMoveToLocalStorage(aMove) {
  let movesFromStorage = localStorage.getItem("moves");

  if (movesFromStorage === null) {
    let moveObject = {
      [aMove]: true,
    };
    let moveData = JSON.stringify(moveObject);

    localStorage.setItem("moves", moveData);
  } else {
    let moves = JSON.parse(movesFromStorage);
    moves[aMove] = true;

    let moveData = JSON.stringify(moves);

    localStorage.setItem("moves", moveData);
  }
}

let p_moves = document.getElementById("p_moves");
let p_combo = document.getElementById("p_combo");
let btn_generate = document.getElementById("btn_generate");
let btn_save = document.getElementById("btn_save");

btn_save.addEventListener("click", () => {
  let input = document.getElementById("input_move");
  let move = input.value;

  if (move.length > 0) {
    console.log(move);

    // get all moves and add this move to all moves and save
    saveMoveToLocalStorage(move);

    let movesFromStorage = JSON.parse(localStorage.getItem("moves"));
    let keys = Object.keys(movesFromStorage);

    p_moves.innerText = keys;
    document.getElementById("input_move").value = "";
  }
});

// Put this in its own file...
btn_generate.addEventListener("click", () => {
  let input = document.getElementById("input_quantity").value;
  let numberOfMoves = parseInt(input);

  let combo = [];

  for (let i = 0, n = numberOfMoves; i < n; i++) {
    let movesFromStorage = JSON.parse(localStorage.getItem("moves"));
    if (movesFromStorage === null) {
      return;
    }

    let moveList = Object.keys(movesFromStorage);
    let randomNumber = Math.floor(Math.random() * moveList.length);
    let randomMove = moveList[randomNumber];

    combo.push(randomMove);
  }

  p_combo.innerText = combo;
});
