let numCheck = Number(process.argv[2]);
if(numCheck%3 === 0 ) { console.log("alive")}
else if(numCheck%3 === 1) {console.log("flowering")}
else if(numCheck%5 === 2) {console.log("shedding")}
else {console.log("other")}