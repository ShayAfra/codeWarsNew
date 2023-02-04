// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.


//no recursion
function mygcd(x,y){
    let common = null
    let high = null
    let low = null
    let counter = 0
    if(x == y){
      return 1
    }else if(x > y){
      high = x
      low = y
    }else{
      high = y
      low = x
    }
    while(counter <= low){
      if(high % counter == 0 && low % counter == 0){
        common = counter
      }
      counter++
    }
    return common
  }


  //WITH RECURSION

  function mygcd(x,y){
    let max = Math.max(x, y)
    let min = Math.min(x, y)
    let remainder = max % min
    if(remainder === 0){
      return min
    }
  
    return mygcd(min, remainder)
  }