function construct(name, material, assemble, duration) {
    let person = {name: name, assemble: true, material: 'human', duration: 1000};
    return person;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const somePerson = construct('Kevin');
  console.log('name is: ' + somePerson.name); // should be "Kevin"
  console.log('duration is: ' + somePerson.duration); // should be 1000