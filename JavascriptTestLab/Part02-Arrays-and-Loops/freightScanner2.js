function scan(inputarray) {
    let contrabandIndexes = [];
    let pos=0;

    inputarray.forEach(element => {
        if(element === "contraband") {
            contrabandIndexes.push(pos)};
        pos++;
    });

    return contrabandIndexes;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]