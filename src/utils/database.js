const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

exports.sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

exports.connectDB = async () => {
    try {
        await this.sequelize.authenticate();
        console.log('Database connected successfully.');
        await this.sequelize.sync();
    } catch (err) {
        throw new Error(err.message);
    }
};
