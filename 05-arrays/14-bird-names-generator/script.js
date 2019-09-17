/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const birds = [
    { name: "mouette", fem: true },
    { name: "corbeau" },
    { name: "mésange", fem: true },
    { name: "hibou" },
    { name: "buse", fem: true },
    { name: "pigeon" },
    { name: "pie", fem: true },
    { name: "vautour" },
    { name: "faucon" },
    { name: "rouge-gorge" },
    { name: "tourterelle", fem: true },
    { name: "corneille", fem: true }
  ];
  const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré"
  ]);
  document.getElementById("run").addEventListener("click", () => {
    andy = Math.floor(Math.random() * birds.length);
    /* console.log(birds[andy].name); */
    let murray = adjectives.values(Math.floor(Math.random()));
    let items = Array.from(adjectives);
    let itemsAdj = items[Math.floor(Math.random() * items.length)];
    if (birds[andy].fem)
      console.log("La " + birds[andy].name + " " + itemsAdj + "e");
    else console.log("Le " + birds[andy].name + " " + itemsAdj);
    /* let murray = Math.floor(Math.random() * adjectives.size); */
    /* let number = Math.floor(Math.random() * adjectives.size); */
    /*  console.log(number); */
    /*  console.log(murray.next().value); */
    /*  console.log(murray); */
  });
})();
/* var iterator1 = set1.values();

console.log(iterator1.next().value);
// expected output: 42

console.log(iterator1.next().value);
// expected output: "forty two" */
