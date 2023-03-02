//LAB 9-DATA STORAGE: PRODUCTS PAGE

window.onload= pageLoaded();

function pageLoaded(){

    var userName=localStorage.getItem("Sname");
    var userC=localStorage.getItem("Scolor");

    if(userName!==null){
        document.getElementById("newMsgBox").innerHTML="Welcome "+ userName;
        document.body.style.backgroundColor= userC;
        }

}
