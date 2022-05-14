// Questions and answers data bank

const questionsObject = [
  {
      question: "How do you print something in javascript?",
      a: "console.log('print)",
      b: "print('print')",
      c: "printf('print')",
      d: "log('print')",
      correct: "a",
  },
  {
      question: "What is the other name of javascript?",
      a: "ECMAscript",
      b: "JS",
      c: "none of the above",
      d: "all of the above",
      correct: "b",
  },
  {
      question: "Is java an oop language?",
      a: "no",
      b: "not entirely true",
      c: "yes",
      d: "none of the above",
      correct: "c",
  },
  {
      question: "Where can you add external javascript?",
      a: "inside head tag",
      b: "inside body tag",
      c: "all of the above",
      d: "none of the above",
      correct: "c",
  },
  {
      question: "How do you call a javascript method?",
      a: "method()",
      b: "call method()",
      c: "run method()",
      d: "none of the above",
      correct: "a",
},


];


const quiz= document.getElementById('quiz-wrapper')
//get radio buttons values from html
const answerEls = document.querySelectorAll('.options')
//gets and prints the questions in html 
const questionEl = document.getElementById('question')
//prints answer options to the html radio labels || four options are used 
const optionA = document.getElementById('optionA')
const optionB = document.getElementById('optionB')
const optionC = document.getElementById('optionC')
const optionD = document.getElementById('optionD')
//link the submit values from html
const submitBtn = document.getElementById('submit')
var currentQuestionNumber = 0;
var timeLeft = 30;
var timerInterval = 0

let currentQuiz = 0
let score = 0

loadQuiz()

//dispalys first question
function loadQuiz() {

  deselectAnswers()

  const currentquestionsObject = questionsObject[currentQuiz]

  questionEl.innerText = currentquestionsObject.question
  optionA.innerText = currentquestionsObject.a
  optionB.innerText = currentquestionsObject.b
  optionC.innerText = currentquestionsObject.c
  optionD.innerText = currentquestionsObject.d
}

// timer function timer set to 60 seconds initial
var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}




function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
//function to check which option has been selected
function getSelected() {
  //initialize variable to store selected option
  let answer
  //forEach loop to loop through all radio buttons and get the selected value
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}

//function to listen to button events and store scores locally
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === questionsObject[currentQuiz].correct) {
         score++
     }

     currentQuiz++

     if(currentQuiz < questionsObject.length) {
         loadQuiz()
     } else {
       //computes score percentage inside I call function to compute grades with score as its argument
         quiz.innerHTML = `
         <h2>You Scored <em>${calGrade(score)}</em> of ${score*20} % </h2>
          
         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})

//function to compute score grade
function calGrade(score){
  //i multiplied by 20 to make it out of 100 (%) 
  var tempVal=score*20;
  var grade;
      
  if (tempVal <= 100 && tempVal >= 80){
        grade ='A'
  }
  
  else if(tempVal <= 89 && tempVal >= 70){
        grade ='B'
  }
  
  else if(tempVal <= 69 && tempVal >= 50){
        grade ='C'
  }
  
  else if(tempVal <= 49 && tempVal >= 40){
        grade ='D'
  }
  
  else if(tempVal < 39 ){
        grade ='F'
  }
  return grade;
}

//alert box
function myAlert() {
  alert("Oops Site still under construction :(");
}
//prompt box
function myConfirm() {  
  if(confirm ("You will be redirected to the test page and timer started"))
  {
    window.location.href="./assets/pages/test.html";
  }
  }  


