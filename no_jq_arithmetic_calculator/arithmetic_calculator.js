window.onload = function() {
  document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;
    var message = "";
    if (operator === "+") {
      message = num1 + num2;
    } else if (operator === "-") {
      message = num1 - num2;
    } else if (operator === "/") {
      message = num1 / num2;
    } else if (operator === "*") {
      message = num1 * num2;
    }
    document.getElementsByTagName("h1")[0].innerHTML = message;
  }
};