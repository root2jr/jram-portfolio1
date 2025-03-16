import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows sending JSON data

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected (Atlas)'))
  .catch(err => console.log(err));

// Mongoose Schema & Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  message: String
});
const Contact = mongoose.model('Contact', contactSchema);

// API Route
app.post('/contact', async (req, res) => {
  try {
    const { name, email, number, message } = req.body;
    const newContact = new Contact({ name, email, number, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
