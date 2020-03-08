// function doubleIt(num){
    // return num*2;
// }
/*const doubleIt = function(num){
    return num*2;
}*/
const doubleIt = num => num *2;

const result = doubleIt(5);
console.log(result);

const add = (x,y) => x+y;
const sum = add(50,70);
console.log(sum);

const big = (x,y) =>{
const sum=x+y;
const diff = x-y;
const result=sum*diff;
return result;
}
const result2 = big(7,5);
console.log(result2);