function reverseWords(str){
    var str1 = str.trim().replace(/\s+/g,' ');
    var str2 = str1.split(' ');
    str2.reverse();
    var result = str2.toString().replace(/,/g,' ');
    console.log(result);
  }
  
  reverseWords('  hello   world!  ')
  