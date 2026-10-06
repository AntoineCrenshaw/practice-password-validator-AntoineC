/* 
Instructions
Suppose you are building a simple password validator for a website. Let’s use what
we have learned about loops to verify the password.
Task
Write a program to prompt the user for a password. The password should meet all
these requirements:
● The password must be at least 8 characters long.
● The password must contain at least one uppercase letter.
● The password must contain at least one number.
● If the password does not meet all the requirements, the program should
keep asking the user for a new password until they provide a valid one.
Your application should:
● Use readlineSync.question() to prompt a user for input.
● Prompt a user to enter a password.
● Loop through the password to ensure that it meets the password
requirements, using the appropriate iteration statement(s) to do so. Make
sure you consider how iteration affects top-to-bottom execution of your code
and when a while or do-while loop would be more appropriate.
● Return one of the following statements:
○ If the password meets the requirements, a statement to let the user
know they have been successful
○ If the password does NOT meet the requirements, a statement to let
the user know their password does not meet the requirements */

import readline from 'readline-sync';


console.log("Hello there!");
const isValidLength = (pwd) => pwd.length >= 8;
const hasUppercase = (pwd) => /[A-Z]/.test(pwd);
const hasDigit = (pwd) => /\d/.test(pwd);

const isPasswordValid = (pwd) => 
    isValidLength(pwd) && hasUppercase(pwd) && hasDigit(pwd);


function getValidPassword(){
    while(true){
 let newPassword = readline.question("Enter a new password for your account:");
 if (newPassword === null) return null;
 
 if (isPasswordValid(newPassword)) {
    console.log("Success! Your password is valid.");
    return newPassword;
 } else {
    console.log("Invalid password. Must be 8+ characters with an uppercase letter and a number.")
 }}
}

getValidPassword();
