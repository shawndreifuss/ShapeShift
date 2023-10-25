const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class profile extends Model {}
  
profile.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    yourName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    }   ,   
    confirmPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'email',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile',
  }
);

module.exports = profile;

  
  
 
    
  
    