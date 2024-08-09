// Selecting random number for each dice
const roll = () => {
  const num = Math.trunc(Math.random() * 6) + 1;
  return num;
};
// const roll1=()=>{
//   return roll();
// }
// const roll2=()=>{
//   return roll();
// }

const roll1 = roll();
const roll2 = roll();
// changing the dice pics

const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const active = document.querySelector(".active");
const win1 = document.querySelector(".win1");
const win2 = document.querySelector(".win2");

dice1.src = `dice-${roll1}.png`;
dice2.src = `dice-${roll2}.png`;

if (roll1 > roll2) {
  active.textContent = "Player 1 wins";
  win1.classList.remove("hide");
} else if (roll1 < roll2) {
  active.textContent = "Player 2 wins";
  win2.classList.remove("hide");
} else {
  active.textContent = "Draw";
}
console.log(roll1, roll2);
