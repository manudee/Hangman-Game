var computerChoice;
var computerPicked = [];
var currentWord = [];
var letterAlreadyGuessed = [];
var numberOfGuessesRemaining = 12;
var losses= 0;
var wins = 0;

computerChoice = ['madonna','cat','barking','hello','pictures','dog'];

computerPicked = computerChoice[Math.floor(Math.random() * computerChoice.length)];





console.log(computerPicked);

for(i=0; i<computerPicked.length; i++)
{   
    currentWord[i] = "-";
    //currentWord.push('-');
}


console.log(currentWord);


document.onkeyup = function(event){

    var userGuessed = event.key;

    console.log(userGuessed);
    document.getElementById("userGuessed").value = userGuessed;


/*code snippet for updating letter already guessed
    if (letterAlreadyGuessed.indexOf(userGuessed) === -1) {
         letterAlreadyGuessed.push(userGuessed);
         console.log( 'Letters already guessed are', +letterAlreadyGuessed );
    } 

    else  if (letterAlreadyGuessed.indexOf(userGuessed) > -1){

        console.log(userGuessed + ' Letter is already guessed ');
    }
   */
    //console.log(letterAlreadyGuessed);

    var ltrthere = computerPicked.includes(userGuessed);
    console.log(ltrthere);


//this loops through the array and replaces the _ with user guessed letters , works for multiple occurances
  /*  for (var i = 0; i < computerPicked.length; i++) {
         if(computerPicked[i] === userGuessed )
             currentWord[i] = currentWord[i].replace("-",userGuessed)  

    }
      console.log(numberOfGuessesRemaining);
      console.log(currentWord);
*/

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
          }
      
      console.log(numberOfGuessesRemaining);

    }

}

if(numberOfGuessesRemaining ==0 ){
    computerPicked = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    numberOfGuessesRemaining = 12;
    losses++;


    console.log("You Lost!");
    console.log(losses);
    console.log(computerPicked);
}

else if ((currentWord.join("")) === computerPicked) {
    console.log("You Won");
    numberOfGuessesRemaining = 12;
    wins++;
    console.log(wins);
    computerPicked = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(computerPicked);

    for(i=0; i<computerPicked.length; i++)
    {   
      currentWord[i] = "-";
    //currentWord.push('-');
    }

}




/*
           if(ltrthere && numberOfGuessesRemaining !=0)
              {   var index = computerPicked.indexOf(userGuessed);
                  console.log(index);
                  
                  currentWord[index] = currentWord[index].replace("-",userGuessed) ; //replacing the - with char inputted
                 
                 
                  //console.log(currentWord);//printing the curr word
              }

            if (!ltrthere && numberOfGuessesRemaining !=0)
            { 
               
                if (letterAlreadyGuessed.indexOf(userGuessed) === -1) {
                          numberOfGuessesRemaining--;
                          letterAlreadyGuessed.push(userGuessed);
                          console.log( 'Letters already guessed are', letterAlreadyGuessed );
                          console.log(numberOfGuessesRemaining);
                } 

            
            }*/
  
 

    //var letterGuessed = letterAlreadyGuessed.indexOf('userGuessed');

    //var letterGuessed = letterAlreadyGuessed.indexOf('p');

    //console.log(letterGuessed);

    //if(letterGuessed != -1)
    //console.log("letter guessed exists in the array");
    //else
    //console.log("letter guessed does not exist in the word");







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


/*function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}*/