function sum(...numbers) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

module.exports = sum;
