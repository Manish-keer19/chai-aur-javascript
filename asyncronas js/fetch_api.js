// fetch api use ki jati he server network ya database se data lana ke liye
// syntax of fetch api:

// fetch api using asyc await:

async function getAlluser(){


    try{
      let response = await  fetch("https://api.github.com/users/hiteshchoudhary");

    //   console.log(response.json());
    let data = await response.json();
    console.log(data);
    }
    catch(error){
        console.log("error he bhai ",error);
    }
}

// getAlluser();


// fetch api using .then or .catch method:

fetch("https://api.github.com/users/hiteshchoudhary")
.then(function (response){
    // console.log(response.json());
   return response.json();
})
.then((data)=>{
console.log(data);
})
.catch(()=>{
    console.log("kuch problem he bhai me to data ni la saka");
})