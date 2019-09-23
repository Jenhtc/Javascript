/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
    set fullName(name) {
      [this.firstName, this.lastName] = name.toString().split(" ");
      /*    this.firstName = words[0] || "";
      this.lastName = words[1] || ""; */
    }
  }
  document.getElementById("run").addEventListener("click", () => {
    let doggy = new Person("Julia", "Roberts");
    console.log(doggy.fullName);
    doggy.fullName = "Natalie Portman";
    console.log(doggy.fullName);
  });
})();
