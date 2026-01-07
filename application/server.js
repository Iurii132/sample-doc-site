
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

const items = [];

app.get('/api/items', (req, res) => {
  res.status(200).json(items);
});

app.post('/api/items', (req, res) => {
  const payload = req.body;
  if (!payload || Object.keys(payload).length === 0) {
    return res.status(400).json({ error: 'Empty or invalid JSON' });
  }
  const item = {
    id: cryptoRandomId(),
    received: new Date().toISOString(),
    payload
  };
  items.push(item);
  res.status(201).json(item);
});

  // Simple unique ID (not cryptographically strong, fine for local dev)
function cryptoRandomId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
