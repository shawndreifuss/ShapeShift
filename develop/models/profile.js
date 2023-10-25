const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class profile extends Model {}
  
profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    YourName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password:{
      type: DataTypes.STRING,
      allowNull: false,
    }   ,   
    confirmPassword: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
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

module.exports = Blog;

  
  
 
    
  
    