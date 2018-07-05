console.log('tic-tac-rawr attempt2')

var boardSize = 3
var test = '#'
var board = []

var createHori = function(num) {
    board.push(test.repeat(num).split(""))
}
var createBoard = function(num) {
    for (var i=0; i<num; i++) {
        createHori(num)
    }
}


createBoard(boardSize)


var boardSelector = document.querySelector('.board')
var boxes = document.querySelectorAll('.box')
var resetBtn = document.querySelector('.reset-btn')
var declareStatus = document.querySelector('.show-winner h2')
var playersBox1 = document.querySelectorAll('.players-box')[0]
var playersBox2 = document.querySelectorAll('.players-box')[1]
var arrowPurple = document.querySelector('.arrow1')
var arrowYellow = document.querySelector('.arrow2')

var currentPlayer = 'x'
var totalMoves = 0
var gameOngoing = true


var checkWinRow = function(vertiNum) {
    var row = []
    for (var i=0; i<board[vertiNum].length; i++) {
        if (board[vertiNum][i] === currentPlayer) {
            var box = document.querySelector('[data-row="' + vertiNum + '"][data-col="' + i + '"]')
            row.push(box)
        }
        if (row.length === boardSize) {
            console.log('row winner!')
            addClass(row,'win')
            showWinner()
        } 
    }
}

var checkWinCol = function(horiNum) {
    var column = []
    for (var i=0; i<board.length; i++) {
        if (board[i][horiNum] === currentPlayer) {
            var box = document.querySelector('[data-row="' + i + '"][data-col="' + horiNum + '"]')
            column.push(box)
        }
        if (column.length === boardSize) {
            console.log('column winner!')
            addClass(column,'win')
            showWinner()
        } 
    }
}

//check diagonal right
var checkWinDR = function() {
    var diagRight = []
    for (var i=0; i<board.length; i++) {
        if (board[i][i] === currentPlayer) {
            var box = document.querySelector('[data-row="' + i + '"][data-col="' + i + '"]')
            diagRight.push(box)
        }
        if (diagRight.length === boardSize) {
            console.log('diag right winner!')
            addClass(diagRight,'win')
            showWinner()
        }
    }
}

//check the other diagonal
var checkWinDL = function() {
    var diagLeft = []
    for (var i=0; i<board.length; i++) {
        if (board[i][board.length-1-i] === currentPlayer) {
            var box = document.querySelector('[data-row="' + i + '"][data-col="' + (board.length-1-i) + '"]')
            diagLeft.push(box)
        }
        if (diagLeft.length === boardSize) {
            console.log('diag left winner!')
            addClass(diagLeft,'win')
            showWinner()
        }
    }
}

var checkWin = function(vertiNum, horiNum) {
    checkWinRow(vertiNum)
    checkWinCol(horiNum)
    checkWinDR() 
    checkWinDL()
    if (totalMoves === 9 && gameOngoing) {
        itsaDraw()
    }
}

var addClass = function(array,classToAdd) {
    array.forEach(function(box) {
        box.classList.add(classToAdd)
    })
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
        board[event.target.dataset.row][event.target.dataset.col] = 'x'
        totalMoves++
        checkWin(event.target.dataset.row, event.target.dataset.col)
        currentPlayer = 'o'  
    } else {
        highlightCurrent()
        event.target.classList.add('p2color')
        event.target.textContent = 'o'
        board[event.target.dataset.row][event.target.dataset.col] = 'o'
        totalMoves++
        checkWin(event.target.dataset.row, event.target.dataset.col)
        currentPlayer = 'x'
    }
}

var itsaDraw = function() {
    console.log("It's a DRAW")
    declareStatus.textContent = "It's a DRAW!"
    // declareStatus.classList.remove('hidden')
    playersBox1.classList.remove('selected')
    playersBox2.classList.remove('selected')
    arrowPurple.classList.add('hidden')
    arrowYellow.classList.add('hidden')
    gameOngoing = false
}

var showWinner = function() {
    boardSelector.removeEventListener('click',takeTurn)
    gameOngoing = false
    playersBox1.classList.remove('selected')
    playersBox2.classList.remove('selected')
    arrowPurple.classList.add('hidden')
    arrowYellow.classList.add('hidden')
    if (currentPlayer === 'x') {
        declareStatus.textContent = 'Player 1 is the winner!'
        playersBox1.classList.add('win-highlight')
    } else {
        declareStatus.textContent = 'Player 2 is the winner!'
        playersBox2.classList.add('win-highlight')
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

var reset = function() {
    boxes.forEach(function(box) {
        box.textContent = ""
        box.classList.remove('win')
        box.classList.remove('p1color')
        box.classList.remove('p2color')
    })
    playersBox1.classList.remove('win-highlight')
    playersBox2.classList.remove('win-highlight')
    gameOngoing = true
    currentPlayer = 'x'
    totalMoves = 0
    boardSelector.addEventListener('click', takeTurn)
    declareStatus.textContent = "who's going to win?!"
    board = []
    createBoard(boardSize)
    console.log('reset')
}

//event listeners
boardSelector.addEventListener('click', takeTurn)
resetBtn.addEventListener('click', reset)