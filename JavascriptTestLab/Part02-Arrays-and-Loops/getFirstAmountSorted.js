function getFirstAmountSorted(inputArray,locator) {
       
    inputArray.sort();

    console.log(inputArray);

    let slicedArray = inputArray.slice(0,locator);

    console.log(slicedArray);

    return slicedArray;
}

// The lines of code below test your function when you execute your code in
// the terminal - they are not required for your function to work
const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray); // << should print out ['apple', 'bat']