//Variables needed for the game
var computerChoice;
var computerPicked = [];
var currentWord = [];
var letterAlreadyGuessed = [];
var numberOfGuessesRemaining = 10;
var losses= 0;
var wins = 0;
var userGuessed;



var images = ['assets/images/asia.jpg', 'assets/images/australia.jpg','assets/images/America.jpg',
'assets/images/Antarctica.jpg' ,'assets/images/africa.jpg' ,'assets/images/europe.jpg',
'assets/images/dubai.jpg' ,'assets/images/egypt.jpg' ,'assets/images/hawaii.jpg' ,
'assets/images/iceland.jpg' ,'assets/images/italy.jpg' ,'assets/images/london.jpg' ,
'assets/images/malaysia.jpg' ,'assets/images/singapore.jpg' ,'assets/images/spain.jpg' 
];



computerChoice = ['Asia','Australia','AMERICA','Antarctica','Africa','Europe', 'Dubai', 'Egypy','hawaii',
'iceland','italy','london','malaysia','singapore','spain'];
computerPicked = computerChoice[Math.floor(Math.random() * computerChoice.length)].toLowerCase();


var snd_win = new Audio("assets/images/Tada.mp3"); // buffers automatically when created
var snd_lose = new Audio("assets/images/Shotgun.mp3");


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
var currentWord_html = "<h2>currentWord: " + currentWord + "</h2>";
document.querySelector("#current_word").innerHTML = currentWord_html;

var wins_html = "<h2>Wins: " + wins + "</h2>";
document.querySelector("#wins").innerHTML = wins_html;


var losses_html=  "<h2>Losses: " + losses + "</h2>";
document.querySelector("#losses").innerHTML = losses_html;

var letters_guessed_html=  "<h2>Letters Guessed: " + letterAlreadyGuessed + "</h2>";
document.querySelector("#letters_guessed").innerHTML = letters_guessed_html;

var guesses_remaining_html = "<h2>Guesses Remaining: " + numberOfGuessesRemaining + "</h2>";
document.querySelector("#numberOfGuessesRemaining").innerHTML = guesses_remaining_html;

canvasReset();

}


//to reset the canvas area when user has lost or won the game
function canvasReset() {
   var c = document.getElementById("hangmanDrawing");
  
       var ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.clearRect(0,0, c.width, c.height);
        ctx.fillStyle = "#9fced3";
        ctx.fill();
     
  
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


/*
function victoryImage(computerPicked){

  var c = document.getElementById("hangmanDrawing");
         if (c.getContext) {
              var ctx = c.getContext('2d');

             for (var i = 0; i < computerChoice.length; i++) {
                 if((computerPicked) === computerChoice[i].toLowerCase()){
                      var img1 = new Image();
                      img1.src = images[i];
                    
                    img1.onload = function () {
                      ctx.drawImage(img1, 80, 100);
                    };                    
              }
      }
  }
} 


function clearImage(){
   var c = document.getElementById("hangmanDrawing");
    if (c.getContext) {
        var ctx = c.getContext('2d');
        ctx.fillStyle = "#9fced3";
        ctx.fillRect(0, 0, 400, 400);


      }

}

*/
      



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



for(i=0; i<computerPicked.length; i++)
{   
    currentWord[i] = "-";
    
}





document.onkeyup = function(event){

    var userGuessed = event.key;
    userGuessed = userGuessed.toLowerCase();
  
    var ltrthere = computerPicked.includes(userGuessed);




if(numberOfGuessesRemaining!=0 || ((currentWord.join("")) != computerPicked)){
      if(ltrthere){
        for (var i = 0; i < computerPicked.length; i++) {
               if(computerPicked[i] === userGuessed )
                   currentWord[i] = currentWord[i].replace("-",userGuessed)  
                }

      console.log("GUesses remaining are" + numberOfGuessesRemaining);
       }

      else {
            if(!(letterAlreadyGuessed.includes(userGuessed))){
                    letterAlreadyGuessed.push(userGuessed); 
                    numberOfGuessesRemaining--;
                    addParts(numberOfGuessesRemaining);
               }

      }

if(numberOfGuessesRemaining ===0 ){
          addParts(numberOfGuessesRemaining);
          losses++;
          snd_lose.play();
          alert("Sorry, You lose !");
          reset();



}

else if ((currentWord.join("")) === computerPicked) {
   
       wins++;
       snd_win.play();

       //victoryImage(computerPicked);
       alert("Congrats, You have reached " + computerPicked + "!!!");
      
       //clearImage();
       reset();


 }



currentWord_html = "<h2>currentWord: " + currentWord + "</h2>";
document.querySelector("#current_word").innerHTML = currentWord_html;

wins_html = "<h2>Wins: " + wins + "</h2>";
document.querySelector("#wins").innerHTML = wins_html;


losses_html=  "<h2>Losses: " + losses + "</h2>";
document.querySelector("#losses").innerHTML = losses_html;

letters_guessed_html=  "<h2>Letters Guessed: " + letterAlreadyGuessed + "</h2>";
document.querySelector("#letters_guessed").innerHTML = letters_guessed_html;

guesses_remaining_html = "<h2>Guesses Remaining: " + numberOfGuessesRemaining + "</h2>";
document.querySelector("#numberOfGuessesRemaining").innerHTML = guesses_remaining_html;

}


}



