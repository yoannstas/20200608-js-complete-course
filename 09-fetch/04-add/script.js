/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        let name = document.getElementById('hero-name').value;
        let ego = document.getElementById('hero-alter-ego').value;
        let powers = document.getElementById('hero-powers').value;
        if (name && ego && powers){
            fetch('../../_shared/api.json')
            .then(res => res.json())
            .then(data => data.heroes)
            .then(heroes => {
                let id = heroes.length + 1;
                heroes[heroes.length] = {
                    "id": id,
                    "name": name,
                    "alterEgo": ego,
                    "abilities": [powers]
                };
                console.table(heroes);
            })
        } else {
            console.log('Please fill in the data before submitting.')
        }
    })
})();
