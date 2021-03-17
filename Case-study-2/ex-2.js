function formatMoney(ammount){
    if(ammount <= 0){
        console.log(0);
    }
    else{
        console.log( new Intl.NumberFormat().format(ammount));
    }
}
formatMoney(250000);


