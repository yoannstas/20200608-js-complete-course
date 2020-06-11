/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	/*
	//Existing solution, dynamic wave
	let fontSizes = ["14px", "18px", "22px", "26px", "30px"];
	let target = document.getElementById('target');
	let string = target.innerHTML;
	let stringArray = [];
	for(let i = 0; i < string.length; i++){
		let thisLetter = target.innerHTML.charAt(i);
		stringArray.push(thisLetter);
	}
	let size = 0;

    function wave(){
    	function sizeChange() {
    		if (size < 4 && up == true) {
    			size++;
    		}
    		if (size > 0 && up == false) {
    			size--;
    		}
    		if (size == 4) {
    			up = false;
    		}
    		if (size == 0){
    			up = true;
    		}
    	}
    	let up = true;
    	target.innerHTML = "";
    	for(let i = 0; i < stringArray.length; i++){
    		target.innerHTML += '<span style="font-size: '+fontSizes[size]+';">'+stringArray[i]+'</span>';
    		if (size < 4 && up == true) {
    			size++;
    		}
    		if (size > 0 && up == false) {
    			size--;
    		}
    		if (size == 4) {
    			up = false;
    		}
    		if (size == 0){
    			up = true;
    		}
    	}
    	setTimeout(wave, 1000);
    }

    wave();
    */
	

	//Create a static wave:
	/*
	let sizes = [1,2,3,4,5,4,3,2,1];
	let target = document.getElementById('target');
	let string = target.innerHTML;
	//easy way to create array from a string, using split()
	let stringArray = string.split('');
	//first clear out the text inside target
	target.innerHTML = "";
	let fontBase = 8;
	let x=0;
	for(let i = 0; i < stringArray.length; i++){
		target.innerHTML += `<span style="font-size: ${fontBase + sizes[x]*4}px;">${stringArray[i]}</span>`;
		x = (x<8) ? x+1 : 0;
	}
	*/
	//Dynamic wave
	let target = document.getElementById('target');
	//to see the wave easier, uncomment the next line
	//target.innerHTML = 'llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll';
	let string = target.innerHTML;
	let stringArray = string.split('');
	
	//define the size array to use in function move() later
	let sizes = [1,2,3,4,5,5,4,3,2,1];
	//condition to stop function move()
	let time = 1; 

	move();

	function move(){
		let fontBase = 8;
		let x=0;

		if (time < 100){
			//clear the target after every iteration
			target.innerHTML = "";
			
			for(let i = 0; i < stringArray.length; i++){
				target.innerHTML += `<span style="font-size: ${fontBase + sizes[x]*4}px;">${stringArray[i]}</span>`;
				x = (x<9) ? x+1 : 0;
			}
			
			//create new values for array 'sizes', 
			//this way, the new sizes array is exactly like the original after every 9 loop, 
			//but in between a certain number appears 3 times, while another only once --- HOW TO FIX THIS?
			for (let j=0;j<sizes.length;j++){
				if (j < sizes.length-1){
					sizes[j]=sizes[j+1];
				} else {
					sizes[j]=sizes[0];
				}
			}
			console.log(sizes);

			time++; //increment, to stop the function move()
			setInterval(move,200*time);
		}
	}

})();
