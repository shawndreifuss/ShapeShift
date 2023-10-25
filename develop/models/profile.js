// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Profile extends Model {}
  
// Profile.init(
//   {
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true,
//     },
//     yourName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password:{
//       type: DataTypes.STRING,
//       allowNull: false,
//     }   ,   
//     confirmPassword: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       references: {
//         model: 'user',
//         key: 'email',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'profile',
//   }
// );

// module.exports = profile;

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



  
 
    
  
    