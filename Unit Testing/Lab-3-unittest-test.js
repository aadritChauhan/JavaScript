//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TESTS ==========


function test__checkHumbrId(id, expected){
    "use strict";
    let result= checkHumbrId(id);


    let msgBox= document.getElementById("data");


    if(expected===result){
        let add= "==Passed==";
        let msg= "Value Tested: "+id+  "   Result: "+result+ "  Expected: "+expected+ "<span style='color:green'>" +add +"</span>" + "<br/>";
        msgBox.innerHTML+= msg;
        
    }
    else{
        let add= "xxFailedxx";
        let msg= "Value Tested: "+id+  "   Result: "+result+ "  Expected: "+expected+ "<span style='color:red'>"+  add+ "<br/>";
        msgBox.innerHTML+= msg;

    }


}

test__checkHumbrId("n12345678", true); //to pass
test__checkHumbrId("N12345678", true); //to pass

test__checkHumbrId("A12345678", false); //to fail
test__checkHumbrId("N123asd78", false); //to fail;

test__checkHumbrId("N1234567", true); //bottom of range, fail
test__checkHumbrId("n123456789", false); //top of range, fail

test__checkHumbrId(undefined, false); //to fail with known failing values
test__checkHumbrId(null, false); //to fail with known failing values

