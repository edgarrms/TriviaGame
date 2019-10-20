//Question:
//could I have used
//var start = $("start"); 
//instead of 
// var start = document.getElementById("start"); var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var questionImg = document.getElementById("questionImg");
var optionA = document.getElementById("a");
var optionB = document.getElementById("b");
var optionC = document.getElementById("c");
var optionD = document.getElementById("d");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var scoreDiv = document.getElementById("scoreContainer");

let questions = [{
    question: "Hey there, Delilah, what's it like in ______ city?",
    imgSrc: "assets/images/shirt.jpg",
    optionA: "Mexico",
    optionB: "New York",
    optionC: "Pizza",
    optionD: "Toronto",
    correct: "b"
},
{
    question: "But I set ______ to the rain, watched it pour as I touched your face.",
    imgSrc: "assets/images/adele.png",
    optionA: "Tire",
    optionB: "Water",
    optionC: "Fire",
    optionD: "Wire",
    correct: "c"
},
{
    question: "I, I love you like a love song, ______.",
    imgSrc: "assets/images/song.jpg",
    optionA: "Baby",
    optionB: "Maybe",
    optionC: "Yayme",
    optionD: "Jeff",
    correct: "a"
},
{
    question: "______ we are young, so we set the world on fire.",
    imgSrc: "assets/images/fun.jpg",
    optionA: "Tomorrow",
    optionB: "Yesterday",
    optionC: "Next Tuesday",
    optionD: "Tonight",
    correct: "d"
}
];

var finalQuestion = questions.length - 1;
let questionRun = 0;
let count = 0;
var questionCountDown = 20;
var gaugeWidth = 150;
var gaugeUnit = gaugeWidth / questionCountDown;
let timer;
let score = 0


function rndQustion() {
    let q = questions[questionRun];
    question.innerHTML = "<h3>" + q.question + "</h3>"
    questionImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;
}

function startQuiz() {
    Start.style.display = "none";
    rndQustion();
    quiz.style.display = "block";
    rndProgress();
    rndCounter();
    timer = setInterval(rndCounter, 1000);
}

function rndProgress() {
    for (let qIndex = 0; qIndex <= finalQuestion; qIndex++) {
        ProgressEvent.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

function rndCounter() {
    if (count <= questionCountDown) {
        rndCounter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }
    else {
        count = 0
        wrongAnswer();
        if (questionRun < finalQuestion) {
            questionRun++;
            rndQustion();
        }
        else {
            clearInterval(timer);
            scoreRnd();
        }
    }
}

function answerCheck(answer) {
    if (answer == questions[questionRun].correct) {
        score++;
        correctAnswer();
    }
    else {
        wrongAnswer();
    }
    count = 0;
    if (questionRun < finalQuestion) {
        questionRun++;
        rndQustion();
    }
    else {
        clearInterval(timer);
        scoreRnd();
    }
}

function correctAnswer() {
    document.getElementById(questionRun).style.backgroundColor = "black";
}

function wrongAnswer() {
    document.getElementById(questionRun).style.backgroundColor = "red";
}
function scoreRnd() {
    scoreDiv.style.display = "block";
    var scoreIs = Math.round(100 * score / questions.length);
}
