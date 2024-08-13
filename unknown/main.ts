// in unknown we are not aware of what type of data we are going to store in the variable
// let uname:any;
let inputVal:unknown;
let uname:string='Something';

inputVal=100;
inputVal='Hello';

if(typeof inputVal==='string')
{
    uname=inputVal;
}

console.log(uname)

console.log(typeof inputVal)
