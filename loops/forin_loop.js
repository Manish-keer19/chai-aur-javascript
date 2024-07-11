
// for in loop :

// for in looop ko ham object ke elem ko acces karne ke liye use kar sakte he

let myobj = {
    name:"manish",
    age:20,
  };




//   to acces key of object of object:
  for (const key in myobj) {

    console.log(key);
  }

//   to acces key property of object:
  for (const key in myobj) {

    console.log(myobj[key]);
  }

//   to acces key and property of object:
  for (const key in myobj) {

    console.log(`${key}:- ${myobj[key]}`);
  }


   
//   for in loop in array:
//   for in loop sirf array ki index/key return karta he jese 0 index 1,2,3,;
 let array = [1,2,3,45,6,7];

 for( let key in array){
    console.log(key);
 }



//  forin loop me array ke elem acces karne ke liye syntax arrayName[key];

 for( let key in array){
    console.log(array[key]);
 }
