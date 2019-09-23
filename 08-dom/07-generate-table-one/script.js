/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let table = document.createElement("table");
  document.getElementById("target").appendChild(table);
  /* let tr = document.createElement("tr");
  table.appendChild(tr); */
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);
    table.setAttribute("border", "2");
    row.innerHTML = "Bro";
  }
})();
