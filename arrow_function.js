
  myobj = {
     username:"manish",
     age :20,

      greet :function () {
         console.log(`hello ${this.username}, welcome to our website`)
      }
  }


  myobj.greet();
  console.log(this);

  myobj.username = "ram";
  myobj.greet();

  console.log(this);



//   function addone(){
//     console.log(this);
//   }
//     addone();


   
    // syntax of arrow function  ()=> { };

    let arrowFunc = ()=>{
         console.log("i am inside arrow function");
         console.log("inside arrowfunc this is ",this);
    }

    arrowFunc();

    let addTwo = (num1,num2)=>{
             return num1+num2;
    }
    
    console.log(addTwo(2,9));

    // another sortcute syntax of arrow function:
    // we dont need to return it will autometicaly return the num1+ num2:
    let addTwo1=(num1,num2)=> num1+num2 ;
    console.log(addTwo1(2,6));

    // another synatax in this syntax to understand eaisily we wrap parantasis ()in varible
    let addTwo2=(num1,num2)=> (num1+num2) ;
    console.log(addTwo2(66,99));

    // to return object in arrow functtion:
// syntax how to return object using arrow function ({object name});
     let returnObj = ()=> ({name:"manish"});

     console.log(returnObj())


