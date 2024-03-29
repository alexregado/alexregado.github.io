
/* ASSIGNMENT 2.1 */
function sqrHyp(num1, num2) {
    let calc = Math.sqrt(num1**2 + num2**2);
    return calc;
}
console.log(sqrHyp(9, 9));

/* ASSIGNMENT 2.2 */
function triangleArea(side1, side2, side3){
    let s = (side1 + side2 + side3) / 2 ; 
    let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    return area;
}
console.log(triangleArea(5, 6, 7))

/* ASSIGNMET 2.3 */
function circleDiam(rad){return 2 * Math.PI * rad}
console.log(circleDiam(4))







/* ASSIGNMENT 3.1 */
function bigger(a, b) { a > b ? console.log("a") : console.log("b") }
//bigger(10,9.01)

/* ASSIGNMENT 3.2 */
function pair(csa) {csa % 2 ? console.log("odd") : console.log("even") }
//pair(2)

/* Main Assignment */
function rpc(playerSelection, computerSelection) {
    //get elements from html
    let resultHolder = document.querySelector(".resultWrapper");
    let paper = document.querySelector(".paper");
    let scissors = document.querySelector(".scissors");
    let rock = document.querySelector(".rock");
    let playerOptions = [paper, rock, scissors];
    let playerScoreHolder = document.querySelector(".playerScore");
    let computerScoreHolder = document.querySelector(".computerScore");
    let computerChoice = document.querySelector(".computerChoice");



    let playerScore = 0;
    let computerScore = 0;
    playerOptions.forEach(option => {
        option.addEventListener('click', function () {

            /* PLAYER */
            playerSelection = option.classList.value;
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);


            /* COMPUTER */
            const options = ["rock", "paper", "scissors"];
            play = Math.floor(Math.random() * options.length);
            computerSelection = options[play];
            computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            switch(computerSelection){
                case("Rock"):
                    computerChoice.innerHTML = `<div class='paper'>🪨</div>`;
                    break;

                case("Paper"):
                    computerChoice.innerHTML =  `<div class='paper'>🗞</div>`;
                    break;  

                case("Scissors"):
                    computerChoice.innerHTML = `<div class='scissors'>✂️</div>`;
                    break;
            }

            /* GAME OUTCOMES */
            if (playerSelection == computerSelection) {
                resultHolder.innerHTML = "<div class='result2'>Tie</div>";
            }

            else if (playerSelection == "Rock") {
                if (computerSelection == "Paper") {
                    resultHolder.innerHTML = `<div class="result computer">Computer Won! <br> ${computerSelection} beats ${playerSelection}</div>`;
                    computerScore++;
                    computerScoreHolder.textContent = computerScore;
                } else {
                    resultHolder.innerHTML = `<div class="result player">Player Won! <br> ${playerSelection} beats ${computerSelection}</div>`;
                    playerScore++;
                    playerScoreHolder.textContent = playerScore;
                }
            }

            else if (playerSelection == "Paper") {
                if (computerSelection == "Scissors") {
                    resultHolder.innerHTML = `<div class="result computer">Computer Won! <br> ${computerSelection} beats ${playerSelection}</div>`;
                    computerScore++;
                    computerScoreHolder.textContent = computerScore;
                } else {
                    resultHolder.innerHTML = `<div class="result player">Player Won! <br> ${playerSelection} beats ${computerSelection}</div>`;
                    playerScore++;
                    playerScoreHolder.textContent = playerScore;
                }
            }

            else if (playerSelection == "Scissors") {
                if (computerSelection == "Rock") {
                    resultHolder.innerHTML = `<div class="result computer">Computer Won! <br> ${computerSelection} beats ${playerSelection}</div>`;
                    computerScore++;
                    computerScoreHolder.textContent = computerScore;
                } else {
                    resultHolder.innerHTML = `<div class="result player">Player Won! <br> ${playerSelection} beats ${computerSelection}</div>`;
                    playerScore++;
                    playerScoreHolder.textContent = playerScore;
                }
            }

        })
    })
}


rpc();



function playRound(playerSelect, computerSelect) {
    playerSelect = window.prompt("Enter your play");
    playerSelect = playerSelect.toLowerCase();
    const options = ["rock", "paper", "scissors"];
    play = Math.floor(Math.random() * options.length);
    computerSelect = options[play];
    let winner = "player";

    console.log(playerSelect, computerSelect)

    if (playerSelect == computerSelect) {
        winner = "tie";
    }

    else if ((playerSelect == "rock" && computerSelect == "paper") || 
        (playerSelect == "paper" && computerSelect == "scissors") || 
        (playerSelect == "scissors" && computerSelect == "rock"))
    {    
        winner = "computer";
    }

    return winner
}

function game() {
    let computerPoints = 0;
    let personPoints = 0;

    for (let i = 0; i < 5; i++) {
        switch (playRound()) {
            case ("computer"):
                console.log(`Computer Wins Round ${i + 1}`)
                computerPoints++;
                break;

            case ("player"):
                console.log(`Player Wins Round ${i + 1}`);
                personPoints++;
                break;

            case ("tie"):
                console.log("It's Tie Round!")
                break;
        }
        console.log("Computer Play:" + computerPoints,"User Play:" + personPoints)
    }

    if(computerPoints > personPoints){ 
        return "The Computer is the winner of the game... Better luck next time."; 
    } else if(computerPoints == personPoints){
        return "It's a Tie! Try again." 
    } else{
        return "You beat the computer! Well Done." 
    }
}

