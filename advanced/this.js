//this is like a pointer that refers to the object you're working with otherwise globle object

/*const person={
    name:"pradeep",
    greet(){
        return `Welcome To, ${this.name}`;//for this this ,this is  person object
    }
}*/
// console.log(person.greet());


function hello()
{
    console.log(this);
    
}
// hello();


const arrFunction = ()=>{
    console.log(this);
}
// arrFunction() 
    

function hello()
{
    // console.log(this);
    const arrFunction = ()=>{
        console.log(this);
        
    }
    arrFunction();
}
// hello();


    

const person = {
    name:"pradeep",
    greet:function(){
        const arrowfunction = ()=>{
            console.log(this);
        }
            
        arrowfunction();
        console.log(this);
        
    }
}


person.greet();

