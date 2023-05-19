//Define the word ListFormat
        var words = ["air", "war", "pin", "rat", "van"];
        
//Select random word from the list
        var randomIndex = Math.floor(Math.random() * words.length);
        var selectedWord = words[randomIndex];
        
//Convert the selected word into an array of letters
        var selectedWordArray = [];
        
        selectedWordArray = selectedWord.split("");
        
//Initialize variables
        var remainingAttempts = 4;
        var guessedLetters = [];
        var wordDisplay = {};
       
//Function to check if the word has been solved
        function isWordSolved() {
          for (var i = 0; i < selectedWordArray.length; i++) {
            if (!guessedLetters.includes(selectedWordArray[i]))
            {
                return false;
            } 
        } 
        return true;
      }
//Main game loop - guesses
        while (remainingAttempts > 0) {
          var guess = prompt("Please enter a letter: ");
          guess = guess.toLowerCase();
          if (selectedWordArray.includes(guess)) {
            guessedLetters.push(guess);
            if (isWordSolved()) {
//Display outcome of game
              document.write("Congratulations!  You won!  The word was: " + selectedWord);
              break;
            }
            } else {
              remainingAttempts--;
              alert("Incorrect guess!  Remaining attempts: " + remainingAttempts);
              if  (remainingAttempts === 0) {
              alert("Game over!  The word was: " + selectedWord);
              }
            }
          }