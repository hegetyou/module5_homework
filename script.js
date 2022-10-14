// Модуль 5.3 - Задание №1

const inputValue = prompt('Введите число')
const value = +inputValue;
if(typeof value == "number" && !isNaN(value)){
  if(value == 0) {
    console.log('ноль')
  } else if (value % 2 == 0){
    console.log('чётное')
  } else {
    console.log('нечётное')
  }
} else {
  console.log('Упс, кажется, вы ошиблись')
}



// Модуль 5.3 - Задание №2

let x = undefined;
switch(typeof x) {
case 'number':
    console.log('X - число');
    break;
case "string":
    console.log('X - строка');
    break;
case 'boolean':
    console.log('X - логический тип');
    break;
default:
    console.log('Тип X не определён')
}


// Модуль 5.4 - Задание №3

let str = '!dlrow olleH';

console.log (str.split("").reverse().join(""));



// Модуль 5.4 - Задание №4

let number = Math.abs(10);

console.log (number);



// Модуль 5.5 - Задание №5

let array = ['first', 'second', 'third'];

console.log('Length = ' + array.length);

array.forEach(function(item, i, array) {
console.log( i + ": " + item);
});



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



// Модуль 5.5 - Задание №7

let arrayThree = [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 'one', null, null, null, null, null,];

let countZero=0;
let countString=0;
let countables=0;
let uncountables=0;
let countNull=0;

for (i = 0; i<arrayThree.length; i++) {
        if (typeof arrayThree[i] == 'string') {
        countString++;
    } else if (arrayThree[i]==null){
        countNull++;
    } else if (arrayThree[i]==0) {
        countZero++;
    } else if (arrayThree[i] % 2 === 0) {
        countables++;
    } else {
        uncountables++;
    }   
}
console.log(`В массиве: Нулей - ${countZero}, Строк - ${countString}, Нуллов - ${countNull}, Четных - ${countables}, Нечетных - ${uncountables}.`)



// Модуль 5.5 - Задание №8

let myMap = new Map();
myMap.set(1, 'one');
myMap.set(2, 'two');
myMap.set(3, 'three');

myMap.forEach(function (value, key) {
	console.log('Ключ - ' + key + ' = Значение - ' + value);
});