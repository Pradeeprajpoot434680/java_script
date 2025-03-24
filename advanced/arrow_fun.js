// An arrow function is a shorter syntax for writing functions in JavaScript. 
// Introduced in ES6, arrow functions allow for a more concise and readable code, 
// especially in cases of small functions.
const add = (a,b)=>{
    //function body
}

//without parametes
const func= ()=>{

}
//if fun bosy is single line then 
const fun=(a)=>a*a;

console.log(fun(4));

//3. Arrow Function with Multiple Parameters
// const f = ( x, y, z ) => {
//     console.log( x + y + z )
// }

// f( 10, 20, 30 );


// default parameters
const g = ( x, y, z = 30 ) => {
    console.log( x + " " + y + " " + z);
}

g( 10, 20 );


const make_person_obj = (firstname,lastname)=>({firstname,lastname})
console.log(make_person_obj("pradeep","kumar"));
