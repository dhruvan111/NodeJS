const path = require('path');

console.log(path.sep);
const filepath = path.join('/test_folder','test_final','test.txt');

console.log(filepath);

const absolute_path = path.resolve(__dirname, 'test_folder','test_final','test.txt');
console.log(absolute_path);
