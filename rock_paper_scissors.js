let options = ['rock', 'paper', 'scissors'];

function getRndInt() {
    min = Math.ceil(0);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function computerPlay() {
    let computerInput = options[getRndInt()];
    return computerInput;
}

function userPlay() {
    let correctInput = "No"
    let userInput = ""
    
    while (correctInput = "No"){
        userInput = prompt("Choose your weapon", "rock, paper, or scissors");
        if (userInput === "rock" || userInput === "scissors" || userInput === "paper"){   console.log(userInput + "1");
            break;
        }   else {
            alert("not a valid response");
        }
    }
    
    let thisRoundComp = computerPlay();
    let thisRoundUser = userInput;
    console.log(thisRoundUser);
    console.log(thisRoundComp);
    let roundWinner = "tie"

    if (thisRoundUser === "rock" && thisRoundComp === "paper"){
        roundWinner = "Computer Wins 1";        
    }   else if (thisRoundUser === "paper" && thisRoundComp === "scissors"){
        roundWinner = "Computer Wins 2";
    }   else if (thisRoundUser === "scissors" && thisRoundComp === "rock"){
        roundWinner = "Computer Wins 3";
    }   else if (thisRoundUser === thisRoundComp){
        roundWinner = "tie"
    }   else {
        roundWinner = "User Wins";
    }
    console.log(roundWinner)
     
    
    
    return "all finished";       
        
} 


userPlay();

function multipleRounds(){
    for (let roundNumber = 0; roundNumber < 5; roundNumber++){
        userPlay();
        
    }
}

/*function comparePlay() {

}
while (userInput !== "rock") {
        userInput = prompt("Incorrect, choose again:", "rock, paper, or scissors");
    }
    return userInput;
function comparePlay() {
    let thisRoundComp = computerPlay();
    let thisRoundUser = userInput;
    console.log(thisRoundUser);
    console.log(thisRoundComp);
    let roundWinner = "tie"

    if (thisRoundUser === "rock" && thisRoundComp === "paper"){
        roundWinner = "Computer Wins 1";        
    }   else if (thisRoundUser === "paper" && thisRoundComp === "scissors"){
        roundWinner = "Computer Wins 2";
    }   else if (thisRoundUser === "scissors" && thisRoundComp === "rock"){
        roundWinner = "Computer Wins 3";
    }   else if (thisRoundUser === thisRoundComp){
        roundWinner = "tie"
    }   else {
        roundWinner = "User Wins";
    }
    console.log(roundWinner)
    return "all finished";
}

function userPlay() {
    let userInput = prompt("Choose your weapon", "rock");

    while (userInput !== "rock" /*|| userInput !== "scissors" || userInput !== "paper") {
        alert ("not a valid choice");
        userInput = prompt("Choose your weapon", "Enter rock, paper, or scissors here");
    }

    comparePlay();

    if (userInput === "rock" || userInput === "scissors" || userInput === "paper") {
        console.log(userInput + "1");
        comparePlay()
        
    }   else {
        alert ("not a valid choice");
    }
    return;
}    
userPlay();*/