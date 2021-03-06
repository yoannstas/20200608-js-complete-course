/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //Math.random() gives decimal number n: 0 <= n < 1 (include 0 but not include 1)
    //The Math.floor() function returns the largest integer less than or equal to a given number.
    //The Math.round() function returns the value of a number rounded to the nearest integer.
    //In this case, using Math.round() is better since it can give number up to 15, Math.floor() will give number up to 14 only
    //Using Math.floor(), random()*16 would be used instead of random()*15
    document.getElementById('run').addEventListener('click', ()=>{
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        let color = '#';

        for (let i=1;i<=6;i++){
            let randomIndex = Math.round(Math.random()*15);
            color += array[randomIndex];
        }
        document.body.style.background = color;
    })
})();
