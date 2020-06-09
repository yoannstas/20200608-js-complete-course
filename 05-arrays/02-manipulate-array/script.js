/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        //remove the first item using shift()
        fruits.shift();
        //remove the last item using pop()
        fruits.pop();
        //add an item to the beginning using unshift()
        fruits.unshift("banana");
        //add an item to the end using push()
        fruits.push("kiwi");
        console.table(fruits);
    })
    
})();
