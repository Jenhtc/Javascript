/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("addition").addEventListener("click", () => {
    // perform an addition
    let number1 = Number(document.getElementById("op-one").value);
    let number2 = Number(document.getElementById("op-two").value);
    let sum = number1 + number2;
    alert(sum);
  });

  document.getElementById("substraction").addEventListener("click", () => {
    let number1 = Number(document.getElementById("op-one").value);
    let number2 = Number(document.getElementById("op-two").value);
    let moins = number1 - number2;
    alert(moins);
  });

  document.getElementById("multiplication").addEventListener("click", () => {
    let number1 = Number(document.getElementById("op-one").value);
    let number2 = Number(document.getElementById("op-two").value);
    let fois = number1 * number2;
    alert(fois);
  });

  document.getElementById("division").addEventListener("click", () => {
    let number1 = Number(document.getElementById("op-one").value);
    let number2 = Number(document.getElementById("op-two").value);
    let diviz = number1 / number2;
    alert(diviz);
  });
})();
