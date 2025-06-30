const person = {
    FirstName: 'John',
    LastName: 'Doe',
    age : 30,
    id : 1234,
    
    fullName: function(){
        console.log("This is a console log inside fullName method");
        return this.FirstName+ " " + this.LastName;
    
    },
    greet() {
    return "Hello From Greet Function = " + this.FirstName +" And Last Name = " + this.LastName+ " And Age = " + this.age + " And ID = " + this.id;
    },
    undifinedMethod: function(){
        console.log("This is a console log inside undifinedMethod method");
        //This will print undefined because this method is not defined in the object
        //And it will not return any value
    }
}
console.log(person.fullName()); // john Deo
console.log(person.greet()); // Hello From Greet Function = John
console.log(person.undifinedMethod()); // This is a console log inside undifinedMethod method
name = person.fullName(); // john Deo


person.name =  function() {
    return this.FirstName + " " + this.LastName;
}
console.log("person.name is called = "+ person.name().toUpperCase()); // JOHN DOE
