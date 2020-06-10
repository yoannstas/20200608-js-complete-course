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
    /*Method 1:
    //Same here, 'break' is not needed, DON'T UNDERSTAND, is it because we use 'return'?
    function test(color){
        switch(color){
            case 'red':
                return '#ff1300';
            case 'green':
                return '#0e610f';
            case 'yellow':
                return '#ffe676';
            case 'blue':
                return 'var(--main-blue)';
        }
    }

    const ctn = document.getElementsByClassName('actions')[0];
    ctn.addEventListener('click', event => {
        let id = event.target.id;
        document.body.style.background = test(id);
    })
    */
    
    //Method 2:
    //syntax: condition1 ? statement1 : condition2 ? statement2 : condition3 ? statement3 : statement4
    //statement4 (equivalent to statement in the last 'else') must be there, syntax required
    document.getElementsByClassName('actions')[0].addEventListener('click', event => {
        let id = event.target.id;
        let test = (id)=>(id=='red')?'#ff1300':(id=='green')?'#0e610f':(id=='yellow')?'#ffe676':'var(--main-blue)';
        document.body.style.background = test(id);
    })
})();
