

// promise ek object ki tarah hi hota he yah ek callback function except karta he jisme do paramiter hote he 1. resolve 2. rejected  resolve ka matlab he promise fullfile ho gai or reject ka matalb he promish reject ho gai:


new Promise(function(resolve, rejected){

    setTimeout(() => {
        console.log("i am setTimeout 1");
        resolve("promishe in resolved");
    }, 1000);
    
    
}).then(function (e){
    console.log("promishe two is resolve")
    // console.log(e);
})



let promiseTwo = new Promise(function (resolve,rejected){
    
    setTimeout(()=>{
        // console.log("i am setTimeout");
        console.log("i am setTimeout 2");
        resolve()  // we can pass parmamiter in resolve 
    })
    
})

promiseTwo.then(function (){
    console.log("promishe two is resolve")
    // console.log("promise is fullfill");
});



// resolve or reject :

let promiseThree = new Promise((resolve,rejected)=>{
    
    setTimeout(()=>{  
        console.log("promishe three is resolve")
        console.log("i am setTimeout 3");
        resolve({
            username:"manish",
            language:"javascript"
        })
    },1000)

 })

 promiseThree.then((Response)=>{
    console.log(Response.username);
    console.log(Response.language);
 })


 let promisefour = new Promise((resolve,rejected)=>{
// console.log("bhai...");
    let error = false;
    if(!error){
         resolve({username:"vishal" , password:"vishu@123"})
    }
    else{
        rejected("Error , some errro has occured",error);
    }
 })



//  .then ka use kiya jata he jab promise resolve ho: 
// .catch tab execute hota he jab promise reject ho:
// .finally hamesa execute hota he chahe promise resolve ho ya rejected:

 promisefour.then((user)=>{
    console.log(user);

    return user.username;
 }).then((username)=>{
    console.log(username);
 }).catch((error)=>{
    console.log(error);
 }).finally(()=>{
    console.log("either promise resolve or reject i will execute always");
 })



//  how to use promises in asycnk await:
// await jab tak wah fucntion nahi pura hota tab ka usee roke huye rakhata he jese hi function ka kam purea ho jata he vese hi yah output de deta he:


let promiseFive = new Promise((resolve,rejected)=>{
    let error = true;
    if(!error){
         resolve({username:"prakhar" , password:"PRrajput@123"})
    }
    else{
        rejected("Error , some errro has occured",error);
    }
    
})


  async function conssumePromiseFive(){

    try{
        let response = await promiseFive;
        console.log(response)
    }
     catch(error){
        console.log("bhai error ",error);
     }

  }

  conssumePromiseFive();
  



