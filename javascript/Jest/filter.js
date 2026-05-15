/**
 * A function to filter valid name.
 * @param {string} name - name entered.
 * @returns the name trimmed, first 10 chs, only alphabetic letters, if null, returns "unknown".
 */

function filter(name = "Unknown") {
  const words = name.match(/[A-Za-z]+/g);
  if (!words) return "Unknown";
  return words.join(" ").substring(0, 10);
}

module.exports = filter;
