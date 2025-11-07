// server.js
const express = require('express');
const app = express();

// Use the port provided by Plesk, fallback to 3000 for local testing
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World from Node.js Backend 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
