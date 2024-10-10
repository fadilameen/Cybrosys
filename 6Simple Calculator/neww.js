$(document).ready(function () {
  $("input").click(function () {
    key = $(this).val();
    if (key === "C") {
      $("#display").html("");
    } else if (key === "=") {
      expression = $("#display").html();
      expression = expression.replaceAll("x", "*");

      // Split the expression by operators to check for multiple decimals
      let operators = ['+', '-', '*', '/'];
      let currentNumber = '';
      let newExpression = '';
      
      for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        
        // If the current character is an operator, process the current number
        if (operators.includes(char)) {
          newExpression += fixDecimals(currentNumber) + char;
          currentNumber = ''; // Reset the number for the next part
        } else {
          currentNumber += char;
        }
      }

      // Process the last number after the loop
      newExpression += fixDecimals(currentNumber);
      
      // Evaluate the fixed expression
      result = eval(newExpression);
      console.log(result);

      $("#display").html(result);
    } else if (key === "⌫") {
      let str = $("#display").html();
      str = str.slice(0, -1);
      $("#display").html(str);
    } else {
      var current = $("#display").html().toString();
      if (
        current.length === 0 &&
        (key == "+" || key == "-" || key == "/" || key == "x")
      ) {
        return;
      }
      let last = current.charAt(current.length - 1);
      let operators = ["+", "-", "/", "x"];
      if (operators.includes(last) && operators.includes(key)) {
        current = current.slice(0, -1);
      }
      current = current + key.toString();
      $("#display").html(current);
    }
  });
});

// Function to fix decimals in a number
function fixDecimals(number) {
  let decimalCount = 0;
  let result = '';

  for (let i = 0; i < number.length; i++) {
    let char = number[i];
    if (char === '.') {
      decimalCount++;
      // Only include the first decimal point
      if (decimalCount === 1) {
        result += char;
      }
    } else {
      result += char;
    }
  }

  return result;
}