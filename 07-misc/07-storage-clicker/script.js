/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById('target');
    let num = (localStorage.getItem('value')) ? localStorage.getItem('value') : parseInt(target.innerHTML);
    target.innerHTML = num;
    document.getElementById('increment').addEventListener('click',()=>{
        num++;
        target.innerHTML = num;
        window.localStorage.setItem('value', num);
    })
})();
