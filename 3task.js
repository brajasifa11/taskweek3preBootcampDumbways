// //=====Week1ganjilgenap=====//

let arr = [1,2,3,4,5,6,7,8];

function isEven(arr){
  let result = [];

  arr.forEach(item => {
  
    if(item % 2 == 0){
      result.push('Genap');
    } else if(item % 2 !== 0){
      result.push('Ganjil')
    }
  })
  console.log(result.join(','));
}

isEven(arr);

// //=====Week1nilaimax,min,average=====//

let score = [80,45,30,45,70,70,80,90,91,88,80,83];

function calculateScore(params){
  nilaiMin = params[0];
  nilaiMax = 0;
  rataRata = 0;

  params.map(items => {
    if(items < nilaiMin){
      nilaiMin = items;
    } else if(items > nilaiMax){
      nilaiMax = items
    }
    rataRata = rataRata + items / params.length;
  })
  console.log(nilaiMin, nilaiMax, rataRata);
}

calculateScore(score);

// //=====Week2vowels=====//

function checkVowel(letter) {
  let vowel = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  let result = "";
  for (let i = 0; i < vowel.length; i++) {
    if (letter.includes(vowel[i])) {
      result = `${letter} adalah huruf vokal`;
      break;
    } else {
      result = `${letter} bukan huruf vokal`;
    }
  }
  return result;
}

console.log(checkVowel("a"));
console.log(checkVowel("B"));

// //=====Week2concatenate=====//

function concatenate(params1, params2) {
  let newArr = params1.concat(params2);
  newArr.sort();0

  let removedDuplicate = newArr.filter(function (item, pos) {
    return newArr.indexOf(item) == pos;
  });

  return removedDuplicate;
}
console.log(concatenate([1, 3, 4, 1, 5, 6], [7, 2, 4, 1, 5, 2]));

