//Select the Divs from the HTML
const grid = document.querySelector('.grid')




//Create consts that will determine the grid size

//This is the width of the whole board including outside edge
const width = 10;

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

    //Lets number on the screen each cell 0 - 99
    cells[i].innerHTML = i;
    
  }
}

//Basic grid has been created
createGrid();

// Give each border cell a new/different class of bordering and remove number.

function changeClass() {

  for (let i = 0; i < numberOfCells; i++) {
    if ((parseInt(cells[i].innerHTML) + 1) % 10 === 0) {
      cells[i].classList.add('bordering')
      cells[i].classList.remove('class', i)
      // console.log('This is a borering cell', i);
    } else if ((parseInt(cells[i].innerHTML)) % 10 === 0) {
      cells[i].classList.add('bordering')
      cells[i].classList.remove('class', i)
      // console.log('This is a borering cell', i);
    } else if ((parseInt(cells[i].innerHTML)) - 10 < 0) {
      cells[i].classList.add('bordering')
      cells[i].classList.remove('class', i)
      // console.log('This is a borering cell', i);
    } else if ((parseInt(cells[i].innerHTML)) + 10 > 99) {
      cells[i].classList.add('bordering')
      cells[i].classList.remove('class', i)
      // console.log('This is a borering cell', i);
    }
  }
}
//The bordering cells now have unique class of 'bordering'
changeClass();

//Create checkered display so that it looks like a chess board

function checkered () {

  for (let i = 0; i < numberOfCells; i++) {
    const splitNumInTwo = cells[i].innerHTML.split('')
    const sumOfTwoNums = parseInt(splitNumInTwo[0]) + parseInt(splitNumInTwo[1])
    if (sumOfTwoNums === 2 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 4 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 6 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 8 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 10 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 12 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 14 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 16 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 18 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 3 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 5 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 7 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 18 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 9 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 11 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 13 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 15 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
      cells[i].classList.add('playingTile');
    } else if (sumOfTwoNums === 17 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
      cells[i].classList.add('playingTile');
    }

  }
}
checkered();




const img = document.createElement('img')

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
addPawnImg(77);





//Create a dropzone for the pawn when you click and hold it.
//The drop zone must be the square in front of it.
// So i will change the class of the div in front to dropzone.
const pawnImage = document.getElementById('whitePawns')
// console.log(document.body.children.item(0).children.item(0).children)

pawnImage.addEventListener('dragstart', function (event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  const boxNextToPawn = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
  //Make the div ahead highlighted.
  boxNextToPawn.classList.add('pawnDropzone')
  boxNextToPawn.style.opacity = 0.3;
  event.target.style.opacity = .5;
  // event.target.style.display = 'hidden'
  setTimeout(() => event.target.className = 'hidden', 0);
  
}, false);


pawnImage.addEventListener('dragend', function (event) {
  // reset the transparency
  const boxNextToPawn = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
  event.target.style.opacity = 1;
  boxNextToPawn.style.opacity = 1;
  event.target.classList.remove('hidden')
  boxNextToPawn.classList.remove('pawnDropzone')
}, false);

document.addEventListener('dragover', function (event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener('dragenter', function (event) {
  
  if (event.target.className === 'playingTile pawnDropzone') {
    event.target.style.border = '3px yellow solid'
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
  if (event.target.className === 'playingTile pawnDropzone') {
    event.target.style.opacity = '';
    event.target.style.border = '';
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
    event.target.classList.remove('pawnDropzone')
    event.target.classList.add('whitePawn')
    const cellBehindPawn = event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
    cellBehindPawn.classList.remove('whitePawn')
  }
}, false);



///Create the WHITE KING!


const kingImg = document.createElement('img')

//put king into a div
function createKing(arrayNumber) {
  kingImg.src = './sprites/white-king.png'
  kingImg.className = 'image'

  cells[arrayNumber].appendChild(kingImg)
  cells[arrayNumber].classList.add('whiteKing')
  kingImg.setAttribute('draggable', 'true')
  kingImg.id = 'whiteKing'
}

createKing(76);

//Make the king move
let whiteKing = document.getElementById('whiteKing')
let whiteKingCurrentPostion = whiteKing.parentNode.lastChild
const availableSquaresArray = []

whiteKing.addEventListener('dragstart', function(event) {
  availableSquaresArray[0] = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
  availableSquaresArray[1] = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
  availableSquaresArray[2] = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
  availableSquaresArray[3] = event.target.parentElement.previousElementSibling
  availableSquaresArray[4] = event.target.parentElement.nextElementSibling
  availableSquaresArray[5] = event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
  availableSquaresArray[6] = event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
  availableSquaresArray[7] = event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
  kingDragged = event.target;
  availableSquaresArray.forEach(element => {
    if (element.className === 'playingTile'){
      element.style.opacity = .5;
      element.classList.add('whiteKingDropZone')
    } 
  });
}, false);

whiteKing.addEventListener('dragend', function(event) {
  availableSquaresArray.forEach(element => {
    if (element.className === 'playingTile whiteKingDropZone'){
      element.classList.remove('whiteKingDropZone')
      element.style.opacity = ''
    }
  })
}, false);

document.addEventListener('dragenter', function(event) {
  if (event.target.className === 'playingTile whiteKingDropZone') {
    event.target.style.border = '3px yellow solid'
  }
}, false)


document.addEventListener('dragleave', function(event) {
  if (event.target.className === 'playingTile whiteKingDropZone') {
    event.target.style.border = ''
  }
  event.target.classList.remove('whiteKing')
}, false)

document.addEventListener('drop', function (event) {
  event.preventDefault();
  // const newKingPostion = event.target
  // move dragged elem to the selected drop target
  availableSquaresArray.forEach(element => {
    if (event.target.className === 'playingTile whiteKingDropZone') {
      event.target.style.opacity = '';
      event.target.style.border = '';
      event.target.classList.add('whiteKing')
      event.target.appendChild(kingDragged)
      event.target.classList.remove('whiteKingDropZone') 
    } 
    whiteKingCurrentPostion = event.target
  })
}, false)



