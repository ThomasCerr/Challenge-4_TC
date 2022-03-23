
var quizBox1 = document.querySelector('.box1');
var submitButton = document.querySelector('.start');
var displayResults = document.querySelector('.results');
var quiz = document.getElementById("quiz");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var question = document.getElementById("question");
var quizAnswer= document.querySelector(".choice")
var results = document.querySelector('.results')

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
var runningQuestion = 0;

function checkAnswer(event){
event.preventDefault();
var choice = event.target.innerText
if (choice===questions[runningQuestion].correct){

}
else {}
runningQuestion++;
renderQuestion()


}

var finalResults = function(){
    quiz.classList.remove("visible");
    quiz.classList.add("hidden");
    displayResults.classList.remove("hidden");
    displayResults.classList.add("visible");

}


function renderQuestion(){
if (runningQuestion===lastQuestion){
    var choiceButtons = document.querySelectorAll(".choice-btn");
    choiceButtons.forEach(button=>{
    button.addEventListener('click',finalResults);
    console.log('hello')
    
})
}
 else var q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";

    choiceA.innerHTML = "<button class = 'choice-btn'>" + q.choiceA + "</button>";

    choiceB.innerHTML = "<button class = 'choice-btn'>" + q.choiceB + "</button>";

    choiceC.innerHTML = "<button class = 'choice-btn'>" + q.choiceC + "</button>";

    choiceD.innerHTML = "<button class = 'choice-btn'>" + q.choiceD + "</button>";

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


submitButton.addEventListener('click',startQuiz);



