import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const useProductDetails = () => {
  const { id } = useParams(); // URL se ID catch karega (e.g., /product/6a29a39f...)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        setLoading(true);
    
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product details stream:", err);
        setError(err.message || "Product not found");
      } finally {
        setLoading(false);
      }
    };

    if (id) getProductDetails();
  }, [id]);

  return { product, loading, error };
};