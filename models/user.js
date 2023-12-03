// module.exports = class User {
//     constructor(erp_id, first_name, last_name, email, password, date_of_birth, gender, phone_number, CNIC_number, address) {
//         this.erp_id = erp_id;
//         this.first_name = first_name;
//         this.last_name = last_name;
//         this.password = password;
//         this.email = email;
//         this.date_of_birth = date_of_birth;
//         this.gender = gender;
//         this.phone_number = phone_number;
//         this.CNIC_number = CNIC_number;
//         this.address = address;
//     }
// }


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
  registration_date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
},
  {
    timestamps: true,  // Set to true if you want Sequelize to handle createdAt and updatedAt fields
    tableName: 'users', // Specify the table name if it's different from the model name
  });


module.exports = User;
