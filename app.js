/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore, activePlayer; 

score = [0,0]; //Player's scores 
roundScore = 0; //Total points a player accumulated during his round
activePlayer = 0; 

//Initialize all current scores to 0:
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Hide the dice at the beginning of the game:
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
    // Generate a number between 1 and 6
var dice = Math.floor(Math.random() * 6) + 1;
    //Display our dice result:
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = "dice-"+dice+".png";
    
    //Update scores:
    if(dice === 1) {
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //We need the CSS styling to change for the current active player (more gray background and read dot!)
        document.querySelector('.player-0-panel').classList.toggle('active'); //If not removed, remove active otherwise add it back in
        document.querySelector('.player-1-panel').classList.toggle('active'); // Same as above (therefore only one active player is here at a time)
        
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  
        
        document.querySelector('.dice').style.display='none';
        
        
    } else {
        roundScore += dice; 
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }
    
});





