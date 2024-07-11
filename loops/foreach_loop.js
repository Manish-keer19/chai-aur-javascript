
// foreach loop ka use array ke ander jo object hote he unki properties ko acces karne ke liye bhi use karte he:

let arr=[
    {
        name:"manish",
        age:20
    },
    {
        name:"vishal",
        age:20
    },
    {
        name:"prakhar",
        age:20
    }
]


// syntax of foreachLoop: arrayName.foreach(function (){ }):

arr.forEach(function (elem){
 console.log(elem);
})

// to acces particular property in object whice store in array
arr.forEach(function (elem){
 console.log(elem.name);
})
arr.forEach(function (elem){
 console.log(elem.age);
})


// instead of declare this type function we use arrow fucntion arrrow fuction is same as fucntion:

arr.forEach((elem)=>{
    console.log(elem)
})

arr.forEach((elem)=>{
    console.log(elem.name)
})
arr.forEach((elem)=>{
    console.log(elem.age)
})


// to accese array elem using foreach loop:

let s = [1,3,4,6,77,8,90];
s.forEach((p)=>{
    console.log(p);
})

