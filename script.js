function validateform() {
    var name = document.cvform.first_name.value;
    var lname = document.cvform.last_name.value;
    var email = document.cvform.email.value;
    var phone = document.cvform.phone_number.value;


    if (name == null || name == "") {
        alert("First name can't be blank");
        return false;
    } else if (lname == null || lname == "") {
        alert("Last name can't be blank");
        return false;
    } else if (email == null || email == "") {
        alert("Enter your email");
        return false;
    } else if (isNan(phone.value) || phone.value.length < 10) {
        alert("Enter a valid phone number");
        return false;
    }
}





/**function FormValidation() {
var first_name = document.getElementsByName("first_name");
var last_name = document.getElementsByName("last_name");
var email = document.getElementsByName("email");
var phone_number = document.getElementsByName("phone_number");
var address = document.getElementsByName("address");


var err;
if (first_name.value == "") {
    err = "Enter your name!";
    Err_alert.innerHTML = err;
    first_name.focus();
    return false;
}
if (last_name.value == "") {
    err = "Enter your name!";
    Err_alert.innerHTML = err;
    first_name.focus();
    return false;
}
if (email.value == "") {
    err = "Enter your email!";
    Err_alert.innerHTML = err;
    first_name.focus();
    return false;
}

if (isNan(phone_number.value) || phone_number.value.length < 10) {
    err = "Enter a valid phone number!";
    Err_alert.innerHTML = err;
    first_name.focus();
    return false;
}
if (address.value == "") {
    err = "Enter your address!";
    Err_alert.innerHTML = err;
    first_name.focus();
    return false;
}

alert("Form submitted successfully!")
return true;
}

function storeValues {

}*/