const a = 10;
const b = 20;

function sumTwoNumbers(num1, num2) {
  return num1 + num2;
}

function SaySomething() {
  return "Hello";
}

export { a, b, sumTwoNumbers, SaySomething as something };

export default function testFunction() {
  return "This could be function, or any other type";
}
