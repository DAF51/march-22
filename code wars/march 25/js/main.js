
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
  p1Norm = p1.toLowerCase();
  p2Norm = p2.toLowerCase();

  if(p1Norm === p2Norm){
    return "Draw!"
  } else if ((p1Norm === "rock" && p2Norm ==="scissors")||(p1Norm === "paper" && p2Norm ==="rock")||(p1Norm === "scissors" && p2Norm ==="paper")){
    return "Player 1 won!"
  } else { return "Player 2 won!"}
};