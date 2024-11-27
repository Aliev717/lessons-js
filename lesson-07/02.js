/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет 
ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, 
в противном случае - false.
 */

function isNumeric(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    return false
  }
  return !isNaN(str)
/*
  // Проверяем, состоит ли строка только из пробелов
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      // Если найден хоть один не пробельный символ, проверяем является ли строка числом
      return !isNaN(str);
    }
*/
}


// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
