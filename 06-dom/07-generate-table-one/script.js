/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    /*
    //METHOD 1
    //Assistent function: wrap any content in html tag
    const wrapInTag = (content, tag) => `<${tag}>${content}</${tag}>`;
    
    //Function to create a table with specified numbers of row and columns
    const createTable = (rowNum, colNum) => {
        //create columns in each row
        let cols='';
        for (let i=1;i<=colNum;i++){
            cols += wrapInTag('col-text-here', 'td');
        }
        
        //Create row
        let rows='';
        for (let i=1;i<=rowNum;i++){
            rows+= wrapInTag(cols, 'tr');
        }
        
        //create table
        let table = wrapInTag(rows, 'table');
        return table;
    }

    document.getElementById('target').innerHTML = createTable(10,1);
    */
    
    //METHOD 2
    /*
    document.getElementById('target').innerHTML = `<table><tbody id='tbody'></tbody></table>`;
    let tbody = document.getElementById('tbody');
    let rowNum = 10;
    let colNum = 1;

    for (let i=0;i<rowNum;i++){
        //create rows
        let row = tbody.insertRow(i);
        //create columns (table data) in each row
        for (let j=0;j<colNum;j++){
            let cell = row.insertCell(j);
            cell.innerHTML = 'text';
        }
    }
    */
    
})();
