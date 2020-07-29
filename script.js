let startBtn = document.getElementById("startAgainBtn");
let score = document.getElementById("number");
let img = document.getElementById("image");
let roll = document.getElementById("rollBtn");
let player = document.getElementById("player");

pScore = 0;

startBtn.style.display = "none"; // <--- can put in CSS later

// Roll button

roll.addEventListener("click", () =>{
    let rnd = Math.ceil(Math.random() * 6);
    score.textContent = rnd;
    img.src = './img/dice' + rnd + '.png';
    if(rnd !== 1){
        pScore += rnd;
        score.textContent = pScore;
    } else{
        player.textContent = "Hahaha you're a loser!!";
        startBtn.style.display = "block";
        startBtn.addEventListener("click", initialization);
        roll.style.display = "none";
    }

    // To let the player know they have won

    if(pScore >= 20){
        player.textContent = "Winner!!";
        startBtn.style.display = "block";
        startBtn.addEventListener("click", initialization);
        roll.style.display = "none";
    }
});

// Restart the game

function initialization (){
    player.textContent = "Player 1";
    startBtn.style.display = "none";
    pScore = 0;
    img.style.display = "none";
    location.reload();
}