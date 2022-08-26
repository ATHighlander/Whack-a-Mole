// select all the squares, then select the mole
// so that I can now work with them in JS
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

// now to select the time-left & score objects
// can do in 2 methods: querySelect & getElementById
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
// when I use document.getByElementId, receive error message on browser console & clicking mole square doesn't add to score


let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
        square.classList.remove('pow')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    // adds a class of mole to a random square in the grid
    // Also adds a class of pow to the same random square that was assigned the mole class
    randomSquare.classList.add('mole')
    randomSquare.classList.add('pow')
    
    
    hitPosition = randomSquare.id
    
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            // add 1 to result
            result++
            score.textContent = result

            // change background image when clicked from mole to pow
            // rearranged the mole & pow class styling in styles.css to take advantage of the cascading effect
            square.classList.remove('mole')

            hitPosition = null
        }
    })
})



function moveMole() {
    timerId = setInterval(randomSquare, 1000)
    // Why create variable timerId null, and then change it right after?
    // so that I can alter the timerId more easily later on, maybe interact with the timer with a button or something
}

// call moveMole function
moveMole()


function countDown() {
    // subtract 1 from currentTime
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)