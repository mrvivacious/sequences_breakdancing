// √ Store moves in an array
// √ Add input field to enter moves
// √ Add button to save moves
// √ Load moves from local storage
// √ Save moves to local storage
// √ Store move in a dictionary to make things easier

// [frontend] Save combos button
// [frontend] ui layer to make moves/combos look like tiles
//  + add an X in each tile to prompt deletion

// What happens when user deletes a move that is saved
//  in a combo? Keep the combo? Delete the move from that combo?
//  That would be an expensive search but I dont think any user will
//  reach a number of combos where their system can't locate a move lmao

// A way for user to create and add their own combo (comma separated moves format)
// Save combos to local storage
// Pretty print moves and combos
// Prevent users adding duplicates
//  + when a duplicate is added, highlight the move so the user is aware
// Show the moves as tiles with "X" in the corner for move deletion
// Ability to select which moves to use in the combo and which to leave out
// + by default have every move available. Can use dictionary for this functionality
// Export moves and combos as txt file? GitHub pages supports???

// BONUS: Achievement system for moves added and combos saved (use a dictionary?)
// put ads for monie

console.log("movesUI.js: hi");

let p_moves = document.getElementById("p_moves");
let btn_save = document.getElementById("btn_save");

setupLocalStorage();

function setupLocalStorage() {
  let moves = getMovesAsDict();

  if (moves === null) {
    console.log("no moves");
  } else {
    let listOfMoves = getMovesAsList();
    let output = listOfMoves.toString().replaceAll(',', ', ');
    p_moves.innerText = output;
  }
}

btn_save.addEventListener("click", () => {
  let input = document.getElementById("input_move");
  let move = input.value;

  if (move.length > 0) {
    console.log(move);

    // get all moves and add this move to all moves and save
    saveMove(move);

    let listOfMoves = getMovesAsList();
    let output = listOfMoves.toString().replaceAll(',', ', ');
    p_moves.innerText = output;
    document.getElementById("input_move").value = "";
  }
});
