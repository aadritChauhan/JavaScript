window.onload= pageLoaded;
function pageLoaded() {
    var formHandle= document.forms.ixdForm;
    var header1= document.getElementById("welcome");
    var conf= document.getElementById("result");

    formHandle.onsubmit= processForm;
     function processForm() {
        
        // getting form inputted values in variables
        var fName= formHandle.f__fName;
        var lName= formHandle.f__lName;
        var id_f= formHandle.f__id;
        var program_f= formHandle.f__program;

        // fetching values from label(delivery mode)
        var deliver_f= formHandle.f__deliver;
        var deliverValue= formHandle.f__deliver.value;
        var deliverName;
        for(var i=0; i<deliver_f.length;i++)
        {
            if(deliver_f[i].value == deliverValue){
                deliverName = deliver_f[i].labels[0].innerHTML;
            }
        }
        
        // fetching values from label(project name)
        var project_f= formHandle.f__project;
        var projectValue = project_f.value;
        var projectName;
        for(var i=0; i<project_f.length;i++)
        {
            if(project_f[i].value == projectValue){
                projectName = project_f[i].labels[0].innerHTML;
            }
        }

        // getting values from output message in variables 
        var f_name= document.getElementById("result__Fname");
        var l_name= document.getElementById("result__Lname");
        var Id= document.getElementById("result__id");
        var prog= document.getElementById("result__program");
        var delivery= document.getElementById("result__delivery");
        var proj= document.getElementById("result__project");
        var radio= document.getElementsByTagName("p");

        // validating first name 
        if(fName.value===""){
            fName.style.background="red";
            fName.focus();
            return false;
        }
        else {
            fName.style.background="white";
        }

        // validating last name
        if(lName.value=== ""){
            lName.style.background="red";
            lName.focus();
            return false;
        }
        else {
            lName.style.background="white";
        }

        // validating Humber ID (extra challenge)
        var regex= /^[Nn][0-9]{8}$/;
        if(id_f.value==="" || !regex.test(id_f.value)  ){
            id_f.style.background="red";
            id_f.focus();
            return false;
        }
        else {
            id_f.style.background= "white";
        }

        // validating Humber Program
        if(program_f.value=== "X"){
            program_f.style.background="red";
            program_f.focus();
            return false;
        }
        else {
            program_f.style.background= "white";
        }
        

        // validating 1st radio button
        if(deliver_f.value=== ""){
            radio[1].style.background="red";
            
            return false;
        }
        else {
            radio[1].style.background= "white";
        }

        // validating 2nd radio button
        if(project_f.value=== ""){
            radio[2].style.background="red";
            
            return false;
        }
        else {
            radio[2].style.background= "white";
        }

        
        // transfering values from form to output msg

        f_name.innerHTML= "<b>" + fName.value +"</b>" ;
        l_name.innerHTML= "<b>" + lName.value +"</b>" ;
        Id.innerHTML="<b>" + id_f.value +"</b>" ;
        prog.innerHTML= "<b>" + program_f[program_f.selectedIndex].text +"</b>" ;
        delivery.innerHTML= "<b>" + deliverName +"</b>" ;
        proj.innerHTML="<b>" + projectName +"</b>" ;

        // hiding form ,and header while displaying output msg 
        formHandle.style.display= "none";
        header1.style.display= "none"; 
        conf.style.display= "block";
          
        return false;
        
    }
}