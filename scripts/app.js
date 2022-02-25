/* eslint-disable no-undef */

const playGame = document.getElementById('playGame')
const reset = document.getElementById('reset')
const howToPlay = document.getElementById('howToPlay')
const evaluation = document.getElementById('evaluation')
const kissingKings = document.querySelector('.kissingKings')
playGame.addEventListener('click', playGameFunction)
reset.addEventListener('click', resetFunction)
howToPlay.addEventListener('click', howToPlayFunction)

//Create the playing board
const grid = document.querySelector('.grid')
const width = 12;
const numberOfCells = width * width
const cells = []
function createGrid() {
  for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('id', i);
    cells.push(cell);
    grid.appendChild(cell);
  }
}
createGrid();
const playingBoardArray = []
function changeClass() {
  for (let i = 0; i < numberOfCells; i++) {
    if (parseInt(cells[i].id) === 0 ||
      parseInt(cells[i].id) === 1 ||
      parseInt(cells[i].id) === 2 ||
      parseInt(cells[i].id) === 3 ||
      parseInt(cells[i].id) === 4 ||
      parseInt(cells[i].id) === 5 ||
      parseInt(cells[i].id) === 6 ||
      parseInt(cells[i].id) === 7 ||
      parseInt(cells[i].id) === 8 ||
      parseInt(cells[i].id) === 9 ||
      parseInt(cells[i].id) === 10 ||
      parseInt(cells[i].id) === 11 ||
      parseInt(cells[i].id) === 12 ||
      parseInt(cells[i].id) === 13 ||
      parseInt(cells[i].id) === 14 ||
      parseInt(cells[i].id) === 15 ||
      parseInt(cells[i].id) === 16 ||
      parseInt(cells[i].id) === 17 ||
      parseInt(cells[i].id) === 18 ||
      parseInt(cells[i].id) === 19 ||
      parseInt(cells[i].id) === 20 ||
      parseInt(cells[i].id) === 21 ||
      parseInt(cells[i].id) === 22 ||
      parseInt(cells[i].id) === 23 ||
      parseInt(cells[i].id) === 24 ||
      parseInt(cells[i].id) === 25 ||
      parseInt(cells[i].id) === 34 ||
      parseInt(cells[i].id) === 35 ||
      parseInt(cells[i].id) === 36 ||
      parseInt(cells[i].id) === 37 ||
      parseInt(cells[i].id) === 46 ||
      parseInt(cells[i].id) === 47 ||
      parseInt(cells[i].id) === 48 ||
      parseInt(cells[i].id) === 49 ||
      parseInt(cells[i].id) === 58 ||
      parseInt(cells[i].id) === 59 ||
      parseInt(cells[i].id) === 60 ||
      parseInt(cells[i].id) === 61 ||
      parseInt(cells[i].id) === 70 ||
      parseInt(cells[i].id) === 71 ||
      parseInt(cells[i].id) === 72 ||
      parseInt(cells[i].id) === 73 ||
      parseInt(cells[i].id) === 82 ||
      parseInt(cells[i].id) === 83 ||
      parseInt(cells[i].id) === 84 ||
      parseInt(cells[i].id) === 85 ||
      parseInt(cells[i].id) === 94 ||
      parseInt(cells[i].id) === 95 ||
      parseInt(cells[i].id) === 96 ||
      parseInt(cells[i].id) === 97 ||
      parseInt(cells[i].id) === 106 ||
      parseInt(cells[i].id) === 107 ||
      parseInt(cells[i].id) === 108 ||
      parseInt(cells[i].id) === 109 ||
      parseInt(cells[i].id) === 118 ||
      parseInt(cells[i].id) === 119 ||
      parseInt(cells[i].id) === 120 ||
      parseInt(cells[i].id) === 121 ||
      parseInt(cells[i].id) === 122 ||
      parseInt(cells[i].id) === 123 ||
      parseInt(cells[i].id) === 124 ||
      parseInt(cells[i].id) === 125 ||
      parseInt(cells[i].id) === 126 ||
      parseInt(cells[i].id) === 127 ||
      parseInt(cells[i].id) === 128 ||
      parseInt(cells[i].id) === 129 ||
      parseInt(cells[i].id) === 130 ||
      parseInt(cells[i].id) === 131 ||
      parseInt(cells[i].id) === 132 ||
      parseInt(cells[i].id) === 133 ||
      parseInt(cells[i].id) === 134 ||
      parseInt(cells[i].id) === 135 ||
      parseInt(cells[i].id) === 136 ||
      parseInt(cells[i].id) === 137 ||
      parseInt(cells[i].id) === 138 ||
      parseInt(cells[i].id) === 139 ||
      parseInt(cells[i].id) === 140 ||
      parseInt(cells[i].id) === 141 ||
      parseInt(cells[i].id) === 142 ||
      parseInt(cells[i].id) === 143 ){
      cells[i].innerHTML = ''
      cells[i].classList.add('bordering')
    } else {
      cells[i].style.color = 'black'
      cells[i].classList.add('playingTile')
      playingBoardArray.push(cells[i])
    }
  }
}
changeClass();
function checkered () {
  playingBoardArray.forEach(element => {
    if ((element.id %  11) === 0){
      element.style.backgroundColor = '#b48862'
    } else if (parseInt(element.id) === 27 ||
      parseInt(element.id) === 31 ||
      parseInt(element.id) === 38 ||
      parseInt(element.id) === 40 ||
      parseInt(element.id) === 42 ||
      parseInt(element.id) === 51 ||
      parseInt(element.id) === 53 ||
      parseInt(element.id) === 57 ||
      parseInt(element.id) === 62 ||
      parseInt(element.id) === 64 ||
      parseInt(element.id) === 68 ||
      parseInt(element.id) === 75 ||
      parseInt(element.id) === 79 ||
      parseInt(element.id) === 81 ||
      parseInt(element.id) === 86 ||
      parseInt(element.id) === 90 ||
      parseInt(element.id) === 92 ||
      parseInt(element.id) === 101 ||
      parseInt(element.id) === 103 ||
      parseInt(element.id) === 105 ||
      parseInt(element.id) === 112 ||
      parseInt(element.id) === 114 ||
      parseInt(element.id) === 116 ||
      parseInt(element.id) === 29 ||
      parseInt(element.id) === 29 ||
      parseInt(element.id) === 29 ||
      parseInt(element.id) === 29 ||
      parseInt(element.id) === 29 ||
      parseInt(element.id) === 29 ||
      parseInt(element.id) === 29 ||
      parseInt(element.id) === 29 ||
      parseInt(element.id) === 29 ||
      parseInt(element.id) === 29
    ){
      element.style.backgroundColor = '#b48862'
    } else {
      element.style.backgroundColor = '#f0d9b5'
    }
  })
}
checkered()
const img = document.createElement('img')
const queenImg = document.createElement('img')
const kingImg = document.createElement('img')
const blackKingImg = document.createElement('img')

//WHITE PAWN
function addPawnImg(arrayNumber) {
  if (cells[arrayNumber].classList.contains('playingTile')) {
    img.src = './sprites/white-pawn.png';
    cells[arrayNumber].appendChild(img)
    cells[arrayNumber].classList.add('whitePawn')
    img.setAttribute('draggable', 'true')
    img.className = 'image whitePawn'
    img.id = 'whitePawns'
  }
}
const randomPawnNum = (Math.floor((Math.random() * 8) + 98))
let newPawnNum = 0
addPawnImg(randomPawnNum);
const pawnImage = document.getElementById('whitePawns')
const pawnPromotingSquaresArray = [] 
let whereThatPawnBe

//Create Audio
const audioApplause = document.querySelector('.applause')
const audioStalemate = document.querySelector('.omgstalemate')
const audioDisappointed = document.querySelector('.disappointed')
function playApplause () {
  audioApplause.src = './sounds/applause.wav'
  audioApplause.play();
}
function playStalemate () {
  audioStalemate.src = './sounds/stalemate.wav'
  audioStalemate.play();
}
function playDisappointed() {
  audioDisappointed.src = './sounds/disappointed.wav'
  audioDisappointed.play();
}



//Drag and Drop for White Pawn
pawnImage.addEventListener('dragstart', function (event) {
  twoSquaresAhead = document.getElementById((parseInt(event.target.parentElement.id) - 24))
  oneSquareAhead = document.getElementById((parseInt(event.target.parentElement.id) - 12))
  startingPawnPosition =  event.target.parentElement

  if (parseInt(event.target.parentElement.id) === randomPawnNum || parseInt(event.target.parentElement.id) === newPawnNum ) {
    if (oneSquareAhead.classList.value === 'playingTile blackKing') {
      return 
    } else {
      twoSquaresAhead.style.opacity = 0.5
      oneSquareAhead.style.opacity = 0.5    
      twoSquaresAhead.classList.add('pawnDropzone')
      oneSquareAhead.classList.add('pawnDropzone')
    }
  } else if (parseInt(event.target.parentElement.id) <= 45 && (parseInt(event.target.parentElement.id) >= 38)) {
    oneSquareAhead.style.opacity = 0.5
    oneSquareAhead.classList.add('pawnDropzone')
  } else {
    event.target.style.opacity = .5;
    oneSquareAhead.classList.add('pawnDropzone')
    oneSquareAhead.style.opacity = 0.5
  }
  dragged = event.target;
  event.target.parentElement.classList.remove('whitePawn')
  setTimeout(() => event.target.className = 'hidden', 0);
}, false);
pawnImage.addEventListener('dragend', function (event) {
  pawnPromotingSquaresArray[0] = cells[pawnDragged - 12]
  pawnPromotingSquaresArray[1] = cells[pawnDragged - 11]
  pawnPromotingSquaresArray[2] = cells[pawnDragged + 1]
  pawnPromotingSquaresArray[3] = cells[pawnDragged + 13]
  pawnPromotingSquaresArray[4] = cells[pawnDragged + 12]
  pawnPromotingSquaresArray[5] = cells[pawnDragged + 11]
  pawnPromotingSquaresArray[6] = cells[pawnDragged - 1]
  pawnPromotingSquaresArray[7] = cells[pawnDragged - 13]

  if (parseInt(event.target.parentElement.id) <= 33 && (parseInt(event.target.parentElement.id) >= 26 && event.target.parentElement.className === 'playingTile whitePawn')) {
    queenImg.src = './sprites/white-queen.png'
    const tileBlackKing = element => element.classList.value === 'playingTile blackKing'
    const tileWhiteKing = element => element.classList.value === 'playingTile whiteKing'
    if (pawnPromotingSquaresArray.some(tileWhiteKing) === true) {
      event.target.parentElement.classList.add('whiteQueen')
      event.target.parentElement.classList.remove('whitePawn')
      event.target.style.opacity = ''
      event.target.style.border = ''
      dragged.parentNode.removeChild(dragged)
      thisWherePawnShouldBe.appendChild(queenImg)
      playApplause();
      window.alert('White Wins!')
    } else if ((pawnPromotingSquaresArray.some(tileBlackKing) === true) && (pawnPromotingSquaresArray.some(tileWhiteKing) === false)) {
      event.target.parentElement.classList.add('whiteQueen')
      event.target.parentElement.classList.remove('whitePawn')
      dragged.parentNode.removeChild(dragged)
      thisWherePawnShouldBe.appendChild(queenImg)
      playDisappointed()
      window.alert('Uh oh! White promoted without White King\'s help. Game is drawn.')
    } else if ((pawnPromotingSquaresArray.some(tileBlackKing) === false) && (pawnPromotingSquaresArray.some(tileWhiteKing) === false)) {
      event.target.parentElement.classList.add('whiteQueen')
      event.target.parentElement.classList.remove('whitePawn')
      dragged.parentNode.removeChild(dragged)
      thisWherePawnShouldBe.appendChild(queenImg)
      playApplause();
      window.alert('White Wins')
    }
  } 
  event.target.parentElement.classList.add('whitePawn')
  twoSquaresAhead.classList.remove('pawnDropzone')
  oneSquareAhead.classList.remove('pawnDropzone')
  twoSquaresAhead.style.opacity = 1;
  oneSquareAhead.style.opacity = 1;
  event.target.classList.remove('hidden')
  dragged.style.opacity = 1
  whereThatPawnBe = event.target

  if (startingPawnPosition === event.target.parentElement) {
    return
  } else if (pawnImage.draggable === true) {
    blackKing.draggable = true
    whiteKing.draggable = false
    pawnImage.draggable = false
  }
  checkForStalemate()
}, false);
document.addEventListener('dragover', function (event) {
  event.preventDefault();
}, false);
document.addEventListener('dragenter', function (event) {
  if (event.target.className === 'playingTile pawnDropzone') {
    event.target.style.border = '3px solid yellow'
  }
}, false);
document.addEventListener('dragleave', function (event) {
  if (event.target.className === 'playingTile pawnDropzone') {
    event.target.style.border = ''
  }
}, false);
document.addEventListener('drop', function (event) {
  event.preventDefault();
  pawnDragged = parseInt(event.target.id)

  if (event.target.className === 'playingTile pawnDropzone') {
    event.target.style.opacity = '';
    event.target.style.border = '';
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
    event.target.classList.remove('pawnDropzone')
    event.target.classList.add('whitePawn')
    oneSquareAhead.classList.remove('pawnDropzone')
    twoSquaresAhead.classList.remove('pawnDropzone')
  }
  thisWherePawnShouldBe = event.target
}, false);

//WHITE KING
  
let whiteKingAvailableSquaresArray = []
function createKing(arrayNumber) {
  kingImg.src = './sprites/white-king.png'
  kingImg.className = 'image'
  cells[arrayNumber].appendChild(kingImg)
  cells[arrayNumber].classList.add('whiteKing')
  kingImg.setAttribute('draggable', 'true')
  kingImg.id = 'whiteKing'
}
const randomWhiteKingNum = (Math.floor((Math.random() * 8) + 110))
createKing(randomWhiteKingNum);
let whiteKing = document.getElementById('whiteKing')
let curWhiteKingPostion

//Drag and Drop for White King
whiteKing.addEventListener('dragstart', function(event) {
  currentWhiteKingPosition = parseInt(event.target.parentElement.id)
  whiteKingAvailableSquaresArray[0] = cells[currentWhiteKingPosition - 12]
  whiteKingAvailableSquaresArray[1] = cells[currentWhiteKingPosition - 11]
  whiteKingAvailableSquaresArray[2] = cells[currentWhiteKingPosition + 1]
  whiteKingAvailableSquaresArray[3] = cells[currentWhiteKingPosition + 13]
  whiteKingAvailableSquaresArray[4] = cells[currentWhiteKingPosition + 12]
  whiteKingAvailableSquaresArray[5] = cells[currentWhiteKingPosition + 11]
  whiteKingAvailableSquaresArray[6] = cells[currentWhiteKingPosition - 1]
  whiteKingAvailableSquaresArray[7] = cells[currentWhiteKingPosition - 13]
  const topTop = parseInt(whiteKingAvailableSquaresArray[0].id) - 12
  const topMidRight = parseInt(whiteKingAvailableSquaresArray[1].id) - 12
  const topRight = parseInt(whiteKingAvailableSquaresArray[1].id) - 11
  const rightMidTop = parseInt(whiteKingAvailableSquaresArray[1].id) + 1
  const rightRight = parseInt(whiteKingAvailableSquaresArray[2].id) + 1
  const rightmidBottom = parseInt(whiteKingAvailableSquaresArray[3].id) + 1
  const bottomRight = parseInt(whiteKingAvailableSquaresArray[3].id) + 13
  const bottomMidRight = parseInt(whiteKingAvailableSquaresArray[3].id) + 12
  const bottomBottom = parseInt(whiteKingAvailableSquaresArray[4].id) + 12
  const bottomMidLeft = parseInt(whiteKingAvailableSquaresArray[5].id) + 12
  const bottomLeft = parseInt(whiteKingAvailableSquaresArray[5].id) + 11
  const leftMidBottom = parseInt(whiteKingAvailableSquaresArray[5].id) - 1
  const leftLeft = parseInt(whiteKingAvailableSquaresArray[6].id) - 1
  const leftMidTop = parseInt(whiteKingAvailableSquaresArray[7].id) - 1
  const topLeft = parseInt(whiteKingAvailableSquaresArray[7].id) - 13
  const topMidLeft = parseInt(whiteKingAvailableSquaresArray[7].id) - 12
  whiteKingAvailableSquaresArray.forEach(element => {
    if (element.className === 'playingTile'){
      element.style.opacity = .5;
      element.classList.add('whiteKingDropZone')
    }
  }) 
  if (cells[topTop].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[7].style.opacity = '1'
    whiteKingAvailableSquaresArray[7].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[0].style.opacity = '1'
    whiteKingAvailableSquaresArray[0].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[1].style.opacity = '1'
    whiteKingAvailableSquaresArray[1].classList.remove('whiteKingDropZone')
  } else if (cells[topMidRight].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[0].style.opacity = '1'
    whiteKingAvailableSquaresArray[0].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[1].style.opacity = '1'
    whiteKingAvailableSquaresArray[1].classList.remove('whiteKingDropZone')
  } else if (cells[topRight].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[1].style.opacity = '1'
    whiteKingAvailableSquaresArray[1].classList.remove('whiteKingDropZone')
  } else if (cells[rightMidTop].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[1].style.opacity = '1'
    whiteKingAvailableSquaresArray[1].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[2].style.opacity = '1'
    whiteKingAvailableSquaresArray[2].classList.remove('whiteKingDropZone')
  } else if (cells[rightRight].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[1].style.opacity = '1'
    whiteKingAvailableSquaresArray[1].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[2].style.opacity = '1'
    whiteKingAvailableSquaresArray[2].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[3].style.opacity = '1'
    whiteKingAvailableSquaresArray[3].classList.remove('whiteKingDropZone')
  } else if (cells[rightmidBottom].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[2].style.opacity = '1'
    whiteKingAvailableSquaresArray[2].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[3].style.opacity = '1'
    whiteKingAvailableSquaresArray[3].classList.remove('whiteKingDropZone')
  } else if (cells[bottomRight].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[3].style.opacity = '1'
    whiteKingAvailableSquaresArray[3].classList.remove('whiteKingDropZone')
  } else if (cells[bottomMidRight].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[3].style.opacity = '1'
    whiteKingAvailableSquaresArray[3].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[4].style.opacity = '1'
    whiteKingAvailableSquaresArray[4].classList.remove('whiteKingDropZone')
  } else if (cells[bottomBottom].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[3].style.opacity = '1'
    whiteKingAvailableSquaresArray[3].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[4].style.opacity = '1'
    whiteKingAvailableSquaresArray[4].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[5].style.opacity = '1'
    whiteKingAvailableSquaresArray[5].classList.remove('whiteKingDropZone')
  } else if (cells[bottomMidLeft].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[4].style.opacity = '1'
    whiteKingAvailableSquaresArray[4].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[5].style.opacity = '1'
    whiteKingAvailableSquaresArray[5].classList.remove('whiteKingDropZone')
  } else if (cells[bottomLeft].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[5].style.opacity = '1'
    whiteKingAvailableSquaresArray[5].classList.remove('whiteKingDropZone')
  } else if (cells[leftMidBottom].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[5].style.opacity = '1'
    whiteKingAvailableSquaresArray[5].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[6].style.opacity = '1'
    whiteKingAvailableSquaresArray[6].classList.remove('whiteKingDropZone')
  } else if (cells[leftLeft].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[5].style.opacity = '1'
    whiteKingAvailableSquaresArray[5].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[6].style.opacity = '1'
    whiteKingAvailableSquaresArray[6].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[7].style.opacity = '1'
    whiteKingAvailableSquaresArray[7].classList.remove('whiteKingDropZone')
  } else if (cells[leftMidTop].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[6].style.opacity = '1'
    whiteKingAvailableSquaresArray[6].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[7].style.opacity = '1'
    whiteKingAvailableSquaresArray[7].classList.remove('whiteKingDropZone')
  } else if (cells[topLeft].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[7].style.opacity = '1'
    whiteKingAvailableSquaresArray[7].classList.remove('whiteKingDropZone')
  } else if (cells[topMidLeft].classList.value === 'playingTile blackKing') {
    whiteKingAvailableSquaresArray[7].style.opacity = '1'
    whiteKingAvailableSquaresArray[7].classList.remove('whiteKingDropZone')
    whiteKingAvailableSquaresArray[0].style.opacity = '1'
    whiteKingAvailableSquaresArray[0].classList.remove('whiteKingDropZone')
  }
  kingDragged = event.target.parentElement;
}, false)
const newWhiteKingAvailableSquaresArray = []
whiteKing.addEventListener('dragend', function(event) {
  whiteKingAvailableSquaresArray.forEach(element => {
    element.classList.remove('whiteKingDropZone')
    element.style.opacity = ''
    element.classList.remove('whiteKing')
  })
  if (event.target.parentElement.classList.value === 'playingTile') {
    thisIsWhereKingShouldBe.classList.add('whiteKing')
    kingDragged.classList.remove('whiteKing')
  }
  if (parseInt(whiteKing.parentElement.id) === parseInt(thisIsWhereKingShouldBe.parentElement.id)) {
    return
  } else if (thisIsWhereKingShouldBe !== event.target.parentElement) {
    return
  } else if (whiteKing.draggable === true) {
    blackKing.draggable = true
    whiteKing.draggable = false
    pawnImage.draggable = false
  }
  const newCurrentWhiteKingPosition = parseInt(event.target.parentElement.id)
  curWhiteKingPostion = event.target
  newWhiteKingAvailableSquaresArray[0] = cells[newCurrentWhiteKingPosition - 12]
  newWhiteKingAvailableSquaresArray[1] = cells[newCurrentWhiteKingPosition - 11]
  newWhiteKingAvailableSquaresArray[2] = cells[newCurrentWhiteKingPosition + 1]
  newWhiteKingAvailableSquaresArray[3] = cells[newCurrentWhiteKingPosition + 13]
  newWhiteKingAvailableSquaresArray[4] = cells[newCurrentWhiteKingPosition + 12]
  newWhiteKingAvailableSquaresArray[5] = cells[newCurrentWhiteKingPosition + 11]
  newWhiteKingAvailableSquaresArray[6] = cells[newCurrentWhiteKingPosition - 1]
  newWhiteKingAvailableSquaresArray[7] = cells[newCurrentWhiteKingPosition - 13]

  const tileBlackKing = element => element.classList.value === 'playingTile blackKing'
  const tileWhiteKing = element => element.classList.value === 'playingTile whiteKing'

  if (newKingPositionArray.some(tileWhiteKing) && newWhiteKingAvailableSquaresArray.some(tileBlackKing)) {
    kissingKings.classList.remove('kissingKings')
    kissingKings.classList.add('reveal')
  } else {
    kissingKings.classList.add('kissingKings')
    kissingKings.classList.remove('reveal')
  }
  
  checkForStalemate()
}, false);
document.addEventListener('dragenter', function(event) {
  if (event.target.className === 'playingTile whiteKingDropZone') {
    event.target.style.border = '4px yellow solid'
  }
  kingReturn = event.target.parentElement.id
}, false)
document.addEventListener('dragleave', function(event) {
  if (event.target.className === 'playingTile whiteKingDropZone') {
    event.target.style.border = ''
  }
}, false)
document.addEventListener('drop', function (event) {
  event.preventDefault();
  whiteKingAvailableSquaresArray.forEach(element => {
    if (event.target.className === 'playingTile whiteKingDropZone') {
      event.target.style.opacity = '';
      event.target.style.border = '';
      event.target.appendChild(kingDragged.firstElementChild)
      event.target.classList.remove('whiteKingDropZone') 
      event.target.parentElement.classList.remove('whiteKingDropZone') 
    } 
  })
  thisIsWhereKingShouldBe = event.target
}, false)

//BLACK KING

function createBlackKing(arrayNumber) {
  blackKingImg.src = './sprites/black-king.png'
  blackKingImg.className = 'image'
  cells[arrayNumber].appendChild(blackKingImg)
  cells[arrayNumber].classList.add('blackKing')
  blackKingImg.setAttribute('draggable', 'true')
  blackKingImg.id = 'blackKing'
}
const randomBlackKingNum = (Math.floor((Math.random() * 8) + 38))
createBlackKing(randomBlackKingNum);
const blackKingAvailableSquaresArray = []
let blackKing = document.getElementById('blackKing')
let whereBlackKingEndsUp
let blackKingDragged

//Drag and Drop for Black King
blackKing.addEventListener('dragstart', function (event) {
  currentBlackKingPosition = parseInt(event.target.parentElement.id)
  pawnCheckLeft = pawnImage.parentElement.id - 13
  pawnCheckRight = pawnImage.parentElement.id - 11
  cells[pawnCheckLeft].classList.add('pawnCheck')
  cells[pawnCheckRight].classList.add('pawnCheck')
  blackKingAvailableSquaresArray[0] = cells[currentBlackKingPosition - 12]
  blackKingAvailableSquaresArray[1] = cells[currentBlackKingPosition - 11]
  blackKingAvailableSquaresArray[2] = cells[currentBlackKingPosition + 1]
  blackKingAvailableSquaresArray[3] = cells[currentBlackKingPosition + 13]
  blackKingAvailableSquaresArray[4] = cells[currentBlackKingPosition + 12]
  blackKingAvailableSquaresArray[5] = cells[currentBlackKingPosition + 11]
  blackKingAvailableSquaresArray[6] = cells[currentBlackKingPosition - 1]
  blackKingAvailableSquaresArray[7] = cells[currentBlackKingPosition - 13]
  const topTop = parseInt(blackKingAvailableSquaresArray[0].id) - 12
  const topMidRight = parseInt(blackKingAvailableSquaresArray[1].id) - 12
  const topRight = parseInt(blackKingAvailableSquaresArray[1].id) - 11
  const rightMidTop = parseInt(blackKingAvailableSquaresArray[1].id) + 1
  const rightRight = parseInt(blackKingAvailableSquaresArray[2].id) + 1
  const rightmidBottom = parseInt(blackKingAvailableSquaresArray[3].id) + 1
  const bottomRight = parseInt(blackKingAvailableSquaresArray[3].id) + 13
  const bottomMidRight = parseInt(blackKingAvailableSquaresArray[3].id) + 12
  const bottomBottom = parseInt(blackKingAvailableSquaresArray[4].id) + 12
  const bottomMidLeft = parseInt(blackKingAvailableSquaresArray[5].id) + 12
  const bottomLeft = parseInt(blackKingAvailableSquaresArray[5].id) + 11
  const leftMidBottom = parseInt(blackKingAvailableSquaresArray[5].id) - 1
  const leftLeft = parseInt(blackKingAvailableSquaresArray[6].id) - 1
  const leftMidTop = parseInt(blackKingAvailableSquaresArray[7].id) - 1
  const topLeft = parseInt(blackKingAvailableSquaresArray[7].id) - 13
  const topMidLeft = parseInt(blackKingAvailableSquaresArray[7].id) - 12
  blackKingAvailableSquaresArray.forEach(element => {
    if (element.className === 'playingTile' || element.className === 'playingTile whitePawn') {
      element.style.opacity = .5;
      element.classList.add('blackKingDropZone')
    }
  })
  if (cells[topTop].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[7].style.opacity = '1'
    blackKingAvailableSquaresArray[7].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[0].style.opacity = '1'
    blackKingAvailableSquaresArray[0].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[1].style.opacity = '1'
    blackKingAvailableSquaresArray[1].classList.remove('blackKingDropZone')
  } else if (cells[topMidRight].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[0].style.opacity = '1'
    blackKingAvailableSquaresArray[0].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[1].style.opacity = '1'
    blackKingAvailableSquaresArray[1].classList.remove('blackKingDropZone')
  } else if (cells[topRight].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[1].style.opacity = '1'
    blackKingAvailableSquaresArray[1].classList.remove('blackKingDropZone')
  } else if (cells[rightMidTop].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[1].style.opacity = '1'
    blackKingAvailableSquaresArray[1].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[2].style.opacity = '1'
    blackKingAvailableSquaresArray[2].classList.remove('blackKingDropZone')
  } else if (cells[rightRight].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[1].style.opacity = '1'
    blackKingAvailableSquaresArray[1].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[2].style.opacity = '1'
    blackKingAvailableSquaresArray[2].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[3].style.opacity = '1'
    blackKingAvailableSquaresArray[3].classList.remove('blackKingDropZone')
  } else if (cells[rightmidBottom].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[2].style.opacity = '1'
    blackKingAvailableSquaresArray[2].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[3].style.opacity = '1'
    blackKingAvailableSquaresArray[3].classList.remove('blackKingDropZone')
  } else if (cells[bottomRight].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[3].style.opacity = '1'
    blackKingAvailableSquaresArray[3].classList.remove('blackKingDropZone')
  } else if (cells[bottomMidRight].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[3].style.opacity = '1'
    blackKingAvailableSquaresArray[3].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[4].style.opacity = '1'
    blackKingAvailableSquaresArray[4].classList.remove('blackKingDropZone')
  } else if (cells[bottomBottom].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[3].style.opacity = '1'
    blackKingAvailableSquaresArray[3].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[4].style.opacity = '1'
    blackKingAvailableSquaresArray[4].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[5].style.opacity = '1'
    blackKingAvailableSquaresArray[5].classList.remove('blackKingDropZone')
  } else if (cells[bottomMidLeft].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[4].style.opacity = '1'
    blackKingAvailableSquaresArray[4].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[5].style.opacity = '1'
    blackKingAvailableSquaresArray[5].classList.remove('blackKingDropZone')
  } else if (cells[bottomLeft].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[5].style.opacity = '1'
    blackKingAvailableSquaresArray[5].classList.remove('blackKingDropZone')
  } else if (cells[leftMidBottom].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[5].style.opacity = '1'
    blackKingAvailableSquaresArray[5].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[6].style.opacity = '1'
    blackKingAvailableSquaresArray[6].classList.remove('blackKingDropZone')
  } else if (cells[leftLeft].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[5].style.opacity = '1'
    blackKingAvailableSquaresArray[5].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[6].style.opacity = '1'
    blackKingAvailableSquaresArray[6].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[7].style.opacity = '1'
    blackKingAvailableSquaresArray[7].classList.remove('blackKingDropZone')
  } else if (cells[leftMidTop].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[6].style.opacity = '1'
    blackKingAvailableSquaresArray[6].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[7].style.opacity = '1'
    blackKingAvailableSquaresArray[7].classList.remove('blackKingDropZone')
  } else if (cells[topLeft].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[7].style.opacity = '1'
    blackKingAvailableSquaresArray[7].classList.remove('blackKingDropZone')
  } else if (cells[topMidLeft].classList.value === 'playingTile whiteKing') {
    blackKingAvailableSquaresArray[7].style.opacity = '1'
    blackKingAvailableSquaresArray[7].classList.remove('blackKingDropZone')
    blackKingAvailableSquaresArray[0].style.opacity = '1'
    blackKingAvailableSquaresArray[0].classList.remove('blackKingDropZone')
  }
  blackKingDragged = event.target.parentElement
  return currentBlackKingPosition
}, false)
const newKingPositionArray = []

blackKing.addEventListener('dragend', function (event) {
  blackKingAvailableSquaresArray.forEach(element => {
    element.classList.remove('blackKingDropZone')
    element.style.opacity = ''
    element.classList.remove('blackKing')
  })
  newKingPositionArray[0] = cells[parseInt(event.target.parentElement.id) - 12]
  newKingPositionArray[1] = cells[parseInt(event.target.parentElement.id) - 11]
  newKingPositionArray[2] = cells[parseInt(event.target.parentElement.id) + 1]
  newKingPositionArray[3] = cells[parseInt(event.target.parentElement.id) + 13]
  newKingPositionArray[4] = cells[parseInt(event.target.parentElement.id) + 12]
  newKingPositionArray[5] = cells[parseInt(event.target.parentElement.id) + 11]
  newKingPositionArray[6] = cells[parseInt(event.target.parentElement.id) - 1]
  newKingPositionArray[7] = cells[parseInt(event.target.parentElement.id) - 13]
  if (event.target.parentElement.classList.value === 'playingTile') {
    thisIsWhereKingShouldBe.classList.add('blackKing')
    blackKingDragged.classList.remove('blackKing')
  }
  cells[pawnCheckLeft].classList.remove('pawnCheck')
  cells[pawnCheckRight].classList.remove('pawnCheck')
  const tilePawn = element => element.classList.value === 'playingTile whitePawn'
  for (let i = 0; i < newWhiteKingAvailableSquaresArray.length; i++) {
    if (newWhiteKingAvailableSquaresArray.some(tilePawn) === false) {
      if (thisIsWhereBlackKingShouldBe.parentElement.classList.value === 'playingTile whitePawn') {
        for (let y = 0; y < newKingPositionArray.length; y++) {
          if (newKingPositionArray.some(tilePawn) === true) {
            thisIsWhereBlackKingShouldBe.parentElement.style.opacity = ''
            thisIsWhereBlackKingShouldBe.parentElement.style.border = ''
            thisIsWhereBlackKingShouldBe.parentElement.appendChild(blackKingDragged.firstElementChild)
            pawnImage.remove()
            window.alert('Game is a draw!')
            kissingKings.classList.add('kissingKings')
            kissingKings.classList.remove('reveal')
          }
        }
      }
    }
  }
  if (newWhiteKingAvailableSquaresArray.length === 0 && thisIsWhereBlackKingShouldBe.parentElement.classList.value === 'playingTile whitePawn' && newKingPositionArray.some(tilePawn) === true) {
    thisIsWhereBlackKingShouldBe.parentElement.style.opacity = ''
    thisIsWhereBlackKingShouldBe.parentElement.style.border = ''
    thisIsWhereBlackKingShouldBe.parentElement.appendChild(blackKingDragged.firstElementChild)
    pawnImage.remove()
    playDisappointed()
    window.alert('Game is a draw!')
  }
  if (parseInt(blackKing.parentElement.id) === parseInt(thisIsWhereKingShouldBe.parentElement.id)) {
    return
  } else if (thisIsWhereKingShouldBe !== event.target.parentElement) {
    return
  } else if (blackKing.draggable === true){
    blackKing.draggable = false
    whiteKing.draggable = true
    pawnImage.draggable = true
  }
  whereBlackKingEndsUp = event.target.parentElement
  const tileBlackKing = element => element.classList.value === 'playingTile blackKing'
  const tileWhiteKing = element => element.classList.value === 'playingTile whiteKing'
  
  if (newKingPositionArray.some(tileWhiteKing) && newWhiteKingAvailableSquaresArray.some(tileBlackKing)) {
    kissingKings.classList.remove('kissingKings')
    kissingKings.classList.add('reveal')
  } else {
    kissingKings.classList.add('kissingKings')
    kissingKings.classList.remove('reveal')
  }

}, false);
document.addEventListener('dragenter', function (event) {
  if (event.target.className === 'playingTile blackKingDropZone') {
    event.target.style.border = '4px yellow solid'
  }
  blackKingReturn = event.target.parentElement.id
}, false)
document.addEventListener('dragleave', function (event) {
  if (event.target.className === 'playingTile blackKingDropZone') {
    event.target.style.border = ''
  }
}, false)
document.addEventListener('drop', function (event) {
  event.preventDefault();
  blackKingAvailableSquaresArray.forEach(element => {
    if (event.target.className === 'playingTile blackKingDropZone') {
      event.target.style.opacity = '';
      event.target.style.border = '';
      event.target.appendChild(blackKingDragged.firstElementChild)
      event.target.classList.remove('blackKingDropZone')
      event.target.parentElement.classList.remove('blackKingDropZone')
    } 
    thisIsWhereBlackKingShouldBe = event.target
  })
}, false)

let didTheButtonGetHit = false
//Create new position
function playGameFunction() {
  kissingKings.classList.add('kissingKings')
  kissingKings.classList.remove('reveal')
  newBlackKingNumber = (Math.floor((Math.random() * 8) + 38))
  newPawnNum = (Math.floor((Math.random() * 8) + 98))
  newRandomWhiteKingNum = (Math.floor((Math.random() * 8) + 110))
  createBlackKing(newBlackKingNumber);
  createKing(newRandomWhiteKingNum);
  addPawnImg(newPawnNum);
  newDisplayEvaluation();
  blackKing.draggable = false
  didTheButtonGetHit = true
  for (let i = 0; i <= 144; i++) {
    cells[i].classList.remove('blackKing')
    cells[i].classList.remove('whitePawn')
    cells[i].classList.remove('whiteKing')
    cells[i].classList.remove('whiteQueen')
    cells[i].classList.remove('pawnDropzone')
    queenImg.remove();
    cells[i].style.opacity = ''
  }
  
}

//Reset last starting position
function resetFunction() {
  kissingKings.classList.add('kissingKings')
  kissingKings.classList.remove('reveal')
  if (didTheButtonGetHit === true) {
    createBlackKing(newBlackKingNumber);
    createKing(newRandomWhiteKingNum);
    addPawnImg(newPawnNum);
  } else {
    createBlackKing(randomBlackKingNum);
    createKing(randomWhiteKingNum);
    addPawnImg(randomPawnNum);
  }
  blackKing.draggable = false
  for (let i = 0; i <= 144; i++) {
    cells[i].classList.remove('blackKing')
    cells[i].classList.remove('whitePawn')
    cells[i].classList.remove('whiteKing')
    cells[i].classList.remove('whiteQueen')
    cells[i].classList.remove('pawnDropzone')
    queenImg.remove();
    cells[i].style.opacity = ''
  }
} 

//How to play alert
function howToPlayFunction() {
  window.alert('The goal of the game is to safely promote the white pawn. Some postions are winnable but some are not. Can you find a way to best your opponent?')
}
blackKing.draggable = false

//Display evaluation upon load
function onLoadDisplayEvaluation () {
  if (randomBlackKingNum === 45) {
    if (randomWhiteKingNum === 117) {
      if (randomPawnNum === 98 || randomPawnNum === 99) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } 
    } else if (randomWhiteKingNum === 115 || randomWhiteKingNum === 114 || randomWhiteKingNum === 113 || randomWhiteKingNum === 112) {
      if (randomPawnNum === 105 || randomPawnNum === 104) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    } else if (randomWhiteKingNum === 110 || randomWhiteKingNum === 111 ||  randomWhiteKingNum === 116) {
      if (randomPawnNum === 105 || randomPawnNum === 104 || randomPawnNum === 103) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    }
  } else if (randomBlackKingNum === 44) {
    if (randomWhiteKingNum === 117 || randomWhiteKingNum === 116) {
      if (randomPawnNum === 98) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (randomWhiteKingNum === 115 || randomWhiteKingNum === 110) {
      if (randomPawnNum === 101 || randomPawnNum === 100 || randomPawnNum === 99 || randomPawnNum === 98 ) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (randomWhiteKingNum === 114 || randomWhiteKingNum === 113 || randomWhiteKingNum === 112 || randomWhiteKingNum === 111) {
      if (randomPawnNum === 105 || randomPawnNum === 104 || randomPawnNum === 103 ) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    }
  } else if (randomBlackKingNum === 43) {
    if (randomWhiteKingNum === 117 || randomWhiteKingNum === 116 || randomWhiteKingNum === 115)  {
      evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
    } else if (randomWhiteKingNum === 114) {
      if (randomPawnNum === 100 || randomPawnNum === 99) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (randomWhiteKingNum === 113 || randomWhiteKingNum === 112 || randomWhiteKingNum === 111 || randomWhiteKingNum === 110) {
      if (randomPawnNum === 101 || randomPawnNum === 100 || randomPawnNum === 99) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    }
  } else if (randomBlackKingNum === 42) {
    if (randomWhiteKingNum === 117 || randomWhiteKingNum === 116) {
      if (randomPawnNum === 104) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (randomWhiteKingNum === 115 || randomWhiteKingNum === 114) {
      evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
    } else if (randomWhiteKingNum === 113) {
      if (randomPawnNum === 99) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (randomWhiteKingNum === 112 || randomWhiteKingNum === 111 || randomWhiteKingNum === 110) {
      if (randomPawnNum === 99 || randomPawnNum === 100) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    }
  } else if (randomBlackKingNum === 38) {
    if (randomWhiteKingNum === 110) {
      if (randomPawnNum === 105 || randomPawnNum === 104) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (randomWhiteKingNum === 112 || randomWhiteKingNum === 113 || randomWhiteKingNum === 114 || randomWhiteKingNum === 115) {
      if (randomPawnNum === 98 || randomPawnNum === 99) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    } else if (randomWhiteKingNum === 117 || randomWhiteKingNum === 116 || randomWhiteKingNum === 111) {
      if (randomPawnNum === 98 || randomPawnNum === 99 || randomPawnNum === 100) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    }
  } else if (randomBlackKingNum === 39) {
    if (randomWhiteKingNum === 110 || randomWhiteKingNum === 111) {
      if (randomPawnNum === 105) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (randomWhiteKingNum === 112 || randomWhiteKingNum === 117) {
      if (randomPawnNum === 102 || randomPawnNum === 103 || randomPawnNum === 104 || randomPawnNum === 105) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (randomWhiteKingNum === 113 || randomWhiteKingNum === 114 || randomWhiteKingNum === 115 || randomWhiteKingNum === 116) {
      if (randomPawnNum === 98 || randomPawnNum === 99 || randomPawnNum === 100) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    }
  } else if (randomBlackKingNum === 40) {
    if (randomWhiteKingNum === 110 || randomWhiteKingNum === 111 || randomWhiteKingNum === 112) {
      evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
    } else if (randomWhiteKingNum === 113) {
      if (randomPawnNum === 103 || randomPawnNum === 104) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (randomWhiteKingNum === 114 || randomWhiteKingNum === 115 || randomWhiteKingNum === 116 || randomWhiteKingNum === 117) {
      if (randomPawnNum === 102 || randomPawnNum === 103 || randomPawnNum === 104) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    }
  } else if (randomBlackKingNum === 41) {
    if (randomWhiteKingNum === 110 || randomWhiteKingNum === 111) {
      if (randomPawnNum === 99) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (randomWhiteKingNum === 112 || randomWhiteKingNum === 113) {
      evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
    } else if (randomWhiteKingNum === 114) {
      if (randomPawnNum === 104) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (randomWhiteKingNum === 115 || randomWhiteKingNum === 116 || randomWhiteKingNum === 117) {
      if (randomPawnNum === 104 || randomPawnNum === 103) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    }
  } 
}
onLoadDisplayEvaluation();

//Upon clicking new starting position, display updated evaluation.
function newDisplayEvaluation() {
  if (newBlackKingNumber === 45) {
    if (newRandomWhiteKingNum === 117) {
      if (newPawnNum === 98 || newPawnNum === 99) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 115 || newRandomWhiteKingNum === 114 || newRandomWhiteKingNum === 113 || newRandomWhiteKingNum === 112) {
      if (newPawnNum === 105 || newPawnNum === 104) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    } else if (newRandomWhiteKingNum === 110 || newRandomWhiteKingNum === 111 || newRandomWhiteKingNum === 116) {
      if (newPawnNum === 105 || newPawnNum === 104 || newPawnNum === 103) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    }
  } else if (newBlackKingNumber === 44) {
    if (newRandomWhiteKingNum === 117 || newRandomWhiteKingNum === 116) {
      if (newPawnNum === 98) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 115 || newRandomWhiteKingNum === 110) {
      if (newPawnNum === 101 || newPawnNum === 100 || newPawnNum === 99 || newPawnNum === 98) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 114 || newRandomWhiteKingNum === 113 || newRandomWhiteKingNum === 112 || newRandomWhiteKingNum === 111) {
      if (newPawnNum === 105 || newPawnNum === 104 || newPawnNum === 103) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    }
  } else if (newBlackKingNumber === 43) {
    if (newRandomWhiteKingNum === 117 || newRandomWhiteKingNum === 116 || newRandomWhiteKingNum === 115) {
      evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
    } else if (newRandomWhiteKingNum === 114) {
      if (newPawnNum === 100 || newPawnNum === 99) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 113 || newRandomWhiteKingNum === 112 || newRandomWhiteKingNum === 111 || newRandomWhiteKingNum === 110) {
      if (newPawnNum === 101 || newPawnNum === 100 || newPawnNum === 99) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    }
  } else if (newBlackKingNumber === 42) {
    if (newRandomWhiteKingNum === 117 || newRandomWhiteKingNum === 116) {
      if (newPawnNum === 104) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 115 || newRandomWhiteKingNum === 114) {
      evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
    } else if (newRandomWhiteKingNum === 113) {
      if (newPawnNum === 99) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 112 || newRandomWhiteKingNum === 111 || newRandomWhiteKingNum === 110) {
      if (newPawnNum === 99 || newPawnNum === 100) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    }
  } else if (newBlackKingNumber === 38) {
    if (newRandomWhiteKingNum === 110) {
      if (newPawnNum === 105 || newPawnNum === 104) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 112 || newRandomWhiteKingNum === 113 || newRandomWhiteKingNum === 114 || newRandomWhiteKingNum === 115) {
      if (newPawnNum === 98 || newPawnNum === 99) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    } else if (newRandomWhiteKingNum === 117 || newRandomWhiteKingNum === 116 || newRandomWhiteKingNum === 111) {
      if (newPawnNum === 98 || newPawnNum === 99 || newPawnNum === 100) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    }
  } else if (newBlackKingNumber === 39) {
    if (newRandomWhiteKingNum === 110 || newRandomWhiteKingNum === 111) {
      if (newPawnNum === 105) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 112 || newRandomWhiteKingNum === 117) {
      if (newPawnNum === 102 || newPawnNum === 103 || newPawnNum === 104 || newPawnNum === 105) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 113 || newRandomWhiteKingNum === 114 || newRandomWhiteKingNum === 115 || newRandomWhiteKingNum === 116) {
      if (newPawnNum === 98 || newPawnNum === 99 || newPawnNum === 100) {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      } else {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      }
    }
  } else if (newBlackKingNumber === 40) {
    if (newRandomWhiteKingNum === 110 || newRandomWhiteKingNum === 111 || newRandomWhiteKingNum === 112) {
      evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
    } else if (newRandomWhiteKingNum === 113) {
      if (newPawnNum === 103 || newPawnNum === 104) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 114 || newRandomWhiteKingNum === 115 || newRandomWhiteKingNum === 116 || newRandomWhiteKingNum === 117) {
      if (newPawnNum === 102 || newPawnNum === 103 || newPawnNum === 104) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    }
  } else if (newBlackKingNumber === 41) {
    if (newRandomWhiteKingNum === 110 || newRandomWhiteKingNum === 111) {
      if (newPawnNum === 99) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 112 || newRandomWhiteKingNum === 113) {
      evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
    } else if (newRandomWhiteKingNum === 114) {
      if (newPawnNum === 104) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    } else if (newRandomWhiteKingNum === 115 || newRandomWhiteKingNum === 116 || newRandomWhiteKingNum === 117) {
      if (newPawnNum === 104 || newPawnNum === 103) {
        evaluation.innerHTML = 'This is a winning starting position for White!';
      } else {
        evaluation.innerHTML = 'This is a drawn starting position for White!<br/>Can Black hold the draw?';
      }
    }
  }
}

//CHECK FOR STALEMATE
function checkForStalemate () {
  if (blackKing.draggable === true) {
    if (
      parseInt(whereBlackKingEndsUp.id) === 26 &&
      parseInt(whereThatPawnBe.parentElement.id) === 38 &&
      (parseInt(curWhiteKingPostion.parentElement.id) === 50 || parseInt(curWhiteKingPostion.parentElement.id) === 51)
    ){
      window.alert('Draw by Stalemate!')
      playStalemate()
    } else if (
      parseInt(whereBlackKingEndsUp.id) === 33 &&
      parseInt(whereThatPawnBe.parentElement.id) === 45 &&
      (parseInt(curWhiteKingPostion.parentElement.id) === 57 || parseInt(curWhiteKingPostion.parentElement.id) === 56)
    ){
      window.alert(('Draw by Stalemate!'))
      playStalemate()
    } else if (
      parseInt(whereBlackKingEndsUp.id) === 27 &&
      parseInt(whereThatPawnBe.parentElement.id) === 39 &&
      parseInt(curWhiteKingPostion.parentElement.id) === 51
    ) {
      window.alert('Draw by Stalemate!')
      playStalemate()
    } else if (
      parseInt(whereBlackKingEndsUp.id) === 28 &&
      parseInt(whereThatPawnBe.parentElement.id) === 40 &&
      parseInt(curWhiteKingPostion.parentElement.id) === 52
    ) {
      window.alert('Draw by Stalemate!')
      playStalemate()
    } else if (
      parseInt(whereBlackKingEndsUp.id) === 29 &&
      parseInt(whereThatPawnBe.parentElement.id) === 41 &&
      parseInt(curWhiteKingPostion.parentElement.id) === 53
    ) {
      window.alert('Draw by Stalemate!')
      playStalemate()
    } else if (
      parseInt(whereBlackKingEndsUp.id) === 30 &&
      parseInt(whereThatPawnBe.parentElement.id) === 42 &&
      parseInt(curWhiteKingPostion.parentElement.id) === 54
    ) {
      window.alert('Draw by Stalemate!')
      playStalemate()
    } else if (
      parseInt(whereBlackKingEndsUp.id) === 31 &&
      parseInt(whereThatPawnBe.parentElement.id) === 43 &&
      parseInt(curWhiteKingPostion.parentElement.id) === 55
    ) {
      window.alert('Draw by Stalemate!')
      playStalemate()
    } else if (
      parseInt(whereBlackKingEndsUp.id) === 32 &&
      parseInt(whereThatPawnBe.parentElement.id) === 44 &&
      parseInt(curWhiteKingPostion.parentElement.id) === 56
    ) {
      window.alert('Draw by Stalemate!')
      playStalemate()
    } else if (
      parseInt(whereBlackKingEndsUp.id) === 26 &&
      parseInt(whereThatPawnBe.parentElement.id) === 51 &&
      parseInt(curWhiteKingPostion.parentElement.id) === 40
    ) {
      window.alert('Draw by Stalemate!')
      playStalemate()
    } else if (
      parseInt(whereBlackKingEndsUp.id) === 33 &&
      parseInt(whereThatPawnBe.parentElement.id) === 56 &&
      parseInt(curWhiteKingPostion.parentElement.id) === 43
    ) {
      window.alert('Draw by Stalemate!')
      playStalemate()
    }
  }
}

