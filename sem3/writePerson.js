const fs = require('fs');
const path = require('path');

// const person = {
//     name: 'Ivan',
//     surname: 'Ivanov',
//     age: 30,
//     city: 'Moscow',
// };

const jsonPath = path.join(__dirname, 'person.json')
console.log(jsonPath);

const person = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
person.age = person.age - 10;
person.city = 'Ekaterinburg';

fs.writeFileSync(jsonPath, JSON.stringify(person, null, 2));

