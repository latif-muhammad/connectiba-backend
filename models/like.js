const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');
const Post = require('./post');
const User = require('./user');

const Like = sequelize.define('Like', {
    like_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'posts',
            key: 'post_id'
        }
    },
    erp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'erp_id'
        }
    },
}, {
    tableName: 'likes',
    timestamps: true,
});



//  foreign key associations
Like.belongsTo(Post, { foreignKey: 'post_id' });
Like.belongsTo(User, { foreignKey: 'erp_id' });

module.exports = Like;
