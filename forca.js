let randomword = "amor";
let wordsplit = randomword.split("");
console.log(wordsplit);

let tentativas = 6;
const typedletter = "A";

const letterRight = Array(wordsplit.length).fill("_");

console.log(letterRight);
let encontrada = false;
function searchLetter(letra) {
  console.log(`letra pressionada: ${letra}`);
  

  if (tentativas < 1) {
    console.log("Você perdeu!");
    return;
  
  }
  if (numLetrasEncontradas === randomword);
  console.log("you win!");
  return;
  
}
for (let index = 0; index < wordsplit.length; index++){
  const element = wordsplit[index];
  if (element === typedletter) {
    typedletter[index] = letterRight;
    numLetrasEncontradas++;

    encontrada = true;
  }
}
if (encontrada === false) {
  tentativas--;
}




function generateKeyboard() { 
const keyboardHTMLElement = document.getElementById("keyboard");
console.log(keyboardHTMLElement)



for (let index = 65; index << 90; index++) {
  const character = String.fromCharCode(index);
  keyboardHTMLElement.innerHTML += `<button onclick="searchLetter('${character}')" type="button" class="btn btn-primary">${character}</button>`;
  keyboardHTMLElement.innerHTML += button;
}
}

