
var quizBox1 = document.querySelector('.box1');
var submitButton = document.querySelector('.start');
var displayResults = document.querySelector('.results');
var quiz = document.getElementById("quiz");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var question = document.getElementById("question");


var questions = [

    {

        question : "Commonly used data types DO not Include:",

        choiceA : "strings",

        choiceB : "booleans",

        choiceC : "alerts",

        choiceD : "numbers",

        correct : "A"

    },{

        question : "The condition in an if / else statement is enclosed with ____.",

        choiceA : "strings",

        choiceB : "Correct",

        choiceC : "Wrong",

        choiceD : "numbers",

        correct : "B"

    },{

        question : "Arrays in JavaScript can be used to store _____.",

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "Correct",

        choiceD : "numbers",

        correct : "C"

    }, {

        question : "String values must be enclosed within _____ when being assigned to variables.",

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "Correct",

        choiceD : "numbers",

        correct : "C"
    }
];

var lastQuestion = questions.length - 1;
var runningQuestion = 0

function renderQuestion(){

    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

    choiceD.innerHTML = q.choiceD;
}

// Hide intro & Show Q1//


var startQuiz = function(){
quizBox1.classList.remove("data-state","visible");
quizBox1.classList.add("data-state","hidden");
quiz.classList.remove("data-state","hidden");
quiz.classList.add("data-state","visible");;
    renderQuestion();

}

submitButton.addEventListener('click',startQuiz)



