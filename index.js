var formInput = document.getElementById("form-input");
var placeholder = document.getElementById("get-email");
var getSpan = document.getElementById("invalid-email");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
formInput.addEventListener('submit', function(e) {
    e.preventDefault();
    var emailAdress = document.getElementById("email-input");

    emailAdress.addEventListener("input", function(e) {
        console.log("Input is being typed ");
    })



    if(emailAdress.value == "" ) {

        emailAdress.style.cssText = " border: 1px solid hsla(4, 100%, 69%, 0.6); color:red;background-color:hsla(4, 100%, 69%, 0.2)";
        getSpan.style.cssText = "display:block;";
        return console.log("Invalid");
    }


    if(emailAdress.value.match(emailPattern)) {
        emailAdress.style.cssText = " border: 2px solid whitesmoke;"
        getSpan.style.cssText = "display:none;";
        sessionStorage.setItem("get-email",emailAdress.value);
        window.open("thankyou.html");

    }
    else{
        
        emailAdress.style.cssText = " border: 1px solid hsla(4, 100%, 69%, 0.6); color:red;background-color:hsla(4, 100%, 69%, 0.2)";
        getSpan.style.cssText = "display:block;";
        
    }
    
   

     
       
  
   
});


function vaidateEmail() {
    if(emailPattern.match(emailAdress.value)) {

        formInput.classList.add("valid");
        formInput.classList.remove("invalid");

    } else {

        formInput.classList.remove("valid");
        formInput.classList.add("invalid");
    }
}










