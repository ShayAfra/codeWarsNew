// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.
function swap (string) {
    let vowels = 'aeiou'.split('')
    for(let char of string){
      if(vowels.includes(char)){
        string = string.replace(char, char.toUpperCase())
      }
    }
    return string;
  }