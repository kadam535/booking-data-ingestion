const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

exports.Booking = sequelize.define('Booking', {
    bookingId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    customerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookingDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    vendor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
