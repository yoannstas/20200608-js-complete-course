/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    const img = document.getElementsByTagName('img')[0];
    document.getElementById('next').addEventListener('click',()=>{
        //check which image is now being displayed in html
        let index;
        for (let i=0;i<gallery.length;i++){
            //using img.getAttribute('src) gives back relative path, img.src gives back full path
            if (img.getAttribute('src') == gallery[i]){
                index = i;
            }
        }
        //set value of src to the next img, if it is the last img, set src equals to the first img
        img.src = (index == gallery.length-1) ? gallery[0] : gallery[index + 1]; 
    })
})();
