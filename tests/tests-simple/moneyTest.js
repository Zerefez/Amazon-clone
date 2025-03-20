import money from "../scripts/utils/money.js";

console.log('Test suite for money function');

console.log('convert cents to dollars');

if(money(2095) === '20.95'){
  console.log('money function works');
}else{
  console.log('money function does not work');
}

console.log('works with 0');
if(money(0) === '0.00'){
  console.log('money function works');
}else{
  console.log('money function does not work');
}

console.log('rounding up to the nearst cent');
if(money(2000.5) === '20.01' ){
  console.log('money function works');
}else{
  console.log('money function does not work');
}

console.log('rounding down to the nearst cent');
if(money(2000.4) === '20.00' ){
  console.log('money function works');
}else{
  console.log('money function does not work');
}