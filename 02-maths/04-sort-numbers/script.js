/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
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
        /*
        let numbers = document.getElementById('numbers').value;
        let array = numbers.split(",").map(n=>parseInt(n));
        array.sort((a,b)=>a-b);
        alert(array);
        */
        
        //get value of element with id 'numbers', it will be a string
        //change it into an array using split(), using separator: comma (,); we will have an array of several elements, each being a string
        //change elements of this array to numbers using map() and parseInt
        //sort the numbers in the array using .sort((a,b)=>a-b))
        //then finally put everything inside alert()
        alert(document.getElementById('numbers').value.split(",").map(n=>parseInt(n)).sort((a,b)=>a-b));
    });

})();
