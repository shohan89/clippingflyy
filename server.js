
const express = require('express');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Mock Database (In production, use MongoDB)
let orders = [];
let contacts = [];

// AI Image Analysis Route
app.post('/api/ai/analyze', async (req, res) => {
  try {
    const { image, mimeType } = req.body;
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          { inlineData: { data: image, mimeType: mimeType } },
          { text: "You are a professional photo editor. Provide 3 technical improvements for this image in a brief bulleted list." }
        ]
      }
    });
    res.json({ text: response.text });
  } catch (error) {
    console.error('AI Error:', error);
    res.status(500).json({ error: 'AI processing failed' });
  }
});

// Submit Trial Order
app.post('/api/orders/trial', (req, res) => {
  const newOrder = {
    id: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    ...req.body,
    status: 'In Progress',
    createdAt: new Date()
  };
  orders.push(newOrder);
  res.status(201).json({ message: 'Order submitted successfully', orderId: newOrder.id });
});

// Get User Orders
app.get('/api/orders', (req, res) => {
  const { email } = req.query;
  const userOrders = orders.filter(o => o.email === email);
  res.json(userOrders);
});

// Submit Contact Form
app.post('/api/contact', (req, res) => {
  contacts.push({ ...req.body, date: new Date() });
  res.status(201).json({ message: 'Message sent' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
