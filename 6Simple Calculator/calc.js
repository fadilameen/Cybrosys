$(document).ready(function () {
  $("input").click(function () {
    key = $(this).val();

    if (key === "C") {
      $("#display").html("");
    } else if (key === "=") {
      try {
        expression = $("#display").html();
        expression = expression.replaceAll("x", "*");
        let operators = ["+", "-", "/", "x"];
        let newexp = "";
        let currentnumber = "";
        for (let i = 0; i < expression.length; i++) {
          ch = expression[i];
          if (operators.includes(ch)) {
            newexp = newexp + fixdecimal(currentnumber) + ch;
            currentnumber = "";
            // console.log(value);
          } else {
            currentnumber = currentnumber + ch;
          }
        }
        console.log(fixdecimal(currentnumber));

        newexp = newexp + fixdecimal(currentnumber);
        console.log("expp" + newexp);
        result = eval(newexp);
        $("#display").html(result);

        // console.log(currentnumber);

        // console.log(result);

        // $("#display").html(result);
        // console.log(result);
      } catch (error) {
        console.log("error adinjj");
      }
    } else if (key === "⌫") {
      let str = $("#display").html();
      str = str.slice(0, -1);
      $("#display").html(str);
    } else {
      var current = $("#display").html().toString();
      let operators = ["+", "-", "/", "x"];

      let last = current.charAt(current.length - 1);

      if (
        (current.length === 0 &&
          (key == "+" || key == "-" || key == "/" || key == "x")) ||
        (last == "." && key == ".")
      ) {
        return;
      }

      if (operators.includes(last) && operators.includes(key)) {
        current = current.slice(0, -1);
      }
      // lastoccdec = current.lastIndexOf(".");
      // lastoccadd = current.lastIndexOf("+");
      // lastoccsub = current.lastIndexOf("-");
      // lastoccmul = current.lastIndexOf("x");
      // lastoccdiv = current.lastIndexOf("/");

      // if (
      //   key == "." &&
      //   lastoccdec > lastoccadd &&
      //   lastoccdec > lastoccsub &&
      //   lastoccdec > lastoccmul &&
      //   lastoccdec > lastoccdiv &&
      //   current.length !== 0
      // ) {
      //   console.log(current);

      //   return;
      //   console.log("monee");
      // }
      current = current + key.toString();
      $("#display").html(current);
      // console.log(current);
    }
  });
});
function fixdecimal(currentt) {
  let newval = "";
  let count = 0;

  for (i = 0; i < currentt.length; i++) {
    let temp = currentt[i];
    if (temp == ".") {
      count++;
      if (count == 1) {
        newval = newval + temp;
      }
    } else {
      newval = newval + temp;
    }
  }
  return newval;
  // console.log(newval);
}
