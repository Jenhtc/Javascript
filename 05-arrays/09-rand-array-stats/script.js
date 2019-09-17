/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */
/* let board = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].age > 18) board.push(people[i]);
}
console.log(board); */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", () => {
    let andy = [];
    for (let i = 0; i < 11; i++) {
      andy[i] = Math.floor(Math.random() * 100 + 1);
      for (let i = 1; i < 11; i++) {
        let id = "n-" + i;
        document.getElementById(id).innerHTML = andy[i];
      }
    }
    let min1 = Math.min(...andy);
    document.getElementById("min").innerHTML = min1;
    let max1 = Math.max(...andy);
    document.getElementById("max").innerHTML = max1;
    function somm(a, b) {
      return a + b;
    }
    document.getElementById("sum").innerHTML = andy.reduce(somm);
    let avery = andy.reduce(somm) / andy.length;
    document.getElementById("average").innerHTML = Math.floor(avery);
  });
})();
