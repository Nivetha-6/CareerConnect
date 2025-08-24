const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
dotenv.config();

// const authRoutes = require('./routes/authRoutes');

// Middleware
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use(cors());

// MongoDB Connection
// mongoose.connect(process.env.MONGO_URL)
  // .then(() => console.log("MongoDB Connected ✅"))
  // .catch((err) => console.error("MongoDB Error ❌", err));

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Server Listen
mongoose.connect('mongodb://127.0.0.1:27017/careerconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB Connected!');
    app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
  })
  .catch((error) => console.error(error));