const container = document.querySelector("#selection");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

btn1.classList.add("btn");
btn2.classList.add("btn");
btn3.classList.add("btn");

btn1.textContent = "rock";
btn2.textContent = "paper";
btn3.textContent = "scissor";
container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);

const div = document.createElement("div");
div.classList.add("div");
container.appendChild(div);

const div1 = document.createElement("div");
div1.classList.add("div");
container.appendChild(div1);

const result_div = document.createElement("div");
result_div.classList.add("div");

let user_choice = "";

btn1.addEventListener("click", () => {
  console.log("You choose: rock");
  user_choice = "rock";
  // div.textContent = "You choose: rock";
  computer_ch();
  check();
});
btn2.addEventListener("click", () => {
  console.log("You choose: paper");
  user_choice = "paper";
  // div.textContent = "You choose: paper";
  computer_ch();
  check();
});
btn3.addEventListener("click", () => {
  console.log("You choose: scissor");
  user_choice = "scissor";
  // div.textContent = "You choose: scissor";
  computer_ch();
  check();
});

let player_ptn = 0;
let computer_ptn = 0;
let computer_choice;
console.log(user_choice);

//making computer choice here
const computer_ch = () => {
  let choice = ["rock", "paper", "scissor"];
  let rand = Math.floor(Math.random() * 3);
  computer_choice = choice[rand];
  console.log("computer choose:-", computer_choice);
};

//checking choice
const check = () => {
  if (player_ptn != 5 && computer_ptn != 5) {
    // console.log(player_ptn);
    if (user_choice != computer_choice) {
      console.log("you play");
      if (
        (user_choice == "rock" && computer_choice == "paper") ||
        (user_choice == "scissor" && computer_choice == "rock") ||
        (user_choice == "paper" && computer_choice == "scissor")
      ) {
        computer_ptn += 1;
        console.log("computer win");
        div.textContent = "computer points :- " + computer_ptn;
        console.log(computer_ptn);
      } else if (
        (user_choice == "rock" && computer_choice == "scissor") ||
        (user_choice == "scissor" && computer_choice == "paper") ||
        (user_choice == "paper" && computer_choice == "rock")
      ) {
        player_ptn += 1;
        console.log("player win");
        div1.textContent = "user point :- " + player_ptn;
        console.log(player_ptn);
      }
    }
  } else {
    if (player_ptn == 5) {
      console.log("player already won");
      container.appendChild(result_div);
      result_div.textContent = "Player won the game";
    } else {
      console.log("player already won");
      container.appendChild(result_div);
      result_div.textContent = "computer won the game";
    }
  }
};
