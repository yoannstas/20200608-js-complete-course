/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
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
            pw1.style.borderColor = 'red';
            pw2.style.borderColor = 'red';
        } else {
            pw1.style.borderColor = 'silver';
            pw2.style.borderColor = 'silver';
        }
    })
})();
