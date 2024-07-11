// example of singleton object:
//  let =  myobj = new Object();
//  console.log(myobj);


let student = {};


student.name = "manish";
student.age = 19;
student.email = "manish@gmail.com";

// console.log(student);


//  add two object using spread operatore[...object1Name,...object2Name ..and so on]

let obj1 = { 1: "a", 2: "b",3: "b" };

let obj2 = { 2: "d", 6: "y",9: "yo" };

//  let obj4 = {obj1,obj2}; // dont you this syntax:
//  console.log(obj4);



let obj3 = {...obj1,...obj2};
console.log(obj3);


// another method to add two objects:
// let obj4 = Object.assign(targe,obj1Name,obj2Name);
// {} wale object me object1 or obj2 ki value assing ho jayegi:
//   agra {} ye nahi likhege to obj1 me value assing of jayegi:

// use obj1 as a target:
 let obj4 = Object.assign({},obj1,obj2);
 console.log(obj4);


//  use {} as target:
 let obj5 = Object.assign(obj1,obj2);
 console.log(obj5);

 console.log(obj5===obj1);


//  object distructuring:
 let myobj = {
    name:"manish",
    age:20,
    city:"indore"
 };


//  insted of write myobj.name:
//  we can use this syntax:

// agar hame obj1.name bar bar acces karna hota he to ham bar bar likhate he iske bajay hum ye wal syntax use kar lete he:
//  let {name:n}=myobj;
// console.log(name)
//  let {name:n}=myobj;
// console.log(n)

let  {name:n}=myobj;
 
// console.log(name);
console.log(n);


/*
  syntax of json 
{
     "name":"manish",
     "age":20
}
*/

   

