/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    
    
    let now = new Date();
    let options = {weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit', hour12: false};
    document.getElementById('target').innerHTML = now.toLocaleTimeString('en-EN', options);
    

    /*
    //Problem with this method: when hour/minute is 1 digit number, it will not display as 2-digit numbers
    let currentDateTime = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    let dayIndex = currentDateTime.getDay();
    let monthIndex = currentDateTime.getMonth();
    let now = `${days[dayIndex]} ${currentDateTime.getDate()} ${months[monthIndex]} ${currentDateTime.getFullYear()}, ${currentDateTime.getHours()}h${currentDateTime.getMinutes()}`;
    document.getElementById('target').innerHTML = now;
    */
    

})();
