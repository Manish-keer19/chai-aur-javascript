
let  arr1 = ["manish","vishal","prakhar","nilesh"];

let arr2 = ["sargam","durga","ritu","nisha"];

// concata method to add to array:
  let freinds1 = arr1.concat(arr2);
  console.log(freinds1);

//  spreat oprerator ...[],...[]........ans os on:
let freinds  = [...arr1,...arr2];

console.log(freinds);

// convet any data type into array: arr.from / arr.of


// Array.from() method:   
let name = "manish";
console.log(Array.isArray(name));
  let narray = Array.from(name);
  console.log(narray);

// Array.of() method:   

let name2 = "sargam";
  let parray = Array.from(name2);
  console.log(parray);


  let n1array = [1,2,[4,5,[8,5,6]],9];
  // arr.flat() method is used to remove inside array[1[1,2],3];
  console.log(n1array.flat(Infinity))