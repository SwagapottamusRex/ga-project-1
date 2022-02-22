/* eslint-disable no-undef */
//Select the Divs from the HTML
const playGame = document.getElementById('playGame')
const reset = document.getElementById('reset')
const howToPlay = document.getElementById('howToPlay')

playGame.addEventListener('click', playGameFunction)
reset.addEventListener('click', resetFunction)
howToPlay.addEventListener('click', howToPlayFunction)

const grid = document.querySelector('.grid')

//Create consts that will determine the grid size

//This is the width of the whole board including outside edge
const width = 12;

//This creates the board with 100 cells
const numberOfCells = width * width

// Each cell must be stored in an array

const cells = []

//When I run this function the grid is generated with 100 cells
function createGrid() {
  //Loop 100 times and each time create a div element in the HTML
  for (let i = 0; i < numberOfCells; i++) {
    // Each cell must be stored in an array cell['div1', 'div2', 'div3' etc...]
    // Create the div element and call it cell.
    const cell = document.createElement('div');
    //Set each cell/div to equal a specific class/ID and give it a specific number (i).
    cell.setAttribute('id', i);

    //The grid has been created but I must push each cell in the cells array so that I 
    // can manipulate specific cells later through that array.
    cells.push(cell);

    //Add each div to the HTML file.
    grid.appendChild(cell);

    
  }
}

//Basic grid has been created
createGrid();

const playingBoardArray = []

// Give each border cell a new/different class of bordering and remove number.

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
      parseInt(cells[i].id) === 143 ) {
      cells[i].style.color = 'white'
      cells[i].style.backgroundColor = 'white'
      cells[i].style.border = 'none'
      cells[i].innerHTML = ''
      cells[i].classList.add('bordering')
    } else {
      cells[i].style.color = 'black'
      cells[i].classList.add('playingTile')
      playingBoardArray.push(cells[i])
    }
  }
}
//The bordering cells now have unique class of 'bordering'
changeClass();

//Create checkered display so that it looks like a chess board

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
  }
  )
}
checkered()

const img = document.createElement('img')
const queenImg = document.createElement('img')
const kingImg = document.createElement('img')
const blackKingImg = document.createElement('img')

//Create a function to add the Pawn image to the cell
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


//Create a dropzone for the pawn when you click and hold it.
//The drop zone must be the square in front of it.
// So i will change the class of the div in front to dropzone.
const pawnImage = document.getElementById('whitePawns')


pawnImage.addEventListener('dragstart', function (event) {
  //If pawn is on 2nd rank it can move twice.
  twoSquaresAhead = document.getElementById((parseInt(event.target.parentElement.id) - 24))
  oneSquareAhead = document.getElementById((parseInt(event.target.parentElement.id) - 12))
  
  // if (oneSquareAhead.classList === '')
  startingPawnPosition =  event.target.parentElement
  
  if (parseInt(event.target.parentElement.id) === randomPawnNum || parseInt(event.target.parentElement.id) === newPawnNum ) {
    
    
    twoSquaresAhead.style.opacity = 0.5
    oneSquareAhead.style.opacity = 0.5    
    twoSquaresAhead.classList.add('pawnDropzone')
    oneSquareAhead.classList.add('pawnDropzone')
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
  
  
  event.target.parentElement.classList.add('whitePawn')
  twoSquaresAhead.classList.remove('pawnDropzone')
  oneSquareAhead.classList.remove('pawnDropzone')
  twoSquaresAhead.style.opacity = 1;
  oneSquareAhead.style.opacity = 1;
  event.target.classList.remove('hidden')
  dragged.style.opacity = 1
  
  if (startingPawnPosition === event.target.parentElement) {
    return
  } else if (pawnImage.draggable === true) {
    blackKing.draggable = true
    whiteKing.draggable = false
    pawnImage.draggable = false
  }

}, false);

document.addEventListener('dragover', function (event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener('dragenter', function (event) {
  
  if (event.target.className === 'playingTile pawnDropzone') {
    event.target.style.border = '3px solid yellow'
  }
}, false);

document.addEventListener('dragleave', function (event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className === 'playingTile pawnDropzone') {
    event.target.style.border = ''
  }
  
}, false);

document.addEventListener('drop', function (event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  
  // move dragged elem to the selected drop target
  if (parseInt(event.target.id) <= 33 && (parseInt(event.target.id) >= 26 && event.target.className === 'playingTile pawnDropzone')) {
    queenImg.src = './sprites/white-queen.png'
    event.target.style.opacity = 0.5
    event.target.style.border = ''
    dragged.parentNode.removeChild(dragged)
    event.target.appendChild(queenImg)
    event.target.classList.add('whiteQueen')
    
    //if the white king isnt in bordering cells when promoting then its a draw because black king can capture.
    
    
    window.alert('You Win!')
  } else if (event.target.className === 'playingTile pawnDropzone') {
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



///Create the WHITE KING!


  
let whiteKingAvailableSquaresArray = []
// put king into a div
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

  newWhiteKingAvailableSquaresArray[0] = cells[newCurrentWhiteKingPosition - 12]
  newWhiteKingAvailableSquaresArray[1] = cells[newCurrentWhiteKingPosition - 11]
  newWhiteKingAvailableSquaresArray[2] = cells[newCurrentWhiteKingPosition + 1]
  newWhiteKingAvailableSquaresArray[3] = cells[newCurrentWhiteKingPosition + 13]
  newWhiteKingAvailableSquaresArray[4] = cells[newCurrentWhiteKingPosition + 12]
  newWhiteKingAvailableSquaresArray[5] = cells[newCurrentWhiteKingPosition + 11]
  newWhiteKingAvailableSquaresArray[6] = cells[newCurrentWhiteKingPosition - 1]
  newWhiteKingAvailableSquaresArray[7] = cells[newCurrentWhiteKingPosition - 13]





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










//Make the BLACK KING

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

blackKing.addEventListener('dragstart', function (event) {
  

  const currentBlackKingPosition = parseInt(event.target.parentElement.id)
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

  console.log(blackKingAvailableSquaresArray)
  

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

  console.log(topTop)

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



}, false)

blackKing.addEventListener('dragend', function (event) {
  blackKingAvailableSquaresArray.forEach(element => {
    element.classList.remove('blackKingDropZone')
    element.style.opacity = ''
    element.classList.remove('blackKing')
    
  })
  
  
  if (event.target.parentElement.classList.value === 'playingTile') {
    thisIsWhereKingShouldBe.classList.add('blackKing')
    blackKingDragged.classList.remove('blackKing')
  }
  
  cells[pawnCheckLeft].classList.remove('pawnCheck')
  cells[pawnCheckRight].classList.remove('pawnCheck')
  
  // if (newWhiteKingAvailableSquaresArray[0].classList.value === 'playingTile whitePawn') {

  // } else if (newWhiteKingAvailableSquaresArray[1].classList.value === 'playingTile whitePawn') {
    
  // } else if (newWhiteKingAvailableSquaresArray[2].classList.value === 'playingTile whitePawn') {

  // } else if (newWhiteKingAvailableSquaresArray[3].classList.value === 'playingTile whitePawn') {

  // } else if (newWhiteKingAvailableSquaresArray[4].classList.value === 'playingTile whitePawn') {

  // } else if (newWhiteKingAvailableSquaresArray[5].classList.value === 'playingTile whitePawn') {

  // } else if (newWhiteKingAvailableSquaresArray[6].classList.value === 'playingTile whitePawn') {

  // } else if (newWhiteKingAvailableSquaresArray[7].classList.value === 'playingTile whitePawn') {

  // } else 
  
  console.log(newWhiteKingAvailableSquaresArray)

  if (thisIsWhereBlackKingShouldBe.parentElement.classList.value === 'playingTile whitePawn'){
    pawnImage.remove()
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




///Set Game Up.


function playGameFunction() {
  newBlackKingNumber = (Math.floor((Math.random() * 8) + 38))
  newPawnNum = (Math.floor((Math.random() * 8) + 98))
  newRandomWhiteKingNum = (Math.floor((Math.random() * 8) + 110))
  createBlackKing(newBlackKingNumber);
  createKing(newRandomWhiteKingNum);
  addPawnImg(newPawnNum);
  for (let i = 0; i <= 144; i++) {
    cells[i].classList.remove('blackKing')
    cells[i].classList.remove('whitePawn')
    cells[i].classList.remove('whiteKing')
    cells[i].classList.remove('whiteQueen')
    cells[i].classList.remove('pawnDropzone')
    queenImg.remove();

  }

  
}


function resetFunction() {
  window.alert('hi')
}

function howToPlayFunction() {
  window.alert('The goal of the game is to get the white pawn to the top of the board. Some postions are winnable but some are not. Can you find a way to best your opponent?')
}



