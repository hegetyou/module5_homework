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