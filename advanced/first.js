//arrow functions
const sum = (a,b)=>{
    console.log(`sum of both functions is ${a+b}`);
    
}
sum(4,5);
//setTimeout
//setTimeout(callback,time in ms);
// this function will run after given time
function hello()
{
    console.log('print hello');
    
}

//etTimeout(hello,1000);
// console.log('agfer the set timeout');

//setinterval(callback,time);
// setInterval(hello,1000);


//how to clear the timeinterval
const intervalId = setInterval(hello,1000);
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval cleared');
}, 5050);



