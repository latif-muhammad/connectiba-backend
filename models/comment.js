const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');
const Post = require('./post');
const User = require('./user');

const Comment = sequelize.define('Comment', {
    comment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    erp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'comments',
    timestamps: true,
});

// Define foreign key associations
Comment.belongsTo(Post, { foreignKey: 'post_id' });
Comment.belongsTo(User, { foreignKey: 'erp_id' });