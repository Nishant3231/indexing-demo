// src/inMemorySearch.js
const { readCSV } = require("../utils/csvReader");

function buildMemoryIndex(filePath, columnIndex) {
  const rows = readCSV(filePath);
  const index = {};

  for (let i = 1; i < rows.length; i++) {
    const key = rows[i][columnIndex];

    if (!index[key]) index[key] = [];
    index[key].push(rows[i]);
  }

  return index;
}

function searchMemoryIndex(index, value) {
  return index[value] || [];
}

module.exports = { buildMemoryIndex, searchMemoryIndex };