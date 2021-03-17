function isPandigital(array){
    const digits = [0,1,2,3,4,5,6,7,8,9];
    var result ='';
    var a = array.toString();
    result = digits.filter(v => a.includes(v));
    if(result.length == 10) return true;
    return false;
    
}

console.log(isPandigital(98140723568910));

console.log(isPandigital(90864523148909));
