function getComputerChoice(){
    const choice = Math.floor(Math.random()*3)+1
    switch (choice){
        case 1:
            return ("scissor")
            break;
        case 2:
            return("rock")
        case 3:
            return("paper")
    }
}

function getPlayerChoioce(){
    
}

function game(){
    
}

function play(computerSelection, playerSelection){
    switch (playerSelection) {
        case "rock":
            switch(computerSelection){
                case "rock":
                    return ("tie");
                    break;
                case "paper":
                    return("lose");
                    break;
                case "scissor":
                    return("win");}
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    return ("win");
                    break;
                case "paper":
                    return("tie");
                    break;
                case "scissor":
                    return("lose");
            }
            break;
        case "scissor":
            switch(computerSelection){
                case "rock":
                    return ("lose");
                    break;
                case "paper":
                    return("win");
                    break;
                case "scissor":
                    return("tie");  
            }
    }
    }



console.log(play(getComputerChoice(),"rock"))