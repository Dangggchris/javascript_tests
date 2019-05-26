//Write code here, >>FOLLOW THE INSTRUCTIONS<<.

//create an array named "arr"

var arr = [];

//add 5 elements to the array using the push method with the last element being a string

arr.push(5);
arr.push(10);
arr.push(1);
arr.push(245);
arr.push("50");

//create a function called "first" that returns the first element of an array

function first() {

  console.log(arr[0])
  return arr[0];
}

//create a function called "last" that returns the last element of an array

function last() {
  lastIndex = arr.length - 1;

  console.log(arr[lastIndex]);
  return arr[lastIndex];
}

//create a function called "findSum" that takes in an array and returns the sum of all the elements

function findSum () {
  var total = 0;
  for (let i = 0; i < arr.length; i++) {

    var num = parseInt(arr[i]);
    
    total += num

    console.log(total);

  }
}

//create a function called "findOddNums" that accepts an argument that is an array and returns a new array of all the odd numbers from the given array if there are no odd numbers return an empty array

function findOddNums (arr) {
  var oddArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {

      oddArr.push(arr[i]);
    }
  }
  console.log(oddArr);
  return oddArr;
}

//without using JavaScript's premade array includes method, create a function called "includesInArr" that takes in an array and a target and returns a boolean if the target is in the array.

function includesInArr (arr, target) { 
  for (var i = 0; i <arr.length; i++) {
    if (parseInt(arr[i]) === parseInt(target)) {
      console.log("target in array");

      return true;
    }
  }
}


first();
last();
findSum();
findOddNums(arr);
includesInArr(arr, "50");













/*
----------------------------------------------------------------------------------------------------------------------------------------------------
*/ 







module.exports = {
  arr: arr,
  first: first,
  last: last,
  findOddNums: findOddNums,
  findSum: findSum,
  includesInArr: includesInArr
  };