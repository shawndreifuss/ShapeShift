// models/index.js
const User = require('./User');
const Blog = require('./Blog');
const Workout = require('./Workout');
const Post = require('./Post');
const Profile = require('./profile');
const Post = require('./Post')
const Profile = require('./profile')
// One user can have many blogs
User.hasMany(Blog, {
    foreignKey: 'user_id'
});
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Workout, {
    foreignKey: 'user_id'
});
Workout.belongsTo(User, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
User.hasMany(Post, {
    foreignKey: 'user_id'
});
Profile.belongsTo(User, {
    foreignKey: 'user_id'
});
User.hasOne(Profile, {
    foreignKey: 'user_id'
});

module.exports = { User, Blog, Workout, Post };
module.exports = { User, Blog, Workout, Post, Profile };
