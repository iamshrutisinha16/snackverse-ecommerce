import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import Product from '../models/Product.js';
import Category from '../models/Category.js';

dotenv.config({ path: '../.env' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { family: 4 });
    console.log('Database Connected for Seeding...');

    await Product.deleteMany();
    await Category.deleteMany();

    // Make default Snack Category
    const defaultCategory = await Category.create({
      name: 'Healthy Snacks',
      slug: 'healthy-snacks',
      image: 'https://placehold.co/300x300.png'
    });

    const productsRaw = JSON.parse(fs.readFileSync(path.join(__dirname, 'products.json'), 'utf-8'));
    
    const productsData = productsRaw.map(product => ({
      ...product,
      category: defaultCategory._file ? defaultCategory._file : defaultCategory._id
    }));

    await Product.insertMany(productsData);
    console.log('Data Imported Successfully! 🎉');
    process.exit();
  } catch (error) {
    console.error(`Seeding Failed: ${error.message}`);
    process.exit(1);
  }
};

seedData();