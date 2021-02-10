// Задание 1

document.write('Задание 1. Отнимает от первого числа второе и делит на третье.<br>');
function calcNumbers(x, y, z) {
    return (x - y) / z;
}
document.write('Получилось число: ', calcNumbers(10, 2, 2), '<br>')

// Задание 2

document.write('<br>Задание 2. Возвращает куб числа и его квадрат.<br>');
let square, cuba;
function calcNumbers1(x) {
    square = x*x;
    cuba = x*x*x;
}
calcNumbers1(3);
document.write('Квадрат числа: ', square, '. Куб числа: ', cuba, '.<br>')

// Задание 3

document.write('<br>Задание 3. Возвращает меньшее и большее из чисел.<br>');
let a = 23, b = 11;
function max(a, b){
    if (a > b){ 
        return a
    } else  if (a < b) {
        return b
    } else {
        document.write('Числа равны.<br>');
    }
}
function min(a, b){
    if (a < b){ 
        return a
    } else  if (a > b) {
        return b
    } else {
        document.write('Числа равны.<br>');
    }
}
document.write('Большее число из функции max: ', max(a, b), '. Меньшее число из функции min: ', min(a, b), '.<br>')

// Задание 4

document.write('<br>Задание 4. Возвращать массив b вывести его.<br>');
let arr4 = [];
function returnArray() {
    let arr4First = prompt('Введите первый элемент массива', '3');
    let arr4Last = prompt('Введите последний элемент массива', '10');
    for (i = +arr4First; i <= +arr4Last; i++){
        arr4.push(i);
    }
    return arr4;
}
function writeArray() {
    document.write('Получился массив: ', returnArray(), '.<br>')
}
writeArray();

// Задание 5

document.write('<br>Задание 5. Проверка на четность.<br>');
function isEven(n) {
    if (isNaN(n)) {
        return document.write('Вы ввели не число.<br>')
    } else if (n % 2 === 0){
        return true;
    } else {
        return false;
    }
}
document.write('Число четное/нечетное: ' + isEven(25) + '.<br>');

// Задание 6

document.write('<br>Задание 6. Останутся лежать четные числа.<br>');
console.log(arr4);
let arr6 = [];
for (let i = 0; i < arr4.length; i++) {
    if (isEven(+arr4[i]) === true) {
        arr6.push(arr4[i])
    }
}
// console.log(arr6);
document.write('Массив с четными числами: ' + arr6 + '.<br>');


