class Ducktypium {
    constructor(color) {
        if(color === "red" || color === "blue" || color == "yellow") {
            this.color = color;
            this.calibrationSequence = [];
        } else { throw new TypeError("Color must be red, yellow or blue"); }
    }

    refract(cur_color) {
        let colors = [['red', 'purple', 'orange'],
                  ['purple','blue','green'],
                  ['orange','green','yellow']];

        var col_values = {
                    red: 0,
                    blue: 1,
                    yellow: 2
                  }

        if(cur_color === "red" || cur_color === "blue" || cur_color == "yellow")
            return colors[col_values[cur_color]][col_values[this.color]];    

    }

    calibrate(inputArray) {
        inputArray.sort();
        this.calibrationSequence = inputArray.map(number => number * 3);
    }
  }
  
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.

  const dt = new Ducktypium("red");
 
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract("blue")); // prints 'purple'
  console.log(dt.refract("red")); // prints 'red'
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence); // prints [3, 9, 15]