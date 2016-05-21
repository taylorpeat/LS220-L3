$(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var num1 = +$("#num1").val();
    var num2 = +$("#num2").val();
    var operator = $("#operator").val();
    if (operator === "+") {
      $("h1").text(num1 + num2);
    } else if (operator === "-") {
      $("h1").text(num1 - num2);
    } else if (operator === "/") {
      $("h1").text(num1 / num2);
    } else if (operator === "*") {
      $("h1").text(num1 * num2);
    }
  });
});