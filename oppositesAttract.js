// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2){
    let first = flower1%2
    let second = flower2%2
    console.log(first)
      console.log(second)
    return (first == 1 && second == 0) || (first == 0 && second == 1) ? true : false
  }