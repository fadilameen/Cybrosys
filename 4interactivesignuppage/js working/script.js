// birthdate = document.getElementById("dob").value;
// var datenow = new Date();
// var bdate = new Date(birthdate);
// yearnow = datenow.getFullYear();
// byear = bdate.getFullYear();
// total = yearnow - byear;
// console.log(total);
// age = document.getElementById("age").value = total;
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = yyyy + "-" + mm + "-" + dd;
document.getElementById("dob").setAttribute("max", today);

function validateName() {
  var name = document.getElementById("user-name").value;
  var nameError = document.getElementById("name-error");

  if (name.length >= 3) {
    nameError.innerHTML = ""; // Clear the error message
  } else {
    nameError.innerHTML = "Name must be at least 3 characters";
  }
}
function validateEmail() {
  var email = document.getElementById("email").value;
  var emailError = document.getElementById("email-error");
  var emailRegex = /^[^\s@]+@[^\s@]+$/;

  if (emailRegex.test(email)) {
    emailError.innerHTML = ""; // Clear the error message
  } else {
    emailError.innerHTML = "Invalid email format";
  }
}
function validateAge() {
  var age = document.getElementById("age").value;
  var ageError = document.getElementById("age-error");

  if (age < 0 || age > 100) {
    ageError.innerHTML = "Age must be between 0 and 100";
  } else {
    ageError.innerHTML = ""; // Clear the error message
  }
}
function verifyPassword() {
  let regex = /^(?=.*[@.#$!%*?&^])/;
  var pw = document.getElementById("password").value;
  if (pw == "") {
    document.getElementById("message").innerHTML = "Fill the password please!";
    return false;
  }

  if (pw.length < 8) {
    document.getElementById("message").innerHTML =
      "Password length must be atleast 8 characters";
    return false;
  } else if (pw.search(/[a-z]/) < 0) {
    document.getElementById("message").innerHTML =
      "Your password needs a lower case letter";
    return false;
  } else if (pw.search(/[A-Z]/) < 0) {
    document.getElementById("message").innerHTML =
      "Your password needs a upper case letter";
    return false;
  } else if (pw.search(/[0-9]/) < 0) {
    document.getElementById("message").innerHTML =
      "Your password needs a digits from 0-9";
    return false;
  } else if (!regex.test(pw)) {
    document.getElementById("message").innerHTML =
      "Your password needs a special character";
    return false;
  } else {
    document.getElementById("message").innerHTML = "";
    return true;

    // alert("Password is correct");
  }
}
function confirmpassword() {
  var pw = document.getElementById("password").value;
  var rpw = document.getElementById("repassword").value;
  // console.log("" + rpw);
  if (pw != rpw) {
    document.getElementById("remessage").innerHTML = "Password doesn't match";
    return false;
  } else {
    document.getElementById("remessage").innerHTML = "";
    return true;
  }
}
// function ageautochange(selecteddate) {
//   var bdate = new Date(selecteddate.value);
//   byear = bdate.getFullYear();
//   datenow = new Date();
//   yearnow = datenow.getFullYear();
//   agediff = yearnow - byear;
//   var agefield = document.getElementById("age");
//   agefield.value = agediff;
// }
function ageautochange(selecteddate) {
  var bdate = new Date(selecteddate.value);
  var today = new Date();

  var age = today.getFullYear() - bdate.getFullYear();
  var monthDiff = today.getMonth() - bdate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < bdate.getDate())) {
    age--;
  }

  document.getElementById("age").value = age;
}
// function peakPassword() {
//   var passwordField = document.getElementById("password");
//   if (passwordField.getAttribute("type") === "password") {
//     passwordField.setAttribute("type", "text");
//   } else {
//     passwordField.setAttribute("type", "password");
//   }
// }
const visibilitybtn = document.getElementById("visibilitybtn");
visibilitybtn.addEventListener("click", togglevisibility);
function togglevisibility() {
  var passwordField = document.getElementById("password");
  var icon = document.getElementById("icon");
  if (passwordField.getAttribute("type") === "password") {
    passwordField.setAttribute("type", "text");
    icon.innerText = "visibility_off";
  } else {
    passwordField.setAttribute("type", "password");
    icon.innerText = "visibility";
  }
}
const rvisibilitybtn = document.getElementById("rvisibilitybtn");
rvisibilitybtn.addEventListener("click", rtogglevisibility);
function rtogglevisibility() {
  var rpasswordField = document.getElementById("repassword");
  var ricon = document.getElementById("ricon");
  if (rpasswordField.getAttribute("type") === "password") {
    rpasswordField.setAttribute("type", "text");
    ricon.innerText = "visibility_off";
  } else {
    rpasswordField.setAttribute("type", "password");
    ricon.innerText = "visibility";
  }
}
function radio() {
  if (
    document.getElementById("male").checked ||
    document.getElementById("female").checked
  ) {
    return true;
  } else {
    alert("Please select a gender");
    return false;
  }
}
function formcheck() {
  // +\.[^\s@]
  const emailRegex = /^[^\s@]+@[^\s@]+$/;

  var name = document.getElementById("user-name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var age = document.getElementById("age").value;

  if (
    name.length >= 3 &&
    address.length > 0 &&
    emailRegex.test(email) &&
    age > 0 &&
    age < 100 &&
    verifyPassword() &&
    confirmpassword() &&
    radio()
  ) {
    return true; // Validation passed

    // alert("hi ");
    // console.log("succesfull");
    // window.location.href = "https://www.cybrosys.com/";
  } else {
    return false; // Validation failed

    // alert("Please fill out the page");
  }
  //   console.log(email);
  //   console.log(address);
  //   console.log(age);
  //   console.log(gender);
  //   console.log(password);
  //   console.log(repassword);
}

const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (formcheck()) {
    // location.assign(
    //   "https://stackoverflow.com/questions/52229901/navigate-to-route-on-button-click/"
    // );
    location.assign("https://www.cybrosys.com/");

    alert("Form successfully submitteddd!");
    console.log("succesfull");
    form.submit();
  } else {
    alert("Please fill out the page correctly!");
  }
});
