// // Задание 1

// document.write('Задание 1. Отнимает от первого числа второе и делит на третье.<br>');
// function calcNumbers(x, y, z) {
//     return (x - y) / z;
// }
// document.write('Получилось число: ', calcNumbers(10, 2, 2), '<br>')

// // Задание 2

// document.write('<br>Задание 2. Возвращает куб числа и его квадрат.<br>');
// let square, cuba;
// function calcNumbers1(x) {
//     square = x*x;
//     cuba = x*x*x;
// }
// calcNumbers1(3);
// document.write('Квадрат числа: ', square, '. Куб числа: ', cuba, '.<br>')

// // Задание 3

// document.write('<br>Задание 3. Возвращает меньшее и большее из чисел.<br>');
// let a = 23, b = 11;
// function max(a, b){
//     if (a > b){ 
//         return a
//     } else  if (a < b) {
//         return b
//     } else {
//         document.write('Числа равны.<br>');
//     }
// }
// function min(a, b){
//     if (a < b){ 
//         return a
//     } else  if (a > b) {
//         return b
//     } else {
//         document.write('Числа равны.<br>');
//     }
// }
// document.write('Большее число из функции max: ', max(a, b), '. Меньшее число из функции min: ', min(a, b), '.<br>')

// // Задание 4

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
// // console.log(arr4);
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

// // Задание 9

// document.write('<br>Задание 9. Массив заполненный числами Фибоначи от 0 до 1000.<br>');
// function numbersFib(n) {
//     let arrayFib = [0, 1];
//     for (let i=0; i <= n; i++) {
//         if (i === arrayFib[arrayFib.length-1] + arrayFib[arrayFib.length-2]) {
//             arrayFib.push(i)
//         }
//     }
//     return arrayFib;
// }
// document.write('Массив с последовательностью Фибоначи: ', numbersFib(1000),'.<br>');

// // Задание 10

// let number10 = 9992;
// document.write('<br>Задание 10. Сумма чисел числа ', number10, ' стала однозначным числом.<br>');
// function sumDigits(n) {
//     let sum = 0;
//     for (let i=0; i < n.length; i++) {
//         sum += +n[i];
//     }
//     if (sum > 9) {
//         sumDigits(sum + '');
//     } else{
//         // console.log(sum);
//         document.write('Сумма чисел числа равна: ' + sum + '.<br>');        ;
//     }
// }
// sumDigits(number10 + '')

// // Задание 11

// let arr11 = [1,2,3,4,5];
// document.write('<br>Задание 11. Выведите последовательно элементы массива ', arr11,', используя рекурсию и не используя цикл.<br>');
// function showArrayElements(array) {
//     if (array.length === 1){
//         document.write(array[0]); 
//     } else{
//         document.write(array[0], ', '); 
//         array.shift()
//         return showArrayElements(array)
//     }
// }
// showArrayElements(arr11)

// // Задание 12

// console.log('Задание 12. Выведите информацию в рамке в консоль.');
// let homework = prompt('Домашняя работа', 'Домашняя работа: «Функции»');
// let group = prompt('Группа', 'Выполнил: студент гр. FE108');
// let student = prompt('Ф.И.О.', 'Антонович Николай Владимирович');
// function doMiddleFrameRows(a) {
//     console.log('*', a, '*');
// }
// let contentArray = [homework, group, student]
// let maxContent = 0;
// let differentArray = []
// for (let i=0; i < contentArray.length; i++){    // нахождение максимальной длины строки
//     if (contentArray[i].length >= maxContent) {
//         maxContent = contentArray[i].length;
//     }
// }
// for (let i=0; i < contentArray.length; i++){     // увеличение длины строки до размера самой длинной
//     differentArray.push(maxContent-contentArray[i].length)
//     contentArray[i] += ' '.repeat(differentArray[i])
// }
// // for (let i=0; i < contentArray.length; i++){
// //     for (let j=0; j < differentArray[i]; j++) { // альтернативный способ растягивания строки
// //         contentArray[i] += ' ';
// //     }
// // }
// function doUpDownFrameRows(a) {     // верхняя и нижние строки из звездочек
//     let stringLength = '';
//     for (let i=1; i <= a+4; i++){
//         stringLength += '*';
//     }
//     return console.log(stringLength);
// }
// doUpDownFrameRows(maxContent) 
// for (let i=0; i < contentArray.length; i++){
//     doMiddleFrameRows(contentArray[i])
// }
// doUpDownFrameRows(maxContent)

// Задание 13

document.write('<br><br>Задание 13. Проверка на правильность ввода адреса эл. почты, неиспользуя регулярные выражения.<br>');
let email = prompt('Введите адрес электронной почты: ', 'Tesa_lo-Nick@gmail.com');
let arraySymbol =['_', '-', '.', '@']
function checkEmail_a(a) {
    for (let i=0; i < a.length; i++) { // ввод только лат.букв и '_', '-', '.', '@'
        if (!((a[i] === '_') || (a[i] === '-') || (a[i] === '.') || (a[i] === '@') || ((a[i].charCodeAt() >= 65) && (a[i].charCodeAt() <= 122)))) {
            alert('Вы ввели неправильный символ');
            break;
        }
    }
    for (let j=0; j < arraySymbol.length; j++) { // неввод первым и последним элементом
        for (let i=0; i < a.length; i++) {
            if ((a[0] === arraySymbol[j]) || (a[a.length-1] === arraySymbol[j])) {
                alert('Вы ввели небуквенный символ первым или последним элементом в названии почты');
                break;
            }
        }
    }
    for (let j=0; j < arraySymbol.length; j++) {    // неввод '_', '-', '.', '@' один за одним
        for (let n=0; n < arraySymbol.length; n++) {
            for (let i=0; i < a.length; i++) {
                if (!((a[i] === arraySymbol[j]) && (a[i+1] === arraySymbol[n]))) {  
                } else {
                    alert('Вы ввели небуквенные символы один за одним');
                    break;
                }
            }
        }
    }
}
checkEmail_a(email)
