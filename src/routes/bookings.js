const express = require('express');
const {
    addBooking,
    getBookings,
    getBookingById,
    deleteBooking
} = require('../controllers/bookings');

const router = express.Router();

router.post('/', addBooking);
router.get('/', getBookings);
router.get('/:id', getBookingById);
router.delete('/:id', deleteBooking);

module.exports = router;
