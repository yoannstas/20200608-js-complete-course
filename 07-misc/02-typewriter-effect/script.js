/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    /*
    //METHOD 1: Text appears after a specific time

    let target = document.getElementById('target');
    //get text out of target as string, remove any excess white spaces with replace()
    //regex is used here: \s is a space; \s{2,} is 2 or more spaces; search global for them, replace them with 1 space 
    let str = target.innerHTML.replace(/\s{2,}/g,' ');
    let strArray = str.split('');
    //clear out the text before adding one by one letter in
    target.innerHTML ='';
    let i=0;
    let time=200;
    setInterval(() => {
        if (i<strArray.length){
            target.innerHTML += strArray[i];   
        }
        i++;
    }, time);
    */
    
    //METHOD 2: still equal interval
    /*
    let target = document.getElementById('target');
    let str = target.innerHTML.replace(/\s{2,}/g,' ');
    let strArray = str.split('');
    target.innerHTML ='';

    for (let i=0;i<strArray.length;i++){
        setTimeout(()=>{
            target.innerHTML += strArray[i];
        }, 200*i);
    }
    */
    /*In the code given above you have to do 2000 * i 
    because setTimeout method inside the loop doesn’t makes 
    the loop pause but actually adds a delay to each iteration. 
    Remember that all the iteration start their time together. 
    Thus if we only do 2000 there, that will make all the 
    iterations execute together and it will just give 2000 ms 
    delay in the first iteration and all other iteration will 
    happen instantly after it. Thus to avoid that we add 0 to 
    first, 2000 to second, 4000 to third and it goes on.*/
    

    //METHOD 3: NOT UNDERSTAND COMPLETELY, MUST ASK
    let target = document.getElementById('target');
    let str = target.innerHTML.replace(/\s{2,}/g,' ');
    let strArray = str.split('');
    target.innerHTML ='';

    //set original value for index of array strArray
    let i = 0;
    showText();

    function showText(){
        if (i < strArray.length){
            let time = 100 + Math.floor(Math.random()*5000);
            target.innerHTML += strArray[i];
            i++;
            setInterval(showText,time*i);
        }
    }
})();
