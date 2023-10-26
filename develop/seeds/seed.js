const sequelize = require('../config/connection');
const { User, Blog, Workout, Post, Profile} = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const workoutData = require('./workoutData.json')
const postData = require('./postData.json')
const profileData = require('./profileData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const workout of workoutData) {
    await Workout.create({
      ...workout,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const profile of profileData) {
    await Profile.create({
      ...profile,
    });
  }

  process.exit(0);
};

seedDatabase();