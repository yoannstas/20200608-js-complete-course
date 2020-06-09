/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function mustConfirm() {

    // your code here
    let age = prompt('How old are you?', '18');
    let gender = prompt('What is your gender?', 'male');
    let town = prompt('What is the name of the town you are living now?', 'London');

    //Method 1
    /*
    if(confirm(`You are ${age} years old, ${gender} and live in ${town}. Is it correct?`)){
        alert('Thanks for comfirming.');
    } else {
        mustConfirm();
    }
    */

    //Method 2: shorter
    //syntax: condition ? statement1 : statement2
    /* equal to:
        if (condition is true){
            return statement1;
        } else {
            return statement2;
        }
    */
    (confirm(`You are ${age} years old, ${gender} and live in ${town}. Is it correct?`)) ? alert('Thanks for comfirming.') : mustConfirm();

})();
