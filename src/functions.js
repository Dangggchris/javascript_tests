//write functional white boarding prompts?

//create a function called "sum" that takes in any ammount of numbers and returns the sum

function sum () {
  var total = 0;
  for (i = 0; i < arguments.length; i++) {
   
    total += arguments[i];
  }

  console.log(total);
  return total;
}


//create a function called "mult" that takes in any ammount of arguments and return the product

function mult () {    
  var total = 1;
  for (i = 0; i < arguments.length; i++) {
      total *= arguments[i];
  }

  console.log(total)
  return total;

}

//create a function called "replaceLetters" that takes in a string and replaces the letter 'e' and 'E' with 'p' and 'P' respectedly

function replaceLetters (arr) {
  var split = arr.split('');

  for (var i = 0; i < split.length; i++) {
    if (split[i] === "e") {
      var capital = split[i].toUpperCase();
      split.splice(i, 1, capital)
      
    }

    else if(split[i] === "p") {
      var capital = split[i].toUpperCase();
      split.splice(i, 1, capital)
    }
    var backTogetherAgain = split.join('');
  }
  console.log(backTogetherAgain);
  return backTogetherAgain;
}



sum(5, 10, 15, 20);
mult(10, 10, 10);
replaceLetters("elephant");





























module.exports = {
  sum: sum,
  mult: mult,
  replaceLetters: replaceLetters
}