console.log("Shall we play some Rock, Paper, Scissors?");

// Step 1
const choiceOne = "Rock";
const choiceTwo = "Paper";
const choiceThree = "Scissor";

function getComputerChoice(flex) {
    return Math.ceil(Math.random() * flex);
}

const choice = getComputerChoice(3);
console.log(choice);

// Step 2
let npc = 
    (choice === 1) ?
    choiceOne :
    (choice === 2) ?
    choiceTwo :
    choiceThree;

console.log(npc);

// Step 3
const input = prompt("Please enter Rock, Paper, or Scissor.", "Rock");
let player;

switch (input) {
    case "Rock":
        alert(input);
        player = input;
        break;
    case "Paper":
        alert(input);
        player = input;
        break;
    case "Scissor":
        alert(input);
        player = input;
        break;
    default:
        alert ("Please enter a valid choice. Capitalization matters.");
}

console.log(player);

// Step 4
let humanScore = 0;
let computerScore = 0;

// Step 5
function singleRound(npc, player) {

if (
    (npc === "Rock" && player === "Scissor")
    || (npc === "Paper" && player === "Rock")
    || (npc === "Scissor" && player === "Paper")
    ) {
        console.log("The Computer Wins!");
        computerScore++;
    } else if (
        (player === "Rock" && npc === "Scissor")
        || (player === "Paper" && npc === "Rock")
        || (player === "Scissor" && npc === "Paper")
        ) {
            console.log("The Human Wins!");
            humanScore++;    
        } else {
            console.log("It's a Tie!");
         }
}  

singleRound(npc, player);
    
console.log(computerScore);
console.log(humanScore); 
