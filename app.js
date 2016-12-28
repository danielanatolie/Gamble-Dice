/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore, activePlayer, dice; 

//Hide the dice at the beginning of the game:
document.querySelector('.dice').style.dispaly = 'none';

score = [0,0]; //Player's scores 
roundScore = 0; //Total points a player accumulated 
activePlayer = 0; 



// Generate a number between 1 and 6
dice = Math.floor(Math.random() * 6) + 1 
if(dice == 1) {
    roundScore = 0;
    if(activePlayer = 0) {
        activePlayer = 1;
        roundScore = 0;
    } else {
        activePlayer = 0;
        roundScore = 0;
    }
} else {
    roundScore += dice;
}


// Access a specific part of the HTML page (the current score of player 1)
document.querySelector('#current-'+activePlayer).textContent = dice; 

var x = document.querySelector('#score-0').textContent; 
console.log(x);
    


//Function after roll-dice stopped:
score[activePlayer] += roundScore;


