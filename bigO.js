// 1. What is the Big O for this?

// a) O(1) 

// b) O(n)

// 2. Even or Odd

function isEven(value) {
  if (value % 2 == 0) {
      return true;
  }
  else
      return false;
  }
}

// constant run time complexity - only one operation. O(1)

// 3. are you here?

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      const el1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}

// a nested for loop means there is an exponential complication to the function.
// the complexity of the function is thus polynomial O(n^k)

// 4. Doubler

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
      array[i] *= 2;
  }
  return array;
}
// single loop === linear run time that depends on the length of input
// 0(n)

// 5. Naive search

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}

// just one loop means that the functino depends on the length of a singular input.
// this means that the function is linear in complexity. O(n)

// 6. Creating pairs

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}

// polynomial complexity -- nested for loop means that the input is exponentially examined
// O(n^k)

// 7. compute the sequence

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i == 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}

// this function computes the sequence of numbers from 0 to the inputed integer
// and pushes each number into an array that is returned at the conclusion of the function.
// it has a single for loop, dependent on the length of just the one input...
// complexity is thus linear -- O(n)

// 8. an efficient search

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}

// this function cuts the input in half for each go-through of its loop.
// this improves its complexity from linear to logarithmic. O(log(n))

// 9. random

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// this function is constant in its complexity, regardless of its input. O(1)

// 10. what am i?

function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

// this function checks an inputted number to see if it is a prime number.
// it has a single for loop dependent on the length of the input. O(n)

// 11. tower of hanoi

// begin
// place small disk on rod c
// place medium disk on rod b
// place small disk on rod b on top of medium disk
// place large disk on rod c
// place small disk on rod a
// place medium disk on rod c on top of large disk
// place small disk on rod c on top of medium disk
// complete

// 12. build algorithm with recusion to solve tower

const tower = function(n, a, b, c) {
  if (n >= 1) {
    tower(n-1, a, b, c);
    // tower(1, a, c, b);
    tower(n-1, b, c, a);
  }
  if (n === 1) {
    console.log('All rings on rod C.')
  }
};
tower(3, 'a', 'b', 'c');

// big O for tower with 3, 4, 5 disks
// the algo is exponential with a base of 2 and an exponent of input length
// therefore the complexity is exponential. O(2^n)

// 13. recursive big O

// count sheep
// linear complexity, O(n)

// power calc
// linear complexity, O(n)

// reverse string
// linear complexity, O(n)

// triangular
// linear complexity, O(n)

// splitter
// linear complexity, O(n)

// factorial
// factorial complexity, O(n!)

// fibonacci
// double recursive call -- O(2^n)

// org chart
// linear complexity, O(n)

// anagrams
// factorial complexity, O(n!)

// binary
// breaks task in half, logarithmic complexity, O(log(n))
