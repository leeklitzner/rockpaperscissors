var playerScore = 0;
var compScore = 0;

document.getElementById('rock').onclick=playRock;
document.getElementById('paper').onclick=playPaper;
document.getElementById('scissors').onclick=playScissors;
document.getElementById('reset').onclick=resetGame;




  document.getElementById('playerResult').innerHTML = 'You played ' + userPlay + '.';
  document.getElementById('compResult').innerHTML = 'The computer played ' +  compChoice + '.';


    }
