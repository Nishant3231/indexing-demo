// src/plainSearch.js
const { readCSV } = require("../utils/csvReader");

function plainSearch(filePath, columnIndex, value) {
  const rows = readCSV(filePath);
  const results = [];

  for (let i = 1; i < rows.length; i++) {
    if (rows[i][columnIndex] === value) {
      results.push(rows[i]);
    }
  }

  return results;
}

module.exports = { plainSearch };