/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  do {
    let age = prompt("Quel âge as-tu ?");
    let gender = prompt("Quel est votre sexe ?");
    let city = prompt("Quelle est votre ville ?");

    var annuler = confirm(
      "Vous avez " +
        age +
        ", vous êtes un(e) " +
        gender +
        "et vous vivez à " +
        city +
        "; c'est bien cela ?"
    );
  } while (annuler == false);
})();
