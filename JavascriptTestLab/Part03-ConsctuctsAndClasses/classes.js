class Materializer {
    constructor(target) {
        this.target = target;
        this.activated = false
    }
    activate() {this.activated = true}
    materialize() { 
        if(this.activated === true) {return this.target }
        else {return undefined}
    }

  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const m = new Materializer('Kevin');
  console.log(m.activated); // would print "false"
  
  console.log(m.materialize());

  m.activate();
  console.log(m.activated); // would print "true"
  
  console.log(m.materialize()); // would print "Kevin"