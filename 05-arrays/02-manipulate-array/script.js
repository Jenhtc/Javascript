/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise"
  ];
  /* console.log(fruits); */
  fruits.splice(0, 1, "banane").splice(9, 1, "kiwi");
  /*  fruits.splice(9, 1, "kiwi"); */
  console.log(fruits);
})();
