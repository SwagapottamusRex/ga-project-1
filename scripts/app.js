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
    cell.setAttribute('class', i);

    //The grid has been created but I must push each cell in the cells array so that I 
    // can manipulate specific cells later through that array.
    cells.push(cell);

    //Add each div to the HTML file.
    grid.appendChild(cell);

    //Lets number on the screen each cell 0 - 99
    cells[i].innerHTML = i;
    
  }
  // console.log(cell) //= <div co-ordinate="0"></div> <div co-ordinate="1"></div>
  // console.log(cells) // logs an array of [div, div, div, div etc...]
  // console.log(grid) // The entire HTML grid with all the divs.
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
    } else if (sumOfTwoNums === 4 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
    } else if (sumOfTwoNums === 6 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
    } else if (sumOfTwoNums === 8 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
    } else if (sumOfTwoNums === 10 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
    } else if (sumOfTwoNums === 12 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
    } else if (sumOfTwoNums === 14 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
    } else if (sumOfTwoNums === 16 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
    } else if (sumOfTwoNums === 18 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#f0d9b5';
    } else if (sumOfTwoNums === 3 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
    } else if (sumOfTwoNums === 5 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
    } else if (sumOfTwoNums === 7 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
    } else if (sumOfTwoNums === 18 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
    } else if (sumOfTwoNums === 9 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
    } else if (sumOfTwoNums === 11 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
    } else if (sumOfTwoNums === 13 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
    } else if (sumOfTwoNums === 15 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
    } else if (sumOfTwoNums === 17 && cells[i].classList.value !== 'bordering') {
      cells[i].style.backgroundColor = '#b48862';
    }

  }
}
checkered();


function addImg() {
  const img = document.createElement('img')
  img.src = './sprites/white-pawn.png';
  img.classList.add('class', 'whitePawn')
  cells[54].appendChild(img)
}

addImg();