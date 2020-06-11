/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        let pw1 = document.getElementById('pass-one');
        let pw2 = document.getElementById('pass-two');
        if (pw1.value !== pw2.value) {
            pw1.classList.add('error');
            pw2.classList.add('error');
        } else {
            pw1.classList.remove('error');
            pw2.classList.remove('error');
        }
    })
})();
