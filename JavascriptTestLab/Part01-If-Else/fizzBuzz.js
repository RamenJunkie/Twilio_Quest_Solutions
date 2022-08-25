let numCheck = Number(process.argv[2]);
if(numCheck%3 === 0 && numCheck%5 === 0) { console.log("JavaScript")}
else if(numCheck%3 === 0) {console.log("Java")}
else if(numCheck%5 === 0) {console.log("Script")}
else {console.log(numCheck)}