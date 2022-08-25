function calculateMass(inputarray) {
    // This is a placeholder for the total length in characters of all strings
    // in the freightItems array
    let total = 0;
  
    total = inputarray.reduce((sum, current) => sum + ( current ), 0);
  
    return total;
  }


  console.log( calculateMass([1, 2, 3])); // -> 6
  console.log( calculateMass([-1, 0, 1]));// -> 0
    console.log( calculateMass([2.5, 5]));// -> 7.5
  console.log( calculateMass([]));// -> 0