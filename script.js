// const element = document.createElement(firstPage);
// const e = document.createElement('div');
// e.innerHTML = 'firstPage DOM';




$(function() {
  var count = 0;
  var pointValue = 5;
 

  $(".start-button").click((e) => {
    e.preventDefault()
    $(".firstPage").hide();
    $("#question-1").show();
    // start timer
  })

  $(".question-1-button").click((e) => {
    e.preventDefault()
    console.log(e.target.id)

    if(e.target.id==="wrong"){
      timerCount = timerCount - 15;
      console.log("the answer was wrong")
      $(".wrong").show();
      $(".right").hide();
      console.log(count);
    } else if(e.target.id ==="right"){
      console.log("the answer was correct")
      count+= pointValue; 
      $(".right").show();
      $(".wrong").hide();
      console.log(count);
      
    }

    $("#question-2").show();
    $("#question-1").hide();
    console.log($(`#${e.target.id}`).text(), "the answer")
  });





  $(".question-2-button").click((e) => {
    e.preventDefault()
    console.log(e.target.id)

    if(e.target.id==="wrong"){
      timerCount = timerCount - 15;
      console.log("the answer was wrong")
      $(".wrong").show();
      $(".right").hide();
    } else if(e.target.id ==="right"){
      console.log("the answer was correct")
      count+= pointValue;
      $(".right").show();
      $(".wrong").hide();
      console.log(count);
   
    }

    $("#question-3").show();
    $("#question-2").hide();
    console.log($(`#${e.target.id}`).text(), "the answer")
  });



 
 
   $(".question-3-button").click((e) => {
     e.preventDefault()
     console.log(e.target.id)
 
     if(e.target.id==="wrong"){
      timerCount = timerCount - 15; 
      console.log("the answer was wrong")
       $(".wrong").show();
       $(".right").hide();
     } else if(e.target.id ==="right"){
       console.log("the answer was correct")
       count+= pointValue;
       $(".right").show();
       $(".wrong").hide();
       console.log(count);
     }
 
     $("#question-4").show();
     $("#question-3").hide();
     console.log($(`#${e.target.id}`).text(), "the answer")
   });
 

 
 
 
   $(".question-4-button").click((e) => {
     e.preventDefault()
     console.log(e.target.id)
 
     if(e.target.id==="wrong"){
      timerCount = timerCount - 15; 
      console.log("the answer was wrong")
       $(".wrong").show();
       $(".right").hide();
     } else if(e.target.id ==="right"){
       console.log("the answer was correct")
       count+= pointValue;
       $(".right").show();
       $(".wrong").hide();
       console.log(count);
     }
 
     $("#question-5").show();
     $("#question-4").hide();
     console.log($(`#${e.target.id}`).text(), "the answer")
   });
 


  
 
  $(".question-5-button").click((e) => {
    e.preventDefault()
    console.log(e.target.id)

    if(e.target.id==="wrong"){
     timerCount = timerCount - 15; 
     console.log("the answer was wrong")
      $(".wrong").show();
      $(".right").hide();
    } else if(e.target.id ==="right"){
      console.log("the answer was correct")
      count+= pointValue;
      $(".right").show();
      $(".wrong").hide();
      console.log(count);
    }

     
     $("#totalScorePage").show();
    $("#question-5").hide();
    
   

     console.log($(`#${e.target.id}`).text(), "the answer")
  
    });
    
  

});











 $(function() {
   //var count = 0;
   //var pointValue = 5;
 
  $(".submit-button").click((e) => {
     e.preventDefault()
     //console.log(e.target.id)
 
    // if(e.target.id==="wrong"){
       //console.log("the answer was wrong")
       //$(".wrong").show();
    // } else if(e.target.id ==="right"){
       //console.log("the answer was correct")
       //count+= pointValue;
       //$(".right").show();
    // }
 
     $("#highScorePage").show();
     $("#totalScorePage").hide();
     startButton.disabled = false;
    
     
    //console.log($(`#${e.target.id}`).text(), "Your initials are saved")
   });
 });

 $(function() {
  //var count = 0;
  //var pointValue = 5;
 
  $(".goBack-button").click((e) => {
    e.preventDefault()
    //console.log(e.target.id)
 
    //if(e.target.id==="wrong"){
      //console.log("the answer was wrong")
     // $(".wrong").show();
   // } else if(e.target.id ==="right"){
    // console.log("the answer was correct")
      //count+= pointValue;
      // $(".right").show();
    // }
 
     $("#firstPage").show();
    $("#highScorePage").hide();
    
     //console.log($(`#${e.target.id}`).text(), "the answer")
  });
});

$(function() {
  //var count = 0;
  //var pointValue = 5;
 
  $(".clearHighScores-button").click((e) => {
    e.preventDefault()
    //console.log(e.target.id)
 
    //if(e.target.id==="wrong"){
      //console.log("the answer was wrong")
     // $(".wrong").show();
   // } else if(e.target.id ==="right"){
    // console.log("the answer was correct")
      //count+= pointValue;
      // $(".right").show();
    // }
 
     $(".highScorePagePart2").show();
    $("#highScorePage").hide();
     //console.log($(`#${e.target.id}`).text(), "the answer")
  });
});

$(function() {
  //var count = 0;
  //var pointValue = 5;
 
  $(".goBackPart2-button").click((e) => {
    e.preventDefault()
    //console.log(e.target.id)
 
    //if(e.target.id==="wrong"){
      //console.log("the answer was wrong")
     // $(".wrong").show();
   // } else if(e.target.id ==="right"){
    // console.log("the answer was correct")
      //count+= pointValue;
      // $(".right").show();
    // }
 
     $("#firstPage").show();
    $("#highScorePagePart2").hide();
     //console.log($(`#${e.target.id}`).text(), "the answer")
  });
});

$(function() {
  //var count = 0;
  //var pointValue = 5;
 
  $(".viewHighScoresButton").click((e) => {
    e.preventDefault()
    //console.log(e.target.id)
 
    //if(e.target.id==="wrong"){
      //console.log("the answer was wrong")
     // $(".wrong").show();
   // } else if(e.target.id ==="right"){
    // console.log("the answer was correct")
      //count+= pointValue;
      // $(".right").show();
    // }
 
     $("#highScorePagePart2").show();
    $("#firstPage").hide();
     //console.log($(`#${e.target.id}`).text(), "the answer")
  });
});















// var wordBlank = document.querySelector(".word-blanks");
 var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
 var timerElement = document.querySelector(".timer-count");
 var startButton = document.querySelector(".start-button");

// var chosenWord = "";
// var numBlanks = 0;
var winCounter = 0;
// var loseCounter = 0;
 var isWin = false;
 var timer;
 var timerCount;
   
 

// // Arrays used to create blanks and letters on screen
// var lettersInChosenWord = [];
// var blanksLetters = [];

// // Array of words the user will guess
// var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// // The init function is called when the page loads 
 function init() {
   getWins();
//   getlosses();
 }

// // The startGame function is called when the start button is clicked
 function startGame() {
   isWin = false;
  timerCount = 75;
//   // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
   //renderBlanks()
  startTimer()
 }

 

// // The winGame function is called when the win condition is met
function winGame() {
//   wordBlank.textContent = "YOU WON!!!🏆 ";
   winCounter++
   startButton.disabled = false;
   $("#totalScorePage").show();
   setWins()
 }

 


// // The loseGame function is called when timer reaches 0
$(function endGame() {
  // wordBlank.textContent = "GAME OVER";
  startButton.disabled = false;
  // setLosses()
 
})


// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
 function startTimer() {
//   // Sets timer
 timer = setInterval(function() {
   timerCount--;
   timerElement.textContent = timerCount;
   if (timerCount >= 0) {
//       // Tests if win condition is met
     if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
       clearInterval(timer);
         winGame();
      }
    }
//     // Tests if time has run out
    if (timerCount <= 0) {$("#totalScorePage").show();
//      
// Clears interval
      clearInterval(timer);
      $("#firstPage").hide();
      $("#question-1").hide();
      $("#question-2").hide();
      $("#question-3").hide();
      $("#question-4").hide();
      $("#question-5").hide();
      $("#highScorePage").hide();
      $("#highScorePagePart2").hide();
      endGame();
      
    }
   }, 1000);
 }

// // Creates blanks on screen
// function renderBlanks() {
//   // Randomly picks word from words array
//   chosenWord = words[Math.floor(Math.random() * words.length)];
//   lettersInChosenWord = chosenWord.split("");
//   numBlanks = lettersInChosenWord.length;
//   blanksLetters = []
//   // Uses loop to push blanks to blankLetters array
//   for (var i = 0; i < numBlanks; i++) {
//     blanksLetters.push("_");
//   }
//   // Converts blankLetters array into a string and renders it on the screen
//   wordBlank.textContent = blanksLetters.join(" ")
// }

// // Updates win count on screen and sets win count to client storage
 function setWins() {
   win.textContent = winCounter;
   localStorage.setItem("winCount", winCounter);
 }

// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }

// // These functions are used by init
 function getWins() {
//   // Get stored value from client storage, if it exists
   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
   if (storedWins === null) {
     winCounter = 0;
   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
     winCounter = storedWins;
   }
//   //Render win count to page
   win.textContent = winCounter;
 }

// function getlosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   }
//   lose.textContent = loseCounter;
// }

 function checkWin() {
//   // If the word equals the blankLetters array when converted to string, set isWin to true
   if (timerCount === 0) {
//     // This value is used in the timer function to test if win condition is met
     
isWin = true;
   }
 }

// // Tests if guessed letter is in word and renders it to the screen.
// function checkLetters(letter) {
//   var letterInWord = false;
//   for (var i = 0; i < numBlanks; i++) {
//     if (chosenWord[i] === letter) {
//       letterInWord = true;
//     }
//   }
//   if (letterInWord) {
//     for (var j = 0; j < numBlanks; j++) {
//       if (chosenWord[j] === letter) {
//         blanksLetters[j] = letter;
//       }
//     }
//     wordBlank.textContent = blanksLetters.join(" ");
//   }
// }

// // Attach event listener to document to listen for key event
 document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
  if (timerCount === 0) {
     return;
   }
//   // Convert all keys to lower case
//   var key = event.key.toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   // Test if key pushed is letter
//   if (alphabetNumericCharacters.includes(key)) {
//     var letterGuessed = event.key;
//     checkLetters(letterGuessed)
//     checkWin();
   //}
 });

// // Attach event listener to start button to call startGame function on click
 startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();






// // Bonus: Add reset button
 var resetButton = document.querySelector(".goBack-button","goBackPart2");

// function resetGame() {
//   // Resets win and loss counts
   
//winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
   //setWins()
//   setLosses()
 //}
// // Attaches event listener to button
 //resetButton.addEventListener("click", resetGame);
