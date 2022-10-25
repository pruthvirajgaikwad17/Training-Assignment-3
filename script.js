let arr = [];

/*
function checkEmailRegistered() {
  var emails = JSON.parse(localStorage.getItem("email"));
  const found = arr.some((r) => emails.includes(r));

  if (found) {
    document.getElementById("check-error").innerHTML =
      "The account is already registered.";
  } else {
    document.getElementById("check-error").innerHTML = "";
  }
}
*/
function error() {
  if (document.getElementById("name").value == "") {
    document.getElementById("name-error").innerHTML = "* Please Enter Name";
  } else {
    document.getElementById("name-error").innerHTML = "";
  }

  if (document.getElementById("age").value == "") {
    document.getElementById("age-error").innerHTML = "* Please Enter Age";
  } else if (document.getElementById("age").value < 21) {
    document.getElementById("age-error").innerHTML =
      "* Please Enter valid Age (Age is less than 21)";
  } else {
    document.getElementById("age-error").innerHTML = "";
  }

  if (document.getElementById("phone").value == "") {
    document.getElementById("phone-error").innerHTML =
      "* Please Enter Phone Number";
  } else if (document.getElementById("phone").value.length != 10) {
    document.getElementById("phone-error").innerHTML =
      "* Please Enter Valid Phone Number ";
  } else {
    document.getElementById("phone-error").innerHTML = "";
  }

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (document.getElementById("email").value.length == 0) {
    document.getElementById("email-error").innerHTML =
      "* Please Enter Email Id";
  } else if (!document.getElementById("email").value.match(mailformat)) {
    document.getElementById("email-error").innerHTML =
      "* Please Enter Valid Email Id";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  if (document.getElementById("pass").value == "") {
    document.getElementById("pass-error").innerHTML = "* Please Enter Password";
  } else {
    document.getElementById("pass-error").innerHTML = "";
  }

  var pass = document.getElementById("pass").value;
  if (document.getElementById("conf").value.length == 0) {
    document.getElementById("conf-error").style.color = "red";
    document.getElementById("conf-error").innerHTML =
      "* Please Enter Confirmation Password";
  } else if (pass === document.getElementById("conf").value) {
    document.getElementById("conf-error").style.color = "green";
    document.getElementById("conf-error").innerHTML = "confirmed";
  } else if (pass !== document.getElementById("conf").value) {
    document.getElementById("conf-error").style.color = "red";
    document.getElementById("conf-error").innerHTML = "Not confirmed";
  } else {
    document.getElementById("conf-error").innerHTML = "";
  }
}

const button = document.getElementById("btn");
button.addEventListener("click", (event) => {
  error();
  if (document.getElementById("email").value.length !== 0) {
    if (!arr.includes(document.getElementById("email").value)) {
      arr.push(document.getElementById("email").value);
      document.getElementById("check-error").style.color = "green";
      document.getElementById("check-error").innerHTML =
        "Registeration Successful";
    } else {
      document.getElementById("check-error").style.color = "red";
      document.getElementById("check-error").innerHTML =
        "Already Registered Account";
    }
    //localStorage.setItem("email", JSON.stringify(arr));
    //checkEmailRegistered();
  } else if (document.getElementById("email").value.length === 0) {
    document.getElementById("check-error").innerHTML =
      "Fill the details and please resolve validation error";
  }
  event.preventDefault();
});

//------------------------------------------------------------------------------------------------------------------

//name
const addName = document.getElementById("name");
addName.addEventListener("focusout", () => {
  if (document.getElementById("name").value == "") {
    document.getElementById("name-error").innerHTML = "* Please Enter Name";
  } else {
    document.getElementById("name-error").innerHTML = "";
  }
});

//age
const addAge = document.getElementById("age");
addAge.addEventListener("focusout", () => {
  if (document.getElementById("age").value == "") {
    document.getElementById("age-error").innerHTML = "* Please Enter Age";
  } else if (document.getElementById("age").value < 21) {
    document.getElementById("age-error").innerHTML =
      "* Please Enter valid Age (Age is less than 21)";
  } else {
    document.getElementById("age-error").innerHTML = "";
  }
});

//Phone
const addPhone = document.getElementById("phone");
addPhone.addEventListener("focusout", () => {
  if (document.getElementById("phone").value == "") {
    document.getElementById("phone-error").innerHTML =
      "* Please Enter Phone Number";
  } else if (document.getElementById("phone").value.length != 10) {
    document.getElementById("phone-error").innerHTML =
      "* Please Enter Valid Phone Number ";
  } else {
    document.getElementById("phone-error").innerHTML = "";
  }
});

//email
addEmail = document.getElementById("email");
addEmail.addEventListener("focusout", () => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (document.getElementById("email").value.length == 0) {
    document.getElementById("email-error").innerHTML =
      "* Please Enter Email Id";
  } else if (!document.getElementById("email").value.match(mailformat)) {
    document.getElementById("email-error").innerHTML =
      "* Please Enter Valid Email Id";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }
});

//pass
addPass = document.getElementById("pass");
addPass.addEventListener("focusout", () => {
  if (document.getElementById("pass").value == "") {
    document.getElementById("pass-error").innerHTML = "* Please Enter Password";
  } else {
    document.getElementById("pass-error").innerHTML = "";
  }
});

//confpass
addConfPass = document.getElementById("conf");
addConfPass.addEventListener("focusout", () => {
  var pass = document.getElementById("pass").value;
  if (document.getElementById("conf").value.length == 0) {
    document.getElementById("conf-error").style.color = "red";
    document.getElementById("conf-error").innerHTML =
      "* Please Enter Confirmation Password";
  } else if (pass === document.getElementById("conf").value) {
    document.getElementById("conf-error").style.color = "green";
    document.getElementById("conf-error").innerHTML = "confirmed";
  } else if (pass !== document.getElementById("conf").value) {
    document.getElementById("conf-error").style.color = "red";
    document.getElementById("conf-error").innerHTML = "Not confirmed";
  } else {
    document.getElementById("conf-error").innerHTML = "";
  }
});
