
var introContainer = document.getElementById('intro');
var submitButton = document.querySelector('.start');
var displayResults = document.querySelector('.results');
var quizBox = document.getElementById('quizbox');


// Hide intro & Show Q1//


var startQuiz = function (){
introContainer.classList.remove("data-state","visible");
introContainer.classList.add("data-state","hidden");
quizBox.classList.remove("data-state","hidden");
quizBox.classList.add("data-state","visible");
console.log(introContainer);

}
submitButton.addEventListener('click',startQuiz)


// function replace1(){
// document.getElementById(introContainer).style.display="none";
// document.getElementById(quizContainer).style.display="block";

// submitButton.addEventListener('click', function(event) {
//     var element = event.target;
//     console.log(element);