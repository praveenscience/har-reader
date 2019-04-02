"use strict";
const fs = require("fs");
const fileContents = fs.readFileSync("file.har");
const jsonContents = JSON.parse(fileContents);
console.log(`Entries: ${jsonContents.log.entries.length}`);
const urls = jsonContents.log.entries.map(entry => entry.request.url);
console.log(`URLs: ${urls.length}`);
const urlLines = urls.join("\n");
fs.writeFileSync("file.txt", urlLines);
