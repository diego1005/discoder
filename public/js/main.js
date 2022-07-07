const path = require("path");

//Creacion de variable
const values = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', 'a', 'b', 'c', 'd', 
  'e', 'f', 'g', 'h', 'i', 'j', 
  'k', 'l', 'm', 'n', 'o', 'p', 
  'q', 'r', 's', 't', 'u', 'v', 
  'w', 'x', 'y', 'z', '1', '2', 
  '3', '4', '5', '6', '7', '8', 
  '9', '0'
]

//Creacion del codigo
let generator = () => {
  let code = [];
  while(code.length < 16) {
    let idx = Math.floor(62 * Math.random());
    if (code.includes(values[idx])) {
      continue;
    }else {
      code.push(values[idx]);
    }
  }
  return code;
}

//Comprobar codigo
let check = (len, code) => {
  let characters = [];
  for (let i=1; i<=len; i++) {
    characters[i] = document.getElementsByName(`${i}_box`).values;
  }
  console.log(characters);
}

module.exports = generator;