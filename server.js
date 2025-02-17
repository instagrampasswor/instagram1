const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB bağlantısı
mongoose.connect('mongodb://127.0.0.1:27017/instagramDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB bağlantısı uğurla quruldu!');
}).catch((err) => {
    console.error('MongoDB bağlantı xətası:', err);
});

// Test route
app.get('/', (req, res) => {
    res.send('Backend işləyir!');
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışır`);
});
