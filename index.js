// Helper function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // Helper function to square a number
  function squareNumber(number) {
    return number * number;
  }
  
  // Main function to perform the operation
  function addAndSquare(x, y) {
    const sum = addNumbers(x, y);
    const result = squareNumber(sum);
    return result;
  }
  
  // Example of usage:
  const number1 = 3;
  const number2 = 5;
  const result = addAndSquare(number1, number2);
  
  console.log(`(${number1} + ${number2})^2 = ${result}`);