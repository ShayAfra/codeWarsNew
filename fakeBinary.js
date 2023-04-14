// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let final = []
    for(let char of x){
      char >= 5 ? final.push(1) : final.push(0)
    }
    return final.join('')
  }