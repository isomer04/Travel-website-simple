// TODO: Authentication, email JS, and admin JS will be added.
let email;
let password;
let emailL;
let passwordL;

function showAlert() {
  email = document.getElementById("email").value;
  password = document.getElementById("pwd").value;

  console.log(email);
  console.log(password);

  // login(email,password);
  alert(
    "You have successfully finished your registration. You could login now."
  );

  return [email, password];
}

function login() {
  alert("Visit this site for more information https://bit.ly/35RnjHV");
}
