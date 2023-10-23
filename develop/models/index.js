const User = require('./User');
const Workout = require('./Workout');
const Blog = require('./Blog')

User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Blog, {
    foreginKey: 'user_id',
    onDelete: "CASCADE"
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Workout, Blog };