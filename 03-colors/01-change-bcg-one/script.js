/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    function test(color){
        switch(color){
            case 'red':
                return '#ff1300';
                break;
            case 'green':
                return '#0e610f';
                break;
            case 'yellow':
                return '#ffe676';
                break;
            case 'blue':
                return 'var(--main-blue)';
                break;
        }
    }

    const ctn = document.getElementsByClassName('actions')[0];
    ctn.addEventListener('click', event => {
        let id = event.target.id;
        document.getElementsByTagName('html')[0].style.background = test(id);
    })

})();
