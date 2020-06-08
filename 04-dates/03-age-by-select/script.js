/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        let dob=document.getElementById('dob-day').value;
        let mob=document.getElementById('dob-month').value;
        let yob=document.getElementById('dob-year').value;

        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();
        let currentDay = currentDate.getDate();
        
        let userAge = 0;
        let yearGap = currentYear - yob -1;
        if(currentMonth < mob){
            userAge += yearGap;
        } else if (currentMonth == mob){
            if(currentDay < dob){
                userAge += yearGap;
            } else {
                userAge += 1;
                userAge += yearGap;
            }
        } else {
            userAge += 1;
            userAge += yearGap;
        }
        
        alert(`Your age is ${userAge}.`);
    })

})();
