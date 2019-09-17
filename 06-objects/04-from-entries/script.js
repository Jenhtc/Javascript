/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const keys = ["name", "species", "age", "gender", "color"];
  const values = ["Skitty", "cat", 9, "female", "tabby"];

  tableau = [];
  for (let i = 0; i < keys.length; i++) {
    tableau.push([keys[i], values[i]]);
  }
  console.log(Object.fromEntries(tableau));
})();
/*  console.log(Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]))); */
