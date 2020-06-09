/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        //Method 1: using for loop
        /*
        let number = parseFloat(document.getElementById('number').value);
        if(Number.isInteger(number)){
            if (number < 0){
                alert('Please enter positive integer.');
            } else if (number == 0){
                alert('Factorial of 0 is 1.');
            } else {
                let result = number;
                for (let i=number-1;i>=1;i--){
                    result = result*i;
                }
                alert(`Factorial of ${number} is ${result}.`);
            }
        } else {
            alert('Please enter positive integer.');
        }
        */
        
       //Method 2: not considering the case when user input number < 0
        /*
        const factorial = (n) => (n>=1) ? n*factorial(n-1) : 1; 
        alert(factorial(parseFloat(document.getElementById('number').value)));
       */

       //Method 3: consider the case when user input number < 0
       //syntax: condition1 ? statement1 : condition2 ? statement2 : statement3
        /* equal to:
        if (condition1){
            return statement1;
        } else if (condition2) {
            return statement2;
        } else {
            return statement3;
        }
        */
        const factorial = (n) => (n<0) ? 'Please enter positive integer.' : (n>=1) ? n*factorial(n-1) : 1;
        alert(factorial(parseFloat(document.getElementById('number').value)));
    });

})();
