const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function(){
    const profile = document.getElementById("hide");
    const loginForm = document.getElementById("container");
    const emailInfo = document.getElementById("email").value;
    const passwordInfo = document.getElementById("password").value;
    if(emailInfo == "me@in-asad.com" && passwordInfo == "also"){
        profile.style.display = "block";
        loginForm.style.display = "none";
        alert("Login Successful")
        console.log("right")
    }
    else{
        alert("Invalid Password");
    }
})