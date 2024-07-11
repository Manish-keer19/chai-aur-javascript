

// for of loop :
// using for of loop accese array;

let arr = [2,4,6,7,89,90];


for (const  key of arr) {
    // console.lo?g(key);
}


//  access map using for of loop:

 let map = new Map();

  map.set('js',"javascript")
  map.set('java',"java")
  map.set('cpp',"c++")
  map.set("py","python")

//   syntax to iterate map using for of looop:L

for(const  key of map ){

   // console.log(key,value);
   console.log(key);
}


 for(const  [key] of map ){

    // console.log(key,value); 
    console.log(key);
 } 

 for(const  [key,value] of map ){

    console.log(key,value); 
    // console.log(key);
 }   




//  forof loop ka use karke ham object ke elem nahi acces kar sakte forof loop object ke liye nahi hota:

  let myobj = {
    name:"manish",
    age:20,
  };



   //  TypeError: myobj is not iterable
//   for (const [key,value] of myobj) {
//       console.log(key,value);
//   }    