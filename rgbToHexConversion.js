// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3
function rgb(r, g, b){
    let arr = [r,g,b]
    for(let i = 0; i < arr.length; i++){
      if(arr[i]< 0){
        arr[i] = 0
      }
      if(arr[i]>255){
        arr[i] = 255
      }
    }
    let rHex = arr[0].toString(16).padStart(2,'0').toUpperCase()
    let gHex = arr[1].toString(16).padStart(2,'0').toUpperCase()
    let bHex = arr[2].toString(16).padStart(2,'0').toUpperCase()
    return `${rHex}${gHex}${bHex}`
    }