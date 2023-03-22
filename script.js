function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(player, computer) {
    if (player === computer) {
      return "It's a tie!";
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }
  
  const playerSelection = prompt('Choose rock, paper, or scissors:');
  const computerSelection = computerPlay();
  console.log(`Player: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);
  console.log(playRound(playerSelection, computerSelection));