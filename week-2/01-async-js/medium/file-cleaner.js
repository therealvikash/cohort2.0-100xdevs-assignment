const { create } = require("domain");
const fs = require("fs");
const { compileFunction } = require("vm");

function createReadPromise() {
    return new Promise(function(resolve) {
        fs.readFile("A.txt", "utf-8", function(err, res) {
            if (err) {
                console.log("File not found!");
            } else resolve(res);
        });
    });
}

function createWritePromise(content) {
    return new Promise(function(resolve) {
        fs.writeFile("A.txt", content, "utf-8", function(err) {
            if (err) {
                console.log("File not found!");
                return;
            } else console.log("File updated successfully!");
        })
    })
}

async function readFile() {
    let content = await createReadPromise();
    console.log(content);
    content = content.replace(/\s+/g, ' ');
    console.log(content);
    await createWritePromise(content);
}
readFile();