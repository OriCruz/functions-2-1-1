/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (a, b) => {
  // ADD YOUR CODE HERE
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}


/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (a, b, c) => {
  // ADD YOUR CODE HERE
  let max = Math.max(a, b, c);
  return max;
}


/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (char) => {
  // ADD YOUR CODE HERE
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(char.toLowerCase())) {
    return true;
  }
  else {
    return false;
  }
}



/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/
const nums = [1, 2, 3, 4, 5, 6];
sumArray = (arr) => {
  // ADD YOUR CODE HERE
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
multiplyArray = (arr) => {
  // ADD YOUR CODE HERE
  let multiplication = 1;
  for (let i = 0; i < arr.length; i++) {
    multiplication *= arr[i];
  }
  return multiplication;
}

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
let countArg = (...args) => {
  let count = 0;
  for (const arg of args) {
    count++;
  }
  return count;
}

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
  // ADD YOUR CODE HERE
  let subStr = str.split("");
  let reverseArr = subStr.reverse();
  let joinArr = reverseArr.join("")
  return joinArr;
};


/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
let words = ['hello','this is', 'a test lol'];
findLongestWord = (arr) => {
  // ADD YOUR CODE HERE
  let longest='';
  for(let i=0; i<words.length;i++){
    if(words[i].length>longest.length){
      longest=words[i];
    }
  }
  return longest.length;
};


/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
let array = ['omg','this', 'actually', 'works!!!!!']
filterLongWords = (arr,num) => {
  // ADD YOUR CODE HERE
  //return an array with only the words longer than num
  let long =[];
  for(let i=0; i<arr.length; i++){
      if(arr[i].length==num){
        long.push(arr[i]);

      }
      else{
        return `there is currently no words is ${num} letter/s long.`
      }
  }
return long;
};


//Bonus 1
// Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
let str = {
  reverseString: () => {
    // ADD YOUR CODE HERE
    let reverserStr= [...str].revese().join('');
    return reverserStr;
  }
}
console.log(str.reverseString())

