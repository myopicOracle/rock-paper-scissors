function randomNumber() {
    return Math.floor(Math.random() * 3) + 1 //expected output: 1, 2, 3
}

const num = randomNumber();
// console.log(num);

// === End of Randomizer === Step Validated

let computerChoice;

function getComputerChoice(num) {

	return computerChoice = 
  		(num === 1) ?
			"rock" :
      (num === 2) ?
      "paper" :
      (num === 3) ?
      "scissor" :
      "error";

}

const evilBot2000 = getComputerChoice(num);
// console.log(evilBot2000);

// === End of Computer Output === Step Validated

// outer elements
const body = document.querySelector("body")

const title = document.createElement("h1")
title.textContent = "Let's Play A Game!"
body.appendChild(title)

const container = document.createElement("div")
container.style.cssText = "display: flex; justify-content: space-around;"

// buttons
const buttonRock = document.createElement("button")
buttonRock.setAttribute("id","rock")
buttonRock.style.cssText = "background-color: purple; color: white; font-weight: 700; border: 2x solid gold; border-radius: 10px; padding: 12px;"
buttonRock.textContent = "Rock"
container.appendChild(buttonRock)

const buttonPaper = document.createElement("button")
buttonPaper.setAttribute("id","paper")
buttonPaper.style.cssText = "background-color: purple; color: white; font-weight: 700; border: 2x solid gold; border-radius: 10px; padding: 12px;"
buttonPaper.textContent = "Paper"
container.appendChild(buttonPaper)

const buttonScissor = document.createElement("button")
buttonScissor.setAttribute("id","scissor")
buttonScissor.style.cssText = "background-color: purple; color: white; font-weight: 700; border: 2x solid gold; border-radius: 10px; padding: 12px;"
buttonScissor.textContent = "Scissor"
container.appendChild(buttonScissor)

body.appendChild(container)

// message window
let botScore = 0;
let humanScore = 0;
let message;

const score = document.createElement("div")
score.setAttribute("style", "border: 4px solid gold; border-radius: 10px; padding: 80px; margin: 0 auto; background-color: lightgrey; color: darkgrey; font-size: 24px; font-weight: 900px; text-align: center;")
score.textContent = `The Score is: \n Stupid Human ${humanScore} || Evil Bot 2000 ${botScore} \n ${message}`
body.appendChild(score)

/*
buttonRock.addEventListener("click", () => {
  stupidHuman = buttonRock.textContent.toLowerCase()
})*/

function theWinnerIs(evilBot2000, stupidHuman) {

    if (evilBot2000 === "rock" && stupidHuman === "scissor") {
        message = "The Evil Robot Wins!";
        botScore++;
    } else if (evilBot2000 === "paper" && stupidHuman === "rock") {
        message = "The Evil Robot Wins!";
        botScore++;
    } else if (evilBot2000 === "scissor" && stupidHuman === "paper") {
        message = "The Evil Robot Wins!";
        botScore++;
    } else if (stupidHuman === "rock" && evilBot2000 === "scissor") {
        message = "The Stupid Human Wins!";
        humanScore++;
    } else if (stupidHuman === "paper" && evilBot2000 === "rock") {
        message = "The Stupid Human Wins!";
        humanScore++;
    } else if (stupidHuman === "scissor" && evilBot2000 === "paper") {
        message = "The Stupid Human Wins!";
        humanScore++;
    } else {
        message = "It's a tie! Human Robot Equality!";
    }

} 

let stupidHuman

buttonRock.addEventListener("click", theWinnerIs)
console.log(stupidHuman)

console.log(botScore);
console.log(humanScore);

console.log(`==========END OF ROUND ${i}===========`);

// === End of Comparison Output ===



*/