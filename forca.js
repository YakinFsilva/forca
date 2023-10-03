let randomword = "bicicleta";
let wordsplit = randomword.split("");
console.log(wordsplit);

let tentativas = 6;
const typedletter = "A";

const letterRight = Array(wordsplit.length).fill("_");

console.log(letterRight);

function searchLetter(letra) {
  console.log(`letra pressionada: ${letra}`);
  let encontrada = false;

  for (let index = 0; index < wordsplit.length; index++) {
    const element = wordsplit[index];
    if ((element = typedletter)) {
      typedletter[index] = letterRight;
      encontrada = true;
    }
  }
  if (encontrada === false) {
    tentativas--;
  }

  //1° tentativa
  console.log(letterRight);
  searchLetter("I");
  console.log(`tentativas ${tentativas}`);
  //2° tentativa
  console.log(letterRight);
  searchLetter("n");
  console.log(`tentativas ${tentativas}`);
  //3° tentativa
  console.log(letterRight);
  searchLetter("a");
  console.log(`tentativas ${tentativas}`);
  //4° tentativa
  console.log(letterRight);
  searchLetter("b");
  console.log(`tentativas ${tentativas}`);
  //5° tentativa
  console.log(letterRight);
  searchLetter("k");
  console.log(`tentativas ${tentativas}`);
  //6°tentativa
  console.log(letterRight);
  searchLetter("l");
  console.log(`tentativas ${tentativas}`);
}
