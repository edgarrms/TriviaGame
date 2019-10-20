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

var finalQuestion = question.length - 1;
let questionRun = 0;

function rndQustion() {
    let q = questions[questionRun];
    question.innerHTML = "<h3>" + q.question + "</h3>"
    questionImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;
}

StaticRange.style.display = "none";
rndQustion();
quiz.style.display = "block";