/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const target = document.getElementById('target');
    target.innerHTML = '';
    const createListItem = (name, ego, powers) => {
        let newList = `
            <li class="hero">
                <h4 class="title">
                    <strong class="name">${name}</strong>
                    <em class="alter-ego">${ego}</em>
                </h4>
            <p class="powers">${powers}</p>
            </li>
        `;
        return newList;
    }
    
    document.getElementById('run').addEventListener('click',()=>{
        fetch('../../_shared/api.json')
            .then(res => res.json())
            .then(data => data.heroes)
            .then(heroes => {
                heroes.forEach(hero => {
                    target.innerHTML += createListItem(hero.name, hero.alterEgo, hero.abilities.join(', '));
                })
            })
    })
})();
