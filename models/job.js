const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');

const Job = sequelize.define('Job', {
    job_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    job_title: {
        type: DataTypes.STRING(255),
        allowNull: true // Set to false if job_title cannot be null
    },
    job_description: {
        type: DataTypes.STRING(255),
        allowNull: true // Set to false if job_description cannot be null
    }
}, {

    tableName: 'jobs',
    timestamps: false // Set to true if you want to include timestamps
});

module.exports = Job;