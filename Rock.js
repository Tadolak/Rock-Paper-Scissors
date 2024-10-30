const choices=["Rock","Paper","Scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScore=document.getElementById("PlayerScore")
const computerScore=document.getElementById("ComputerScore");
const tieScore=document.getElementById("TieScore");
let Playerscore=0;
let Computerscore=0;
let Tiescore=0;
tieScore.textContent=`Tie Score: ${Tiescore}`
computerScore.textContent=`Computer Score: ${Computerscore}`
playerScore.textContent=`Player Score: ${Playerscore}`

function playGame(input){

    const computerChoice=choices[Math.floor(Math.random()*3)]
    let result=" ";

    if(input===computerChoice){
        Tiescore++;
        tieScore.textContent=`Tie Score: ${Tiescore}`
        resultDisplay.classList.remove("greenText","redText")
        result="ITS A TIE!";
    }
    if(input==="Rock"&& computerChoice==="Paper"){
        result="You Lose !";

    }
    if(input==="Rock"&& computerChoice==="Scissors"){
        result="You Win !";

    }
    if(input==="Paper"&& computerChoice==="Rock"){
        result="You Win !";

    }
    if(input==="Paper"&& computerChoice==="Scissors"){
        result="You Lose !";

    }
    if(input==="Scissors"&& computerChoice==="Paper"){
        result="You Win !";

    }
    if(input==="Scissors"&& computerChoice==="Rock"){
        result="You Lose !";

    }
   
    playerDisplay.textContent=`Player: ${input}`
    resultDisplay.textContent=result

    computerDisplay.textContent=`Computer:${computerChoice}`;

    if(result==="You Win !"){
        Playerscore++;
        playerScore.textContent=`Player Score: ${Playerscore}`
        resultDisplay.classList.add("greenText");
        resultDisplay.classList.remove("redText")
    }
    if(result==="You Lose !"){
        Computerscore++;
        computerScore.textContent=`Computer Score: ${Computerscore}`
        resultDisplay.classList.add("redText");
        resultDisplay.classList.remove("greenText")
    }

}


