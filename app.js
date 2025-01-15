const express = require('express');
const dotenv = require('dotenv');
const bookingRoutes = require('./src/routes/bookings');
const { connectDB } = require('./src/utils/database');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/bookings', bookingRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to the database:', err.message);
});
