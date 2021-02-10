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

// document.write('<br>Задание 4. Возвращать массив b вывести его.<br>');
// let arr4 = [];
// function returnArray() {
//     let arr4First = prompt('Введите первый элемент массива', '3');
//     let arr4Last = prompt('Введите последний элемент массива', '10');
//     for (i = +arr4First; i <= +arr4Last; i++){
//         arr4.push(i);
//     }
//     return arr4;
// }
// function writeArray() {
//     document.write('Получился массив: ', returnArray(), '.<br>')
// }
// writeArray();

// // Задание 5

// document.write('<br>Задание 5. Проверка на четность.<br>');
// function isEven(n) {
//     if (isNaN(n)) {
//         return document.write('Вы ввели не число.<br>')
//     } else if (n % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// document.write('Число четное/нечетное: ' + isEven(25) + '.<br>');

// // Задание 6

// document.write('<br>Задание 6. Останутся лежать четные числа.<br>');
// console.log(arr4);
// let arr6 = [];
// for (let i = 0; i < arr4.length; i++) {
//     if (isEven(+arr4[i]) === true) {
//         arr6.push(arr4[i])
//     }
// }
// document.write('Массив с четными числами: ' + arr6 + '.<br>');

// // Задание 7

// document.write('<br>Задание 7. Нарисовать пирамиду.<br>');
// function pyramid(heigth) {
//     for (let i=1; i <= heigth; i++) {
//         for (let j=1; j <= i; j++) {
//             if (arguments.length > 1){
//                 document.write(arguments[arguments.length-1]);
//             } else {
//                 document.write(i);
//             }
//         }
//         document.write('<br>');
//     }
// }
// pyramid(9, '*')

// // Задание 8

// document.write('<br>Задание 8. Равнобедренный треугольник.<br>');
// let heigthTriangle = prompt('Задание 8. Введите высоту равнобедренного треугольника')
// function triangle(heigth) {
//     document.write('<div style="display:flex; flex-direction: column; align-items: center;">')
//     for (let i=0; i <= heigth-1; i++) {
//         document.write('<div>')
//         for (let j=1; j <= (2*i+1); j++) {
//             document.write('*');
//         } 
//         document.write('</div>')
//     }
//     document.write('</div>')
// }
// function reverseTriangle(heigth) {
//     document.write('<div style="display:flex; flex-direction: column; align-items: center;">')
//     for (let i = heigth-1; i >= 0; i--) {
//         document.write('<div>')
//         for (let j = 1; j <= (2*i+1); j++) {
//             document.write('*');
//         } 
//         document.write('</div>')
//     }
//     document.write('</div>')
// }
// triangle(heigthTriangle)
// reverseTriangle(heigthTriangle)

// Задание 9

document.write('<br>Задание 9. Массив заполненный числами Фибоначи от 0 до 1000.<br>');
function numbersFib(n) {
    let arrayFib = [0, 1];
    for (let i=0; i <= n; i++) {
        if (i === arrayFib[arrayFib.length-1] + arrayFib[arrayFib.length-2]) {
            arrayFib.push(i)
        }
    }
    return arrayFib;
}
document.write('Массив с последовательностью Фибоначи: ', numbersFib(1000),'.<br>');

// Задание 10
let number10 = 9992;
document.write('<br>Задание 10. Сумма чисел числа ', number10, ' стала однозначным числом.<br>');
function sumDigits(n) {
    let sum = 0;
    for (let i=0; i < n.length; i++) {
        sum += +n[i];
    }
    if (sum > 9) {
        sumDigits(sum + '');
    } else{
        // console.log(sum);
        document.write('Сумма чисел числа равна: ' + sum + '.<br>');        ;
    }
}
sumDigits(number10 + '')

