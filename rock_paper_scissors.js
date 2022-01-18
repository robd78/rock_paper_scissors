let options = ['rock', 'paper', 'scissors'];
let roundWinner = "";
let userScore = 0;
let computerScore = 0;
let ties = 0;

function getRndInt() {
    min = Math.ceil(0);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function computerPlay() {
    let computerInput = options[getRndInt()];
    return computerInput;
}

function userPlay(userInput) {    
    let thisRoundComp = computerPlay();
    let thisRoundUser = userInput;
    console.log(thisRoundUser);
    console.log(thisRoundComp);

    if (thisRoundUser === "rock" && thisRoundComp === "paper"){
        roundWinner = "Computer Wins";
        accumulator(roundWinner);
    }   else if (thisRoundUser === "paper" && thisRoundComp === "scissors"){
        roundWinner = "Computer Wins";
        accumulator(roundWinner);
    }   else if (thisRoundUser === "scissors" && thisRoundComp === "rock"){
        roundWinner = "Computer Wins";
        accumulator(roundWinner);
    }   else if (thisRoundUser === thisRoundComp){
        roundWinner = "tie"
        accumulator(roundWinner);
    }   else {
        roundWinner = "User Wins";
        accumulator(roundWinner);
    }
    console.log(roundWinner);
    return roundWinner;       
        
} 

function accumulator(roundWinner) {
    if (roundWinner === "User Wins") {
        userScore++;
        console.log(userScore);
        let scoreContainer = document.querySelector(".user-score");
        scoreContainer.textContent = userScore;
    } else if (roundWinner === "tie") {
        ties++;
    } else {
        computerScore++;
        let scoreContainer = document.querySelector(".computer-score");
        scoreContainer.textContent = computerScore;
    }
    isThereAWinner();
}

function isThereAWinner() {
    if (userScore === 5) {
        console.log("Congratulations!");
        removeListener()
    } else if(computerScore === 5){
        console.log("BadLuck!");
        removeListener()
    } else {
    }
}


/*function multipleRounds(userInput){
    
    
    for (let roundNumber = 0; roundNumber < 5; roundNumber++){
        userPlay(userInput);
        console.log(userScore);
        console.log(computerScore);
        console.log(roundWinner);
        
        if (roundWinner === "User Wins"){
            userScore++;
        }   else if (roundWinner === "tie"){
            ties++;
        }   else {
            computerScore++;
        }
    }
        
        
        if (userScore > computerScore){
            console.log("Congratulations");
            return
    }   else{
            console.log("Bad luck");
            return
    }
}*/

let button = document.querySelectorAll("button.choice");

function buttonClick(e) {
    let userInput = e.target.id;
    userPlay(userInput);

}

function removeListener() {
    for (let index = 0; index < button.length; index++) {
        button[index].removeEventListener("click",buttonClick);
    }
}

for (let index = 0; index < button.length; index++) {
    button[index].addEventListener("click", buttonClick);
}
