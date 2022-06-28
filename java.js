var humanwins = 0;
var computerwins = 0;

function computerSelection() {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    if (rndInt == 1){
        return computer = "rock";
        
    } 
    else if (rndInt == 2) {
        return computer = "paper";
    } 
    else {
        return computer = "scissors";
    }

}
game();
function game() {
    while (humanwins <= 4 && computerwins <= 4) {
        let playerS = prompt("Please input Rock, Paper, or Scissors");
        let computer = computerSelection();
        alert(playerSelection(playerS, computerSelection))
    }
    alert(win_condition());
}




function playerSelection(playerS, computerSelection){
    var InputVar = playerS.toLowerCase();
    var computerSelection = computer;


    if (InputVar == "rock" || InputVar == "paper" || InputVar == "scissors"){
        console.log("You chose " + InputVar);
        console.log("Computer chose " + computer);
        if (InputVar == "rock" && computerSelection == "rock" || InputVar == "paper" && computerSelection == "paper" || InputVar == "scissors" && computerSelection == "scissors")
        {   console.log("Tie no winner");
            return ("Tie no winner");
        }else if(InputVar == "rock" && computerSelection == "paper" || InputVar == "paper" && computerSelection == "scissors" || InputVar == "scissors" && computerSelection =="rock"){
            console.log("You Lose! " + computerSelection + " beats " + InputVar);
           computerwins+= 1;
           console.log("The Computer has " + computerwins + " win/s");
           return ("You Lose! " + computerSelection + " beats " + InputVar + ". The Computer has " + computerwins + " win/s");
        }else if(InputVar == "rock" && computerSelection == "scissors" || InputVar == "paper" && computerSelection == "rock" || InputVar == "scissors" && computerSelection == "paper"){
            console.log("You Win! " + InputVar + " beats " + computerSelection);
           humanwins+= 1;
           console.log("You have " + humanwins + " win/s");
           return ("You Win! " + InputVar + " beats " + computerSelection + ". You have " + humanwins + " win/s");
        }
    } else {
        alert("Please enter Rock, Paper, or Scissors in the text box");
    }
       
}
function win_condition(){
    if (humanwins == 5){
        return "Player Wins"
    }
    if (computerwins == 5){
        return "Computer Wins"
    }
    
}
