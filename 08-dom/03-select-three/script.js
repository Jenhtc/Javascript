/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  /* for (i = 0; i < 5; i++) {
    let replace = (document.querySelector("p.target").textContent = "owned");
  } */

  let targets = document.getElementsByClassName("target");

  for (elem of targets) {
    elem.innerHTML = "owned";
  }

  // Ou avec la boucle for standard
  /*  for (let i = 0; i < targets.length; i++) {
    targets[i].innerHTML = "owned";
  } */
})();
