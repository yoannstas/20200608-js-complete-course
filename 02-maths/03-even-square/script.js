/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        // your code here
        //display the 'SQUARE NUMBERS' between 1 and 21
        let result1 = 'The SQUARE NUMBERS between 1 and 21 are: '
        for (let i=1;i*i<=21;i++){
            result1 += `${i*i} `;
        }
        
        //display the SQUARE OF THE NUMBERS between 1 and 21
        let result2 = 'The SQUARE OF THE NUMBERS between 1 and 21 are: ';
        for (let i=1; i<=21; i++){
            result2 += `${i*i} `;
        }
        alert(`${result1}\n\n${result2}`);
    });

})();
