// Модуль 5.5 - Задание №8

let myMap = new Map();
myMap.set(1, 'one');
myMap.set(2, 'two');
myMap.set(3, 'three');

myMap.forEach(function (value, key) {
	console.log('Ключ - ' + key + ' = Значение - ' + value);
});