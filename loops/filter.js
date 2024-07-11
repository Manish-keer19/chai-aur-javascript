

//   let arr=[1,2,3,4,5,7];

// let newarr =  arr.forEach((item)=>{
//     // console.log(item);
// });

//   console.log(newarr);

//  filter ka use kiya jata he jab hame true ya false se value chayihe hoti he:
// filter ek array return karta he based on condition:

let arr = [1, 2, 3, 4, 5, 7];

let newarray = arr.filter(function (num) {
    // return num+5;
    return num >= 5;
})

console.log(newarray);

// using arrow fuction:
let newarray1 = arr.filter((num) => (num >= 5))

console.log(newarray1);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


 let  userbook =  books.filter((bk)=> (bk.publish >=1995));
//  console.log(userbook);


 let  genrehsbook  =  books.filter((bk)=> (bk.genre ="History"));
 console.log(genrehsbook);


 






