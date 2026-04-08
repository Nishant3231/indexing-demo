// utils/csvReader.js
const fs = require("fs");

function readCSV(filePath) {
  return fs.readFileSync(filePath, "utf-8")
    .trim()
    .split("\n")
    .map(line => line.split(","));
}

module.exports = { readCSV };