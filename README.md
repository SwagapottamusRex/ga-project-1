# Project One - King and Pawn Endgames

https://swagapottamusrex.github.io/ga-project-1/

Table of Contents:

<li>Project Overview</li>
<li>The Brief</li>
<li>Technologies Used</li>
<li>Approach Taken</li>
<li>Featured Code</li>
<li>Screenshots</li>
<li>Bugs</li>
<li>Wins and Blockers</li>
<li>Future Content and Improvements</li>
<li>Key Learnings</li>

## Project Overview
King and pawn endgames are notoriously tricky, even Grandmasters struggle to convert winning positions. With the help of chess engines we are now able to solve chess (find the perfect moves) as long as there are 7 or fewer pieces on the board. 

This was my first project from General Assembly's Software Engineering Immersive course. It was an individual project built in 9 days. Not 3 weeks before I had not even seen a Javascript file.

Play my King and Pawn Endgame here (2 players needed): 
<br>
https://swagapottamusrex.github.io/ga-project-1/
<hr>
<img src="../chessscreenshot.png" alt="drawing" width="400"/>


## Game Brief:
<li>Render a grid based game in the browser</li>
<li>Design logic for winning and losing and display this on the screen</li>
<li>Include separate HTML, CSS and JavaScript files</li>
<li>Deploy your game online</li>

## Technologies used:
<li>HTML5 with HTML5 audio</li>
<li>CSS3</li>
<li>JavaScript (ES6)</li>
<li>Git</li>
<li>GitHub</li>
<li>Google Fonts</li>


## Approach Taken and Timeline:
Key Dates:

<li>Day 1 - Planning and basic grid setup</li>
<li>Day 2-4 - Hit MVP</li>
<li>Day 5-7 - Try to add extra "nice-to-have" features</li>
<li>Day 8-9 - Styling and fixing bugs</li>



<hr>
Day 1: 
My initial idea was to create a full chess board with all the pieces. Unfortunately I realized very quickly the amount of logic it would take would be too much considering the deadline. Our project had to be based around a grid game. The games recommended all felt a little to simple and irrelevant to my interests. I quickly found that a basic king and pawn endgame would be complex enough to create a functional game.
<hr>
Day 2-4:
My first tasks were to create functions to handle click, drag and drag end. These event listeners can be categorized into 5 events. 
<br>
<li>Drag Start</li>
<li>Drag enter</li>
<li>Drag leave</li>
<li>Drop</li>
<li>Drag end</li>
<br>
Each piece has all five of these event listeners and all the necessary functionalities in order to follow the basic rules of chess. For example; making sure the pawn can move two squares or one if it hasn't yet moved. 

<hr>
Day 5-7:

On day 5 I started adding other key features such as checking for stalemate and adding a computer evaluation from the starting position. This is important because it tells the player if the position is possible to win or not. Although a drawn king and pawn endgame aren't very entertaining the player with the black pieces needs to show good technique to hold the draw. 
<hr>
Day 8-9:

During the final days I worked on design and adding sound effects for when you successfully queen your pawn. The winning conditions where also added. The game would end when a stalemate occurs, when you queen your pawn (without stalemating) or when black manages to capture whites pawn.


## Featured Code:
Creating the boundaries between the two Kings.

Despite there being still some bugs. The two kings are not allowed to be less than one square away from each other. Upon the 'dragstart' functionality the code will look at the all the cells . The algorithm checks each potential square the white (or black) king can approach but if the resulting square would make both kings touch then I remove the 'drop zone' from the player's options.

<img src="../kisskingsscreenshot.png" alt="drawing" width="500"/>

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
    } 
    etc...

## Bugs:
Despite all the successes I had with my code a couple bugs in the formulae can be found. Only in certain positions does the function that prevents two kings touching breaks down. I am currently working on a chess game 2.0 with these bugs fixed.
## Wins and Blockers
The biggest challenge and blocker for me was getting the two kings to not touch. It required a lot of overlapping logic which took me a while to wrap my head around.
The biggest win for me was implementing the stalemate functionality. Despite it being very much hard code and not elegant it required a lot of logic. 

Another big win for me in this project was my increased understanding of JavaScript. The challenge of building a game really took me out of my comfort zone, and I am very happy with the end result.
## Future content and improvements:
<li>A full chess set with all the functionality</li>
<li>Sounds on click and dragging, checking and checkmating</li>
<li>Add random move generator to enable one player mode</li>
<li>Add a timer/clock</li>

## Key Learnings
I have learnt that I need to keep track of my variables better and to name them precisely and accurately. I learnt how to use effectively click and drag events as well as managing which segments of code needs to be inside which 'click drag' function.
