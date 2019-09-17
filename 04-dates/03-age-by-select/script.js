/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later. let today = new Date();

(() => {
  document.getElementById("run").addEventListener("click", () => {
    let annee = document.getElementById("dob-year").value;
    let mois = document.getElementById("dob-month").value;
    let jour = document.getElementById("dob-day").value;
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth =
      today.getMonth() +
      1; /* Pour que les mois soient compris entre 1 et 12 et pas 0 et 11 */
    let currentDay = today.getDate();
    let age = currentYear - annee;
    let diffmois = currentMonth - mois;
    let diffjour = currentDay - jour;
    if (diffmois < 0 || (diffmois == 0 && diffjour < 0)) {
      age--; /* age = age - 1 (décrémentation) */
    }
    console.log(age);
  });
})();
