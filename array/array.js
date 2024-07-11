
let arr = [1,2,3,4,5];

// other syntax to create array:
let newarr = new Array("manish","visha","ramayush");
console.log(newarr);


// unshift method 10 ko array ke first index me dal deta he;
arr.unshift(10);
// shift jo elem array ke first index par he use remove kar deta he
arr.shift();


arr.reverse();  //reverse the arr;
// arr.sort();  //sort the array:


arr.push(6);
arr.push(7);
arr.pop();
console.log(arr);



console.log(arr);

let sliceArr= arr.slice(0,2);  //arr.slice(fistindex,lastindex);

// diff between slice and spile slice not change the original array but spile method change the original array;
console.log(sliceArr);
console.log(arr);

let spliceArr = arr.splice(1,4);
console.log(spliceArr);
console.log(arr);
