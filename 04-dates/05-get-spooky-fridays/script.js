/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        //get the input year from input field
        let inputYear = document.getElementById('year').value;
        //set the range of dates to perform loop later
        let start = new Date(`01/01/${inputYear}`);
        let end = new Date(`12/31/${inputYear}`);
        //the result of the search in the loop will be stored in here
        let result = '';
        //loop through the whole year
        while (start <= end){
            if (start.getDay()==5 && start.getDate()==13){
                let months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
                let monthIndex = start.getMonth();
                result += ` ${months[monthIndex]},`;
            }
            start.setDate(start.getDate()+1);
        }
        //remove the last comma in the result
        result = result.slice(0, result.length - 1);
        alert(`Month(s) with Friday 13th in ${inputYear}: ${result}.`)
        //Optional: clear input field
        document.getElementById('year').value = '';
    })
})();
