/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const input = document.getElementById('pass-one');
    //set maximum input length
    input.setAttribute('maxlength', 10);
    
    //increase counter on every keyup event of input field
    input.addEventListener('keyup', ()=> document.getElementById('counter').innerHTML = `${input.value.length}/10`);
})();
