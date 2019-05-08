console.log(__filename);
console.log(__dirname);

const timeout = setTimeout(() => {
    console.log("setTimeout....");
    clearTimeout(timeout);
}, 3000);

const interval = setInterval(() => {
    console.log("setInterval....");
    clearInterval(interval);
}, 6000);



