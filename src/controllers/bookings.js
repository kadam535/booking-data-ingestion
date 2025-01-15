const { Booking } = require('../models/Booking');
const { validateBooking } = require('../utils/validation');

exports.addBooking = async (req, res) => {
    try {
        const { error } = validateBooking(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });

        const booking = await Booking.create(req.body);
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error', details: err.message });
    }
};

exports.getBookings = async (req, res) => {
    try {
        const { date, vendor } = req.query;
        const filter = {};

        if (date) filter.bookingDate = date;
        if (vendor) filter.vendor = vendor;

        const bookings = await Booking.findAll({ where: filter });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error', details: err.message });
    }
};

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) return res.status(404).json({ error: 'Booking not found' });

        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error', details: err.message });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const result = await Booking.destroy({ where: { id: req.params.id } });
        if (!result) return res.status(404).json({ error: 'Booking not found' });

        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error', details: err.message });
    }
};
