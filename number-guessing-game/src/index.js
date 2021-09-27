const form = document.getElementById("random-num-form");
const generatedNum = form.querySelector(".generatedNum");
const userGuessingNum = form.querySelector("#userGuessingNum");
const submitBtn = form.querySelector("button");

let btnPushed = false;

function goPlay(event) {
  event.preventDefault();
  const div = document.querySelector("div");
  const para = document.querySelector("p");
  const userChoice = Number(userGuessingNum.value);
  const comChoice = Math.round(Math.random() * Number(generatedNum.value));
  const result = div.appendChild(para);

  let winOrLose;

  if (userChoice === comChoice) {
    winOrLose = "You won!🎉";
    div.classList.remove("lose");
    div.classList.add("win");
  } else {
    winOrLose = "You lost 😭";
    div.classList.remove("win");
    div.classList.add("lose");
  }

  result.innerText = `Your Choice: ${userChoice}, Your computer's Choice: ${comChoice}\n${winOrLose}`;

  btnPushed = true;
  btnPushed
    ? (submitBtn.innerText = "Try again!")
    : (submitBtn.innertext = "Play!");
}

submitBtn.addEventListener("click", goPlay);
