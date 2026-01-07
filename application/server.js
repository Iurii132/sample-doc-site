
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

// Get item by id
app.get('/api/items/:id', (req, res) => {
  const id = req.params.id;
  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.status(200).json(item);
});

// Delete item by id
app.delete('/api/items/:id', (req, res) => {
  const id = req.params.id;
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  items.splice(idx, 1);
  res.status(204).end();
});

  // Simple unique ID (not cryptographically strong, fine for local dev)
function cryptoRandomId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
