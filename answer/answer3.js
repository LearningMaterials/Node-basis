const fs = require('fs');

appendFile = () => {
    const data = 'Hello World\n';
    fs.appendFile('answer/result.txt', data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('writeFile: OK.');
        }
    });
};

const startTime = new Date().getTime();
const interval = setInterval(() => {
    if(new Date().getTime() - startTime > 10000){
        clearInterval(interval);
        return;
    }
    appendFile();
}, 2000);