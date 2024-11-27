function randomNumber() {
    return Math.floor(Math.random() * 3) + 1 //expected output: 1, 2, 3
}

const num = randomNumber();
console.log(num);

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
console.log(evilBot2000);

// === End of Computer Output === Step Validated


let i = 1;
let input = prompt(`Round ${i}. Please enter rock, paper, or scissor.`, "rock, paper, scissor").toLowerCase();

function getHumanChoice(input) {

    if (input === "rock") {
        return "rock";
    } else if (input === "paper") {
        return "paper";
    } else if (input === "scissor") {
        return "scissor";
    } else {
        alert("Invalid choice. Please try again");
    }

}

const stupidHuman = getHumanChoice(input);
console.log(stupidHuman);

// === End of Human Output === Step Validated


let botScore = 0;
let humanScore = 0;

function theWinnerIs(evilBot2000, stupidHuman) {

    if (evilBot2000 === "rock" && stupidHuman === "scissor") {
        console.log("The Evil Robot Wins!");
        botScore++;
    } else if (evilBot2000 === "paper" && stupidHuman === "rock") {
        console.log("The Evil Robot Wins!");
        botScore++;
    } else if (evilBot2000 === "scissor" && stupidHuman === "paper") {
        console.log("The Evil Robot Wins!");
        botScore++;
    } else if (stupidHuman === "rock" && evilBot2000 === "scissor") {
        console.log("The Stupid Human Wins!");
        humanScore++;
    } else if (stupidHuman === "paper" && evilBot2000 === "rock") {
        console.log("The Stupid Human Wins!");
        humanScore++;
    } else if (stupidHuman === "scissor" && evilBot2000 === "paper") {
        console.log("The Stupid Human Wins!");
        humanScore++;
    } else {
        console.log("It's a tie! Human Robot Equality!");
    }

}   

theWinnerIs(evilBot2000, stupidHuman);

console.log(botScore);
console.log(humanScore);

console.log("==========END OF ROUND===========");

// === End of Comparison Output ===


function playRound () {
  
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
  
  console.log("==========END OF ROUND===========");

}

playRound();

// === End of NextRound Function ===