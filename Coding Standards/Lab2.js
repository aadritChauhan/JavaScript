"use strict";
window.onload = function () {
    var login_name = document.getElementById("login__username");
    var login_pass = document.getElementById("login__password");
    var login_output = document.getElementById("login__output");
    var pass_red = document.getElementById("login__password_red");
    var user_red = document.getElementById("login__username_red");
    var formHandle = document.forms.Login;
    formHandle.onsubmit = process;
    function process() {
        if (login_name.value === "") {
            // login_name.classList.add("bgRed");
            login_name.style.background 
            = "red";
            return false;
        }
        if (login_pass.value === "") {
            // login_pass.classList.add("bgRed");
            login_pass.style.background = "red";
            return false;
        }
        login_output.style.display = "block";
        user_red.innerHTML = login_name.value;
        pass_red.innerHTML = login_pass.value;
        return false;

    }
};