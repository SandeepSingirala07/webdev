let employees = [
    {"eiD":101, "name": "sanjay", "sal": 5000, "gender": "male"},
    {"eiD":102, "name": " Leela", "sal": 5000, "gender": "female"},
    {"eiD":103, "name": "King", "sal": 5000, "gender": "male"},
    {"eiD":104, "name": "John", "sal": 5000, "gender": "male"},
    {"eiD":105, "name": "Sam", "sal": 5000, "gender": "female"},
    {"eiD":106, "name": "Jay", "sal": 5000, "gender": "male"},
];

// find the first female employee in the list
let first_female_emp = employees.find((emp)=> emp.gender === 'female');
console.log(first_female_emp);

console.log("=====================");
// find the index where the first index female employee in the list
let first_female_emp1 = employees.findIndex((emp)=> emp.gender === 'female');
console.log(first_female_emp1);

console.log("=====================");
////// Print the last female employee in the list
let first_female_emp2 = employees.findLast((emp)=> emp.gender === 'female');
console.log(first_female_emp2);

console.log("=====================");
//print the index of last female employee in the list
let first_female_emp3 = employees.lastIndexOf((emp)=> emp.gender === 'female');
console.log(first_female_emp3);

console.log("=====================");
// find all the female employee in the list
let first_female_emp4 = employees.filter((emp)=> emp.gender === 'female');
console.log(first_female_emp4);