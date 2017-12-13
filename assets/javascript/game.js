let correctCounter = 0;
let wrong = 0;
let unansweredCounter = 0;
let intervalId;
let timer = 20;
let questionIndex = 0;
let timerText = $("#timer");
let correctOption;


$("#start").click(startQuiz);


function startQuiz(){
	$("#start").hide();
	correct = 0;
	wrong = 0;
	unansweredCounter = 0;
	questionIndex = 0;
	clearQuestion();
	displayQuestion();
};


function run() {
	intervalId = setInterval(timeOut, 1000);
	function timeOut() {
		if (timer === 0) {
			unanswered();
		}
		if (timer > 0) {
			timer--;
		}
		timerText.html("<h2>Time Remaining: " + timer + "</h2>");
	}
};

function stop() {
	clearInterval(intervalId);
	timerText.empty();
};

function unanswered(){
	stop();
	clearQuestion();
	unansweredCounter++;
	tempScreen();
};

function correctGuess(){
	console.log("right");
	stop();
	clearQuestion();
	correctCounter++;
	tempScreen();
};

function incorrect(){
	console.log("wrong");
	stop();
	clearQuestion(); 
	wrong++;
	tempScreen();
};


function tempScreen(){
	correctOption = questions[questionIndex].correct();
	$("#optA").text("The correct answer was: " + correctOption);
	setTimeout(checkWin, 3000);
};


$(".option").on("click", function(){
	correctOption = questions[questionIndex].correct();
	console.log(correctOption + " test");
	console.log(this);
	let userResponse = $(this).text();
	console.log("User response: "+ userResponse)
	if(userResponse === correctOption){
		correctGuess();
	}else if (userResponse !== correctOption){
		incorrect();
	};
});


function displayQuestion(){
	console.log("This is index: "+ questionIndex)
	clearQuestion();
	$("#question").html(questions[questionIndex].question);
	$("#optA").html(questions[questionIndex].choices[0]);
	$("#optB").html(questions[questionIndex].choices[1]);
	$("#optC").html(questions[questionIndex].choices[2]);
	$("#optD").html(questions[questionIndex].choices[3]);
	timer = 20;
	run();
};

function clearQuestion(){
	$("#question").html("");
	$("#optA").html("");
	$("#optB").html("");
	$("#optC").html("");
	$("#optD").html("");
};

function checkWin(){
	questionIndex++;
	if((questionIndex + 1) > questions.length){
		clearQuestion();
		endGame();
	}else{
		displayQuestion();
	};
};

function endGame(){
	stop();
	clearQuestion();
	$("#optA").text("Correct: "+ correctCounter);
	$("#optB").text("Wrong: "+ wrong);
	$("#optC").text("Unanswered: "+ unansweredCounter);
	$("#start").show();
	console.log("thats all folks");
	console.log("Correct: " + correct);
	console.log("Wrong: " + wrong);;
	console.log("Unanswered: " + unanswered)
};





var questions = [{
	question: "What is the state capital of Idaho?",
	choices: ["Casper","Spokane","Boise","Russet"],
	correct: function(){ return this.choices[2]}
}, {
	question: "What is the state capital of New Jersey?",
	choices: ["Trenton","Newark","Perth Amboy","Burlington"],
	correct: function(){ return this.choices[0]}
}, {
	question: "What is the state capital of Florida?",
	choices: ["Tampa","Orlando","Tallahassee","Miami"],
	correct: function(){ return this.choices[2]}
}, {
	question: "What is the state capital of Arizona?",
	choices: ["Las Vegas","Flagstaff","Tuscon","Phoenix"],
	correct: function(){ return this.choices[3]}
}, {
	question: "What is the state capital of Illinois?",
	choices: ["Springfield","Aurora","Chicago","Peoria"],
	correct: function(){ return this.choices[0]}
}, {
	question: "What is the state capital of Alabama?",
	choices: ["Birmingham","Montgomery","Mobile","Tuscaloosa"],
	correct: function(){ return this.choices[1]}
}, {
	question: "What is the state capital of California?",
	choices: ["San Diego","San Francisco","Los Angeles","Sacramento"],
	correct: function(){ return this.choices[3]}
}, {
	question: "What is the state capital of Vermont?",
	choices: ["Middlebury","Sanders","Montpelier","Burlington"],
	correct: function(){ return this.choices[2]}
}, {
	question: "What is the state capital of Colorado?",
	choices: ["Denver","Colorado Springs","Fort Collins","Boulder"],
	correct: function(){ return this.choices[0]}
}, {
	question: "What is the state capital of Tennessee?",
	choices: ["Knoxville","Nashville","Memphis","Chattanooga"],
	correct: function(){ return this.choices[1]}
}];