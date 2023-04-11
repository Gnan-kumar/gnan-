//Construtor():
class Car{

    constructor(make, model, year, color){
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }

    drive(){
          console.log("You drive the car!");
        }
    brake(){
          console.log("You step on the brakes!");
        }
      }

  let car1 = new Car("Ford", "Mustang", 2022, "red");
  let car2 = new Car("Chevy", "Corvette", 2021, "blue");

  console.log(car1.make);
  console.log(car1.model);
  console.log(car1.year);
  console.log(car1.color);

  console.log(car2.make);
  console.log(car2.model);
  console.log(car2.year);
  console.log(car2.color);

//concat():
const s1 = 'Hello';
const s2 = 'gnan';
console.log(s1.concat(' ', s2));
// Expected output: "Hello World"
console.log(s2.concat(', ', s1));
// Expected output: "World, Hello"

//endsWith():
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));
// Expected output: true
console.log(str1.endsWith('best', 17));
// Expected output: true
const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));
// Expected output: false



//fromCharCode():
console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="

//includes(): 
const sentence = 'The quick brown rat jumps over the lazy cow.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"

//indexof():

const paragraph = 'The quick brown fox jumps over the lazy dog. If the elsa barked, was it really lazy?';

const searchTerm = 'elsa';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);


//charat():

const sentence4 = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence4.charAt(index)}`);




//at()
const sentence3 = 'My cow name is Browny it is over lazy cow.';

let index3 = 5;

console.log(`Using an index of ${index3} the character returned is ${sentence3.at(index3)}`);

index3 = -4;

console.log(`Using an index of ${index3} the character returned is ${sentence.at(index3)}`);

//charCodeAt()
const sentence1 = 'Hii Hello This is kumar.';

const index1 = 4;

console.log(`The character code ${sentence1.charCodeAt(index1)} is equal to ${sentence.charAt(index1)}`);

//codePointAt()
const icons = '😒 😞 😔 😟';
console.log(icons.codePointAt(1))