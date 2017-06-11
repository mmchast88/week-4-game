
$(document).ready(function() {

startGame();

$('#purpleGemBtn').click(function(e) {
	var myscore = purpleGem + totalScore; 
	totalScore = myscore;
	$("#totalScore").text(totalScore);
	winOrLose(); 
});

$('#orangeGemBtn').click(function(e) {
	var mycurrentScore = orangeGem + totalScore;
	totalScore = mycurrentScore;
	$("#totalScore").text(totalScore);
	winOrLose();
});

$('#greenGemBtn').click(function(e){
	var morgan = greenGem + totalScore;
	totalScore = morgan;
	$("#totalScore").text(totalScore);
	winOrLose();
});


$('#whiteGemBtn').click(function(e) {
	var myscore = whiteGem + totalScore;
	totalScore = myscore;
	$("#totalScore").text(totalScore);
	winOrLose();
});

});

// game global variables 
var purpleGem = '';
var orangeGem = '';
var greenGem = '';
var whiteGem = '';
var targetNumber = '';
var wins = 0;
var losses = 0;
var totalScore = 0;

  
function startGame () {
	totalScore =0;
	purpleGem = Math.floor(Math.random() * 11) + 1;
	orangeGem = Math.floor(Math.random() * 11) + 1;
	yellowGem = Math.floor(Math.random() * 11) + 1;
	whiteGem = Math.floor(Math.random() * 11) + 1;
    targetNumber = Math.floor(Math.random()*(121-19+1)+19);
    $("#targetNumber").text(targetNumber);
    $("#totalScore").text(totalScore);
}

function winOrLose() {
	if (totalScore === targetNumber) {
		wins++;
		$("#wins").text(wins);
		alert('You Won!');
		startGame();
	}
	else if (totalScore > targetNumber) {
		losses++;
		$("#losses").text(losses);
		alert('You Lost!');
		startGame();
	}

}



