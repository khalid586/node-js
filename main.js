import os from "node:os"

const obj = [{
    "CPU cores" : os.cpus().length,
    "Total(GB)" : Math.round(os.totalmem() / (1024 ** 3)),
    "Free (GB)" : Math.round(os.freemem() / (1024 ** 3)),
    "Machine"   : os.machine(),
}]

console.table(obj);

// console.log('Up time', os.uptime() / (60 * 60 * 24))
// console.log('Host name', os.hostname())
// console.log('User name', os.userInfo())



