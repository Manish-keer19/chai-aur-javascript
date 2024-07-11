//   reduce method 
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10


let array = [2,3,4,5];
// reduce method 2 paramiter leta he ek accumulater hota he or dusre array ke elem 

// man lo jo hamne  user cart banaye he user ne bahut se product kharidne ke liye save kar rakha he to sare product ki tootle price batane he hem to hum reduce method ka use karte he :
 
let total = array.reduce(function (accumulater,currentValue){

    console.log(`acc: ${accumulater} and curelem : ${currentValue}`);
     return   accumulater+currentValue
},0);

console.log(total);


// reduc using arrow fuction:
let mytotle = array.reduce((accumulater,currentValue)=>  (accumulater+currentValue) ,0)

console.log(mytotle);



// card totle:

 let shopingCart=[
    {
        courseName:"Dsa",
        price: 1299,
    },

    {
        courseName:"python",
        price: 1999,
    },
    {
        courseName:"javascript",
        price: 11999,
    },
 ];


let tootleAmmount =  shopingCart.reduce((acc,curval)=> 
(acc+curval.price),0);


console.log(`totle ammount of cart is  ${tootleAmmount}`);




