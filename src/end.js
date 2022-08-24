const finalScore = localStorage.getItem('finalScore');
const currentScore = document.querySelector("#final-score");
const finalText = document.querySelector("#final-text");

currentScore.innerText = `Your final score is: ${finalScore}`;

if(finalScore<=15){
    finalText.innerText = "You are a Level 1 - Human Being";
} else if(finalScore>15 && finalScore<=25){
    finalText.innerText = "You are a Level 2 - Delta Cube";
}else if(finalScore>25 && finalScore<=35){
    finalText.innerText = "You are a Level 3 - Ass Crack Bandit";
}else if(finalScore>35 && finalScore<=45){
    finalText.innerText = "You are a Level 4 - Chicken Fingers Master";
}else if(finalScore>45 && finalScore<=60){
    finalText.innerText = "You are a Level 5 - Laser Lotus";
}
