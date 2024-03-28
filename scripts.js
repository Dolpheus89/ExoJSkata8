//----------------------------------------------------------------------------------------------//
// EXERCICE 1
// Crée une fonction qui prend deux paramètres (a et b) et retourne la somme multipliée des deux paramètres.
// Exemple : a = 2, b = 3 => 2 * 3 = 6 => 6 * 2 = 12

// Pour rappel pour écrire une fonction en JS on utilise la syntaxe suivante :

// const nomDeMaFonction = (paramètre) => {
//   // Code de ma fonction
// }
// console.log(nomDeMaFonction(On remplace le paramètre par ce qu'on désire)) //

const multiply = (a, b) => a * b;
console.log(`Exercice 1 : ${multiply(2, 3)}`);

//----------------------------------------------------------------------------------------------//
// EXERCICE 2

// Crée une fonction qui prend en paramètre un tableau et qui retourne le premier élément du tableau.
// Exemple : [1, 2, 3] => 1
// Pour rappel pour accéder à un élément d'un tableau on utilise la méthode [laplaceDuNombreDeL'élément] :
// const monTableau = [1, 2, 3]
// console.log(monTableau[0]) // 1

const simpleArray = (Array) => Array[0];
console.log(`Exercice 2 : ${simpleArray([5, 10, 15, 3, 2, 1])}`);

//----------------------------------------------------------------------------------------------//
// EXERCICE 3

// Crée une fonction qui prend en paramètre un tableau et qui doit supprimer le dernier élément du tableau.
// Exemple : [1, 2, 3] => [1, 2]
// Pour rappel pour supprimer le dernier élément d'un tableau on utilise la méthode pop():
// const monTableau = [1, 2, 3]
// monTableau.pop()
// console.log(monTableau) // [1, 2]

const arrayPop = (Array) => (Array.pop(""), Array);

console.log(`Exercice 3 : ${arrayPop([5, 10, 15, 3, 2, 1])}`);

//----------------------------------------------------------------------------------------------//
// EXERCICE 4

// Crée une fonction qui prend en paramètre un tableau comprennant des nombres et qui doit retourner la somme de tous les nombres du tableau.
// Exemple : [1, 2, 3] => 6
// Pour rappel pour parcourir un tableau on utilise la méthode for :
// const monTableau = [1, 2, 3]
// for (let i = 0; i < monTableau.length; i++) {
//   console.log(monTableau[i]) // 1, 2, 3
// }

const arrayCount = (Array) => Array.reduce((acc, value) => acc + value, 0);

console.log(`Exercice 4 : ${arrayCount([5, 10, 15, 3, 2, 1])}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 5
//Crée une fonction qui prend en paramètre une string et qui doit retourner la string inversée.
// Exemple : "Hello" => "olleH"
// Pour cette exercice on va utiliser la méthode split() qui permet de transformer une string en tableau. Et la méthode reverse() qui permet d'inverser un tableau :
// const maString = "Hello"
// const monTableau = maString.split("")
// console.log(monTableau) // ["H", "e", "l", "l", "o"]
// const monTableauInverse = monTableau.reverse()
// console.log(monTableauInverse) // ["o", "l", "l", "e", "H"]
//Maintenant que la string est inversée il faut la remettre en string avec la méthode join().

const reverseString = (str) => str.split("").reverse().join("");
console.log(`Exercice 5 : ${reverseString("Hello")}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 6
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus grand nombre du tableau.
// Exemple : [1, 2, 3] => 3
// Pour cette exercice on va utiliser la méthode Math.max() qui permet de retourner le plus grand nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.max(...monTableau)) // 3

const sortArrayMax = (array) => array.sort((a, b) => b - a)[0];
console.log(`Exercice 6 : ${sortArrayMax([1, 74, 1, 78574, 14, 157, 854])}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 7
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus petit nombre du tableau.
// Exemple : [1, 2, 3] => 1
// Pour cette exercice on va utiliser la méthode Math.min() qui permet de retourner le plus petit nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.min(...monTableau)) // 1

const sortArraySmall = (array) => array.sort((a, b) => a - b)[0];
console.log(`Exercice 7 : ${sortArraySmall([52, 74, 1, 78574, 14, 157, 854])}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 8

// Crée une fonction qui prend en paramètre une string et qui doit retourner la string sans les voyelles.
// Exemple : "Hello" => "Hll"
// Pour cette exercice on va utiliser la méthode split() qui permet de transformer une string en tableau. Et la méthode filter() qui permet de filtrer un tableau :
// const maString = "Hello"
// const monTableau = maString.split("")
// console.log(monTableau) // ["H", "e", "l", "l", "o"]
// const monTableauFiltre = monTableau.filter((element) => {
//   return element !== "e" && element !== "o"
// })

const iDontLikeVoyel = (str) =>
  str.split("").filter((letter) => letter.match(/[^aeiouy]/gi));
console.log(`Exercice 8 : ${iDontLikeVoyel("Hello")}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 9

// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le tableau trié par ordre croissant.
// Exemple : [1, 3, 2] => [1, 2, 3]
// Pour cette exercice on va utiliser la méthode sort() qui permet de trier un tableau :
// const monTableau = [1, 3, 2]
// console.log(monTableau.sort()) // [1, 2, 3]

const sortArray = (array) => array.sort((a, b) => a - b);
console.log(`Exercice 9 : ${sortArray([1, 74, 1, 78574, 14, 157, 854])}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 10

// Crée une fonction qui prend en paramètre une string et qui renvoie un tableau avec toutes les rotations possibles de cette string.
// Exemple : "Hello" => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Pour cette exercice on va utiliser une boucle for et la méthode push() qui permet d'ajouter un élément à un tableau :
// const maString = "Hello"
// const monTableau = []
// for (let i = 0; i < maString.length; i++) {
//   const maStringRotate = maString.substring(i) + maString.substring(0, i)
//   monTableau.push(maStringRotate)
// }
// console.log(monTableau) // ["Hello", "elloH", "lloHe", "loHel", "oHell"]

const wordDesorder = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const maStringRotate = str.substring(i) + str.substring(0, i);
    result.push(maStringRotate);
  }
  return result;
};
console.log(`Exercice 10 : ${wordDesorder("Hello")}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 11

// Crée une fonction qui prend en paramètre un tableau et qui doit ajouter le nombre 1 à chaque élément du tableau.
// Exemple : [1, 2, 3] => [2, 3, 4]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau :
// const monTableau = [1, 2, 3]
// const monTableauAddition = monTableau.map((element) => {
//   return element + 1
// })

const arrayAdd1 = (Array) => Array.map((value) => value + 1);

console.log(`Exercice 11 : ${arrayAdd1([5, 10, 15, 3, 2, 1])}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 12

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec la longueur de chaque string.
// Exemple : ["Hello", "World"] => [5, 5]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau :
// const monTableau = ["Hello", "World"]
// const monTableauLongueur = monTableau.map((element) => {
//   return element.length
// })

const wordLength = (Array) => Array.map((word) => word.length);

console.log(`Exercice 12 : ${wordLength(["Hello", "World"])}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 13

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les premières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["H", "W"]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau.
// Et la méthode charAt() qui permet de récupérer un caractère à une position précise :
// const monTableau = ["Hello", "World"]
// const monTableauPremiereLettre = monTableau.map((element) => {
//   return element.charAt(0)
// })

const wordFirstLetter = (Array) => Array.map((word) => word.charAt(0));

console.log(`Exercice 13 : ${wordFirstLetter(["Hello", "World"])}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 14

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les dernières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["o", "d"]
// Indice regarde l'exercice 13, c'est exactement la même chose sauf qu'il faut récupérer la dernière lettre et non la première.

const wordLastLetter = (Array) =>
  Array.map((word) => word.charAt(word.length - 1));

console.log(`Exercice 14 : ${wordLastLetter(["Hello", "World"])}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 15

// Crée une fonction qui prend en paramètre un tableau de string et qui doit renvoyer tout les string qui ont une longueur de 5 caractères ou plus.
// Exemple : ["Hello", "World","Test", "Salut", "Yo"] => ["Hello", "World", "Salut"]
// Pour cette exercice on va utiliser la méthode filter() qui permet de filtrer un tableau, hésitez pas à regarder l'exercice 8 pour voir comment ça fonctionne. Sauf qu'ici on va filtrer en fonction de la longueur de la string. Incice : la méthode length() permet de récupérer la longueur d'une string.

const wordFilter = (Array) => Array.filter((word) => word.length >= 5);

console.log(
  `Exercice 15 : ${wordFilter(["Hello", "World", "Test", "Salut", "Yo"])}`
);

//----------------------------------------------------------------------------------------------//

// EXERCICE 16

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner la somme de tout les nombres du tableau.
// Exemple : [1, 2, 3] => 6
// Pour cette exercice on va utiliser la méthode reduce() qui permet de réduire un tableau en un seul élément :
// const monTableau = [1, 2, 3]
// const somme = monTableau.reduce((accumulateur, element) => {
//   return accumulateur + element
// }, 0)

const arrayCount2 = (Array) => Array.reduce((acc, value) => acc + value, 0);

console.log(`Exercice 16 : ${arrayCount2([5, 10, 15, 3, 2, 1])}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 17

// Crée une fonction qui prend en deux paramètres qui sont deux tableaux de string et qui doit retourner un tableau avec tout les éléments des deux tableaux.
// Exemple : ["Hello", "World"] et ["Test", "Salut"] => ["Hello", "World", "Test", "Salut"]
// Pour cette exercice on va utiliser la méthode concat() qui permet de concaténer deux tableaux :
// const monTableau1 = ["Hello", "World"]
// const monTableau2 = ["Test", "Salut"]
// const monTableauConcat = monTableau1.concat(monTableau2)
// console.log(monTableauConcat) // ["Hello", "World", "Test", "Salut"]

const arrayFusion = (Array1, Array2) => Array1.concat(Array2);

console.log(
  `Exercice 17 : ${arrayFusion(["Hello", "World"], ["Test", "Salut"])}`
);

//----------------------------------------------------------------------------------------------//

// EXERCICE 18

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner toutes les string qui ont la lettre "e".
// Exemple : ["Poulet", "Chat", "Chien", "Cheval"] => ["Poulet", "Chien", "Cheval"]
// Pour cette exercice on va utiliser la méthode filter() qui permet de filtrer un tableau, hésitez pas à regarder l'exercice 8 pour voir comment ça fonctionne. Sauf qu'ici on va filtrer en fonction de la présence de la lettre "e". Indice : la méthode includes() permet de savoir si une string contient une lettre ou un mot.

const weLoveE = (Array) => Array.filter((word) => word.includes("e"));

console.log(`Exercice 18 : ${weLoveE(["Poulet", "Chat", "Chien", "Cheval"])}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 19

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner tout les nombres qui sont pairs par ordre croissant.
// Exemple : [ 2, 9, 6, 5, 6] => [2, 6, 6]
// Indice : il y a plusieurs façon de faire, soit avec un for, soit avec la méthode filter() une fois ça fait utilise la méthode sort() qui permet de trier un tableau.

const weDontLikeEven = (Array) => Array.filter((nb) => nb % 2 === 0).sort();

console.log(`Exercice 19 : ${weDontLikeEven([2, 9, 6, 5, 6])}`);

//----------------------------------------------------------------------------------------------//

// EXERCICE 20

// Vous avez réussi à passer le premier niveau des algos, bravo ! Maintenant on va passer au niveau 2.

// Crée une fonction qui renvoie la longueur du ou des mots les plus courts dans une phrase.
// La chaîne ne sera jamais vide et vous n'avez pas besoin de tenir compte des différents types de données.
// Exemple :
// findShort("Prachett is the best author in the world ") // 2
// findShort("The quick brown fox jumps over the lazy dog") // 3

const findShort = (str) =>
  str
    .split(" ")
    .map((word) => word.length)
    .sort()[0];

console.log(
  `Exercice 20 : ${findShort("The quick brown fox jumps over the lazy dog")}`
);

// EXERCICE 21

//Écrivez une fonction `anagram` qui prend deux chaînes et renvoie un booléen indiquant si les chaînes sont des anagrammes l'une de l'autre. Deux chaînes sont des anagrammes l'une de l'autre si elles contiennent les caractères, quel que soit l'ordre des caractères. Par exemple, "listen" et "silent" sont des anagrammes l'une de l'autre

const anagram = (str1, str2) => {
  const string1 = [...str1].sort().join("");
  const string2 = [...str2].sort().join("");

  return `is a anagram ? ${string1 === string2}`;
};

console.log(`Exercice 21 : ${anagram("silent", "listen")}`);

// EXERCICE 22

//Ecrivez une fonction qui enlève les doubles lettres d'une chaîne donnée. Par exemple, "google" deviendrait "gogle"
// Par exemple :
// removeDoubleLetters("google") // "gogle"
// removeDoubleLetters("Hello World!") // "Helo World!"

const doubleLetter = (str) =>
  [...str].filter((letter, index) => letter !== letter[index - 1]).join("");

console.log(`Exercice 22 : ${doubleLetter("google")}`);

// EXERCICE 23

//Écrivez une fonction qui prend un tableau de 10 entiers (entre 0 et 9) et renvoie une chaîne de caractères sous la forme d'un numéro de téléphone.
// Exemple :
// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) // "(123) 456-7890"

const createPhoneNumber = (array) =>
  `(${array.slice(0, 3).join("")}) ${array.slice(3, 6).join("")}-${array
    .slice(6, 10)
    .join("")}`;

console.log(
  `Exercice 23 : ${createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])}`
);

// EXERCICE 24

//Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres (en tant que chaînes de caractères) et qui renvoie la lettre manquante de la série. Si aucune lettre n'est manquante, la fonction doit renvoyer "undefined".
// Exemple :
// findMissingLetter(["a","b","c","d","f"]) // "e"
// findMissingLetter(["O","Q","R","S"]) // "P"
// Indice : Oubliez pas de boucler et vous pouvez utiliser la méthode charCodeAt() pour récupérer le code unicode d'un caractère.
// Indice 2 : Vous pouvez utiliser la méthode fromCharCode() pour récupérer un caractère à partir de son code unicode.  Exemple : String.fromCharCode(65) renvoie "A". Mais attention à refaire la boucle dans l'autre sens pour pouvoir comparer les codes unicode des caractères du tableau avec les codes unicode des caractères manquants.
// Indice 3 : Il y a plus cas comparer les codes unicode des caractères du tableau avec les codes unicode des caractères manquants pour trouver le caractère manquant avec une condition if. Et retourner le caractère manquant avec un return et la méthode fromCharCode().

const findMissingLetter = (array) => {
  for (let i = 1; i < array.length; i++) {
    const check = array[i].charCodeAt(0) - 1 !== array[i - 1].charCodeAt(0);

    if (check) {
      return String.fromCharCode(array[i - 1].charCodeAt(0) + 1);
    }
  }
};

console.log(`Exercice 24 : ${findMissingLetter(["a", "b", "c", "d", "f"])}`);

// EXERCICE 25

//Écrivez une fonction qui prend un tableau de string et renvoie un tableau de string triées par ordre alphabétique.
// Exemple :
// sortString(["Banana", "Orange", "Apple", "Mango"]) // ["Apple", "Banana", "Mango", "Orange"]
// sortString(["lait", "beurre", "fromage", "yaourt"]) // ["beurre", "fromage", "lait", "yaourt"]

const sortString = (Array) => Array.sort((a, b) => a.localeCompare(b));

console.log(
  `Exercice 25 : ${sortString(["banana", "orange", "Apple", "Mango"])}`
);

// EXERCICE 26
// Écris une fonction qui étant donné deux angles d'un triangle renvoie la mesure du troisième angle.
// ( Rappel : la somme des trois angles d'un triangle est toujours égale à 180 degrés )
// Exemple :
// otherAngle(30, 60) // 90
// otherAngle(60, 60) // 60
// Indice : Pour trouver le troisième angle, tu dois soustraire la somme des deux angles donnés à 180 degrés.

const triangleDeg3 = (deg1, deg2) => 180 - deg1 - deg2;

console.log(`Exercice 26 : ${triangleDeg3(30, 60)}`);

// EXERCICE 27
// Écris une fonction qui peut déterminer si une année est une année bissextile ou non. Elle doit renvoyer true si c'est le cas, sinon false.
// ( Rappel : Une année bissextile est une année contenant 366 jours au lieu de 365. Elle est donc plus longue qu'une année normale. Une année bissextile a lieu tous les 4 ans. )
// Exemple :
// isLeapYear(2020) // true
// isLeapYear(2021) // false
// Indice : Pour savoir ça tu peux utiliser le modulo. Si une année est divisible par 4 et que le reste de la division est égal à 0, alors c'est une année bissextile.

const isLeapYear = (year) => (year % 4 === 0 ? true : false);

console.log(`Exercice 27 : ${isLeapYear(2020)}`);

// EXERCICE 28

// Voici un example de tableau d'animaux. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renvoie un nouveau tableau qui lui même contient deux sous-tableaux. Le premier sous-tableau doit contenir les animaux domestiques et le second les animaux sauvages. Les animaux domestiques doivent être triés par ordre alphabétique et les animaux sauvages par ordre alphabétique inversé.

const animals = [
  { name: "Panda", type: "Wild" },
  { name: "Cat", type: "Domestic" },
  { name: "Turtle", type: "Domestic" },
  { name: "Dog", type: "Domestic" },
  { name: "Crocodile", type: "Wild" },
  { name: "Eagle", type: "Wild" },
  { name: "Donkey", type: "Domestic" },
  { name: "Pigeon", type: "Domestic" },
  { name: "Monkey", type: "Wild" },
];

// Exemple :
// sortAnimals(animals) // [["Cat", "Dog", "Donkey", "Pigeon", "Turtle"], ["Eagle", "Monkey", "Panda", "Crocodile"]]
// Indice : Oubliez pas que tu peux créer des variables qui contiennent des tableaux vides et que tu peux ajouter des éléments à un tableau avec la méthode push(). Mais vu que tu dois analyser le tableau d'animaux pour le trier, tu dois utiliser une boucle et faire des conditions if pour savoir si l'animal est domestique ou sauvage. Et tu dois trier les animaux domestiques par ordre alphabétique et les animaux sauvages par ordre alphabétique inversé. Pour trier un tableau par ordre alphabétique tu peux utiliser la méthode sort(). Pour trier un tableau par ordre alphabétique inversé tu peux utiliser la méthode reverse().

const sortAnimals = (array) => {
  const Wild = [];
  const Domestic = [];

  array.map((animal) => {
    if (animal.type === "Wild") {
      return Wild.push(animal.name);
    }
    Domestic.push(animal.name);
  });

  return [
    Domestic.sort((a, b) => a.localeCompare(b)),
    Wild.sort((a, b) => a.localeCompare(b)),
  ];
};

console.log(`Exercice 28 : ${JSON.stringify(sortAnimals(animals))}`);

// EXERCICE 29

// Un employé de théatre souhaite obtenir la liste de tous les sièges de sa salle principal. Dans la salle les places sont réparties comme suit :
// - Il y a 26 colonnes de sièges, numérotées de "1" à "26".
// - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

// Complète la function theatreSieges() qui doit renvoyer un tableau où chaque sous-tableau répertorie les positions des siègnes dans une rangée.
// Exemple  du résultat attendu :
// [
// ["1-1", "1-2", "1-3", ..., "1-99", "1-100"],
// ["2-1", "2-2", "2-3", ..., "2-99", "2-100"],
// ["3-1", "3-2", "3-3", ..., "3-99", "3-100"],
// ...
// ["26-1", "26-2", "26-3", ..., "26-99", "26-100"]
// ]

// Indice : Tu dois utiliser deux boucles imbriquées pour créer les sous-tableaux. La première boucle doit parcourir les colonnes et la seconde boucle doit parcourir les sièges de chaque colonne.

const theatreSieges = (col, seats) => {
  for (let i = 1; i <= col; i++) {
    let seat = [];
    for (let j = 1; j <= seats; j++) {
      seat.push(`${i}-${j}`);
    }
    console.log(seat);
  }
};

console.log(`Exercice 29 : Too many data , Unlock for see the result`);
// console.log(`Exercice 29 : ${JSON.stringify(theatreSieges(26, 100))}`);

// EXERCICE 30

/*
Notre équipe de football participe à un tournoi dans lequel elle a joué 10 matchs.
Les résultats du match sont notés "3:0" : le premier chiffre est le nombre de buts de **notre** équipe ; le second est celui de l'autre équipe.
Pour connaître le score de notre équipe, nous suivons ces règles :
- Victoire : 3pts
- Nul : 1pt
- Défaite : 0pt
Étant donné un tableau avec les résultats des matchs, écris une fonction qui renverra notre score.
Pour exemple, si ta fonction recevait le tableau ci-dessous en paramètre, tu devrais obtenir 13 points.

["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]
*/
//Indice : Tu dois utiliser une boucle for pour parcourir le tableau et une condition if pour savoir si notre équipe a gagné, perdu ou fait match nul. Et tu dois ajouter les points de chaque match à une variable score qui doit être initialisée à 0. Et tu dois retourner la variable score à la fin de la fonction.

const totalScore = (scores) => {
  let result = 0;

  scores.map((score) => {
    let myTeam = score.match(/^[0-9]/)[0];
    let yourTeam = score.match(/[0-9]$/)[0];

    if (myTeam > yourTeam) {
      result += 3;
    } else if (myTeam == yourTeam) {
      result += 1;
    }
  });

  return result;
};

console.log(
  `Exercice 30 : ${totalScore([
    "1:0",
    "2:0",
    "3:0",
    "4:4",
    "2:2",
    "3:3",
    "1:4",
    "2:3",
    "2:4",
    "3:3",
  ])}`
);

// EXERCICE 31

/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

const sumArr = (array1, array2) => {
  let result = [];

  while (array1.length > array2.length) {
    array2.push(0);
  }
  while (array2.length > array1.length) {
    array1.push(0);
  }

  array1.map((nb, index) => {
    result.push(nb * 1 + array2[index] * 1);
  });
  return result;
};

console.log(
  `Exercice 31 : ${JSON.stringify(
    sumArr(["2", "5", "3"], ["2", "4", "9", "5", "5"])
  )}`
);

// EXERCICE 32

// Écris une fonction generatedCharacter qui crée de manière aléatoires des personnages donjon et dragon avec une classe et des noms de personnages. La fonction doit renvoyer un tableau de personnages.

let tableauName = [
  "Aldric",
  "Dolgrin",
  "Ernst",
  "Gellius",
  "Gorstag",
  "Hagar",
  "Jozan",
  "Kef",
  "Leve",
  "Morn",
  "Perrin",
  "Reed",
  "Rulf",
  "Shandar",
  "Taman",
  "Urth",
];
let tableauClass = [
  "barbarian",
  "bard",
  "cleric",
  "druid",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warlock",
  "wizard",
];

const generatedCharacter = (Names, Class) => {
  const result = [];

  for (let i = 1; i <= 10; i++) {
    const randomName = Math.floor(Math.random() * Names.length);
    const randomClass = Math.floor(Math.random() * Class.length);
    result.push([Names[randomName], Class[randomClass]]);
  }

  return result;
};

console.log(
  `Exercice 32 : ${JSON.stringify(
    generatedCharacter(tableauName, tableauClass)
  )}`
);

//----------------------------------------------------------------------------------------------//

// EXERCICE 33

// Implémenter la fonction filterDuplicate qui prend un tableau en paramètre et qui doit renvoyer un tableau sans doublons.

// Exemple du résultat attendu :
// filterDuplicate([1, 2, 2, 3, 4, 4, 5]) // [1, 2, 3, 4, 5]

const filterDuplicate = (array) =>
  array.sort().filter((nb, index) => nb !== array[index + 1]);

console.log(
  `Exercice 33 : ${JSON.stringify(filterDuplicate([1, 2, 2, 3, 4, 4, 5]))}`
);

// EXERCICE 34

// Écrivez une fonction judgeFaces qui prend un tableau de grimaces représentées par des chaînes de caractères Emoji en entrée et renvoie un objet avec les scores pour chaque type de grimace. Vous devez utiliser la méthode map et la méthode reduce

// Exemple du résultat attendu :
// judgeFaces(["😀", "😂", "😄", "😂", "😁", "😂", "😄", "😀"]) // { '😀': 10, '😁': 4, '😂': 9, '😃': 0, '😄': 2 }
const scores = {
  "😀": 5,
  "😁": 4,
  "😂": 3,
  "😃": 2,
  "😄": 1,
};

const judgeFaces = (faces) => {
  let result = scores;

  for (let face in result) {
    const foundFace = faces.sort().filter((smiley) => face === smiley).length;
    result[face] *= foundFace;
  }

  return result;
};

console.log(
  `Exercice 34 : ${JSON.stringify(
    judgeFaces(["😀", "😂", "😄", "😂", "😁", "😂", "😄", "😀"])
  )}`
);

// EXERCICE 35

// Ecrivez une fonction qui prend en paramètre un tableau de lettre et qui doit retourner un mot formé par ces lettres.
// Exemple : ["H", "e", "l", "l", "o"] => "Hello"

const wordFromLetters = (tableau) => tableau.join("");

console.log(
  `Exercice 35 : ${JSON.stringify(wordFromLetters(["H", "e", "l", "l", "o"]))}`
);

// EXERCICE 36

//  // Écrivez une fonction cartes qui génère un jeu de 52 cartes à jouer. Chaque carte est représentée par une chaîne, avec la valeur de la carte suivie de sa couleur. Elles sont représentées par les caractères suivants : ♠, ♥, ♦, ♣. Les valeurs des cartes sont représentées par les chaînes suivantes : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A. La fonction doit renvoyer un tableau de chaînes, avec chaque chaîne représentant une seule carte.

// Exemple :

// [  "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠", "A♠",  "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥", "A♥",  "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦", "A♦",  "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣", "A♣"]

const cards = () => {
  const colors = ["♠", "♥", "♦", "♣"];
  const type = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const result = [];

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < type.length; j++) {
      result.push(type[j] + colors[i]);
    }
  }

  return result;
};

console.log(`Exercice 36 : ${JSON.stringify(cards())}`);
