const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      workout_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reps: {
        type: DataTypes.INTEGER,
      },
      sets: {
        type: DataTypes.INTEGER,
      },
      weight:{
        type: DataTypes.STRING,
      },
      distance: {
        type: DataTypes.STRING,
      },
      duration: {
        type: DataTypes.STRING,
      },
      details: {
        type:DataTypes.TEXT,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        
        defaultValue: false
      },
      user_id: {
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
      modelName: 'workout',
    }
  );
  
  module.exports = Workout;