
function sum(num1, num2) {
    return num1 + num2;
}

let sum1 = sum(2, 40);

console.log(sum1);

function loggedinMessege(name = "user") {

    // ` ` it is called string iterpolation backtics;
    console.log(`${name} loggedin succesfull`);
}

loggedinMessege("manish");


// handle many parameter in function:
//  rest operatore use kiya jata he agar hame pata nahi he ki function ke kitne paramiter ayege 
// sytanx of rest operatore ...Variable name 
//  rest operatore array return karta he:
function calculatCart(...price) {

      return price;
}

console.log(calculatCart(200,300,400,900,30,1000));


// syntax to  pass object as a para into fucntion :

 function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }

  let myobj = {
       username:"manish",
       price:9999
  }

//    handleObject(myobj);
   handleObject({
    username:"vishal",
    price:799
   });


//   sytax to pass array in fucntion paramiter:

 function handleArray(array){
    // return the second elem of array:
     return array[1];
 }


 let myNewArray = [23,900,78,99]
//  console.log(handleArray(myNewArray))
console.log (handleArray([23,45,90]));
 