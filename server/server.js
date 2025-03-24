const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();  // 👈 initialize app first!

const doctorRoutes = require('./routes/doctorRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', doctorRoutes);

// DB connection
mongoose.connect('mongodb://localhost:27017/horizon-hospital', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Start server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
