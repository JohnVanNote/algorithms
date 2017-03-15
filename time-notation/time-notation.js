// Big Theta
// worst case: a*n + b (a,b: constants; n: input size)
var linearSearch =  function(array) {
  for(var guess=0; guess<array.length; guess++) {
    if(array[guess] == target) {
      return guess;
    }
  }
  return -1;
};

