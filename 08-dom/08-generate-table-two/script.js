/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      let table = document.createElement("table");
      document.getElementById("target").appendChild(table);
      let row = document.createElement("tr");
      table.appendChild(row);
      table.setAttribute("border", "2");
      row.innerHTML = i + "*" + j + " = " + i * j;
    }
  }
})();
