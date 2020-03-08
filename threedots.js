const age = [12,14,16];
const ages2= [15,16,12];
const allAges = age.concat([5]).concat(ages2);
//console.log(allAges);
const allAges2= [...age, ...ages2, 5]
//console.log(allAges2);

const b= 600;
const c= 400;
const d= 200;
//const max=Math.max(b,c,d);
const all= [600,400,200];
const max = Math.max(...all);
console.log(max);
