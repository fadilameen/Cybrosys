$(document).ready(function () {
  $("input").click(function () {
    key = $(this).val();
    if (key === "C") {
      $("#display").html("");
    } else if (key === "=") {
      expression = $("#display").html();
      expression = expression.replaceAll("x", "*");
      // console.log(expression);
      result = eval(expression);
      console.log(result);
      
      $("#display").html(result);
      console.log(result);
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
