function calculateTotal() {
    const firstInput = prompt("Please enter a number:");
    const secondInput = prompt("Please enter another number:");
  
    const valueOne = Number(firstInput);
    const valueTwo = Number(secondInput);
  
    if (isNaN(valueOne) || isNaN(valueTwo)) {
      document.getElementById("output").textContent = "Error: Please enter valid numbers.";
    } else {
      const total = valueOne + valueTwo;
      document.getElementById("output").textContent = `Result: ${total}`;
    }
  }