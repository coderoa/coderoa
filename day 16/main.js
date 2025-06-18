const PlayerRes = document.getElementById("Presult");
const ComputerRes = document.getElementById("Cresult");
const PlayerChoice = document.getElementById("Pchoice");
const ComputerChoice = document.getElementById("Cchoice");
const Pname = document.getElementById("Pname");
const Cname = document.getElementById("Cname");

let rounds = 0;
let PlayerScore = 0;
let ComputerScore = 0;

function Crun() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

console.log(Crun());

function rock() {
        rounds++;
        clicksound("./audios/click.mp3");
        PlayerChoice.textContent = "👊";
        const crun = Crun();
        if (crun == "rock") {
            ComputerChoice.textContent = "👊";
            Cname.textContent = "rock";
            console.log("it is tie");
        } else {
            switch (crun) {
            case "paper":
                lose("paper", "🖐");
                break;
            case "scissors":
                win("scissors", "✌");
                break;
            }
        }
        isfinal(rounds);
}

function paper() {
            rounds++;
            clicksound("./audios/click.mp3");
            PlayerChoice.textContent = "🖐";
            const crun = Crun();
            Pname.textContent = "paper";
            if (crun == "paper") {
                Cname.textContent = "paper";
                ComputerChoice.textContent = "🖐";
                console.log("it is tie");
            } else {
                switch (crun) {
                case "scissors":
                    lose("scissors", "✌");
                    break;
                case "rock":
                    win("rock", "👊");
                    break;
                }
            }
            isfinal(rounds);
}

function scissors() {
        rounds++;
        clicksound("./audios/click.mp3");
        PlayerChoice.textContent = "✌";
        const crun = Crun();
        Pname.textContent = "scissors";
        if (crun == "scissors") {
            ComputerChoice.textContent = "✌";
            Cname.textContent = "scissors";
            console.log("it is tie");
        } else {
            switch (crun) {
            case "rock":
                lose("rock", "👊");
                break;
            case "paper":
                win("paper", "🖐");
                break;
            }
        }
        isfinal(rounds);
}

function win(choice, imoji) {
  ComputerChoice.textContent = imoji;
  Cname.textContent = choice;
  console.log("You win");
  PlayerScore++;
  PlayerRes.textContent = PlayerScore;
}

function lose(choice, imoji) {
  ComputerChoice.textContent = imoji;
  Cname.textContent = choice;
  console.log("You lose");
  ComputerScore++;
  ComputerRes.textContent = ComputerScore;
}

function clicksound(url) {
  const audio = new Audio(url);
  audio.currentTime;
  audio.play();
}

function finalresults() {
  if (PlayerScore > ComputerScore) {
    clicksound("./audios/win.mp3");
    document.body.style.background = "green";
    PlayerChoice.textContent = PlayerScore;
    ComputerChoice.textContent = ComputerScore;
    PlayerRes.textContent = "Victory!";
    PlayerScore = 0;
    ComputerScore = 0;
  } else {
    clicksound("./audios/lose.mp3");
    document.body.style.background = "red";
    PlayerChoice.textContent = PlayerScore;
    ComputerChoice.textContent = ComputerScore;
    PlayerRes.textContent = "Nope!";
    PlayerScore = 0;
    ComputerScore = 0;
}
rounds = 0;
}

function isfinal(rounds) {
  if (rounds === 10) {
    finalresults();
  }
}
