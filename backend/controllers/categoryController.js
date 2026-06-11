import Category from '../models/Category.js';

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) { next(error); }
};

export const createCategory = async (req, res, next) => {
  try {
    const { name, slug, image } = req.body;
    const categoryExists = await Category.findOne({ slug });
    if (categoryExists) {
      res.status(400);
      throw new Error('Category already exists');
    }
    const category = await Category.create({ name, slug, image });
    res.status(201).json(category);
  } catch (error) { next(error); }
};