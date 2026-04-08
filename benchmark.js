const { plainSearch } = require("./src/plainSearch");
const { buildMemoryIndex, searchMemoryIndex } = require("./src/inMemorySearch");
const { buildDiskIndex } = require("./src/buildIndex");
const { diskSearch } = require("./src/diskSearch");

const FILE = "./data/data.csv";
const INDEX_FILE = "./indexes/index.json";
const COLUMN = 1;
const VALUE = "John";

// Plain Search
console.time("Plain Search");
console.log(plainSearch(FILE, COLUMN, VALUE));
console.timeEnd("Plain Search");

// In-memory Search
console.time("Build Memory Index");
const memIndex = buildMemoryIndex(FILE, COLUMN);
console.timeEnd("Build Memory Index");

console.time("Memory Search");
console.log(searchMemoryIndex(memIndex, VALUE));
console.timeEnd("Memory Search");

// Disk Index
console.time("Build Disk Index");
buildDiskIndex(FILE, COLUMN, INDEX_FILE);
console.timeEnd("Build Disk Index");

console.time("Disk Search");
console.log(diskSearch(FILE, INDEX_FILE, VALUE));
console.timeEnd("Disk Search");



// {
//   "name": "indexing-demo",
//   "version": "1.0.0",
//   "description": "A Node.js project demonstrating how search performance evolves from naive file scanning to advanced indexing techniques.",
//   "main": "benchmark.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "repository": {
//     "type": "git",
//     "url": "git+https://github.com/Nishant3231/indexing-demo.git"
//   },
//   "author": "Nishant",
//   "license": "ISC",
//   "bugs": {
//     "url": "https://github.com/Nishant3231/indexing-demo/issues"
//   },
//   "homepage": "https://github.com/Nishant3231/indexing-demo#readme"
// }