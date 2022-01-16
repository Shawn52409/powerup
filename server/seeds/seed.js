const db = require('../config/connection');
// const { Game, User } = require('../models');
const { User } = require('../models');
// const gameSeeds = require('./gameSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    // await Game.deleteMany({});
    // await Game.create(gameSeeds);
    await User.deleteMany({});
    await User.create(userSeeds);

    console.log('Database has been seeded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});