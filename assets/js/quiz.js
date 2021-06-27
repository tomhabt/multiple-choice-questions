// Selecting our elements for inner HTML purpose
var launchQuizEl = document.getElementById("start");
var highScoreEl = document.getElementById("high-score");
var counterEl = document.getElementById("count");
var counterTitleEl = document.querySelector(".counter");
var welcomeEl = document.getElementById("intro");
var instructionEl = document.getElementById("instruction");
var quizSectionEl = document.getElementById("quiz-section");
var qEl = document.getElementById("question");
var announceScoreEl = document.getElementById("announce-score");
var choiceAEl = document.getElementById("A");
var choiceBEl = document.getElementById("B");
var choiceCEl = document.getElementById("C");
var choiceDEl = document.getElementById("D");
var remarkEl = document.getElementById("remark");
var submitEl = document.getElementById("btn-submit");
var orderListEl = document.getElementById("order-list");
var scoreListEl = document.getElementById("score-list");
var initialListEl = document.getElementById("initial-list")
var formEl = document.getElementById("form-field");
var clearScoreEl = document.getElementById("clear-score");
var goBackEl = document.getElementById("go-back");
var inputEl = document.getElementById("initial");



// The array of questions for the quiz.
var questions = [{
	q: "1. Commonly used data types DO Not Include:",
	choiceA: "1. string",
	choiceB: "2. booleans",
	choiceC: "3. alert",
	choiceD: "4. numbers",
	correct: "B"
}, {
	q: "2. The condition in an if/else statment is enclosed within ___________.",
	choiceA: "1. quotes",
	choiceB: "2. curly brackets",
	choiceC: "3. parenthesis",
	choiceD: "4. square brackets",
	correct: 'C'
}, {
	q: "3. Array in JacaScript can be used to store ______________.",
	choiceA: "1. numbers and strings",
	choiceB: "2. other arrays",
	choiceC: "3. booleans",
	choiceD: "4. all of the above",
	correct: 'D'
}, {
	q: "4. String values must be enclosed within ____________ when being assigned to variables.",
	choiceA: "1. commas",
	choiceB: "2. curly brackets",
	choiceC: "3. quotes",
	choiceD: "4. parenthesis",
	correct: 'C'
}, {
	q: "5. A very useful tool used during devlopmet and debugging for printing content to the  debugger is:",
	choiceA: "1. javaScript",
	choiceB: "2. terminal/bash0",
	choiceC: "3. for loops",
	choiceD: "4. console.log",
	correct: 'D'
}];

//clear the some parts of the page
function clear() {
	qEl.textContent = "none";
	// Hiding of elements for the page and out of page
	announceScoreEl.style.display = "none";
	// Retrieving of elements for the page and out of page
	orderListEl.style.display = "block";
	goBackEl.style.display = "block";
	clearScoreEl.style.display = "block";
	remarkEl.style.display = "block";
}
//inClear the some parts of the page
function unClear() {
	displayMessage("");
	qEl.textContent = "block";
	// Hiding of elements for the page and out of page
	announceScoreEl.style.display = "none";
	// Retrieving of elements for the page and out of page
	remarkEl.style.display = "block";
	choiceAEl.style.display = "block";
	choiceBEl.style.display = "block";
	choiceCEl.style.display = "block";
	choiceDEl.style.display = "block";
	// Retrieving of elements for the page and out of page
	announceScoreEl.style.display = "block";
	formEl.style.display = "block";
	document.getElementById("btn-submit").disabled = false;
}

//restarts the quize
function restart() {
	questionsEnd = questions.length - 1;
	currentQuestion = 0;
	totalQuizTime = 75
	count = 0
	questionTime;
	score = 0;
	unClear();
	launchQuiz();
	highScoreEl.style.display = "block";
	counterEl.style.display = "block";
	counterTitleEl.style.display = "block";
}
// creat Global variables for function setup
var questionsEnd = questions.length - 1;
var currentQuestion = 0;
var totalQuizTime = 75
var count = 0
var questionTime;
var score = 0;

// Function for outputing the questions one by one after an attempt
function launchQestion() {
	var questionArray = questions[currentQuestion];

	qEl.innerHTML = questionArray.q;
	qEl.style.textAlign = "left"
	choiceAEl.innerHTML = questionArray.choiceA;
	choiceBEl.innerHTML = questionArray.choiceB;
	choiceCEl.innerHTML = questionArray.choiceC;
	choiceDEl.innerHTML = questionArray.choiceD;
}
highScoreEl.addEventListener("click", function showScores() {

	
	//var tempObj=localStorage.getItem("highScoore");
	
	highScoreEl.textContent = " High Score = " + highScores[0].score;
	 
})
	
// Function for using event listner to start the quiz and use the choices to move forward to the next questions
// start quiz
function launchQuiz() {
	// Hiding of elements for the page and out of page
	welcomeEl.style.display = "none";
	instructionEl.style.display = "none";
	launchQuizEl.style.display = "none";
	announceScoreEl.style.display = "none";
	orderListEl.style.display = "none";
	formEl.style.display = "none";
	goBackEl.style.display = "none";
	clearScoreEl.style.display = "none";
	// Retrieving of elements for the page and out of page
	quizSectionEl.style.display = "block";
	// function makes the questions to appear in order of answered and timer counts down every 1 second
	launchQestion();
	countdown();
	questionTime = setInterval(countdown, 1000);
}
	launchQuizEl.addEventListener("click", launchQuiz);

// Function for displaying countdown questionTime
function countdown() {
	// Checks for quiz has started and checks that questions answer in the time allowed
	if (totalQuizTime > 0) {
		counterEl.innerHTML = totalQuizTime;
		totalQuizTime--;
	} else {
		alert("Time is up! You failed to attempt all the questions. Good Bye!");
	}
}

// Function to check answer  and move forward the next question
function checkAnswer(answer) {
	var check = false;
	if (answer == questions[currentQuestion].correct) {
		// answer is correct
		remarkEl.innerHTML = "Correct!";
		check = true;
	} else {
		// answer is Wrong
		remarkEl.innerHTML = "Wrong!";
		totalQuizTime -= 10
	}
	if (check === true) {
		if (currentQuestion < questionsEnd) {
			currentQuestion++;
			launchQestion();
		} else {
			// End the quiz and show the score
			clearInterval(questionTime);
			totalQuizTime++;
			// Generating of element contents
			qEl.textContent = "All done!";
			announceScoreEl.textContent = "Your final score is " + totalQuizTime;
			// Hiding of elements for the page and out of page
			choiceAEl.style.display = "none";
			choiceBEl.style.display = "none";
			choiceCEl.style.display = "none";
			choiceDEl.style.display = "none";
			// Retrieving of elements for the page and out of page
			announceScoreEl.style.display = "block";
			formEl.style.display = "block";
		}
	}
}

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//renders the user intial and score on the page
function renderLastRegistered() {
	highScores.forEach(function (highScore) {
		var scoreEl = document.createElement("li");
		scoreEl.textContent = highScore.initials + " - " + highScore.score
		document.getElementById("order-list").appendChild(scoreEl) 	
	})
}

//renderLastRegistered();
function displayMessage(type, message) {
	remarkEl.textContent = message;
}

// Setting an event Listener for the quiz taker's name and score
submitEl.addEventListener("click", function (event) {
	event.preventDefault();
	clear();
	qEl.textContent = "High Scores";

	// Setting the localStorage with defined key and a value

	var initialSave = document.getElementById("initial").value;
	var scoreSave = totalQuizTime;
	if (initialSave === '') {
		displayMessage('error', 'Initial cannot be blank');
	} else {
		displayMessage('success', 'Your Initial & score is registered successfully');
		
		var scoreObj = {
			score: scoreSave,
			initials: initialSave
		}
		highScores.push(scoreObj)
		localStorage.setItem('highScores', JSON.stringify(highScores));
		console.log(localStorage)
		console.log(highScores)
		highScores.sort(function(a, b) {
			return b.score - a.score;
		})
		console.log(highScores)

		document.getElementById("btn-submit").disabled = true;
		document.getElementById('initial').value = '';
		highScoreEl.style.display = "none";
		counterEl.style.display = "none";
		counterTitleEl.style.display = "none";
		//   renderLastRegistered();
		renderLastRegistered()
	}
});
	
//clears the loacl storage
function deleteItems() {
	localStorage.clear();
  document.getElementById("order-list").innerHTML='';
  remarkEl.style.display = "none";
  highScoreEl.style.display = "none";
  counterEl.style.display = "none";
  counterTitleEl.style.display = "none";
}