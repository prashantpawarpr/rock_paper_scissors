function getComputerChoice() {
  let a = Math.floor(Math.random() * 10);
  if (a <= 3 && a >= 0) {
    // console.log("paper");
    return "paper";
  } else if (a < 6) {
    // console.log("scissor");
    return "scissor";
  } else {
    // console.log("rock");
    return "rock";
  }
}

// console.log(computer);

function getHumanChoice() {
  // console.log("human choice");
  let choice = prompt("choose from : Rock : Paper : Scissor ");
  return choice;
}

function playRound(computerChoice, humanChoice) {
  console.log(computerChoice);
  if (computerChoice == "rock" && humanChoice == "rock") {
    return "draw";
    document.write("draw");
  }
  if (computerChoice == "paper" && humanChoice == "paper") {
    return "draw";
    document.write("draw");
  }
  if (computerChoice == "scissor" && humanChoice == "scissor") {
    return "draw";
    document.write("draw");
  }
  if (computerChoice == "rock" && humanChoice == "paper") {
    return "human won";
    document.write("human won");
  }
  if (computerChoice == "rock" && humanChoice == "scissor") {
    return "computer won";
    document.write("computer won");
  }
  if (computerChoice == "paper" && humanChoice == "rock") {
    return "computer won";
    document.write("computer won");
  }
  if (computerChoice == "paper" && humanChoice == "scissor") {
    return "human won";
    document.write("human won");
  }
  if (computerChoice == "scissor" && humanChoice == "paper") {
    return "computer won";
    document.write("computer won");
  }
  if (computerChoice == "scissor" && humanChoice == "rock") {
    return "human won";
    document.write("human won");
  }
}

function playGame() {
  for (let i = 0; i <= 4; i++) {
    let computer = getComputerChoice();
    let human = getHumanChoice();
    console.log("computer choice: ", computer);
    console.log("human choice: ", human);
    let output = playRound(computer, human);
    document.writeln("<br><h2 style='text-align:center' >", output, "</h2>");
  }
}
playGame();
