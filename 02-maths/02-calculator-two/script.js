/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  const performOperation = operation => {
    // perform the operation
    let number1 = Number(document.getElementById("op-one").value);
    let number2 = Number(document.getElementById("op-two").value);
    switch (operation) {
      case "addition":
        let sum = number1 + number2;
        alert(sum);
        break;
      case "substraction":
        let sou = number1 - number2;
        alert(sou);
        break;
      case "multiplication":
        let multi = number1 * number2;
        alert(multi);
        break;
      case "division":
        let divi = number1 / number2;
        alert(divi);
        break;
      default:
        alert("connard");
    }
  };

  Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  );
})();
