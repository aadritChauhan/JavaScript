function checkLogin(user, pass){
    //hash values for username and password
    //(username: aadrit, password: chauhan123)
    const validName="3603a3bf87a0d6124af0941be23e2816";
    const validPass="f38187ff5074af6f20bc9ee12f1798d3";
    //passing user input values to encryptor function
    var userEnc= md5Encrypt(user);
    var passEnc= md5Encrypt(pass);
    //error messages to be displayed
    var returnMessage="";
    var noUsername="No username entered.";
    var noPassword="No password entered.";
    var Invalid="Invalid Username or Password.";

    //returning true if user enters correct username and password
    if(validName === userEnc && validPass === passEnc){
        return true;
    }
    //assigning msg if no username
    else if(user==="") {
        returnMessage=noUsername;
    }
    //assigning msg if no password
    else if(pass===""){
        returnMessage=noPassword;
    }
    // assigning msg if invalid passsword
    else if(validName !== userEnc || validPass!== passEnc){
        returnMessage=Invalid;
    }
    //returning appropriate msg
    return returnMessage;
    }

