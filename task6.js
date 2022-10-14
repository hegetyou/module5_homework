// Модуль 5.5 - Задание №6

const arrayOne = [0, 1, 1, 0]

for (let i = 0; i < arrayOne.length; i++) {
  for (let k = 0; k < arrayOne.length; k++) {
    if (arrayOne[i] === arrayOne[k]) {
      console.log(`key:${i}, value:${arrayOne[i]} === key:${k}, value:${arrayOne[k]} -- is true`);
    } else {
      console.log(`key:${i}, value:${arrayOne[i]} === key:${k}, value:${arrayOne[k]} -- is false`);
    }
  }
}

//  &&

const arrayTwo = [1, 2, 3, 3]

let isEqual = true;
const reference = arrayTwo[0];

for (let item of arrayTwo) {
	if (item !== reference) {
		isEqual = false;
	}
}

console.log(isEqual)