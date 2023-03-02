//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 * 
 *
 */
function checkHumbrId(idIn){
    "use strict";
    let isIdValid= false;
    var regex= /^[Nn][0-9]{8}$/;

    if(regex.test(idIn) ){
        isIdValid= true;
    }
    return isIdValid;

};