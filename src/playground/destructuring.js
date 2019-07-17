// const person = {
//   name:'Vimal',
//   age:26,
//   location:{
//     city:'Philadelphia',
//     temp: 92
//   }
// }
//
// const {name:firstName='Anonymous', age=0} = person
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${firstName} is ${age}`);
//
// const {city,temp:temperature} = person.location
//
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//   title: 'ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const {name:publisherName="Self-Published"} = book.publisher;
//
// console.log(publisherName);


// const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania','19147'];
// const [,city,state='New York'] = address;
// console.log(`You are in ${city} ${state }`);

const item = ['coffee(hot)','$2.00','$2.50','$2.75'];

const [coffee,,medium] = item
console.log(`A medium ${coffee} costs ${medium}`);
