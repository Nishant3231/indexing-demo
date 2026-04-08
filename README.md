# 🔍 From Scan to Index

A Node.js project demonstrating how search performance evolves from naive file scanning to advanced indexing techniques.

---

## 🚀 Overview

This project explores three different approaches to searching data in a CSV file:

1. **Plain File Scan** (Brute-force)
2. **In-Memory Indexing** (Hash-based lookup)
3. **Disk-Based Indexing** (Persistent index)

It highlights how modern systems optimize search operations and avoid full data scans.

---

## 🧠 Why This Project Matters

Efficient search is at the core of:

* Databases (MySQL, MongoDB)
* Search engines (Elasticsearch)
* Backend systems handling large datasets

This project demonstrates the **evolution of search optimization**, a key concept in system design and backend engineering.

---

## 🏗️ Project Structure

```
csv-search-indexing/
│
├── data/              # CSV dataset
├── indexes/           # Generated index files
├── src/               # Core logic
├── utils/             # Helpers
├── benchmark.js       # Performance comparison
└── README.md
```

---

## ⚙️ How It Works

### 1. Plain Search

* Scans entire file for every query
* Time Complexity: O(n)

---

### 2. In-Memory Index

* Builds a hashmap index
* Time Complexity: O(1) lookup
* Trades memory for speed

---

### 3. Disk-Based Index

* Stores index on disk
* Avoids full scans
* Balanced performance approach

---

## 📊 Benchmark Example

```
Plain Search:        Slow ❌
In-Memory Search:    Fastest 🚀
Disk Index Search:   Balanced ⚖️
```

---

## ▶️ Run the Project

```bash
npm install
npm start
```

---

## 🧪 Sample Query

```js
search("name", "John")
```

---

## 📈 Key Learnings

* Full scans do not scale
* Indexing drastically improves performance
* Memory vs Disk trade-offs are critical
* Real systems rely on disk-based indexing (B-Trees)

---

## 🔮 Future Improvements

* B-Tree indexing implementation
* Support for large-scale datasets
* Multi-column indexing
* Byte-offset based disk access

---

## 🧠 Real-World Mapping

| Concept Here | Real System Equivalent |
| ------------ | ---------------------- |
| Hash Index   | Redis / HashMap        |
| Disk Index   | MySQL B-Tree           |
| File Scan    | Full Table Scan        |

---

## 👨‍💻 Author

Nishant

