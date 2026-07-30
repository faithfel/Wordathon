const typedByUser = document.querySelector('#typingInput');
const headerWord = document.querySelector('#headerWord');
const headerInput = document.querySelector('#headerInput');

const scoreText = document.querySelector('#score');
const timer = document.querySelector('#timer');
const wpmTEXT = document.querySelector('#wpmTEXT');

let score = 0;
let seconds = 0;
let timerId = null;


// never remove focus out of input
typedByUser.addEventListener('blur', () => {
    typedByUser.focus();
});

//getting every input from user 
typedByUser.addEventListener('input', (event) => {
    headerInput.textContent = event.target.value;
    compareWord();
    
});


function start () {
    getRandomWord();
}
//json api display as h1
async function getRandomWord() {

    const response = await fetch('json/all.json');
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];


    headerWord.textContent = randomItem;
    console.log(randomItem);

    currentRandomItem = randomItem; 
    return randomItem;
  }


function compareWord() {
    if (typedByUser.value === currentRandomItem) {

        console.log("Word matched");
        getRandomWord();
        gameCycle()
    }
    else {
        console.log("Does not match.");
    }
}

function gameCycle() {

    typedByUser.value = "";
    headerInput.textContent = "";

    score ++;
    scoreText.textContent = score;  
}

document.getElementById("startButton").addEventListener("click", function() {
    
    clearInterval(timerId);

    timerId = setInterval(function() {
        seconds++;
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        timer.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }, 1000);
}
)

function wpmCalc () {

}