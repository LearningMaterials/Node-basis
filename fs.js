const fs = require('fs');
readFile = () => {
    fs.readFile('name.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log("readFile: " + data);
    });
};
readFileSync = () => {
    try {
        const data = fs.readFileSync('name.txt', 'utf-8');
        console.log(data)
    } catch (err) {
        throw err
    }

};

writeFile = () => {
    const data = 'Hello, Node.js\n';
    fs.writeFile('name.txt', data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('writeFile: OK.');
        }
    });
};
writeFileSync = () => {
    const data = 'Hello, Node1.js\n';
    try {
        fs.writeFileSync('name.txt', data);
        console.log('OK.')
    } catch (err) {
        throw err
    }
};
appendFile = () => {
    const appendData = 'Hello World!';
    fs.appendFile('name.txt', appendData, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('appendFile: OK.');
        }
    });
};
appendFileSync = () => {
    const appendData = 'Hello World1!';
    try {
        fs.appendFileSync('name.txt', appendData);
        console.log('OK.')
    } catch (err) {
        throw err
    }
};
// writeFile();
// appendFile();
// readFile();
writeFileSync();
appendFileSync();
readFileSync();
