function formValidation() {
  var fname = document.getElementById("ifname").value;
  var lname = document.getElementById("ilname").value;
  var email = document.getElementById("iemail").value;
  var mobile = document.getElementById("imob").value;
  var password = document.getElementById("ipass").value;
  var confirmpass = document.getElementById("iconpass").value;

  var namePattern = /^[a-zA-Z]+$/;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var mobilePattern = /^(\+88)?-?01[3-9]\d{8}$/;
  var passPattern = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%*_+<>&])).{6,20}$/;


if (!fname.match(namePattern)) {
  alert("First name should only contain alphabets.");
  return false;
}

if (!lname.match(namePattern)) {
  alert("Last name should only contain alphabets.");
  return false;
}

if (!email.match(emailPattern)) {
  alert("Please enter a valid email address.");
  return false;
}

if (!mobile.match(mobilePattern)) {
  alert("Please enter a valid mobile number.");
  return false;
}

if (!password.match(passPattern)) {
  alert("Password should contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be 6-20 characters long.");
  return false;
}

if (password !== confirmpass) {
  alert("Passwords do not match.");
  return false;
}
alert("Validation successful!");
  return true;

}




