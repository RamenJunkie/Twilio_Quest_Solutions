function reverseSentence(sentence) {
    let punctuation = sentence.substr(-1);
    sentence = sentence.substr(0, (sentence.length)-1 );
    let wordArray = sentence.split(' ');
    wordArray[0] = wordArray[0].charAt(0).toLowerCase() + wordArray[0].substr(1);
    wordArray.reverse();
    wordArray[0] = wordArray[0].charAt(0).toUpperCase() + wordArray[0].substr(1);
    let newSentence = wordArray.join(' ') + punctuation; 

    return newSentence;
  }
  
  console.log("Test case 1:");
  console.log(reverseSentence("How are you today?"));
  
  console.log("Test case 2:");
  console.log(reverseSentence("I visited Ethiopia last year."));
  
  console.log("Test case 3:");
  console.log(reverseSentence("Hurray!"));
  