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