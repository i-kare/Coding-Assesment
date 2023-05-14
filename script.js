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
   
  $(".submit-button").click((e) => {
     e.preventDefault()
     $("#highScorePage").show();
     $("#totalScorePage").hide();
     startButton.disabled = false;
   });
 });

 $(function() {
  $(".goBack-button").click((e) => {
    e.preventDefault()
     $("#firstPage").show();
    $("#highScorePage").hide();
    
  });
});

$(function() { 
  $(".clearHighScores-button").click((e) => {
    e.preventDefault()
     $(".highScorePagePart2").show();
    $("#highScorePage").hide();    
  });
});

$(function() {
  $(".goBackPart2-button").click((e) => {
    e.preventDefault()
      $("#firstPage").show();
    $("#highScorePagePart2").hide();
    
  });
});

$(function() {

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


var win = document.querySelector(".win");
var isCompleted = false;
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var timer;
var timerCount;
   
// The startGame function is called when the start button is clicked
 function startGame() {
   isCompleted = false;
  timerCount = 10;

// Prevents start button from being clicked when assesment is in progress
  startButton.disabled = true;
  startTimer()
 }


// The completedAssesment function is called when the completedAssesment condition is met
function completedAssesment() {
   startButton.disabled = false;
   $("#totalScorePage").show();
 } 

// The endGame function is called when timer reaches 0
$(function endGame() {
  startButton.disabled = false;
})

// The setTimer function starts and stops the timer and triggers completedAssesment and endGame()
 function startTimer() {
   // Sets timer
 timer = setInterval(function() {
   timerCount--;
   timerElement.textContent = timerCount;
   if (timerCount >= 0) {
     // Tests if completedAssesment condition is met
     if (isCompleted && timerCount > 0) {
        // Clears interval, stops timer, and enable completedAssesment function
       clearInterval(timer);
       completedAssesment();
      }
    }
//     // Tests if time has run out. If timer has run out, the user is sent to the end of the game i.e the totalScorePage
    if (timerCount <= 0) {$("#totalScorePage").show();
//      
// Clears interval and hides all pages except totalScorePage i.e sends user to end of the game
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
 
 function checkWin() {
   // If the timer is equal and the same as 0, set isCompleted to true
   if (timerCount === 0) {
     // This value is used in the timer function to test if completedAssesment condition is met     
     isCompleted = true;
   }
 }

// // Attach event listener to document to listen for key event. Allows StartQuiz button to be clicked and timer to be enabled
 document.addEventListener("keydown", function(event) {
 // If the count is zero, exit function
  if (timerCount === 0) {
     return;
   }
 });

// Attach event listener to start button to call startGame function i.e the start timer on click 
 startButton.addEventListener("click", startGame);

// Attempt at resetoing the timer and start button
 //var resetButton = document.querySelector(".goBack-button","goBackPart2");
