console.log('combosUI.js: hi');

let p_combo = document.getElementById("p_combo");
let p_saved_combos = document.getElementById('saved-combos');
let btn_generate = document.getElementById('button-generate');
let btn_save_combo = document.getElementById('button-save-combo');

setupLocalStorage();

function setupLocalStorage() {
  let combos = getCombosAsDict();

  if (combos === null) {
    console.log("combosUI: no combos");
  } else {
    let listOfCombos = getCombosAsList();
    p_saved_combos.innerHTML = prettyPrint(listOfCombos);
  }
}

function prettyPrint(listOfCombos) {
  let output = '';
  for (let i = 0, n = listOfCombos.length; i < n; i++) {
    output += listOfCombos[i] + '<br><br>'
  }

  return output;
}

btn_generate.addEventListener("click", () => {
  let input = document.getElementById("input_quantity").value;
  let numberOfMoves = parseInt(input);

  if (numberOfMoves === 0) return;

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

  let listOfMoves = combo.toString()
  let output = listOfMoves.replaceAll(',', ', ');
  p_combo.innerText = output;

  btn_save_combo.style.visibility = 'visible';
});

btn_save_combo.addEventListener("click", () => {
  let generated_combo = p_combo.innerText;

  if (generated_combo.length) {
    saveCombo(generated_combo);

    let listOfCombos = getCombosAsList();
    p_saved_combos.innerHTML = prettyPrint(listOfCombos);
  }  
});