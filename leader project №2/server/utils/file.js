const fs = require("fs");

const readFile = (fileUrl) => {
    const content = fs.readFileSync(fileUrl, "utf8");

    return JSON.parse(content);
}

const writeFile = (fileUrl, newObj) => {
    const content = readFile(fileUrl);

    content.push(newObj);

    fs.writeFileSync(fileUrl, JSON.stringify(content));
}

const deleteInfo = (fileUrl, infoIndex) => {
    const content = readFile(fileUrl);

    content.splice(infoIndex, 1);

    fs.writeFileSync(fileUrl, JSON.stringify(content));
}

module.exports = { readFile, writeFile, deleteInfo };