/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        const handleSuccess = (res) => console.table(res);
        const handleSuccessPost = (res) => window.lib.getComments(res);
        window.lib.getPosts().then(handleSuccessPost).then(handleSuccess); 
    })
})();
