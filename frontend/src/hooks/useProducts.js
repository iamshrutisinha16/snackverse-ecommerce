import { useState, useEffect } from 'react';
import { fetchProducts, fetchProductById } from '../api/ProductApi';

// 🔥 Yahan dhyan dena: 'export const useProducts' hona bilkul zaroori hai named export ke liye
export const useProducts = (productId = null) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductData = async () => {
      try {
        setLoading(true);
        if (productId) {
          const data = await fetchProductById(productId);
          setProduct(data);
        } else {
          const data = await fetchProducts();
          setProducts(data);
        }
      } catch (err) {
        setError(err.response?.data?.message || "Data extraction failed");
      } finally {
        setLoading(false);
      }
    };
    getProductData();
  }, [productId]);

  return { products, product, loading, error };
};