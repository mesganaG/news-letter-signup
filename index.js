var formInput = document.getElementById("form-input");
var placeholder = document.getElementById("get-email");
formInput.addEventListener('submit', function(e) {
    e.preventDefault();

    var emailAdress = document.getElementById("email-input").value;
    sessionStorage.setItem("get-email",emailAdress);
    window.open("thankyou.html");
});










