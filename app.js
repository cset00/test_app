console.log('tic tac rawr')

var container = document.querySelector('.container')
var boxes = document.querySelectorAll('.box')
var resetBtn = document.querySelector('.reset-btn')
var declareStatus = document.querySelector('div h2')
var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var nine = document.querySelector('#nine')
var playersBox1 = document.querySelectorAll('.players-box')[0]
var playersBox2 = document.querySelectorAll('.players-box')[1]
var arrowPurple = document.querySelector('.arrow1')
var arrowYellow = document.querySelector('.arrow2')

var currentPlayer = 'x'

var p1WinCounter = 0
var p2WinCounter = 0

var timerID
var totalMoves = 0
var p1moves = 0
var p2moves = 0

// create a function to check if a player has won
// start with winning combos
// horizontal: 123, 456, 789
// vertical: 147, 258, 369
// diagonal: 159,357

//NOTE: NEED TO FIGURE OUT IF MORE THAN 1 COMBO WINS 
var checkWin = function() {
    if (one.textContent === currentPlayer && two.textContent === currentPlayer && three.textContent === currentPlayer) {
        console.log('123')
        showWinner(one,two,three)
    } else if (one.textContent === currentPlayer && four.textContent === currentPlayer && seven.textContent === currentPlayer) {
        console.log('147')
        showWinner(one,four,seven)
    } else if (one.textContent === currentPlayer && five.textContent === currentPlayer && nine.textContent === currentPlayer) {
        console.log('159')
        showWinner(one,five,nine)
    } else if (two.textContent === currentPlayer && five.textContent === currentPlayer && eight.textContent === currentPlayer) {
        console.log('258')
        showWinner(two,five,eight)
    } else if (three.textContent === currentPlayer && six.textContent === currentPlayer && nine.textContent === currentPlayer) {
        console.log('369')
        showWinner(three,six,nine)
    } else if (three.textContent === currentPlayer && five.textContent === currentPlayer && seven.textContent === currentPlayer) {
        console.log('357')
        showWinner(three,five,seven)
    } else if (four.textContent === currentPlayer && five.textContent === currentPlayer && six.textContent === currentPlayer) {
        console.log('456')
        showWinner(four,five,six)
    } else if (seven.textContent === currentPlayer && eight.textContent === currentPlayer && nine.textContent === currentPlayer) {
        console.log('789')
        showWinner(seven,eight,nine)
    } else {
        if (totalMoves === 9) {
            itsaDraw()
        }
    }
}


var takeTurn = function() {
    //ignore if target clicked is not .box
    if(!event.target.classList.contains('box')) {
        return
    }
    //ignore if target clicked has p1 or p2 element already
    if(event.target.textContent === 'x' || event.target.textContent === 'o') {
        return
    }
    if (currentPlayer === 'x') {
        highlightCurrent()
        event.target.classList.add('p1color')
        event.target.textContent = 'x'
        totalMoves++
        checkWin()
        currentPlayer = 'o'  
    } else {
        highlightCurrent()
        event.target.classList.add('p2color')
        event.target.textContent = 'o'
        totalMoves++
        checkWin()
        currentPlayer = 'x'
    }
}

var highlightCurrent = function() {
    if (currentPlayer === 'o') {
        playersBox1.classList.add('selected')
        playersBox2.classList.remove('selected')
        arrowYellow.classList.add('hidden')
        arrowPurple.classList.remove('hidden')
    } else {
        playersBox2.classList.add('selected')
        playersBox1.classList.remove('selected')
        arrowPurple.classList.add('hidden')
        arrowYellow.classList.remove('hidden')
    }
}

var showWinner = function(box1, box2, box3) {
    container.removeEventListener('click',takeTurn)
    playersBox1.classList.remove('selected')
    playersBox2.classList.remove('selected')
    arrowPurple.classList.add('hidden')
    arrowYellow.classList.add('hidden')
    box1.classList.add('win')
    box2.classList.add('win')
    box3.classList.add('win')
    declareStatus.textContent = currentPlayer.toUpperCase() + ' is the winner!'
}

var itsaDraw = function() {
    console.log("It's a DRAW")
    declareStatus.textContent = "It's a DRAW!"
    declareStatus.classList.remove('hidden')
    playersBox1.classList.remove('selected')
    playersBox2.classList.remove('selected')
    arrowPurple.classList.add('hidden')
    arrowYellow.classList.add('hidden')
}

var reset = function() {
    boxes.forEach(function(box) {
        box.textContent = ""
        box.classList.remove('win')
        box.classList.remove('p1color')
        box.classList.remove('p2color')
    })
    currentPlayer = 'x'
    totalMoves = 0
    container.addEventListener('click', takeTurn)
    declareStatus.textContent = "who's going to win?!"
    playersBox1.classList.remove('selected')
    playersBox2.classList.remove('selected')
    arrowPurple.classList.add('hidden')
    arrowYellow.classList.add('hidden')
    console.log('reset')
}

//event listeners
container.addEventListener('click', takeTurn)
resetBtn.addEventListener('click', reset)
