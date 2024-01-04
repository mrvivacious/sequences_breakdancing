// CRUD
function saveMove(move) {
  let moves = getMovesAsDict(); // todo needs testing

  if (moves === null) {
    let initialMovesDict = { [move]: true };
    setMovesWithDict(initialMovesDict);
  } else {
    moves[move] = true;
    setMovesWithDict(moves);
  }
}

function getMovesAsDict() {
  // https://stackoverflow.com/questions/23805377
  return JSON.parse(localStorage.getItem("moves"));
}

function getMovesAsList() {
  if (getMovesAsDict() === null) {
    return null;
  }
  return Object.keys(getMovesAsDict());
}

function setMovesWithDict(movesDict) {
  localStorage.setItem("moves", JSON.stringify(movesDict));
}

function deleteMoves(moveToDelete) {
  let moves = getMovesAsDict();

  delete moves[moveToDelete];
  setMovesWithDict(moves);
}
