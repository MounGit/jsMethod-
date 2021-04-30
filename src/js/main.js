//1

let phrase = "Bonjour tout le monde     ";

//2
console.log(phrase.length);

//3
phrase = phrase.trimEnd();

//4
console.log(phrase.length);

//5
console.log(phrase.substr(20));
// ou console.log(phrase.charAt(phrase.length-1));

//6
console.log(phrase.substr(8));
/* ou phrase = phrase.replace("Bonjour", "");
console.log(phrase) */
//7
phrase = phrase.replace(""+ "Bonjour ");
console.log(phrase);
/* Ou phrase = "Bonjour ".concat(phrase);
console.log(phrase) */

//8
console.log(phrase.substr(0, 7));
// ou console.log(phrase.slice(0,8))
//9
let phrase2 = "blablabli number";
console.log(phrase2.replace("number", "string"));

//10

console.log(Math.round(Math.random()*100));
 