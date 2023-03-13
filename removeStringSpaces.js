// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
    let final = ''
    for(let char of x){
      if(char != ' '){
        final += char
      }
    }
    return final
  }