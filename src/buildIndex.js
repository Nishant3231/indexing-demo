// src/buildIndex.js
const fs = require("fs");
const { readCSV } = require("../utils/csvReader");

function buildDiskIndex(filePath, columnIndex, outputPath) {
  const rows = readCSV(filePath);
  const index = {};

  for (let i = 1; i < rows.length; i++) {
    const key = rows[i][columnIndex];

    if (!index[key]) index[key] = [];
    index[key].push(i);
  }

  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
}

module.exports = { buildDiskIndex };