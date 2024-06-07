const seedModule = require('./module-seeds');
const seedLesson = require('./lessons-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
    await seedModule();
    console.log('\n----- MODULES SEEDED -----\n');
  
    await seedLesson();
    console.log('\n----- LESSONS SEEDED -----\n');
  
    process.exit(0);
  };

seedAll();