const os = require('os');

// info of user
const info = os.userInfo();
info.uid = 1;
info.gid = 1;
console.log(info);

console.log("uptime is : " + os.uptime());

const current_os = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(current_os);
