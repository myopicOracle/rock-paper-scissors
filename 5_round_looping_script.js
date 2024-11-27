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

if (input === "rock" || input === "paper" || input === "scissor") { 
  // added to account for any other value entered
  
  function getHumanChoice(input) {
    
    if (input === "rock") return "rock"; // removed bracket b/c I learned I could
    
      else if (input === "paper") return "paper";
    
        else return "scissor";
 
  };

} else alert("Invalid Entry. Please try again.");

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

console.log(`==========END OF ROUND ${i}===========`);

// === End of Comparison Output ===


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