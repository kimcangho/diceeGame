//Declare arrays
var playerDiceArray = [];

// Random Six-sided Number Generator
function randomDie() {
  var dieRoll = Math.floor(6 * Math.random() + 1);
  return dieRoll;
}

//Obtain string for die image to display
function diceImage(dieRoll, imageNumber) {
  dieImage = "images/dice" + dieRoll + ".png";
  document.querySelector("img.img" + imageNumber).setAttribute("src",dieImage);
}

//Compare Player Die
function compareDice(diceArray) {
  if (diceArray[0] < diceArray[1]) {
    winner = "p2";
  } else if (diceArray[0] > diceArray[1]) {
    winner = "p1";
  } else {
    winner = "tie";
  }
  return winner;
}

//Generate result message
function gameResult(winner) {
  if (winner === "p1") {
    endMessage = "Player 1 Wins!!!";
  } else if (winner === "p2") {
    endMessage = "Player 2 Wins!!!";
  } else {
    endMessage = "Tie Game!";
  }
  //Show Winner
  document.querySelector("h2").innerHTML = endMessage;
}

//Main Logic
function diceeGameExecute(diceArray) {
  //Roll die and generate images
  for (var i = 0; i < 2; i++) {
    var roll = randomDie();
    diceArray.push(roll);
    diceImage(roll,i+1);
  }
  //Determine winner and display message
  var winner = compareDice(diceArray);
  gameResult(winner);
}

//Execute Program
diceeGameExecute(playerDiceArray);
