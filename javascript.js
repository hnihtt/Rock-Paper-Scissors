function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0 ) {
        return "KEO"
    }
    else if (choice === 1 ) {
        return "BUA"
    }
    else {
        return "BAO"
    }
}

function getHumanChoice(){
    let choice = prompt("KEO? BUA? BAO");
    while (!["KEO", "BUA", "BAO"].includes(choice.toUpperCase())) {
        choice = prompt("Nhap sai. Vui long chon Keo, Bua hoac Bao.");
    }
    return choice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`Ban chon ${humanChoice}`);
    console.log(`Bot chon ${computerChoice}`);

    if (humanChoice === computerChoice){
        return console.log(`Hoa! Bot cung chon ${computerChoice}`);
    }
    else if (humanChoice === "KEO") {
        if (computerChoice === "BUA") {
            console.log(`${humanChoice} thua ${computerChoice}. Ban thua!`);
            return "computer"
        }
        else {
            console.log(`${humanChoice} thang ${computerChoice}. Ban thang!`);
            return "player"
        }
    }
    else if (humanChoice === "BUA") {
        if (computerChoice === "BAO") {
            console.log(`${humanChoice} thua ${computerChoice}. Ban thua!`);
            return "computer"
        }
        else {
            console.log(`${humanChoice} thang ${computerChoice}. Ban thang!`);
            return "player"
        }
    }
    else {
        if (computerChoice === "KEO") {
            console.log(`${humanChoice} thua ${computerChoice}. Ban thua!`);
            return "computer"
        }
        else {
            console.log(`${humanChoice} thang ${computerChoice}. Ban thang!`);
            return "player"
        }
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        if (result === "computer") {
            computerScore += 1;
            }
        else if (result === "player"){
            humanScore +=1;
            }
        console.log(`Diem cua ban: ${humanScore}\nDiem cua bot: ${computerScore}`);
    }
}

playGame();
