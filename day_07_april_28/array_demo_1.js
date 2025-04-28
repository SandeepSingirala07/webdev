let students =['Akshya','Ramesh', 'sam','john'];

// For Loop
for(let i=0; i<students.length; i++) {
    console.log(students[i]);
}
//////////////////////
console.log("break--------------------");
// For-in-loop
for(i in students) {
    console.log(students[i]);
}

///////////////
console.log("break---------------");
// For-of
for (val of students) {
    console.log(val);
}

///////// 
console.log("break------------------------");
//forEach

students.forEach((val,ind,arr)=>{
    console.log(val, ind,arr);
})