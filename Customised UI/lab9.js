//LAB 9-DATA STORAGE: INDEX PAGE
window.onload= pageLoaded();

function pageLoaded(){

    var formHandle= document.forms.infoForm;
    formHandle.onsubmit= processForm;
    
    function processForm(){
     var name= formHandle.f_name.value;
    var favC= formHandle.f_color.value;
    localStorage.setItem("Sname", name);
    
    localStorage.setItem("Scolor", favC);
    }

    var userName=localStorage.getItem("Sname");
    var userC=localStorage.getItem("Scolor");

    if(userName!=null){
    newMsgBox.innerHTML="Welcome "+userName;
     document.body.style.backgroundColor=userC;
     }

    document.getElementById("btnDel").onclick=()=>{
        localStorage.removeItem("Sname");
        localStorage.removeItem("Scolor");
        window.location.reload();


    }


}