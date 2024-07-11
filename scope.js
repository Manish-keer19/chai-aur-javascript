

let name = "manish";  // scope 2 function treat as a globle variable to name: becuase scope is a father of scope2:
   
 function scope(){

       
     function scope2(){
       let age =19;
        console.log(name);
  }
  scope2()

//   console.log(age);  //it produce error because scope of age is inside the scop2 function:

  }

 scope();


//   agar me addone function ke fucntion declartion se pahle likh du to it wiil run :

addone(6);
  function addone(num){
     console.log(num+1);
    }
    
//  addone();
     


//  agar me addtwo variable ko function declartion ke uper lick duga to it will produce error because mene function ke ek variable me store kara he :


    let addTwo = function(num){
        // return num+2;
        console.log(num+2);
  }

  addTwo(8);
 

