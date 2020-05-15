const pos0 = document.getElementById ("0");
const pos1 = document.getElementById ("1");
const pos2 = document.getElementById ("2");
const pos3 = document.getElementById ("3");
const pos4 = document.getElementById ("4");
const pos5 = document.getElementById ("5");
const pos6 = document.getElementById ("6");
const pos7 = document.getElementById ("7");
const pos8 = document.getElementById ("8");
const wins = document.getElementById ("wins");

const positions = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8]

// Restart Button 
const restart = document.getElementById ("restart");
restart.addEventListener ("click", function (e) {
gameBoard.init();
positions.forEach(pos => pos.addEventListener ("click", playerMove));
i = 0;
wins.style.display = "none";
playerTurn = "one";console.log(playerTurn);
document.getElementById('p2').style.fontSize = "1.5em";
document.getElementById('p1').style.fontSize = "2.5em";

});

var i = 0;  

const displayController = (() => {
 

 const isEven = function(someNumber) {
  return (someNumber % 2 === 0) ? true : false;
}


 function handleTurn () {
  if (i<9) {
    if (isEven(i) == true) {
      playerTurn ="one";  
      i++; 
    } else if (isEven(i) == false) {
      playerTurn ="two";   
      i++;  
      
    }console.log (i); console.log(playerTurn);
   }
  }

  positions.forEach((pos) => {
    if (pos.innerHTML == "") {
   pos.addEventListener ("click", handleTurn);
  }});

return {
playerTurn: playerTurn,
i : i
};

})();





var playerTurn = "one";

positions.forEach(pos => pos.addEventListener ("click", playerMove));

function playerMove(e) {
  if (playerTurn == "one"){
    e.target.innerHTML = "✖︎";
    document.getElementById('p2').style.fontSize = "2.5em";
    document.getElementById('p1').style.fontSize = "1.5em";
    
  } else if  (playerTurn == "two"){
    e.target.innerHTML = "◉";
    document.getElementById('p2').style.fontSize = "1.5em";
    document.getElementById('p1').style.fontSize = "2.5em";
    
  }
  gameBoard.updateArray(); 
  gameBoard.declareWinner();
}





    // gameBoard module

  const gameBoard = (() => {

    var gameboard = ["","","","","","","","",""];

    function init() {
    gameboard = ["","","","","","","","",""];
     pos0.innerHTML = gameboard[0];
     pos1.innerHTML = gameboard[1];
     pos2.innerHTML = gameboard[2];
     pos3.innerHTML = gameboard[3];
     pos4.innerHTML = gameboard[4];
     pos5.innerHTML = gameboard[5];
     pos6.innerHTML = gameboard[6];
     pos7.innerHTML = gameboard[7];
     pos8.innerHTML = gameboard[8];
     
    }  

   function updateArray () {
     
     gameboard[0] = pos0.innerHTML;
     gameboard[1] = pos1.innerHTML;
     gameboard[2] = pos2.innerHTML;
     gameboard[3] = pos3.innerHTML;
     gameboard[4] = pos4.innerHTML;
     gameboard[5] = pos5.innerHTML;
     gameboard[6] = pos6.innerHTML;
     gameboard[7] = pos7.innerHTML;
     gameboard[8] = pos8.innerHTML;
     console.log(gameboard);
   }

    function declareWinner () {
   if (
    gameboard[0] === "✖︎" && gameboard[1] === "✖︎" && gameboard[2] === "✖︎" || 
    gameboard[3] === "✖︎" && gameboard[4] === "✖︎" && gameboard[5] === "✖︎" ||
    gameboard[6] === "✖︎" && gameboard[7] === "✖︎" && gameboard[8] === "✖︎" ||
    gameboard[0] === "✖︎" && gameboard[4] === "✖︎" && gameboard[8] === "✖︎" ||
    gameboard[2] === "✖︎" && gameboard[4] === "✖︎" && gameboard[6] === "✖︎" ||
    gameboard[0] === "✖︎" && gameboard[3] === "✖︎" && gameboard[6] === "✖︎" ||
    gameboard[1] === "✖︎" && gameboard[4] === "✖︎" && gameboard[7] === "✖︎" ||
    gameboard[2] === "✖︎" && gameboard[5] === "✖︎" && gameboard[8] === "✖︎"){
      wins.innerHTML = "Player 1 wins";
      wins.style.display = "block";
      positions.forEach(pos => pos.removeEventListener ("click", playerMove));
      document.getElementById('p2').style.fontSize = "2em";
      document.getElementById('p1').style.fontSize = "2em";
      

} else if (
gameboard[0] === "◉" && gameboard[1] === "◉" && gameboard[2] === "◉" || 
gameboard[3] === "◉" && gameboard[4] === "◉" && gameboard[5] === "◉" ||
gameboard[6] === "◉" && gameboard[7] === "◉" && gameboard[8] === "◉" ||
gameboard[0] === "◉" && gameboard[4] === "◉" && gameboard[8] === "◉" ||
gameboard[2] === "◉" && gameboard[4] === "◉" && gameboard[6] === "◉" ||
gameboard[0] === "◉" && gameboard[3] === "◉" && gameboard[6] === "◉" ||
gameboard[1] === "◉" && gameboard[4] === "◉" && gameboard[7] === "◉" ||
gameboard[2] === "◉" && gameboard[5] === "◉" && gameboard[8] === "◉"){
      wins.innerHTML = "Player 2 wins";
      wins.style.display = "block";
      positions.forEach(pos => pos.removeEventListener ("click", playerMove));
      document.getElementById('p2').style.fontSize = "2em";
      document.getElementById('p1').style.fontSize = "2em";

    } else {
      if (i == 8) {
        wins.innerHTML = "It's a Tie";
        wins.style.display = "block";
        positions.forEach(pos => pos.removeEventListener ("click", playerMove));
        document.getElementById('p2').style.fontSize = "2em";
        document.getElementById('p1').style.fontSize = "2em";
      }
    } 
  }
  

return {
  init:init,
  updateArray: updateArray,
  declareWinner:declareWinner,
  
};
})();
 


    
// function to handle turns
    
    


