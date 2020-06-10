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

        /*
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
                userAge++;
                userAge += yearGap;
            }
        } else {
            userAge++;
            userAge += yearGap;
        }
        
        */

        
        let now = new Date();
        let dy = now.getFullYear() - document.getElementById('dob-year').value;
        let dm = now.getMonth() - document.getElementById('dob-month').value;
        let dd = now.getDate() - document.getElementById('dob-day').value;
        let age = (dm<0 || (dm==0 && dd<0)) ? dy-1 : dy;
        alert(`Your age is ${age}.`);
    })

})();
