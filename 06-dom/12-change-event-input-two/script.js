/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const input = document.getElementById('pass-one');
    const validity = document.getElementById('validity');
    
    input.addEventListener('keyup', ()=>{
        //using regex to match the password
        /*
        ^ #Match start of line.
        (?=.*?[0-9].*?[0-9]) #Look ahead and see if you can find at least two digits. Expression will fail if not.
        (?=.*[!@#$%]) #Look ahead and see if you can find at least one of the character in bracket []. Expression will fail if not.
        [0-9a-zA-Z!@#$%0-9]{8,} #Match at least 8 of the characters inside bracket [] to be successful.
        $ # Match end of line.  
        */
        //create a pattern
        let pattern = /^(?=.*?[0-9].*?[0-9])[0-9a-zA-Z!@#$%0-9]{8,}$/;

        //testing if your input match the pattern: using pattern.test(input): give true if match, false if not
        validity.innerHTML = (pattern.test(input.value)) ? 'Ok' : 'Not ok';
    })
})();
