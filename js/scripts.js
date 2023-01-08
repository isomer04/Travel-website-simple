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
    alert("You have successfully finished your registration. You could login now.");


    return [email, password];
}


function login() {



    alert("Visit this site for more information https://bit.ly/35RnjHV")
    // emailL = document.getElementById("emailL").value;
    // passwordL = document.getElementById("pwdL").value;

    // if (emailL == "admin@gmail.com" ) {
    //     if (passwordL == "password") {
    //         alert(" You have successfully logged in");
    //         console.log("Done");
    //     }
    // } else {
    //     alert(" Incorrect");
    // }

}




//Couldn't get to work data from home.html

// let info = showAlert();

// console.log(info);


// console.log(email);
// console.log(password);

// function login(email, password) {

//     console.log(info+ "this is info");

//     emailL = document.getElementById("emailL").value;
//     passwordL = document.getElementById("pwdL").value;

//     // console.log(email);
//     // console.log(password);


//     if (emailL == info[0] ) {
//         if (passwordL == info[1]) {
//             alert(" You have successfully logged in");
//             console.log("Done");
//         }
//     } else {
//         console.log(emailL);
//         console.log(passwordL);
//         console.log(email);
//         console.log(password);
//         alert(" Incorrect from login page");
//     }

    // if (emailL == email ) {
    //     if (passwordL == password) {
    //         alert(" You have successfully logged in");
    //         console.log("Done");
    //     }
    // } else {
    //     console.log(emailL);
    //     console.log(passwordL);
    //     console.log(email);
    //     console.log(password);
    //     alert(" Incorrect from login page");
    // }

    // return emailL, passwordL;


// }