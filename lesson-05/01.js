/*
Реализовать метод `addResource`, который будет добавлять указанное количество 
ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить 
в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему 
количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    if (hasMyProp(game.resources, resource) === true) {
        game.resources[resource] += amount
        return game.resources[resource]
    } else {
        console.log('Invalid resource')
  }
  }
}

function hasMyProp(anyObj, prop) {
  for (const key in anyObj) {
      if (key === prop) {
          return true;
      }
  }
  return false
}

// console.log(hasMyProp(game.resources, 'gold'));



// function addResource(resource, amount) {
//   if (hasMyProp(game.resources, resource) === true) {
//       game.resources[resource] += amount
//       return game.resources[resource]
//   } else {
//       console.log('Invalid resource')
// }
// }

// addResource('lumber', 130);
// addResource('gold', 230);

// console.log(game.resources);

// game.addResource('lumber', 30);
// console.log(game.resources);