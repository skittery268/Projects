const fs = require("fs");

const readFile = (FILE_URL) => {
    return JSON.parse(fs.readFileSync(FILE_URL, "utf8"));
}

const updateFile = (FILE_URL, obj) => {
    const content = readFile(FILE_URL);
    content.push(obj);
    fs.writeFileSync(FILE_URL, JSON.stringify(content));
}

module.exports = { readFile, updateFile };