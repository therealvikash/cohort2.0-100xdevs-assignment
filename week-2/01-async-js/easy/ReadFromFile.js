const fs = require("fs");

function createReadPromise() {
    return new Promise(function(resolve) {
        fs.readFile("A.txt", "utf-8", function(err, res) {
            if (err) {
                console.log("File not found!");
                return;
            } else {
                resolve(res);
            }
        });
    });
}

//Async await
async function main() {
    let data = await createPromise();
    console.log(data);
}

//Promise
function onDone(data) {
    console.log(data);
}

createPromise().then(onDone);
// main();