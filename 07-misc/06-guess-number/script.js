/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {

    // your code here
    window.addEventListener('load', function () {
        //create a random number between 1 and 100
        let rand = 1+Math.floor(Math.random()*100);
        console.log(rand);
        
        let userGuess = prompt('Please guess a number between 1 and 100!', '1');
        let count = 1;
        while (userGuess != rand){
            count++;
            if (userGuess > rand){
                alert("higher");
            } 
            
            if (userGuess < rand) {
                alert("lower");
            }
    
            userGuess = prompt('Try again');
        }
    
        alert(`That's it! You need ${count} guess(es).`);
    })
})();



