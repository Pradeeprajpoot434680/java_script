// An object in JavaScript is a data structure used to store related data collections. 
// It stores data as key-value pairs, where each key is a unique identifier for the associated value
const obj ={
    name:"pradeep",
    marks:92,
    age:20
} 
// console.log(obj);
// console.log(obj.name);
// console.log(obj["age"]);

//modify the value
obj.name="rahul"
// console.log(obj);
//add key value pairs
obj.cgpa=9
// console.log(obj);


// 4. Removing Properties from an Object
delete obj.cgpa
// console.log(obj);

// 5. Checking if a Property Exists
// console.log("marks" in obj);
// console.log(obj.hasOwnProperty("marks"));

//6. Iterating Through Object Properties

// for(let key in obj)
//     {
//         console.log(`${key} => ${obj[key]}`);
//         console.log(`${key} => ${obj.key}`);// it prints undefined 
//     }
    //obj[key] accesses the property of the object dynamically, where key is the variable holding the name of the property.
    // obj.key is trying to access a property literally named key on the object.
    // obj.key = 10;

    

    // 7. Merging Objects

// let obj1 = { name: "Sourav" };
// let obj2 = { age: 23};

// let obj3 = {...obj1,...obj2}
// console.log(obj3);


// 8. Object Length
console.log(Object.keys(obj));//it will return the arrray with all keys of the obj
console.log(Object.keys(obj).length);

// Recognizing a JavaScript Object
console.log(typeof(obj));

if(typeof(obj)=='object' && obj != null)
{
    console.log("this is an object");
    
}

