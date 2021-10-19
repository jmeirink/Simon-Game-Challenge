
const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];


$(".btn").click(function() {
  const userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
});


function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);

  return randomNumber;
};

const randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100)

///////////// Not working in chrome, but does work in Safari
const audio = new Audio('sounds/' + randomChosenColour + '.mp3');
audio.play();
/////////////
