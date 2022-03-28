var quizBox1 = document.querySelector('.box1');
var submitButton = document.querySelector('.start');
var displayScore = document.querySelector('.results');
var quiz = document.getElementById("quiz");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var question = document.getElementById("question");
var quizAnswer= document.querySelector(".choice");
var bottomResults = document.querySelector('.bottomResults');
var highscorePage = document.getElementById('highscore');
var submitEnd = document.querySelector('.end');
var highscore = 0;
var bottomResults = document.getElementById('.bottomresults');
var timer= "";
var sec = 60;


var printHighscore = document.getElementById("finalhighscore").textContent=highscore;
//highscore page variables




var playAgain = document.getElementById('playagain');
var clearHighscore = document.getElementById('.clearhighscore');






//timer
    function startTimer(){
        var timer = setInterval(function(){
            sec--;
            document.getElementById('time').innerHTML=sec;
            if (sec < 1) {
                clearInterval(timer);
                alert("Time is up!")
                quiz.classList.remove("visible");
                 quiz.classList.add("hidden");
                 displayScore.classList.remove("hidden");
                displayScore.classList.add("visible");
            }
        }, 1000);
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
    document.getElementById("bottomresults").textContent='Correct!';
    
runningQuestion++;
renderQuestion();
   
}
else {
    highscore = highscore - 5;
    document.getElementById("bottomresults").textContent='Wrong!';
    sec = sec - 10;

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
    var printHighscore = document.getElementById("finalhighscore").textContent=highscore;
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var username = document.getElementById("lname");
    var mostRecentScore = localStorage.getItem("mostRecentScore");
    printHighscore.innerText = mostRecentScore;
   

    saveHighScore = e => {
        e.preventDefault();
        var score = {
            score: mostRecentScore,
            name: username.value
        };
        highScores.push(score);
        highScores.sort((a,b) =>  b.score - a.score)
        highScores.splice(5);
        localStorage.setItem("highScores", JSON.stringify(highScores))
    }
    
    
}


function renderQuestion(){
    var q;
    console.log(highscore)
    if (runningQuestion===lastQuestion){
     finalResults()
    }
    q = questions[runningQuestion]
    if (q != undefined){
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = "<button class = 'choice-btn'>" + q.choiceA + "</button>";
    choiceB.innerHTML = "<button class = 'choice-btn'>" + q.choiceB + "</button>";
    choiceC.innerHTML = "<button class = 'choice-btn'>" + q.choiceC + "</button>";
    choiceD.innerHTML = "<button class = 'choice-btn'>" + q.choiceD + "</button>";; 
    var choiceButtons = document.querySelectorAll(".choice-btn");
    choiceButtons.forEach(button=>{
    button.addEventListener('click',checkAnswer)



    })}
}

// Hide intro & Show Q1//

var startQuiz = function (){
    quizBox1.classList.remove("visible");
    quizBox1.classList.add("hidden");
    quiz.classList.remove("hidden");
    quiz.classList.add("visible");
    renderQuestion();
    sec=60;
}

var finalBox = function (event) {
    event.preventDefault();
    displayScore.classList.remove("visible");
    displayScore.classList.add("hidden");
    highscorePage.classList.remove("hidden");
    highscorePage.classList.add("visible");
    
}

var restart = function (){
    highscorePage.classList.remove("visible");
    highscorePage.classList.add("hidden");
    quizBox1.classList.remove("hidden");
    quizBox1.classList.add("visible");
    sec=600;
} 


var reloadpage = function(){
var reload = location.reload();}



submitButton.addEventListener('click',()=> {
    startQuiz(); 
    startTimer();
}
);
submitEnd.addEventListener('click',finalBox)
playAgain.addEventListener('click', reloadpage)


