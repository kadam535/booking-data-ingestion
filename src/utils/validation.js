const Joi = require('joi');

exports.validateBooking = (data) => {
    const schema = Joi.object({
        bookingId: Joi.string().required(),
        customerName: Joi.string().required(),
        bookingDate: Joi.date().required(),
        amount: Joi.number().positive().required(),
        vendor: Joi.string().required(),
    });

    return schema.validate(data);
};
