const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progress-text');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progress-bar-full');
const finalScore = document.querySelector("#final-score");
const finalText = document.querySelector("#final-text");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const questions = [
    {
        question: "What's Bitta's last name?",
        op1: "Perry",
        op2: "Bennet",
        op3: "Barry",
        op4: "Barnes",
        op5: "Edison",
        correct: 1,
        stage: 1
    },
    {
        question: "How many episodes does season 1 have?",
        op1: "21",
        op2: "25",
        op3: "22",
        op4: "24",
        op5: "18",
        correct: 2,
        stage: 1
    },
    {
        question: "What's Abed's racial background?",
        op1: "Indian and Polish",
        op2: "Arab and German",
        op3: "Arab and Polish",
        op4: "Indian and Slovenian",
        op5: "Arab and Indian",
        correct: 3,
        stage: 1
    },
    {
        question: "What does Pierce's dad's company sells?",
        op1: "Moist Towelettes",
        op2: "Toilette Paper",
        op3: "Dish Towels",
        op4: "Sanitizing Wipes",
        op5: "Napkins",
        correct: 1,
        stage: 1
    },
    {
        question: "What is the name of the app students of Greendale used to rate each other?",
        op1: "WoofWoofBeenz",
        op2: "GreedaleStars",
        op3: "FiveStars",
        op4: "MeowMeowBeenz",
        op5: "CheeChoowCheeChoow",
        correct: 4,
        stage: 1
    },
    {
        question: "What is the Dean's weird fetish?",
        op1: "Brazilian Birds",
        op2: "German Shepards",
        op3: "Jeff",
        op4: "Labradors",
        op5: "Dalmatians",
        correct: 5,
        stage: 1
    },
    {
        question: "How many children does Shirley have?",
        op1: "1",
        op2: "3",
        op3: "4",
        op4: "None",
        op5: "2",
        correct: 2,
        stage: 1
    },
    {
        question: "What is Abed's girlfirend's name?",
        op1: "Raquel",
        op2: "Rosie",
        op3: "Rachel",
        op4: "Rita",
        op5: "Ruth",
        correct: 3,
        stage: 1
    },
    {
        question: "What is Troy's monkey's name?",
        op1: "King Kong",
        op2: "Britta's Boobs",
        op3: "Fivel",
        op4: "Annie's Boobs",
        op5: "Bruno",
        correct: 4,
        stage: 1
    },
    {
        question: "What is the name of the interactive VCR game Abed and Annie play?",
        op1: "Pile of Bullets",
        op2: "Pile of Guns",
        op3: "Whose Ears are These?",
        op4: "Bang!",
        op5: "Dungeons and Dragons",
        correct: 1,
        stage: 1
    },
    {
        question: "What's Abed's favorite food?",
        op1: "Buttered Noodles",
        op2: "Splingles",
        op3: "Kettle Corn",
        op4: "Pizza",
        op5: "Salmon",
        correct: 1,
        stage: 1
    },
    {
        question: "What's the name of Greendale's most dangerous criminal?",
        op1: "Butt Crack Psycho",
        op2: "Ass Crack Bandit",
        op3: "Ass Cheek Robber",
        op4: "Benjamin Chang",
        op5: "Coin Bandit",
        correct: 2,
        stage: 1
    },
    {
        question: "Who are the winners of the first and sacond Paintball game, respectively?",
        op1: "Jeff and Jeff",
        op2: "Britta and Pierce",
        op3: "Jeff and Shirley",
        op4: "Chang and Shirley",
        op5: "Jeff and Pierce",
        correct: 5,
        stage: 1
    },
    {
        question: "What's the name of Greendale's drama teacher?",
        op1: "Professor Professorson",
        op2: "Professor Sean Garrity",
        op3: "Professor Ian Duncan",
        op4: "Professor Noel Cornwallis",
        op5: "Professor Peter Sheffield",
        correct: 2,
        stage: 1
    },
    {
        question: "Which member of the Study Group is, according to Pierce, his favorite?",
        op1: "Jeff",
        op2: "Shirley",
        op3: "Annie",
        op4: "Troy",
        op5: "Britta",
        correct: 3,
        stage: 1
    },
    {
        question: "Where is Rich, from pottery class, from?",
        op1: "Denver",
        op2: "New Jersey",
        op3: "Albuquerque",
        op4: "Santa Fe",
        op5: "San Francisco",
        correct: 4,
        stage: 1
    },
    {
        question: "How many times has Pierce been married?",
        op1: "Three",
        op2: "One",
        op3: "Five",
        op4: "Seven",
        op5: "Eight",
        correct: 4,
        stage: 1
    },
    {
        question: "Who is Troy's favorite celebrity?",
        op1: "LeVar Burton",
        op2: "Jim Belushi",
        op3: "Chevy Chase",
        op4: "Cristian Bale",
        op5: "Sophie B Hawkins",
        correct: 1,
        stage: 1
    },
    {
        question: "Which fast food chain (almost) buys Greendale?",
        op1: "McDonald's",
        op2: "KFC",
        op3: "In-N-Out Burger",
        op4: "Taco Bell",
        op5: "Subway",
        correct: 5,
        stage: 1
    },
    {
        question: "What's Abed's favortite TV show?",
        op1: "Cougar Town",
        op2: "Inspector Spacetime",
        op3: "Cougarton Abbey",
        op4: "The Cape",
        op5: "Doctor Who",
        correct: 2,
        stage: 1
    }
]

const scorePoints = [1,2,3];
const maxQuestions = 20;    

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion ();
}

getNewQuestion = () => {
    if (questionCounter >= maxQuestions){
        localStorage.setItem('finalScore', score);
        return window.location.assign("./end.html");
    }
    questionCounter++;
    progressText.innerText = `${questionCounter} of ${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['op'+number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach((choice) => {
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = selectedAnswer == currentQuestion.correct ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(scorePoints[currentQuestion.stage-1]);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 700)
    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}



startGame();



