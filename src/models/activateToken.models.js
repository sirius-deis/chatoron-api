const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db.config');

const ActivateToken = sequelize.define('ActivateTokens', {
    token: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
});

module.exports = ActivateToken;
