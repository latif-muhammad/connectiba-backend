
const Like = require('./like');
const Comment = require('./comment');
const Post = require('./post')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');



const User = sequelize.define('User', {
  erp_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(50),
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Other'),
  },
  phone_number: {
    type: DataTypes.STRING(20),
  },
  cnic_number: {
    type: DataTypes.BIGINT,
  },
  address: {
    type: DataTypes.TEXT,
  },
},
  {
    timestamps: false,  // Set to true if you want Sequelize to handle createdAt and updatedAt fields
    tableName: 'users', // Specify the table name if it's different from the model name
  });



User.hasMany(Post, { foreignKey: 'posted_by', sourceKey: 'erp_id' });
User.hasMany(Comment, { foreignKey: 'erp_id', sourceKey: 'erp_id' });
User.hasMany(Like, { foreignKey: 'erp_id', sourceKey: 'erp_id' });



Post.belongsTo(User, { foreignKey: 'posted_by', targetKey: 'erp_id' });
Like.belongsTo(User, { foreignKey: 'erp_id', targetKey: 'erp_id' });
Comment.belongsTo(User, { foreignKey: 'erp_id', targetKey: 'erp_id' });




module.exports = User;
