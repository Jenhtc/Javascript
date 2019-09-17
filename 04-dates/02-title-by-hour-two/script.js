/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let today = new Date();
  /*   Création objet Date que je stocke dans la variable today */
  let hours = today.getHours();
  /* Utilisation méthode de la classe Date pour obtenir l'heure actuelle - stockée dans la variable hours */
  let minutes = today.getMinutes();
  /* Utilisation méthode de la classe Date pour obtenir les minutes actuelles - stockée dans la var minutes */

  if (hours < 17 || (hours == 17 && minutes < 30))
    /* Condition pour l'affichage des options en fonction de l'heure
    Si heures moins de 17 OU si heure est de 17 ET que minutes inférieures à 30  */
    document.getElementById("target").innerHTML = "Bonjour";
  else document.getElementById("target").innerHTML = "Bonsoir";
})();
