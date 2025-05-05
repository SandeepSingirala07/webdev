let arr= [10,20,30,40,50];

/// Splice(index, how many items to delete items to insert)
///1. only delete 2.only inseret 3 .NBoth delete and insert

arr.splice(2,1);
console.log(arr);

arr.splice(2,0,30);
console.log(arr);

arr.splice(1,2,25,35)
console.log(arr);

/////////// toSplice method
let newArr = arr.toSpliced(1,2);
console.log(arr, newArr);