/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", async () => {
    let valeurXmen = document.getElementById("hero-id").value;
    const response = await fetch("http://localhost:3000/heroes");
    const myOldJson = await response.json();
    console.log(JSON.stringify(myOldJson));
    let target = document.getElementById("target");

    var temp, item, a, i;
    // Get the template element:
    temp = document.getElementsByTagName("template")[0];
    // Get the DIV element from the template:
    item = temp.content.querySelector("li");
    // For each item in the array:
    for (i = 0; i < myOldJson.length; i++) {
      if (valeurXmen == myOldJson[i].id) {
        temp.content.querySelector("strong").textContent = myOldJson[i].name;
        temp.content.querySelector("em").textContent = myOldJson[i].alterEgo;
        temp.content.querySelector("p").textContent = myOldJson[i].abilities;
        // Create a new node, based on the template:
        a = document.importNode(item, true);
        // Add data from the array:
        target.innerHTML = "";
        // Append the new node wherever you like:
        target.appendChild(a);
      }
    }
  });
})();
