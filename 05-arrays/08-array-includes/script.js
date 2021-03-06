/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        //index of an item not existing in the array is -1
        /*
        if(fruits.indexOf('apple') >= 0){
            console.log('yes');
        } else {
            console.log('no');
        }
        */
        console.log((fruits.indexOf('apple') >= 0) ? 'yes' : 'no');
    })
})();
