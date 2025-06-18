const PlayerRes =  document.getElementById("Presult")
const ComputerRes = document.getElementById("Cresult")
const PlayerChoice = document.getElementById("Pchoice")
const ComputerChoice = document.getElementById("Cchoice")
const Pname = document.getElementById("Pname")
const Cname = document.getElementById("Cname")

let PlayerScore = 0;
let ComputerScore = 0;

function Crun(){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*3)]
}

console.log(Crun())

function rock(){
    PlayerChoice.textContent = "👊"
    const crun = Crun()
    if(crun=="rock"){
        ComputerChoice.textContent = "👊"
        Cname.textContent = "rock"
        console.log("it is tie")
    }
    else{
        switch(crun){
            case "paper":
                lose("paper", "🖐")
                break;
            case "scissors":
                win("scissors", "✌")
                break;
    }
}
}


function paper(){
    PlayerChoice.textContent = "🖐"
    const crun = Crun()
    Pname.textContent = "paper";
    if(crun=="paper"){
        Cname.textContent = "paper"
        ComputerChoice.textContent = "🖐";
        console.log("it is tie")
    }
    else{
        switch(crun){
            case "scissors":
                lose("scissors", "✌")
                break;
            case "rock":
                win("rock", "👊")
                break;
    }
}
}



function scissors(){
    PlayerChoice.textContent = "✌";
    const crun = Crun()
    Pname.textContent = "scissors"
    if(crun=="scissors"){
        ComputerChoice.textContent = "✌";
        Cname.textContent = "scissors"
        console.log("it is tie")
    }
    else{
        switch(crun){
            case "rock":
                lose("rock", "👊");
                break;
            case "paper":
                win("paper", "🖐")
                break;
    }
}
}

function win(choice, imoji){ 
    ComputerChoice.textContent = imoji;
    Cname.textContent = choice;
    console.log("You win");
    PlayerScore++;
    PlayerRes.textContent = PlayerScore;
}

function lose(choice, imoji){
    ComputerChoice.textContent = imoji;
    Cname.textContent = choice;
    console.log("You lose")
    ComputerScore++
    ComputerRes.textContent = ComputerScore
}
