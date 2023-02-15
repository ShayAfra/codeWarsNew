// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
function towerBuilder(floors) {
    let block = "*"
    let tower = []
    let empty = ''
    for(let i = 1; i <= floors; i++){
      console.log(i)
      let thisFloor = block.repeat((2*i) - 1)
      empty = ' '.repeat(floors - i)
      tower.push(`${empty}${thisFloor}${empty}`)
      }
    return tower
  }