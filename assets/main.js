//Array-Level-1_1
const person = ["soufian", 37, "Berlin"];
console.log(person);
const friends = ["Amina", "Anas", "Imad"];
console.log(friends);
const favoriteFood = ["bastila", "tajin", "couscous"];
console.log(favoriteFood);
//Codeflow_uebung_lvl_1_2: Arrays Index

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);
//Array-Level-1_3
console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);
//Array-Level-1_4
console.log(person);
person.push("tom", "jery");
console.log(person);
//---
console.log(friends);
friends.push("karim", "layla");
console.log(friends);
//----
console.log(favoriteFood);
favoriteFood.push("paella", "medtiranne fisch");
console.log(favoriteFood);
//lev1_5: Arrays pop()

let removedPersonValue = person.pop();
console.log(removedPersonValue);

let removedFriendValue = friends.pop();
console.log(removedFriendValue);

let removedFavoriteFoodValue = favoriteFood.pop();
console.log(removedFavoriteFoodValue);
console.log("nach dem Entfernen:", person);
console.log("nach dem Entfernen:", friends);
console.log("nach dem Entfernen:", favoriteFood);

//Codeflow_uebung_lvl_1_6: Arrays shift()
let removedFirstValueperson = person.shift();
console.log(removedFirstValueperson);

let removedfirstvaluefriends = friends.shift();
console.log(removedfirstvaluefriends);

let removedfirstvaluefood = favoriteFood.shift();
console.log(removedfirstvaluefood);
//Codeflow_uebung_lvl_1_7: Arrays unshift()
// Einzelne Werte zu den Arrays hinzufügen
person.unshift("rachid");
console.log(person);

friends.unshift("yousef");
console.log(friends);

favoriteFood.unshift("Dönner");
console.log(favoriteFood);

// Mehrere Werte gleichzeitig zu den Arrays hinzufügen
person.unshift("Latifa", "Amina");
console.log(person);
friends.unshift("Layla", "Sara");
console.log(friends);
favoriteFood.unshift("Falafel", "Kebab");
console.log(favoriteFood);
//Codeflow Übung lev1_9: Push Pop Shift Unshift

let myArray = [23, 54, 75];

// Werte mit der Push-Methode am Ende des Arrays hinzufügen
myArray.push(88, 99, 100, 110, 120);
console.log(myArray);

// Werte mit der Unshift-Methode am Anfang des Arrays hinzufügen
myArray.unshift(5, 10, 15, 20, 25);
console.log(myArray);
// Werte mit der Pop-Methode am Ende des Arrays entfernen
myArray.pop();
console.log(myArray);
myArray.pop();
console.log(myArray);

// Werte mit der Shift-Methode am Anfang des Arrays entfernen
myArray.shift();
myArray.shift();
console.log(myArray);

// Das aktualisierte Array anzeigen
console.log(myArray);

//Codeflow_uebung_lvl_1_8:filter()

const geradezahlen = [2, 4, 6, 8, 10];
const ungeradezahlen = [1, 3, 5, 7, 9];

const filterGeradeZahlen = geradezahlen.filter((numb) => {
  if (numb % 2 === 0) {
    return numb;
  }
});

console.log("Gerade Zahlen:", filterGeradeZahlen);

const filterUngeradeZahlen = ungeradezahlen.filter((numb2) => {
  if (numb2 % 2 !== 0) {
    return numb2;
  }
});

console.log("Ungerade Zahlen:", filterUngeradeZahlen);

//Codeflow_uebung_lvl_1_8:filter()-2
const words = [
  "Apfel",
  "Banane",
  "Kirsche",
  "Erdbeere",
  "Mango",
  "Kiwi",
  "Zitrone",
];

console.log(words);

const Liste = words.filter((elt) => {
  if (elt) {
    return elt.length <= 6;
  } else {
    console.log("nicht gefunden");
  }
});
console.log(Liste);

//Codeflow_uebung_lvl_1_8:filter()-4

const zahlen = [5, 10, 15, 20, 25, 30, 35];

function filterUndMultipliziere(zahlenArray) {
  const kleinerAls20 = zahlenArray.filter((zahl) => zahl < 20);

  const multipliziertMit2 = kleinerAls20.map((zahl) => zahl * 2);

  console.log(multipliziertMit2);
}

//Codeflow_uebung_lvl_1_8:filter()-4
const myArray = [
  null,
  "Superman",
  undefined,
  "Batman",
  null,
  "Wonder Woman",
  "The Flash",
  undefined,
];

function myHeros(array) {
  const bereinigtesArray = array.filter(
    (element) => element !== null && element !== undefined
  );

  return bereinigtesArray;
}

const bereinigtesArray = myHeros(myArray);

console.log(bereinigtesArray);
