/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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
        let heroId = parseInt(document.getElementById('hero-id').value);
        fetch('../../_shared/api.json')
            .then(res => res.json())
            .then(data => data.heroes)
            .then(heroes => {
                let hero = heroes.filter(hero => hero.id == heroId)[0];
                target.innerHTML = createListItem(hero.name, hero.alterEgo, hero.abilities.join(', '));
            })
    })
})();
