/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const btns = document.getElementsByTagName('button');
    const nums = document.getElementsByTagName('input');

    for (let i=0;i<btns.length;i++){
        btns[i].addEventListener('click',()=>{
            let min = parseInt(nums[i].getAttribute('data-min'));
            let max = parseInt(nums[i].getAttribute('data-max'));
            //create a random number between min and max
            let rand = min + Math.floor(Math.random()*(max-min));
            nums[i].value = (rand < 10) ? `0${rand}`: rand;
            //get numbers from all the input fields
            let fullNum = '';
            for (let j=0;j<btns.length;j++){
                fullNum += nums[j].value;
            }
            //display full number in the target
            document.getElementById('target').innerHTML = `0${fullNum}`;
        })
    }
})();
