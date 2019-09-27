/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/heroes");
    const myOldJson = await response.json();
    console.log(JSON.stringify(myOldJson));
    let target = document.getElementById("target");

    var temp, item, a, i;

    temp = document.getElementsByTagName("template")[0];

    item = temp.content.querySelector("li");

    for (i = 0; i < myOldJson.length; i++) {
      temp.content.querySelector("strong").textContent = myOldJson[i].name;
      temp.content.querySelector("em").textContent = myOldJson[i].alterEgo;
      temp.content.querySelector("p").textContent = myOldJson[i].abilities;
      a = document.importNode(item, true);

      // Append the new node wherever you like:
      target.appendChild(a);
    }
  });
})();
