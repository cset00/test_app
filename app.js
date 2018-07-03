console.log('tic tac toe')
//Break the project down into different components 
// (data, presentation, markup, style, DOM manipulation) and 
// brainstorm each component individually. Use whiteboards!

// --------------

// Create a 3x3 grid
// Do i generate in html or js. HTML for now.
// create empty divs?

// Have event listeners for each grid
// Listen to 'click' function (once clicked, show element associated with each player. 
// Can't click on the same grid again)

// Create variables for player1 and player2
// Assign diff elements to p1 and p2 (eg. o and x)

// Once player1 clicks, switch to player2

// Figure out how to know if 3 of the same elements are connected in a straight line

// Show winner

// Restart game

// ------------------

var currentPlayer = 0

var p1Element = 'x'
var p2Element = 'o'

var p1Counter = 0
var p2Counter = 0

var container = document.querySelector('.container')
var boxes = document.querySelectorAll('.box')
var resetBtn = document.querySelector('.reset-btn')
var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var nine = document.querySelector('#nine')

var timerID

var takeTurn = function() {
    //ignore if target clicked is not .box
    if(!event.target.classList.contains('box')) {
        return
    }
    //ignore if target clicked has p1 or p2 element already
    if(event.target.textContent === p1Element || event.target.textContent === p2Element) {
        return
    }

    if (currentPlayer === 0) {
        //show x
        event.target.textContent = p1Element
        currentPlayer = 1
        checkWin()
    } else {
        //show o
        event.target.textContent = p2Element
        currentPlayer = 0
        checkWin()
    }
}

// create a function to check if a player has won
var checkWin = function() {

}



// create a reset function
var reset = function() {
    boxes.forEach(function(box) {
        box.textContent = ""
        
    })
    player = 0
    console.log('reset')
}

//add event listener on the parent of the boxes.
container.addEventListener('click', takeTurn)

resetBtn.addEventListener('click', reset)
