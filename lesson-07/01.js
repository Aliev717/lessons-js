/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, 
  чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", 
  функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант 
  решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/
/*
function capitalizeWords(str) {
  if (typeof str !== 'string'){
    return false
  }

  const splitStr = str.split(' ');

  let result = []
  for (let i = 0; i < splitStr.length; i++) {
    result[i] = `${splitStr[i][0].toUpperCase() + splitStr[i].slice(1)}`
    // splitStr[i][0].toUpperCase()
    // result.push(splitStr[i])
    }
    
  return result.join(' ')
}

console.log(capitalizeWords("hello world from javascript"))
*/