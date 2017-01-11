'use strict';

// O(1)
function O1() {
  for (var i = 0; i < 10; i++) {
    console.log(i+1);
  }
}

// O(n)
function On(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
}

// O(n squared)
function Onsquared(arr, arrTwo) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arrTwo.length; j++) {
      if (arr[i] === arrTwo[j]) {
        console.log('They are the same number', arr[i], arrTwo[j]);
      }
    }
  }
}
