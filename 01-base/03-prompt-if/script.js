/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here
  //Method 1:
  /*
  let answer = prompt('Do you want some cake?', 'Yes');
  
  if (answer == 'Yes' || answer == 'yes'){
    alert('Congrat! You made the right choice.');
  } else {
    alert('More cake for me then!');
  }
  */

  //Method 2: shorter
  //syntax: condition ? statement1 : statement2
  /* equal to:
    if (condition is true){
      return statement1;
    } else {
      return statement2;
    }
  */
  let answer = prompt('Do you want some cake?', 'Yes').toLowerCase();
  alert((answer=='yes') ? 'Congrat! You made the right choice.' : 'More cake for me then!');
  
})();