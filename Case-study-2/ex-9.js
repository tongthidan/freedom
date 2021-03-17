function howUnlucky(year){
    var count = 0;
    for( var month = 1; month <= 12; month ++){
        var date = new Date(year,month,13);
        if(date.getDay() == 5){
            count ++;
        }
    }
    return count;
}
console.log(howUnlucky(2020));