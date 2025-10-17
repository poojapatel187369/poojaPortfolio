import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoutes from './routes/Contact.js';

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://poojaportfolio-frontendd.onrender.com'  // ✅ AUR YEH BHI
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: '✅ Backend with Email & MongoDB is running!',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected successfully');
  console.log(`📊 Database: ${mongoose.connection.db.databaseName}`);
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
});

// Connection events
mongoose.connection.on('connected', () => {
  console.log('🔗 MongoDB connected');
});
mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('🚀 Server started successfully!');
  console.log(`📍 Port: ${PORT}`);
  console.log('📧 Nodemailer configured!');
  console.log('🗄️ MongoDB connecting...');
});
