
const buttonColours = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];

let userClickedPattern = [];

// Study
let started = false;
//

let level = 0;


// Study
$(document).keypress(function() {
  if (!started) {
    nextSequence();
    started = true;
  }
});
//


$('.btn').click(function() {
  const userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);


    };
  }
  else {
    console.log("wrong");

    const audio = new Audio("sounds/wrong.mp3");
    audio.play();

    $('#level-title').text("Game Over, Press Any Key to Restart");

    $(document.body).addClass('game-over').delay(200).queue(function(next){
        $(this).removeClass('game-over');
        next();

//    startOver();
    });
  };
};


function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour).fadeOut(100).fadeIn(100)

  level++;
  $('#level-title').text("Level " + level);

  playSound(randomChosenColour);

  userClickedPattern.length = 0;
};

// Continue from here (Also line 58)
function startOver() {
  level.length = 0;
  gamePattern.length = 0;
  let started = false;
};
//

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColour) {
  $("." + currentColour).addClass('pressed').delay(100).queue(function(next){
      $(this).removeClass('pressed');
      next();
  });
};
