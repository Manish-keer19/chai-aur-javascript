

//  map is used to perform arithmetic operation on given array it will return array:
// map condition ke adhar par kary nahi karta he;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 90];
console.log(arr);

let newarr = arr.map(function (elem) {

    return elem <= 3;
    // return elem+10;
})
console.log(newarr);


let newarr1 = arr.map(function (elem) {

    // return elem<=3;
    return elem + 10;
})
console.log(newarr1);


// chaining in map filter reduse we use any method in chaning:

let array = [22, 44, 66, 88];


// it is called chaning:
let newarray = array
.map((elem) => (elem + 10))
.map((elem) => (elem+1))
.filter((elem)=> (elem>=50));

console.log(newarray);

