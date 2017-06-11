// game global variables 
var purpleGem = '';
var orangeGem = '';
var greenGem = '';
var whiteGem = '';
var targetNumber = '';
var wins = 0;
var losses = 0;
var totalScore = 0;

//initializes the game  
$(document).ready(function() {

//starts the game 
startGame();

//When the purple button is clicked, the random number assigned (in the start game function)  
//increases by that number and is added to the total score which starts at zero. A new variable is
//introduced (myscore) which equals the total score after each click.  Total score is printed in the total 
//score div.  Then the winOrLose function resets the game.  
$('#purpleGemBtn').click(function(e) {
	var myscore = purpleGem + totalScore; 
	totalScore = myscore;
	$("#totalScore").text(totalScore);
	winOrLose(); 
});
//When the orange button is clicked, the random number assigned (in the start game function)  
//increases by that number and is added to the total score which starts at zero. A new variable is
//introduced (myscore) which equals the total score after each click.  Total score is printed in the total 
//score div.  Then the winOrLose function resets the game. 
$('#orangeGemBtn').click(function(e) {
	var mycurrentScore = orangeGem + totalScore;
	totalScore = mycurrentScore;
	$("#totalScore").text(totalScore);
	winOrLose();
});
//When the green button is clicked, the random number assigned (in the start game function)  
//increases by that number and is added to the total score which starts at zero. A new variable is
//introduced (myscore) which equals the total score after each click.  Total score is printed in the total 
//score div.  Then the winOrLose function resets the game. 
$('#greenGemBtn').click(function(e){
	var myscore = greenGem + totalScore;
	totalScore = myscore;
	$("#totalScore").text(totalScore);
	winOrLose();
});

//When the white button is clicked, the random number assigned (in the start game function)  
//increases by that number and is added to the total score which starts at zero. A new variable is
//introduced (myscore) which equals the total score after each click.  Total score is printed in the total 
//score div.  Then the winOrLose function resets the game. 
$('#whiteGemBtn').click(function(e) {
	var myscore = whiteGem + totalScore;
	totalScore = myscore;
	$("#totalScore").text(totalScore);
	winOrLose();
});

});
//The start game function assigns the variables to random numbers.  The totalScore for the game starts at Zero.  The 4 gem buttons are assigned a 
//random number between 1-12 and the targetNumber variable is asigned a random number between 19-121.
//Both the targetNumber and the totalScore numbers are printed in each div.
function startGame () {
	totalScore =0;
	purpleGem = Math.floor(Math.random() * 11) + 1;
	orangeGem = Math.floor(Math.random() * 11) + 1;
	greenGem = Math.floor(Math.random() * 11) + 1;
	whiteGem = Math.floor(Math.random() * 11) + 1;
    targetNumber = Math.floor(Math.random()*(121-19+1)+19);
    $("#targetNumber").text(targetNumber);
    $("#totalScore").text(totalScore);
}

//Within the WinorLose function contains if and else if statements.  If the totalScore variable matches the targetNumber variable
//then the player wins, the wins score is increased by 1 and an alert displays "You Won!".  The game is also rest.
//In the else if statement, if the totalScore is greater than the targetNumber, losses increases by 1, it is shown in the div.  As well
//as the player will see an alert that says "You Lost!".  The game is then reset.  
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



