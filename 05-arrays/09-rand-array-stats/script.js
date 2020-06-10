/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        
        //create an array with 10 random numbers between 1 and 100
        let arr = [];
        for (let i=0;i<10;i++){
            arr[i] = Math.round(Math.random()*99+1);
            //add these number to each table cell in html
            document.getElementById(`n-${i+1}`).innerHTML = arr[i];
        }
        //sort numbers in array, smallest first
        let sortedArr = arr.sort((a,b)=> a-b);
        document.getElementById('min').innerHTML = sortedArr[0];
        document.getElementById('max').innerHTML = sortedArr[9];
        //find sum of all numbers in array using reduce()
        let sum = arr.reduce((total, num)=> total + num);
        document.getElementById('sum').innerHTML = sum;
        //get average by dividing sum by 10
        document.getElementById('average').innerHTML = sum/10;
    })
})();
