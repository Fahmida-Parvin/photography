function formValidate() {
  var email = document.getElementById("iemail").value;
  var password = document.getElementById("ipass").value;

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var passPattern = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%*_+<>&])).{6,20}$/;

  if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
  }

  if (!password.match(passPattern)) {
      alert("Invalid password. Password should contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be 6-20 characters long.");
      return false;
  }
alert("Validation successful!");
  return true;
}