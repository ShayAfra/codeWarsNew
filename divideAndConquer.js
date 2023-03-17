// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.
function divCon(x){
    let total = 0
    for(let el of x){
      if(typeof el == 'number'){
        total += el
      }
      if(typeof el == 'string'){
        total -= el
      }
    }
    return total
  }