// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven (num) {
    if ((num % 2) === 0){
        num = true
    } else {
        num = false;
    }
    let result = num ? true : false
    return result
} 
