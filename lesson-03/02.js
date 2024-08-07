// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven (num) {
    if ((num % 2) === 0){
        console.log(true)
    } else {
        console.log(false);
    }
    return num ? true : false
} 

isEven()