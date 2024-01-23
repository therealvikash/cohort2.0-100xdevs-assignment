const fs = require("fs");

function createWritePromise() {
    return new Promise(function(resolve) {
        fs.writeFile("A.txt", "Alison Burger", "utf-8", function(err) {
            if (err) {
                console.log("File not found!");
                return;
            } else {
                console.log("Data writeen successfully!");
            }
        });
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

function onDone(data) {
    console.log(data);
}

createWritePromise().then(onDone);