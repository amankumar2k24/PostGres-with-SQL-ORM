'use strict';
const { Model, Sequelize } = require('sequelize');
const sequelize = require('../../config/database');


const User = sequelize.define(
  'user',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    userType: { type: Sequelize.ENUM("1", "2", "3") },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    deletedAt: { type: Sequelize.DATE }
  },
  {
    sequelize,
    paranoid: true,             // Enables soft delete by using deletedAt
    freezeTableName: true,      // Table name will be exactly 'user', not pluralized to 'users'
    modelName: 'user',          // Used for Sequelize's internal reference
    timestamps: true            // Adds createdAt and updatedAt fields
  }
)

module.exports = User;