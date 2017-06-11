// variables 

var redGem = '';
var blueGem = '';
var yellowGem = '';
var greenGem = '';
var targetNumber = '';
var wins = 0;
var losses = 0;
var totalScore = 0;


function startGame () {
	totalScore =0;
	redGem = Math.floor(Math.random() * 11) + 1;
	blueGem = Math.floor(Math.random() * 11) + 1;
	yellowGem = Math.floor(Math.random() * 11) + 1;
	greenGem = Math.floor(Math.random() * 11) + 1;
    targetNumber = Math.floor(Math.random()*(121-19+1)+19);
}

function redGemClicked () {
	var myscore = redGem + totalScore;
	totalScore = myscore;
	winOrLose(); 
		
}

function blueGemClicked () {
	var myscore = blueGem + totalScore;
	totalScore = myscore;
	winOrLose(); 
}

function yellowGemClicked () {
	var myscore = yellowGem + totalScore;
	totalScore = myscore;
	winOrLose(); 
}

function greenGemClicked () {
	var myscore = greenGem + totalScore;
	totalScore = myscore;
	winOrLose(); 

}

function winOrLose() {
	if (totalScore === targetNumber) {
		wins++;
		startGame();
	}
	else if (totalScore > targetNumber) {
		losses++;
		startGame();
	}
}
