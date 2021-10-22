
const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

$(".btn").click(function() {
  const userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);
});


function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100)

  playSound(randomChosenColour);
};


function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  // $("." + currentColour).delay(100).removeClass("pressed");
};

// setTimeout(function(currentColour) {
//  $("." + currentColour).removeClass("pressed");
// }, 20);
