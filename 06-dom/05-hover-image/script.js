/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const img=document.getElementsByTagName('img')[0];
    //change url to value in data-hover on mouseover
    //img.addEventListener('mouseover', ()=> img.setAttribute('src', img.getAttribute('data-hover')));
    img.addEventListener('mouseover', ()=> img.src = img.getAttribute('data-hover'));

    //change url back to origial value on mouseleave
    //img.addEventListener('mouseleave', ()=> img.setAttribute('src', "../../_shared/img/kiss.svg"));
    img.addEventListener('mouseleave', ()=> img.src = "../../_shared/img/kiss.svg");

})();
