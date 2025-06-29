
 let d = myFunction(8, 9);
 console.log("The value of d is = " + d);
 function myFunction(a, b){
    return a + b;
 }

 const person = {

      firstName: "John",
      lastname: "Khan",
      age : 26,
      fullName : function(){
         return this.firstName + " " + this.lastname
      }
 };

 console.log("The Full name is = " + person.fullName());

 const p = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
 console.log(p);