function transform(freightItems) {
    let transformed = [];

    freightItems.forEach(element => {
            transformed.push( element.toUpperCase() ) });

    return transformed;
}

const transformed = transform(["dog", "ray gun", "cat"]);
console.log("Transformed Items");
console.log(transformed); // should be ['DOG', 'CAT', 'ZIPPERS']