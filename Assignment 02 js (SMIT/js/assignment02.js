function recursiveSearch(array, value) {
    // base case: if the array is empty, the value isn't found
    if (array.length === 0) {
      return false;
    }
    
    // recursive case: check if the first element of the array is the value
    if (array[0] === value) {
      return true;
    }
    
    // recursive case: call the function again with the rest of the array
    return recursiveSearch(array.slice(1), value);
  }
  
  // test the function
  const array = [1, 2, 3, 4, 5];
  console.log(recursiveSearch(array, 3)); // should output true
  console.log(recursiveSearch(array, 6)); // should output false