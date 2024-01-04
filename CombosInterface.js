// CRUD

function saveCombo(combo) {
  let combos = getCombosAsDict();

  if (combos === null) {
    let initialComboDict = { [combo]: true };
    setCombosWithDict(initialComboDict);
  } else {
    combos[combo] = true;
    setCombosWithDict(combos);
  }
}

function getCombosAsDict() {
  return JSON.parse(localStorage.getItem("combos"));
}

function getCombosAsList() {
  return Object.keys(getCombosAsDict());
}

function setCombosWithDict(combosDict) {
  localStorage.setItem("combos", JSON.stringify(combosDict));
}

function deleteCombo(comboToDelete) {
  let combos = getCombosAsDict();

  delete combos[comboToDelete];
  setCombosWithDict(combos);
}

/* 

user can generate combos
save a combo (_createCombo)  √
view saved combos (_readCombos) √
delete a saved combo (_deleteCombo) √

update? ie. remove a move from a combo _editCombo? maybe a future feature tbh.

*/
