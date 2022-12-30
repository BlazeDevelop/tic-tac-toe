const cells = document.querySelectorAll('td');
let currentPlayer = 'cross';

for (const cell of cells) {
  cell.addEventListener('click', function(event) {
    if (event.target.classList.length === 0) {
      event.target.classList.add(currentPlayer);
      event.target.style.backgroundImage = `url('${currentPlayer}.png')`;
      event.target.style.backgroundSize = 'cover';
      if (checkForWin()) {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();
      } else if (checkForDraw()) {
        alert('It\'s a draw!');
        resetGame();
      } else {
        currentPlayer = (currentPlayer === 'cross') ? 'circle' : 'cross';
      }
    }
  });
}

function checkForWin() {
  // check rows
  if (cells[0].classList.contains(currentPlayer) && cells[1].classList.contains(currentPlayer) && cells[2].classList.contains(currentPlayer)) {
    return true;
  } else if (cells[3].classList.contains(currentPlayer) && cells[4].classList.contains(currentPlayer) && cells[5].classList.contains(currentPlayer)) {
    return true;
  } else if (cells[6].classList.contains(currentPlayer) && cells[7].classList.contains(currentPlayer) && cells[8].classList.contains(currentPlayer)) {
    return true;
  }
  // check columns
  if (cells[0].classList.contains(currentPlayer) && cells[3].classList.contains(currentPlayer) && cells[6].classList.contains(currentPlayer)) {
    return true;
  } else if (cells[1].classList.contains(currentPlayer) && cells[4].classList.contains(currentPlayer) && cells[7].classList.contains(currentPlayer)) {
    return true;
  } else if (cells[2].classList.contains(currentPlayer) && cells[5].classList.contains(currentPlayer) && cells[8].classList.contains(currentPlayer)) {
    return true;
  }
  // check diagonals
  if (cells[0].classList.contains(currentPlayer) && cells[4].classList.contains(currentPlayer) && cells[8].classList.contains(currentPlayer)) {
    return true;
  } else if (cells[2].classList.contains(currentPlayer) && cells[4].classList.contains(currentPlayer) && cells[6].classList.contains(currentPlayer)) {
    return true;
  }
  return false;
}

function checkForDraw() {
  for (const cell of cells) {
    if (cell.classList.length === 0) {
      return false;
    }
  }
  return true;
}

function resetGame() {
  for (const cell of cells) {
    cell.classList.remove('cross', 'circle');
    cell.style.backgroundImage = '';
  }
  currentPlayer = 'cross';
}