// Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware of the rules.

// So, the goal of this kata is to wite a function that encodes a single word string to pig latin.

// The rules themselves are rather easy:

// The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

// The word starts with a consonant -> move consonants from the beginning of the word to the end of the word until the first vowel, then return it plus "ay".

// The result must be lowercase, regardless of the case of the input. If the input string has any non-alpha characters, the function must return None, null, Nothing (depending on the language).

// The function must also handle simple random strings and not just English words.

// The input string has no vowels -> return the original string plus "ay".

// For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants, so they are moved to the end of the string and "ay" is appended.
function pigLatin(string){
    let index = 0
    string = string.toLowerCase().split('')
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const vowels =['a','e','i','o','u']
    for(let char of string){
      if(!alphabet.includes(char)){
        return null
      }
    }
    if(vowels.includes(string[0])){
      string = string.join('')
      return string+"way"
    }else{
      for(let char of string){
        if(vowels.includes(char)){
          index = string.indexOf(char)
          break
        }
      }
    }
    string = string.join('')
    return string.slice(index) + string.slice(0, index) + "ay";
  }