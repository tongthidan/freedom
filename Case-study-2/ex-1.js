function isBigNumber(value){
    return  value >20;
  }
function notIsBigNum(value){
  return value <= 20;
}
  const number =[45,4,9,16,25,16,24];
  const number1 = number.filter(isBigNumber);
  const result = number.filter(notIsBigNum);
  const sum = number1.reduce((total, current) => total + current, 0);
  
  console.log(number1);
  console.log(result);
  console.log(sum);