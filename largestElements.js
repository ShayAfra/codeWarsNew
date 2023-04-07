// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]
function largest(n, array) {
    let final = []
    for(let i = 0; i < n; i++){
      let max = Math.max(...array)
      final.push(max)
      let idx = array.indexOf(max)
      array.splice(idx,1)
      }
    return final.reverse()
  }