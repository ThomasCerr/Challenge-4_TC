
var quizBox1 = document.querySelector('.box1');
var submitButton = document.querySelector('.start');
var displayScore = document.querySelector('.results');
var quiz = document.getElementById("quiz");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var question = document.getElementById("question");
var quizAnswer= document.querySelector(".choice")
var results = document.querySelector('.results')
var bottomResults = document.querySelector('.bottomResults')
var highscorePage = document.querySelector('.highscore')
var submitEnd = document.querySelector('.end')
var highscore = 0
var bottomResults = document.getElementById('.bottomresults')
var timer= ""


//timer
function startTimer() {
    var sec = 60;
    function startTimer(){
        var timer = setInterval(function(){
            sec--;
            document.getElementById('time').innerHTML=sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);
    }
    // document.getElementById('incorrect').addEventListener('click', function() {
    //     sec -= 5;
    //     document.getElementById('time').innerHTML='00:'+sec;
    // });
    startTimer();
}



var questions = [
    {
        question : "Commonly used data types DO not Include:",
        choiceA : "strings",
        choiceB : "booleans",
        choiceC : "alerts",
        choiceD : "numbers",
        correct : "alerts"
    },{
        question : "The condition in an if / else statement is enclosed with ____.",
        choiceA : "quotes",
        choiceB : "curly brackets",
        choiceC : "parenthesis",
        choiceD : "square brackets",
        correct : "parenthesis"
    },{
        question : "Arrays in JavaScript can be used to store _____.",
        choiceA : "Numbers and Strings",
        choiceB : "other arrays",
        choiceC : "booleans",
        choiceD : "all of the above",
        correct : "all of the above"

    }, {
        question : "String values must be enclosed within _____ when being assigned to variables.",
        choiceA : "commas",
        choiceB : "curly brackets",
        choiceC : "quotes",
        choiceD : "parenthesis",
        correct : "quotes"
    } 
];

var lastQuestion = questions.length;
var runningQuestion = 0;

function checkAnswer(event){
event.preventDefault();
var choice = event.target.innerText

if (choice===questions[runningQuestion].correct){
    highscore = highscore + 10;
    document.getElementById("bottomresults").textContent='Correct!'
    
runningQuestion++;
renderQuestion();
   
}
else {
    highscore = highscore - 5;
    document.getElementById("bottomresults").textContent='Wrong!';

runningQuestion++;
renderQuestion()
}


}

function finalResults (){

    quiz.classList.remove("visible");
    quiz.classList.add("hidden");
    displayScore.classList.remove("hidden");
    displayScore.classList.add("visible");
    var bottomResultsHide= document.querySelector('.bottomresults');
    bottomResultsHide.classList.add("hidden");
    document.getElementById("finalhighscore").textContent=highscore;
    submitEnd.addEventListener('click',highscorePage)

}

function renderQuestion(){
    var q;
    if (runningQuestion===lastQuestion){
     finalResults()
    }
    q = questions[runningQuestion]
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = "<button class = 'choice-btn'>" + q.choiceA + "</button>";
    choiceB.innerHTML = "<button class = 'choice-btn'>" + q.choiceB + "</button>";
    choiceC.innerHTML = "<button class = 'choice-btn'>" + q.choiceC + "</button>";
    choiceD.innerHTML = "<button class = 'choice-btn'>" + q.choiceD + "</button>";; 
    var choiceButtons = document.querySelectorAll(".choice-btn");
    choiceButtons.forEach(button=>{
    button.addEventListener('click',checkAnswer)
    
    })


}

// Hide intro & Show Q1//


var startQuiz = function (){
    quizBox1.classList.remove("visible");
    quizBox1.classList.add("hidden");
    quiz.classList.remove("hidden");
    quiz.classList.add("visible");
    renderQuestion();
    ;
}

var highscorePage = function () {
    displayScore.classList.remove("visible");
    displayScore.classList.add("hidden");
    highScore.classList.remove("hidden");
    highScore.classList.add("visible");

}


submitButton.addEventListener('click',()=> {
    startQuiz(); 
    startTimer();
}
);
