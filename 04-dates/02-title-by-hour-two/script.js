/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    /*
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    
    let txt;

    if(hour >= 9 && hour < 17){
        txt = "Hello!";
    } else if (hour==17){
        if(minute<30){
            txt = "Hello!";
        } else {
            txt = "Good evening!";
        }
    } else {
        txt = "Good evening!";
    }
    
    document.getElementById('target').innerHTML = txt;
    */
    
    let now = new Date();
    let dh = now.getHours() - 17;
    let dm = now.getMinutes() - 30;
    document.getElementById('target').innerHTML = (dh<0 || (dh==0 && dm<0)) ? 'Hello!' : 'Good evening!';
})();
