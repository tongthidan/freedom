function getLength(array){
    var length = array.length;
    array.forEach(element => {
        if(element instanceof Array){
            length += getLength(element) -1;
        }
        
    });
    return length;
}
console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));