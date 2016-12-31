 /*
MODIFICATION 2:
- Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
*/
var score, roundScore, activePlayer, goal, gamePlaying; 


initializeScores();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // Generate a number between 1 and 6
        var dice = Math.floor(Math.random() * 6) + 1;
        //Display our dice result:
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = "dice-"+dice+".png";
    
        //Update scores:
        if(dice === 1) {
            roundScore = 0;
            updateActivePlayer();
        
        } else {
            roundScore += dice; 
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }
    }
});

document.querySelector(".btn-hold").addEventListener('click', function() {
    if(gamePlaying) {
        //Update active Player's score:
        score[activePlayer] += roundScore;
        roundScore = 0;
        //Update UI
        document.getElementById('score-'+activePlayer).textContent = score[activePlayer];
        goal = document.querySelector('.final-score').value;
        console.log(goal);
        
        if(score[activePlayer] >= goal) {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            //Update UI
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            gamePlaying = false;
        } else {
            updateActivePlayer();
        }
    } 
});

document.querySelector('.btn-new').addEventListener('click', initializeScores);
    
function updateActivePlayer() {
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //Toggle active player UI
    document.querySelector('.player-0-panel').classList.toggle('active'); //If not removed, remove active otherwise add it back in
    document.querySelector('.player-1-panel').classList.toggle('active'); // Same as above (therefore only one active player is here at a time)    
    //Change active player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;    
    document.querySelector('.dice').style.display='none';
}

function initializeScores() {
    gamePlaying = true;
    score = [0,0];
    activePlayer = 0;
    roundScore = 0;
    
    //Initialize all current scores to 0:
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Change potential 'Winner!' text to 'Player n'
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    //Remove winner UI
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    //Remove active classes:
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    //Add first player as active
    document.querySelector('.player-0-panel').classList.add('active');
      
    //Hide the dice at the beginning of the game:
    document.querySelector('.dice').style.display = 'none';
}




  
     