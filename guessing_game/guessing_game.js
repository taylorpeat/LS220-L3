(function() {
  number = randomNumber();
  guesses = 0;
})();

$(function() {
  var game_paused = false;
  $("form").submit(function(e) {
    e.preventDefault();
    if (game_paused) {
      $("p").text("You have already won. Please start a new game.");
      return;
    };
    guesses += 1;
    var guess = $("input:text").val();
    var message = $("p").text;
    if (Number(guess) === number) {
      message = "Congratulations! You guessed the number. It took you " + guesses + " guesses!";
      game_paused = true;
    } else if (guess < number) {
      message = "You guessed lower than the number.";
    } else {
      message = "You guessed higher than the number.";
    }
    $("p").text(message);
  })

  $("a").click(function(e) {
    e.preventDefault();
    guesses = 0;
    number = randomNumber();
    game_paused = false;
    $("p").text("New Game! Guess a number between 1 and 100.");
  });
});

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}