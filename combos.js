let p_combo = document.getElementById("p_combo");
let btn_generate = document.getElementById("btn_generate");

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
