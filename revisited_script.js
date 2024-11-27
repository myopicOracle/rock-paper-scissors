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


// event listener
// let stupidHuman
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

//

let stupidHuman

buttonRock.addEventListener("click", theWinnerIs)
console.log(stupidHuman)

/*
console.log(theWinnerIs(evilBot2000, stupidHuman))



buttonRock.addEventListener("click", theWinnerIs)


buttonRock.addEventListener("click", () => {
    stupidHuman = buttonRock.textContent.toLowerCase()
    console.log(stupidHuman)
    console.log(evilBot2000)
    console.log(botScore)
    console.log(humanScore)

})

buttonPaper.addEventListener("click", () => {
  stupidHuman = buttonPaper.textContent.toLowerCase()
  theWinnerIs(evilBot2000, stupidHuman)
  console.log(botScore);
  console.log(humanScore);
})

buttonScissor.addEventListener("click", () => {
  stupidHuman = buttonScissor.textContent.toLowerCase()
  theWinnerIs(evilBot2000, stupidHuman)
  console.log(botScore);
  console.log(humanScore);
})
/*
//=====



function playRound () {  // function declaration
  
  randomNumber();
  const num = randomNumber();
  
  const evilBot2000 = getComputerChoice(num);
  console.log(evilBot2000);
  
  i += 1;
  let input = prompt(`Round ${i}. Please enter rock, paper, or scissor.`, "rock, paper, scissor").toLowerCase();
  const stupidHuman = getHumanChoice(input);
  console.log(stupidHuman);
  
  theWinnerIs(evilBot2000, stupidHuman);
  
  console.log(botScore);
  console.log(humanScore);
  
  console.log(`==========END OF ROUND ${i}===========`);

};



/*


for ( let j = 0; j < 4; j++ ) {  // 'i < 4' b/c first round played before loop (step 1)
  playRound();  
};

// === End of Looping Function ===


console.log(`The Final Score is [Human: ${humanScore}] [EvilBot2000: ${botScore}]`);

let winner;
if (botScore > humanScore) winner = "EvilBot2000";
    else if (humanScore > botScore) winner = "Human";
        else winner = "Everyone and No One all at Once!";

console.log(`And the winner of this exciting 5-round matchup is: ${winner}`);

console.log("==========END OF MATCH===========");
*/


//===== OLD =======
/*
let i = 1;
let input = prompt(`Round ${i}. Please enter rock, paper, or scissor.`, "rock, paper, scissor").toLowerCase();

if (input === "rock" || input === "paper" || input === "scissor") { 
  // added to account for any other value entered
  
  function getHumanChoice(input) {
    
    if (input === "rock") return "rock"; // removed bracket b/c I learned I could
    
      else if (input === "paper") return "paper";
    
        else return "scissor";
 
  };

} else alert("Invalid Entry. Please try again.");

const stupidHuman = getHumanChoice(input);
// console.log(stupidHuman);

// === End of Human Output === Step Validated



  

theWinnerIs(evilBot2000, stupidHuman);

console.log(botScore);
console.log(humanScore);

console.log(`==========END OF ROUND ${i}===========`);

// === End of Comparison Output ===



*/