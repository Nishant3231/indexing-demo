// src/diskSearch.js
const fs = require("fs");
const { readCSV } = require("../utils/csvReader");

function diskSearch(filePath, indexPath, value) {
  const index = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
  const rows = readCSV(filePath);

  const results = [];

  if (!index[value]) return results;

  for (const i of index[value]) {
    results.push(rows[i]);
  }

  return results;
}

module.exports = { diskSearch };