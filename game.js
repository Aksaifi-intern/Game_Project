// built logic
//2 variable 1 ke liye or 2 comp ko track krne ke liye
let userScore = 0;
let compScore = 0;
//iske bad ye dhkna hoga konsi choice ko select kra jayega
//isliye teno choice ko acces krenge phele
const choices = document.querySelectorAll(".choice");
const msgpar = document.querySelector("#msg")
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")
const userResult = document.querySelector("#userresult")
const compResult = document.querySelector("#compresult")
const dark = document.querySelector("#dark-mode")
const body = document.querySelector("body")
const restart = document.querySelector("#reset")
let currentmode = "light"

//dark mode
dark.addEventListener("click", () => {
    if (currentmode === "light") {
        currentmode = "dark"

        body.classList.add("dark")
        body.classList.remove("light")
    }
    else {
        currentmode = "light"

        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currentmode)

})
//resart 
restart.addEventListener("click", () => {
    msgpar.innerText = "play your move"
    msgpar.style.backgroundColor = "#081b31"
    userScorepara.innerText = 0
    compScorepara.innerText = 0
    userResult.innerText = `UserChoice is = 0`
    compResult.innerText = `CompChoice is = 0`
    userScore = 0
    compScore = 0


})


const genComputerChoice = () => {
    const option = ['rock', 'paper', 'scissor']
    //rock,paper,sesseior inme se randomly com ak generate krega
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx]


}

const drawGame = () => {
    console.log("game was draw")
    msgpar.innerText = "game was Draw!play again:)!"
    msgpar.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;

        msgpar.innerText = `you win:)your ${userChoice} beats ${compChoice}`
        msgpar.style.backgroundColor = "green";


    } else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("you lose");
        msgpar.innerText = `you lose! ${compChoice} beats your ${userChoice}`
        msgpar.style.backgroundColor = "red";


    }

    if (userScore === 5) {
        msgpar.innerText = `You Win! `
        alert("you win!")

        msgpar.style.backgroundColor = "green"

    }
    else if (compScore === 5) {
        msgpar.innerText = `Computer Win! `
        msgpar.style.backgroundColor = "green"
        alert("Computer win!")
    }
}

const playGame = (userChoice) => {

    console.log("userChoice =", userChoice)
    userResult.innerText = `UserChoice is = ${userChoice}`
    // generate computer choice

    const compChoice = genComputerChoice();
    console.log("comchoice= ", compChoice)
    compResult.innerText = `CompChoice is =${compChoice}`

    if (userChoice === compChoice) {
        //Draw 
        drawGame()
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            //scissors,paper (computer choice)
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === 'paper') {
            //scissor or rock
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            //rock or paper computer ke pass
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

//har ak individual div a jayega
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})