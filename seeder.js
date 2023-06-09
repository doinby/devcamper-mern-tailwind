const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const Bootcamp = require('./models/Bootcamp');

// Connect to DB
connectDB();

// Read JSON files
const bootcamps = JSON.parse(
   fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
   try {
      await Bootcamp.create(bootcamps);

      console.log('Data Imported...');
      process.exit();
   } catch (err) {
      console.error(err);
   }
};

// Delete data
const deleteData = async () => {
   try {
      await Bootcamp.deleteMany();

      console.log('Data Destroyed...');
      process.exit();
   } catch (err) {
      console.error(err);
   }
};

// Execute import/delete functions when run command
// node seeder -i (or -d)

if (process.argv[2] === '-i') {
   importData();
} else if (process.argv[2] === '-d') {
   deleteData();
}
