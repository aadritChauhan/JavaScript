
window.onload = function () {
    // getting values through DOM
    var login_name = document.getElementById("login__username");
    var login_pass = document.getElementById("login__password");
    var output_msg= document.getElementById("login__loginMsg");
   
    var formHandle = document.forms.Login;
    formHandle.onsubmit = process;
    function process() {
        // using checklogin function for checking the login credentials.
        if((checkLogin(login_name.value, login_pass.value))=== true){
            output_msg.innerHTML="Welcome Back!";
            return false;
        }
        else{
            output_msg.innerHTML=checkLogin(login_name.value, login_pass.value);
            return false;
        }
            
    }
};