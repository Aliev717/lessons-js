/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79),
 * 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70; // тестовое значение, можно изменять
let grade;

// your code

switch (true) {
  case score <= 49:
    grade = 'F'
    console.log(grade)
    break;

  case score >= 50 && score <= 69:
    grade = "D";
    console.log(grade)
    break;

  case score >= 70 && score <= 79:
    grade = "C";
    console.log(grade)
    break;

  case score >= 80 && score <= 89:
    grade = "B";
    console.log(grade)
    break;

  default:
    grade = 'Invalid score'
    break;
}