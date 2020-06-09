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
    document.getElementById('run').addEventListener('click', ()=>{
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        let color = '#';

        for (let i=1;i<=6;i++){
            let randomIndex = Math.floor(Math.random()*15);
            color += array[randomIndex];
        }
        document.body.style.background = color;
    })
})();
