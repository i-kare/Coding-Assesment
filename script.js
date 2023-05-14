$(function () {
  var count = 0;
  var pointValue = 5;
  var isCompleted = false;
  var timerElement = document.querySelector(".timer-count");
  var startButton = document.querySelector(".start-button");
  var timer;
  var timerCount;

  $(".start-button").click((e) => {
    e.preventDefault();
    $(".firstPage").hide();
    $("#question-1").show();
    startGame(); // starts timer
  });

  $(".question-1-button").click((e) => {
    e.preventDefault();

    if (e.target.id === "wrong") {
      timerCount = timerCount - 15;
      $(".wrong").show();
      $(".right").hide();
    } else if (e.target.id === "right") {
      count += pointValue;
      $(".right").show();
      $(".wrong").hide();
    }

    $("#question-1").hide();
    $("#question-2").show();
  });

  $(".question-2-button").click((e) => {
    e.preventDefault();

    if (e.target.id === "wrong") {
      timerCount = timerCount - 15;
      $(".wrong").show();
      $(".right").hide();
    } else if (e.target.id === "right") {
      count += pointValue;
      $(".right").show();
      $(".wrong").hide();
    }

    $("#question-2").hide();
    $("#question-3").show();
  });

  $(".question-3-button").click((e) => {
    e.preventDefault();

    if (e.target.id === "wrong") {
      timerCount = timerCount - 15;
      $(".wrong").show();
      $(".right").hide();
    } else if (e.target.id === "right") {
      count += pointValue;
      $(".right").show();
      $(".wrong").hide();
    }

    $("#question-3").hide();
    $("#question-4").show();
  });

  $(".question-4-button").click((e) => {
    e.preventDefault();

    if (e.target.id === "wrong") {
      timerCount = timerCount - 15;
      $(".wrong").show();
      $(".right").hide();
    } else if (e.target.id === "right") {
      count += pointValue;
      $(".right").show();
      $(".wrong").hide();
    }

    $("#question-4").hide();
    $("#question-5").show();
  });

  $(".question-5-button").click((e) => {
    e.preventDefault();

    if (e.target.id === "wrong") {
      timerCount = timerCount - 15;
      $(".wrong").show();
      $(".right").hide();
    } else if (e.target.id === "right") {
      count += pointValue;
      $(".right").show();
      $(".wrong").hide();
    }
    $("#totalScore").text("Your final score is " + count);
    $("#question-5").hide();
    $("#totalScorePage").show();
    clearInterval(timer);
  });

  $(".submit-button").click((e) => {
    e.preventDefault();
    $("#totalScorePage").hide();
    $("#highScorePage").show();
    showHighScorePage();
    let user = $("#initialsInput").val();

    // if users list is empty then add to it
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", user);
    } else {
      let userList = localStorage.getItem("users");
      if (userList.search(user) === -1) {
        localStorage.setItem("users", userList + "," + user);
      } // we can't find the user - only add to userlist if we can't find the user
    } // retrieve users list and add to it

    localStorage.setItem(user, count);

    startButton.disabled = false;
  });

  $("#viewHighScoresButton").click((e) => {});

  function showHighScorePage() {
    let userList = localStorage.getItem("users");
    let results = $("#highScoreResults");
    results.empty();
    if (userList !== null) {
      usersArray = userList.split(",");
      for (let i = 0; i < usersArray.length; i++) {
        results.append(
          `<li>${i + 1}. ${usersArray[i]} - ${localStorage.getItem(
            usersArray[i]
          )} </li>`
        );
      }
    }
  }

  $(".goBack-button").click((e) => {
    e.preventDefault();
    $("#firstPage").show();
    $("#highScorePage").hide();
  });

  $(".clearHighScores-button").click((e) => {
    e.preventDefault();
    $(".highScorePagePart2").show();
    $("#highScorePage").hide();
  });

  $(".goBackPart2-button").click((e) => {
    e.preventDefault();
    $("#firstPage").show();
    $("#highScorePagePart2").hide();
  });

  $(".viewHighScoresButton").click((e) => {
    e.preventDefault();
    $("#highScorePagePart2").show();
    $("#firstPage").hide();
  });

  // The startGame function is called when the start button is clicked
  function startGame() {
    isCompleted = false;
    timerCount = 25;

    // Prevents start button from being clicked when assessment is in progress
    startButton.disabled = true;
    startTimer();
  }

  // The completedAssessment function is called when the completedAssessment condition is met
  function completedAssessment() {
    startButton.disabled = false;
    $("#totalScorePage").show();
  }

  // The endGame function is called when timer reaches 0
  function endGame() {
    startButton.disabled = false;
    count = 0; // reset count for next quiz
  }

  // The setTimer function starts and stops the timer and triggers completedAssessment() and endGame()
  function startTimer() {
    // Sets timer
    timer = setInterval(function () {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount > 0) {
        // Tests if completedAssessment condition is met
        if (isCompleted && timerCount > 0) {
          // Clears interval, stops timer, and enable completedAssessment function
          clearInterval(timer);
          completedAssessment();
          count = 0; // reset count for next quiz
        }
      }
      // Tests if time has run out. If timer has run out, the user is sent to the end of the game i.e the totalScorePage
      if (timerCount <= 0) {
        $("#totalScorePage").show();

        timerElement.textContent = 0;
        console.log(count);
        $("#totalScore").text("Your final score is " + count);

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
});
