function removeDuplicateCharacters(string) {
    let position=0;
    let newstring = string[0];
    let str_len = string.length;
    let cur_lett = '';

    do {
    curr_lett = string[position+1];
    
    if(curr_lett != newstring[newstring.length-1]) {
        newstring = newstring + curr_lett; }


    position++;
    } while(position<str_len-1);

    return newstring;
  }
  
  console.log("Test case 1:");
  console.log(removeDuplicateCharacters("aabbcc"));
  
  console.log("Test case 2:");
  console.log(removeDuplicateCharacters("asdfjkl;"));
  
  console.log("Test case 3:");
  console.log(removeDuplicateCharacters("abba"));
  
  console.log("Test case 4:");
  console.log(removeDuplicateCharacters("fffunnn"));
  