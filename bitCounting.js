// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
// BITSALGORITHMS
var countBits = function(n) {

    let bits = n.toString(2)
    let split = bits.split('')
    for(let i = 0; i < split.length; i++){
      split[i] = Number(split[i])
    }
    let total = split.reduce((acc, cur)=>acc + cur, 0)
    return total
  };


// //   Most Clever solution:
// countBits = n => n.toString(2).split('0').join('').length;