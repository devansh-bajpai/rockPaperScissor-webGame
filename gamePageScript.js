const userWin = [[1, 3], [2, 1], [3, 2]];
let userScore = 0;
let botScore = 0;
let round = 1;

const choiceDetails = {
    1: ["rockLeftImage", "rockRightImage"],
    2: ["paperLeftImage", "paperRightImage"],
    3: ["scissorLeftImage", "scissorRightImage"]
}


function nextRound(){
    if (userScore >= 3 || botScore >= 3){
        let win = userScore > botScore ? "User" : "Bot";
        document.body.querySelector("#resultText").innerText =`${win} WINS`;

        for (let i = 1; i<=3; i++){
            document.body.querySelector(`#${choiceDetails[i][0]}`).style.visibility = 'hidden';
            document.body.querySelector(`#${choiceDetails[i][1]}`).style.visibility = 'hidden';
        }

        if (win == "User"){
            document.body.querySelector("#crownLeftImage").style.visibility = 'visible';
        }
        else {
            document.body.querySelector("#crownRightImage").style.visibility = 'visible';
        }

        document.body.querySelector("#replayButton").style.visibility = 'visible';
        document.body.querySelector("#homeButton").style.visibility = 'visible';
        document.body.querySelector("#nextRoundTimer").style.display = 'none';


        console.log('loadResult');
    }
    else {
        
        let choiceButtons = document.querySelectorAll(".choiceButtons");
            for (el of choiceButtons){
                el.disabled = false;
            }

            let loadingRingLeft = document.body.querySelector("#loadingRingLeft");
            let loadingRingRight = document.body.querySelector("#loadingRingRight");
        
            loadingRingLeft.style.visibility = 'hidden';
            loadingRingRight.style.visibility ='hidden';

            for (let i = 1; i<=3; i++){
                document.body.querySelector(`#${choiceDetails[i][0]}`).style.visibility = 'hidden';
                document.body.querySelector(`#${choiceDetails[i][1]}`).style.visibility = 'hidden';
            }

            document.body.querySelector("#resultText").innerText = "";

            let timerElement = document.body.querySelector("#nextRoundTimer");
            timerElement.innerText = "";

            document.body.querySelector("#round").innerText = `Round: ${round}`;


    }
}

function nextRoundTimer(timing) {
    if (timing === 0){
        return;
    }
    let time = timing;
    let timerElement = document.body.querySelector("#nextRoundTimer");

    timerElement.innerText = `Next Round in ${time}...`;
    setTimeout(
        ()=> {
            timerElement.innerText = `Next Round in ${time-1}...`;

            setTimeout(
                ()=> {
                    timerElement.innerText = `Next Round in ${time-2}...`;
        
                    setTimeout(
                        ()=> {
                            timerElement.innerText = `Next Round in ${time-3}...`;
                
                            
                            setTimeout(nextRound, 500);


                
                        }, 1000);
            
        
                }, 1000);
    

        }, 1000);

    
}


function afterLoad() {
    let gameWindow = document.body.querySelector("#gameWindow");
    // gameWindow.style.display = 'unset';

    gameWindow.style.display = 'flex';
    gameWindow.style.alignItems = 'center';
    gameWindow.style.justifyContent = 'center';
    gameWindow.style.flexDirection = 'column';
}

document.body.onload = setTimeout(() => {
    let toHide = document.body.querySelectorAll(".toBeHiddenAfterLoad");
    for (el of toHide){
        el.style.display = 'none';
    }

    afterLoad();

}, 1000)

function getResult(user, comp){
    let result;
    if(user === comp){
        result = 'draw';
        round++;
        return result;
    }
    else{
        for (el of userWin){
            if (el[0] === user && el[1] === comp){
                result = "user";
                round++;
                userScore++;
                return result;
            }
        }

        result = 'comp';
        round++;
        botScore++;
        return result;

    }
    
}

function updateResult(roundResult){
    document.body.querySelector("#scoreArea").innerText = `Score: ${userScore}-${botScore}`;
    // document.body.querySelector("#round").innerText = `Round: ${round}`;
    if (roundResult == 'draw'){
        document.body.querySelector("#resultText").innerText = "It's a draw";
    }
    else if (roundResult == 'comp'){
        document.body.querySelector("#resultText").innerText ="Bot Scores";
    }
    else {
        document.body.querySelector("#resultText").innerText ="User Scores";
    }

    nextRoundTimer(3);
    
}

function resultAnimation(user, comp){
    let loadingRingLeft = document.body.querySelector("#loadingRingLeft");
    let loadingRingRight = document.body.querySelector("#loadingRingRight");

    loadingRingLeft.style.visibility = 'visible';
    loadingRingRight.style.visibility ='visible';

    let choiceButtons = document.querySelectorAll(".choiceButtons");
            for (el of choiceButtons){
                el.disabled = true;
            }

    setTimeout(
        () => {
            loadingRingLeft.style.visibility = 'hidden';
            loadingRingRight.style.visibility ='hidden';

            document.body.querySelector(`#${choiceDetails[user][0]}`).style.visibility = 'visible';
            document.body.querySelector(`#${choiceDetails[comp][1]}`).style.visibility = 'visible';

            
            let roundResult = getResult(user, comp);
            // console.log(user);
            // console.log(comp);
            // console.log(roundResult);

            updateResult(roundResult);

        }, 2000
    )
}

function getComputerChoice(){
    let randNum = Math.floor((Math.random() * 3) + 1); // Returns random number between 1 and 3 (both inclusive)
    return randNum;
}

function buttonClicked(n) {
    let computerChoice = getComputerChoice();
    resultAnimation(n, computerChoice);
}