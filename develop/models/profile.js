//

const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {
}

Profile.init( {
  waist: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hips: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  neck: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  heightft: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  heightin: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preferredUnits: {
    type: DataTypes.STRING,
    allowNull: false, 
  },

  timezones: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
  }
  }
},{
  sequelize,
     timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'profile',

})
module.exports = Profile



  
 
    
  
    