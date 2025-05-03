//1. declare array of employees & sort them in ascending order (empId)
let employees1 = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  employees1.sort((a, b) => a.eId - b.eId);
  console.log("1.", employees1);
  
  // 2. declare array of employees & sort them in ascending order by name.
  let employee = employees1.slice(); // Make a copy of the array

  employee.sort(function(a, b) {
    if (a.name < b.name) {
      return -1; // a comes before b
    } else if (a.name > b.name) {
      return 1;  // a comes after b
    } else {
      return 0;  // names are equal
    }
  });

  let employees2 = [...employees1];
  employees2.sort((a, b) => a.name.localeCompare(b.name));
  console.log("2.", employees2);



console.log("2.", employees2);
  
  // 3. declare array of employees & filter the employees whose sal>6000;
  let employees3 = employees1.filter(emp => emp.sal > 6000);
  console.log("3.", employees3);
  
  //4. declare array of employees & increase sal of every employee by 500;
  let employees4 = employees1.map(emp => ({ ...emp, sal: emp.sal + 500 }));
  console.log("4.", employees4);
  
  //5. declare array of employees & add "comp:ibm" to every employee
  let employees5 = employees1.map(emp => ({ ...emp, comp: 'ibm' }));
  console.log("5.", employees5);
  
  /* 6. convert array of letters to array of words
		const inputArr = [ 
            'b', 'a', 'k', 'e', '',
            'c', 'a', 'k', 'e', '',
            'e', 'a', 't'
            ];
   output = ['bake','cake','eat']; */
   
  const inputArr = ['b','a','k','e','', 'c','a','k','e','', 'e','a','t'];
  const output6 = inputArr.reduce((acc, val) => {
    if (val === '') acc.push('');
    else acc[acc.length - 1] = (acc[acc.length - 1] || '') + val;
    return acc;
  }, ['']).filter(Boolean);
  console.log("6.", output6);

  const inputArr1 = [ 
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
    ];

    let output = [];
    let word = ''
    for(char of inputArr1) {
        if(char!= '') {
            word = word+ char;
        } /*else{
            output.push(word);
            word ='';
        } */
    }
output.push(word);
word ='';
console.log(output,"Day nine");

  // 7. Add Dept info to each employee
  let employees7 = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }
  ];
  let departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
  ];
  let employeesWithDept = employees7.map(emp => {
    let deptInfo = departments.find(d => d.eId === emp.eId);
    return { ...emp, dept: deptInfo ? deptInfo.dept : 'N/A' };
  });
  console.log("7.", employeesWithDept);
  
  // 8. Group by employee name
  let employees8 = [
    { name: 'sanjay', sal: 5000 },
    { name: 'sanjay', sal: 6000 },
    { name: 'alok', sal: 7000 }
  ];
  let groupedByName = employees8.reduce((acc, emp) => {
    acc[emp.name] = acc[emp.name] || [];
    acc[emp.name].push(emp);
    return acc;
  }, {});
  console.log("8.", groupedByName);
  
  // 9. Intersection of two arrays
  let arr1 = [1, 2, 3, 4];
  let arr2 = [3, 4, 5, 6];
  let intersection = arr1.filter(val => arr2.includes(val));
  console.log("9.", intersection);
  
  // 10. Occurrence of each element
  let input10 = [10, 20, 30, 40, 50, 10, 30, 50];
  let countMap = {};
  for (let num of input10) {
    countMap[num] = (countMap[num] || 0) + 1;
  }
  console.log("10.", countMap);