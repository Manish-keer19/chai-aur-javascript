
// singleton:
//  Object.create()

// object litral:

//  create syble in js:
    stuId = Symbol("roolno");
 let student={
      name: "manish",
      age : 18,
      email: "ms@gmail.com",
    // declare symble in object:
     [stuId] :"sc22cs301091",
     subjects:["c++","data structure","javascript"]

 };

 console.log(student);

// there are two method to acces the object elem :

//  1. using . operatore:
 
 console.log(student.name);
 console.log(student.subjects);
 console.log(student.age);


//  2. using [ ];  always use " " inside the objectName["varibleName"]

 console.log(student["name"]);
 console.log(student["age"]);
 console.log(student["subjects"]);

//  to accece symble us [ symbeVariableName];
console.log(student[stuId]);

// change the object elem:
 
  student.email = "Mk@gmail.com";
  
  console.log(student.email);
  
  //    if we use object.freeze method we can't change the inside element of object;
//   Object.freeze(student);
  

  //   we can't change the email address because object is freeze
  student.email = "MkMs@gmail.com";
  console.log(student.email);

//   add function in object ;
 
 student.greet= function(){
    console.log(`HELLO ${this.name} bhai`);
 }

 console.log(student.greet());
  
  