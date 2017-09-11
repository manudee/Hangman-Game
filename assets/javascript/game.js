//Variables needed for the game
var computerChoice;
var computerPicked = [];
var currentWord = [];
var letterAlreadyGuessed = [];
var numberOfGuessesRemaining = 10;
var losses= 0;
var wins = 0;
var userGuessed;



computerChoice = ['madonna','CAT','barking','hello','PIcTURES','dog'];
computerPicked = computerChoice[Math.floor(Math.random() * computerChoice.length)].toLowerCase();


var snd = new Audio("assets/images/Victory Sound Effect.mp3"); // buffers automatically when created



//function reset to reset the number of guesses, create new word for a new game
function reset(){
    computerPicked = computerChoice[Math.floor(Math.random() * computerChoice.length)].toLowerCase();
    numberOfGuessesRemaining = 10;
    letterAlreadyGuessed = [];
    currentWord = [];

    for(i=0; i<computerPicked.length; i++)
    {   
      currentWord[i] = "-";
      
    }
    canvasReset();

}


//to reset the canvas area when user has lost or won the game
function canvasReset() {
   var c = document.getElementById("hangmanDrawing");
  
       var ctx = c.getContext('2d');
       ctx.clearRect(0, 0, 400, 400);
       ctx.beginPath();
  
  
}

//to draw the horizontal line on the canvas
function horizontalLine1(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
            ctx.moveTo(200,400);
            ctx.lineTo(0,400);
            ctx.stroke();

  }

}

//to draw the vertical pole on the canvas

function verticalPole(){
   var c = document.getElementById("hangmanDrawing");

           if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(0,400);
           ctx.lineTo(0,0);
           ctx.stroke();
}
}

//to draw the upper horizontal line
function horizontalLine2(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
            ctx.moveTo(0,0);
            ctx.lineTo(200,0);
            ctx.stroke();


  }

}

//to draw the small vertical line
function verticalLine(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(200,0);
           ctx.lineTo(200,80);
           ctx.stroke();

  }

}

//to draw hangman head
function head(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.beginPath();
           ctx.arc(200,120,40,0,2*Math.PI);
           ctx.stroke(); 
  }

}

//to draw hangman body vertical line
function verticalLine3(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(200,160);
           ctx.lineTo(200,350);
           ctx.stroke();

}

}

//to draw first lefthand
function leftHand1(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(200,180);
           ctx.lineTo(150,220);
           ctx.stroke();

}

}

//to draw first righthand
function rightHand1(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(200,180);
           ctx.lineTo(250,220);
           ctx.stroke();

}

}

//to draw second lefthand
function leftHand2(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(200,300)
           ctx.lineTo(150,350);
           ctx.stroke();

}

}

//to draw second righthand
function rightHand2(){
  var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
            var ctx = c.getContext('2d');
           ctx.moveTo(200,300)
           ctx.lineTo(250,350);
           ctx.stroke();

}

}


function addParts(num){
  switch(num){
    case 9:
      horizontalLine1();
      break;
    case 8:
      verticalPole();
      break;
    case 7:
      horizontalLine2();
      break;
    case 6:
      verticalLine();
      break;
    case 5:
      head();
      break;
    case 4:
      verticalLine3();
      break;
    case 3:
      leftHand1();
      break;
    case 2:
      rightHand1();
      break;
    case 1:
      leftHand2();
      break;
    case 0:
      rightHand2();
     
      break;

   
   }
}

console.log(computerPicked);

for(i=0; i<computerPicked.length; i++)
{   
    currentWord[i] = "-";
    //currentWord.push('-');
}


console.log(currentWord);


document.onkeyup = function(event){

    var userGuessed = event.key;
    userGuessed = userGuessed.toLowerCase();

    console.log(userGuessed);
    




    var ltrthere = computerPicked.includes(userGuessed);
    console.log(ltrthere);




if(numberOfGuessesRemaining!=0 || ((currentWord.join("")) != computerPicked)){
      if(ltrthere){
        for (var i = 0; i < computerPicked.length; i++) {
               if(computerPicked[i] === userGuessed )
                   currentWord[i] = currentWord[i].replace("-",userGuessed)  
           }

        console.log(currentWord);
        console.log(numberOfGuessesRemaining);
      }

else {
      if(!(letterAlreadyGuessed.includes(userGuessed))){
           letterAlreadyGuessed.push(userGuessed); 
           numberOfGuessesRemaining--;
          //document.getElementById("letterAlreadyGuessed").value = letterAlreadyGuessed;
          //document.getElementById("numberOfGuessesRemaining").value = numberOfGuessesRemaining;

          addParts(numberOfGuessesRemaining);
          
      console.log(numberOfGuessesRemaining);
      console.log(letterAlreadyGuessed);

    }

}

if(numberOfGuessesRemaining ===0 ){
    addParts(numberOfGuessesRemaining);
    losses++;
    console.log("You Lost!");
    console.log(losses);
    reset();
    // computerPicked = computerChoice[Math.floor(Math.random() * computerChoice.length)].toLowerCase();
    // numberOfGuessesRemaining = 10;
    // letterAlreadyGuessed = [];
    console.log(computerPicked);
    // currentWord = [];
     // for(i=0; i<computerPicked.length; i++)
    // {   
      // currentWord[i] = "-";
      
    // }

    console.log(currentWord);


}

else if ((currentWord.join("")) === computerPicked) {
    console.log("You Won");
    wins++;
    console.log(wins);
    snd.play();
    reset();
    // numberOfGuessesRemaining = 10;

   //computerPicked = computerChoice[Math.flloor(Math.random() * computerChoice.length)].toLowerCase();
    console.log(computerPicked);
    
    //letterAlreadyGuessed = [];//letters already guessed reset added
    //currentWord = [];//current word reset added
   // for(i=0; i<computerPicked.length; i++)
    //{   
     // currentWord[i] = "-";
     //currentWord.push('-');
    //}

    console.log(currentWord);

 }


 var html =
          
          "<p>You chose: " + userGuessed + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>numberOfGuessesRemaining: " + numberOfGuessesRemaining + "</p>" + 
          "<p>currentWord: " + currentWord + "</p>" + 
          "<p>letterAlreadyGuessed: " + letterAlreadyGuessed + "</p>" ;
         
document.querySelector("#Hangman").innerHTML = html;




}


}




/* Short Pseudo code
1. Pick a random word
2. Replace a word with dashes 
3. Ask user to guess a letter
4. See if the guessed letter is not already guessed
5. Check if the guessed letter is part of the word
6. If yes, update the current word
7. If no, reduce guesses remaining by 1, mark that letter as part of letters guessed
8. Are the guesses remaining reached 0
9. If yes, increase losses by 1, create a new word for the new game, if no go to step 3.
10.Has user guessed the correct word , increase the wins by 1, create a new word for the new game.
*/

/*longer version of psuedo code

1. Display the page contents
                Press any key to get started
                wins
                current word with -------
                number of guesses remaining
                letters already guessed
 
 
 
2. Next thing should be a function with onkeyup to capture the events by the user.
 
 
3. Create variables
                wins - var
                current_word empty string
                number of guesses - var
                letters already guessed - empty array
                computerChoice - array with set of available words
                computerPicked - this is the random word picked by the computer, empty string
                
               
 
4. Pick a random word to start the game
   write a method to generate random word out of "computerChoice" array and
   assign it to ComputerPicked, should be done before any key is pressed.
 
5. Show the picked word using dashes on screen.
   use for loop to create current_word as set of "-"es such that the number of dashes match with computerPicked
 
 
6. User should press a key to start the game
                userGuessed = key pressed letter
               
 
7. if userGuessed is NOT present in letterAlreadyGuessed array check the following
 
 
8. if the letter userGuessed is present in the computer picked word and numberOfGuessesRemaining is not zero
                replace the - with user guessed letter
                show the current word  -a--
 
 
9. else if the letter userGuessed is not present in the computer picked word and numberOfGuessesRemaining is not zero
                update the array for lettersAlreadyGuessed and print it to the screen
                reduce numberOfGuessesRemaining by 1
 
 
10. else the letter userGuessed is not present in the computer picked word and numberOfGuessesRemaining is zero
                                Print game Over to the screen
                                Reset the variables
                                Empty the letterAlreadyGuessed array
                                set numberOfGuessesRemaining to 12
                                Generate a new random word, on game over event
                                For this create a boolean variable as gameOver = False , set it to true when the game is over in the if conditions
                                put a random generator function inside this conditio when gameOver = True
 
 
11 . repeat steps 4 thourgh 9
until number of guesses are zero or current word equals computer picked word(user guessed the word)
*/


