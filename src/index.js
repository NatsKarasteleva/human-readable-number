module.exports = function toReadable (number) {
    let map = new Map();
    map.set(0, "zero");
    map.set(1, "one"); 
    map.set(2, "two"); 
    map.set(3, "three"); 
    map.set(4, "four"); 
    map.set(5, "five"); 
    map.set(6, "six"); 
    map.set(7, "seven"); 
    map.set(8, "eight"); 
    map.set(9, "nine"); 
    map.set(10, "ten"); 
    map.set(11, "eleven"); 
    map.set(12, "twelve"); 
    map.set(13, "thirteen"); 
    map.set(14, "fourteen"); 
    map.set(15, "fifteen"); 
    map.set(16, "sixteen"); 
    map.set(17, "seventeen"); 
    map.set(18, "eighteen"); 
    map.set(19, "nineteen"); 
    map.set(20, "twenty"); 
    map.set(30, "thirty"); 
    map.set(40, "forty"); 
    map.set(50, "fifty"); 
    map.set(60, "sixty"); 
    map.set(70, "seventy"); 
    map.set(80, "eighty"); 
    map.set(90, "ninety");
  var result = "";

  if(number == 0){
    result = map.get(0);
    return result;
  }
  
  if(number > 99){
    var numberStr = number.toString();
    var firstDigit = numberStr[0];
    result += map.get(Number.parseInt(firstDigit)) + " hundred";
    number %= 100;
  }

  if(number > 19){
    var numberStr = number.toString();
    var firstDigit = numberStr[0];
    var twoPart = firstDigit + "0";
    var res = map.get(Number.parseInt(twoPart));
    if(result.length > 0){
        result += " " + res;
    }else{
        result += "" + res;
    }
    number %= 10;
  }
  if(number > 0){
    if(result.length > 0){
        result += " " + map.get(number);
    }else{
        result += "" + map.get(number);
    }
  }
  return result;
}
