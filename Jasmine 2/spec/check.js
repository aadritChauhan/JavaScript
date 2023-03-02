describe("The guess number function", function(){   
    //test to pass x2
    describe("Test to pass", function(){
        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer.", function(){
            var num=5;
            expect(guessNum(num)).toEqual("Guess again.");
        });
        it("should return ‘You guessed it!’ when the correct number is entered.", function(){
            var num=4;
            expect(guessNum(num)).toEqual("You guessed it!");
        });
    });

    //test to fail x3
    describe("Test to fail", function(){
        it("should return ‘A number was not input.’ if the value entered is not a number.", function(){
            var  num="a";
            expect(guessNum(num)).toEqual("A number was not input.");
        });
        it("should return ‘A value was not entered.’ if it receives an empty string.", function(){
            var num="";
            expect(guessNum(num)).toEqual("A value was not entered.");
        });
        it("should return ‘Way off!!!! Pick between 1 and 10.’ if the value entered is a number outside of the allowed range of guessing values.", function(){
            var num=34;
            expect(guessNum(num)).toEqual("Way off!!!! Pick between 1 and 10.");
        });
    });

    //Boundary Test x6(0,1,2)(9,10,11)

    //Lower Boundary
    describe("Boundary Test", function(){
        it("should return ‘Way off!!!! Pick between 1 and 10.’ if the value entered is a number outside of the allowed range of guessing values.", function(){
            var num=0;
            expect(guessNum(num)).toEqual("Way off!!!! Pick between 1 and 10.")
        });
        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer.", function(){
            var num=1;
            expect(guessNum(num)).toEqual("Guess again.");
        });
        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer.", function(){
            var num=2;
            expect(guessNum(num)).toEqual("Guess again.");
        });

        //Upper Boundary
        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer.", function(){
            var num=9;
            expect(guessNum(num)).toEqual("Guess again.")
        });
        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer.", function(){
            var num=10;
            expect(guessNum(num)).toEqual("Guess again.")
        });
        it("should return ‘Way off!!!! Pick between 1 and 10.’ if the value entered is a number outside of the allowed range of guessing values.", function(){
            var num=11;
            expect(guessNum(num)).toEqual("Way off!!!! Pick between 1 and 10.")
        });
    });
});

//Lab 4 Testing With Jasmine
function guessNum(guess) {
    "use strict";
    var secretGuess = 4;//set value of correct number

//Output messages
    var returnMessage = "";
    var noNumber = "A number was not input.";
    var noInput = "A value was not entered.";
    /// error: there was just one '!' here, but in the specification pdf it has four '!', so had to add 3 more to meet the specifications.
    var outOfRange = "Way off!!!! Pick between 1 and 10.";
    var correct = "You guessed it!";
    var validIncorrect = "Guess again.";

//Validate input and assign a return message
    if (isNaN(guess) === true) {
        returnMessage = noNumber;
    } else if (guess === "") {
        returnMessage = noInput;
    // (below)error had to be corrected here, earlier it wasn't inclusive of '1' and '10', but it says in the pdf that '1' and '10' is to be included.
    } else if (guess < 1 || guess > 10) {
        returnMessage = outOfRange;

    } else {
        if (parseInt(guess) === secretGuess) {
            returnMessage = correct;
        } else {
            returnMessage = validIncorrect;
        }
    }

    return returnMessage;
}