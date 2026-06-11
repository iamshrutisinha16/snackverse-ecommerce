import express from 'express';
import cors from 'cors';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorMiddleware.js';

// Route Imports
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import wishlistRoutes from './routes/wishlistRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Main Root Path Check
app.get('/', (req, res) => {
  res.send('Snackverse API is running successfully... 🍟');
});

// API Routes Mounted
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

// Fallback Middlewares
app.use(notFound);
app.use(errorHandler);

export default app;