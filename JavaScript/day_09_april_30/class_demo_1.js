// ES-5
function Student(roll, name, add, course) {  // constructor
    this.roll = roll;
    this.name = name;
    this.add = add;
    this.course = course;
}
let std1 = new Student(101, 'Arul', 'boston', 'angular');
let std2 = new Student(102, 'Bharat', 'chicago', '.net');
console.log(std1, std2);

// ES-6
class Student2 {
    constructor(roll, name, add, course) {
        this.roll = roll;
        this.name = name;
        this.add = add;
        this.course = course;
    }
}
let std3 = new Student2(103, 'Sandeep', 'boston', 'angular');
let std4 = new Student2(104, 'Venkat', 'chicago', '.net');
console.log(std1, std2);