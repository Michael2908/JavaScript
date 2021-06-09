const fs = require('fs');
const read = process.argv[2];
const write = process.argv[3];




fs.readFile(read, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    let str = data;
    str = reverseString(str);
    fs.writeFile(write, str, (err) => {
        if (err) return console.log(err);
    });
});

reverseString = str => {
    let reversed = "";
  for(let char of str){
    reversed = char + reversed;
  }
  return reversed;
};