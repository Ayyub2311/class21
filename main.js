// const users = [

// ];

// const register = (name, age, surname) => {
//     const user = {
//         name : name,
//         age: age,
//         surname: surname
//     };

//     users.push(user)

// }

// register("Gevin", 23, "Scamo")
// register("Eden", 47, "Panowski")
// register("Goodwin", 32, "Brown")

// console.log(users);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = [];
const even = [];



const find = (num) =>{
  if (num % 2 === 0) {
    even.push(num);
  } else {
    odd.push(num);
  }
}

for (let i = 0; i < arr.length; i++) {
  find(arr[i])  
}

console.log(odd);
console.log(even);
