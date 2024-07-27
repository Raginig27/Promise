let name = {
    firstName: "Ragini",
    lastName: "Gupta"
};

let printName = function(hometown, state, country) {
    console.log(this.firstName + " " + this.lastName + " " + hometown + "," + state + "," , country);
};

let printMyName = printName.bind(name, "Indore" , "MP"); // traditional bind function
printMyName("India"); // Output: Ragini Gupta

Function.prototype.mybind = function(...args) { 
    // this -> printName method
    // If we keep any method on Function.prototype then each and every method we write has access to those methods.
    let obj = this;
    params = args.slice(1);
    console.log("params", args, params);
    return function(...args2) {
        console.log([...params, ...args2])
        return obj.apply(args[0], [...params, ...args2]);
    };
};

let printMyName2 = printName.mybind(name, "Karwi", "UP");
printMyName2("India"); // Output: Ragini Gupta
