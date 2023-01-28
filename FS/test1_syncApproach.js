const fs = require('fs');

const data1 = fs.readFileSync('../test_folder/res.txt','utf8');
console.log(data1);

fs.writeFileSync(
    '../test_folder/test_new.txt', 
    'Here is the result : hii this is new again file'
)