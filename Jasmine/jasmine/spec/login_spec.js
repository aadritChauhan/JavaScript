describe("Login Test", function(){
// Encryptor function Test
describe("The Encryptor Test", function(){
    it("should return a string of the hashed value (as 32 hexadecimal characters).", function(){
        var string1="aadrit";
        expect(md5Encrypt(string1)).toMatch("3603a3bf87a0d6124af0941be23e2816");
    });
});
// Login function Test 
describe("The Check Login Function", function(){
    //case of correct username password
    it("should use the md5Encrypt function, and return the Boolean true if the username and the password match a known username and matching password.", function(){
        var user="aadrit";
        var pass="chauhan123";
        expect(checkLogin(user,pass)).toEqual(true);
    });
    //case of invalid username password
    it("should return ‘Invalid Username or Password.’ if the username input does not match a known username; or the password input does not match a known password; or a valid username is input with an invalid password, or an invalid username is input with a valid password.", function(){
        var user="sdasdasa";
        var pass="asda231";
        expect(checkLogin(user,pass)).toEqual("Invalid Username or Password.")
    });
    //case of no username
    it("should return ‘No username entered.’ if the username is an empty string.", function(){
        var user="";
        var pass="chauhan123";
        expect(checkLogin(user,pass)).toEqual("No username entered.");
    });
    //case of no password
    it("should return ‘No password entered.’ if the password is an empty string.", function(){
        var user="aadrit";
        var pass="";
        expect(checkLogin(user,pass)).toEqual("No password entered.");
    });
})
});
