class Student {
    constructor(roll, fName, lName, add) {
        this.roll = roll;
        this.fName = fName;
        this.lName = lName;
        this.add = add;
    }
    fullName() {
        console.log(this.fName + " " + this.lName)
    }
}
let std1 = new Student(101, 'Rohit', 'Kumar', 'Austin');
console.log(std1);
std1.fullName();