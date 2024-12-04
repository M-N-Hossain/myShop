import { useContext, useEffect, useState } from "react";
import CategoryContext from "../context/CategoryContext";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { category } = useContext(CategoryContext);
  const productUrl = "https://fakestoreapi.com/products";
  const productUrlWithCategory = `https://fakestoreapi.com/products/category/${category}`;

  async function fecthData(url) {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (category) {
      fecthData(productUrlWithCategory);
    } else {
      fecthData(productUrl);
    }
  }, [category]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetchData;
