
function print(a, b)
{
    console.log(`${a} and ${b}`);
}
// print(3,4);
    

// Function Definition
function welcomeMsg(name) {
    return ("Hello " + name + " welcome to GeeksforGeeks");
}

// let nameVal = "User";

// calling the function
// console.log(welcomeMsg(nameVal));


const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
    return s.length;
});
// console.log(typeof(a2));
// console.log("Normal way ", a2);


const a3 = a.map((s) => s.length);

//console.log("Using Arrow Function ", a3);

//callbacks
// A callback function is passed as an argument to another function
const double = (n)=>n**2;
// console.log(double(2));//4
function f(callback,n)
{
    return callback(n);
}
console.log(f(double,5));


//Anonymous Functions
//Anonymous functions are functions without a name. They are often used as arguments to other functions
setTimeout(function()
{
    console.log("hello world");
    
},2000);