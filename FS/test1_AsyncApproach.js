const fs = require('fs');

console.log('staring-async file');
fs.readFile('../test_folder/test_new.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    // console.log(first);

    fs.readFile('../test_folder/res.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res;
        var data = first + "\n" + second;
        fs.appendFile('../test_folder/temp.txt', data, 'utf8', (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('inside the function\n');
        })
    })
})

console.log('process done.');