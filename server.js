require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

// Middleware: body parser
app.use(express.json());

// ✅ MongoDB কানেকশন
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🟢 MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Root route (GET)
app.get('/', (req, res) => {
  res.send('🟢 Memo Generator Server চলছে!');
});

// ✅ Memo POST API
app.post('/api/memo', (req, res) => {
  console.log('📥 মেমো এসেছে:', req.body);
  res.json({ success: true, message: '✅ মেমো রিসিভ হয়েছে!' });
});

// ✅ Server চালানো
app.listen(port, () => {
  console.log(`✅ সার্ভার চালু: http://localhost:${port}`);
});
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));S
