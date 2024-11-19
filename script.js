function randomNumber() {
    return Math.ceil(Math.random() * 3) //expected output: 1, 2, 3
}

console.log(randomNumber());

const num = Number(randomNumber());
let computerChoice;

console.log(num);

function getComputerChoice(computerChoice) {
  switch (num) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissor";
      break;
    default:
      computerChoice = "error";
  }
  return computerChoice;
}

getComputerChoice(computerChoice);
console.log(getComputerChoice(computerChoice));

// end of computer choice

let humanChoice;
const input = prompt("Your turn. Please enter rock, paper, or scissor.", "rock, paper, scissor").toLowerCase()

function getHumanChoice(humanChoice) {

    if (input === "rock") {
        humanChoice = "rock";
    } else if (input === "paper") {
        humanChoice = "paper";
    } else if (input === "scissor") {
        humanChoice = "scissor";
    } else {
        alert("Invalid choice. Please try again");
    }

    return humanChoice
}

console.log(getHumanChoice(humanChoice));

// end of human choice 

let evilBot2000 = getComputerChoice(computerChoice);
let stupidHuman = getHumanChoice(humanChoice);

let botScore = 0;
let humanScore = 0;

function theWinnerIs() {

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

theWinnerIs();

console.log(botScore);
console.log(humanScore);

// end of round 1