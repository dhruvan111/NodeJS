// local dependencies --> npm i <packagename>
// global dependencies --> sudo npm install -g <packagename>

const res = require('lodash');
const arr = [1,2, [3,4, [7,9]], [5, [6]]];
const new_arr = res.flatMapDeep(arr);
console.log(new_arr);
