let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let win = document.querySelector(".win");

let playerScoreDisplay = document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");

let resetButton = document.getElementById("reset");

rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));
resetButton.addEventListener("click", resetGame);

function play(choice) {
    let botChoice = choices[Math.floor(Math.random() * choices.length)];

    if (choice === botChoice) {
        win.innerText = `It's a draw! Both chose ${capitalize(botChoice)}.`;
        win.className = "win draw";
    } else if (
        (choice === "rock" && botChoice === "scissors") ||
        (choice === "paper" && botChoice === "rock") ||
        (choice === "scissors" && botChoice === "paper")
    ) {
        playerScore++;
        win.innerText = `You win! ${capitalize(choice)} beats ${capitalize(botChoice)}.`;
        win.className = "win win";
    } else {
        computerScore++;
        win.innerText = `Computer wins! ${capitalize(botChoice)} beats ${capitalize(choice)}.`;
        win.className = "win lose";
    }

    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        win.innerText += playerScore === 5 ? " 🎉 You won the game!" : " 💀 Computer won the game!";
        resetButton.style.display = "inline-block";
        disableButtons(true);
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerText = 0;
    computerScoreDisplay.innerText = 0;
    win.innerText = "";
    win.className = "win";
    resetButton.style.display = "none";
    disableButtons(false);
}

function disableButtons(disabled) {
    rock.disabled = disabled;
    paper.disabled = disabled;
    scissors.disabled = disabled;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
