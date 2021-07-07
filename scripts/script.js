
 
var $yourDice1 =$('.yourDice1');
var $yourDice2 = $('.player_output .dice_02_out span');
var $computerDice1 = $('.computer_output_show .dice_01_out span');
var $computerDice2 = $('.computer_output_show .dice_02_out span');
var $yourScoreThisRound = $('.player_output .score_round_show span');
var $yourScoreFinalTotal = $('.player_output .score_total_show span');
var $computerScoreThisRound = $('.computer_output_show .score_round_show span'); 
var computerScoreFinalTotal = $('.computer_output_show .score_total_show span');

var $rollButton = $('.roll_dice');
var $newButton = $('.new_game');
var playerTotalScore = 0;
var computerTotalScore = 0;
var countNoOfTimes = 0;
var gameFinished = false;
var game = new diceGame();

game.start();

//new game 
$newButton.click(function(){
	game.start();		
});

//roll the dice button
$rollButton.click(function(){

	if(!gameFinished){
	  var yourDice = game.rollDice();
	  var ComputerDice = game.rollDice();
	  var yourRoundTotal = game.getScore(yourDice);
	  playerTotalScore = game.getGameTotalScore(yourRoundTotal, playerTotalScore);
	  var computerRoundTotal = game.getScore(ComputerDice);
	  computerTotalScore = game.getGameTotalScore(computerRoundTotal, computerTotalScore);
	  countNoOfTimes = countNoOfTimes + 2;
  
   //to set images based on dice no  
    let imgLocation1 = 'images/'+yourDice[0]+'.png';
    $('.yourDice1').css('background-image', `url(${imgLocation1})`);
    $('.yourDice1').width('67px')
    $('.yourDice1').height('65px');
    let imgLocation2 = 'images/'+yourDice[1]+'.png';
    $('.yourDice2').css('background-image', `url(${imgLocation2})`);
    $('.yourDice2').width('67px')
    $('.yourDice2').height('65px');
   let imgLocation3 = 'images/'+ComputerDice[0]+'.png';
    $('.computerDice1').css('background-image', `url(${imgLocation3})`);
    $('.computerDice1').width('67px')
    $('.computerDice1').height('65px');
    let imgLocation4 = 'images/'+ComputerDice[1]+'.png';
    $('.computerDice2').css('background-image', `url(${imgLocation4})`);
    $('.computerDice2').width('67px')
    $('.computerDice2').height('65px');
	
	  $yourScoreThisRound.text(yourRoundTotal);
	  $yourScoreFinalTotal.text(playerTotalScore);
	  $computerScoreThisRound.text(computerRoundTotal);
	  computerScoreFinalTotal.text(computerTotalScore);		
    
    
	  
	  if(countNoOfTimes === 6){
		  game.findWhoseTheWinner(playerTotalScore, computerTotalScore);
		  gameFinished = true;		
	  }
	}
	
});


function diceGame(){
	
	var diceOne;
	var diceTwo;
	
	this.start = function(){
		$yourDice1.html('&nbsp;'); 
	  	$yourDice2.html('&nbsp;');  
	  	$computerDice1.html('&nbsp;');  
	  	$computerDice2.html('&nbsp;');  
	  	$yourScoreThisRound.html('&nbsp;'); 
	  	$yourScoreFinalTotal.html('&nbsp;');  
	  	$computerScoreThisRound.html('&nbsp;');  
	  	computerScoreFinalTotal.html('&nbsp;');
		countNoOfTimes = 0;
		playerTotalScore = 0;
		computerTotalScore = 0;
		gameFinished = false;  
	};
//generates dice no between 1 to 6
	this.rollDice = function(){
		diceOne = Math.floor(Math.random()*6 + 1);
		diceTwo = Math.floor(Math.random()*6 + 1);
		return [diceOne, diceTwo];
	};
	
//display score based on calculations   
	this.getScore = function(rolledDice){
		var diceScore = 0;
		if(rolledDice[0] === 1 || rolledDice[1] === 1){
			diceScore = 0;
			return diceScore;	
		}else if(rolledDice[0] === rolledDice[1]){
			diceScore = (rolledDice[0] + rolledDice[1]) * 2;
			return diceScore;	
		}else{
			diceScore = rolledDice[0] + rolledDice[1];
			return diceScore;	
		}
	};  	
	
	this.getGameTotalScore = function(currentDiceScore, currentTotalScore){
			return currentDiceScore + currentTotalScore;
	};
	//display who wins the game 
	this.findWhoseTheWinner = function(yourScore, computerScore){
		if(yourScore > computerScore){
			alert('You win the match');	
		}else if(yourScore < computerScore){
			alert('Computer wins the match');	
		}else{
			alert('Draw match');	
		}	
	};	
	
}

//Bottom Toggle 

$(document).ready(function(){
  $("#flipper-game").click(function(){
    $("#panel-game").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#flipper-rules").click(function(){
    $("#panel-rules").slideToggle("slow");
  });
});
