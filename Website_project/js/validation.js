function validateForm() {
    /* below statements make sure the values entered into the form are not blank or equal to "" */
    var fname = document.forms["contactform"]["fname"].value;
    if (fname == "") {
        alert("'First Name' field must be filled out");
        return false;
    }

    var lname = document.forms["contactform"]["lname"].value;
    if (lname == "") {
        alert("'Last Name' field must be filled out");
        return false;
    }

    var age = document.forms["contactform"]["age"].value;
    if (age == "") {
        alert("'Age' field must be filled out");
        return false;
    }
    /* ensures age entered is not below the age 1 or above the age 120 */
    var age = document.forms["contactform"]["age"].value;
    if (isNaN(age) || age < 1 || age > 120) {
        alert("Input A Valid Age");
        return false;
    }

    var email = document.forms["contactform"]["email"].value;
    if (email == "") {
        alert("'Email Address' field must be filled out");
        return false;
    }
/* ensures phone number entered must consist of 10 digits by declaring a phone number format element */
    var phoneno = /^\d{10}$/;
    if((document.forms["contactform"]["teleno"].value.match(phoneno))) {
        return true;
          }
        else
          {
          alert("Input A Valid Phone Number\n(10 Digits)");
          return false;
          }
}