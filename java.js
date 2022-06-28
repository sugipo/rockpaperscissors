var computer = " ";
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
console.log(computerSelection());
function playerSelection(form, computerSelection){
    var InputVar = form.inputbox.value.toLowerCase();
    var computerSelection = computer;
    if (InputVar == "rock" || InputVar == "paper" || InputVar == "scissors"){
        console.log(InputVar);
        console.log(computerSelection);
        if (InputVar == "rock" && computerSelection == "rock" || InputVar == "paper" && computerSelection == "paper" || InputVar == "scissors" && computerSelection == "scissors")
        {
            alert("Tie no winner");
        } else if(InputVar == "rock" && computerSelection == "paper" || InputVar == "paper" && computerSelection == "scissors" || InputVar == "scissors" && computerSelection =="rock"){
            alert("You Lose! " + computerSelection + " bests " + InputVar);
        }else if(InputVar == "rock" && computerSelection == "scissors" || InputVar == "paper" && computerSelection == "rock" || InputVar == "scissors" && computerSelection == "paper"){
            alert("You Win! " + InputVar + " beats " + computerSelection)
        }
    } else {
        alert("Please enter Rock, Paper, or Scissors in the text box");
    }
       
}

