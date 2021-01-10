// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(input) {
  // return input.length > 0 ? input[0].toUpperCase() + input.slice(1) : '';

  return input
    .split(/\s+/)
    .map((part) => {
      if (!part) {
        return '';
      }
      return part[0].toUpperCase() + part.slice(1);
    })
    .join(' ');
}

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(
  capitalizeFirstLetters('i  am learning TDD'),
  'I Am Learning TDD'
);

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('react'), 'React');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
