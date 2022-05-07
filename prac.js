function validate() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("emailid").value;
    var cnumber = document.getElementById("contactno").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("passwordconf").value;  
 
 
    if (firstName == null || firstName == "") {
        alert("Please Enter your first name !!!");
        return false;
    } else if (lastName == null || lastName == "") {
        alert("Please enter your last name !!!");
        return false;
    }
   
    else if (email == null || email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (
        email.indexOf("@") < 1 ||
        email.indexOf(".") < email.indexOf("@") + 2 ||
        email.indexOf(".") > email.length
    ) {
        alert("Please Enter a Valid Email Address");
        return false;
    } else if (cnumber == null || cnumber == "") {
        alert("Mobile number cannot be empty");
        return false;
    } else if (cnumber.length != 10) {
        alert("Enter a valid phone number");
        return false;
    } else if (password == null || password == "") {
        alert("Password cannot be empty");
        return false;
    } else if (password.length < 8) {
        alert("Password length should be greater than 8");
        return false;
    } else if (password != cpassword) {
        alert("Your re-entered password does not match");
        return false;
    } else {
        alert("Registration Successful !!!");
        return true;
    }


}