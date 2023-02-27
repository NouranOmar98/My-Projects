

// localStorage.clear();
var i = 0;
var flag = true;
function signup() {

    var firstname = document.getElementById("firstname").value;
    for (let x = 0; x < 10; x++) {
        if (firstname == localStorage.getItem("firstname" + x)) {
            alert("you are aleady exit");
            flag = false;
            break;
        }
    }
    if (flag) {
        localStorage.setItem("firstname" + i, firstname);


        var lastname = document.getElementById("lastname").value;
        localStorage.setItem("lastname" + i, lastname);
        var email = document.getElementById("email").value;
        localStorage.setItem("email" + i, email);

        var password = document.getElementById("password").value;
        localStorage.setItem("password" + i, password);

        var confirmpassword = document.getElementById("confirmpassword").value;
        console.log(confirmpassword);
        localStorage.setItem("confirmpassword" + i, confirmpassword);
        i++
    }

}



// function ValidateEmail(p) {
//     var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//     var email = p.value;
//     console.log(email);
//     if (!(email.match(mailformat))) {
//         alert("This is not a valid email address");
//         return false;
//     }
// }


// function ValidatePassword(p) {
//     var passFormat = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
//     var pass = p.value;
//     console.log(pass);
//     if (!(pass.match(passFormat))) {
//         alert("This is not a valid Password");
//         return false;
//     }
// }
