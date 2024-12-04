import { useEffect, useState } from "react";

const useFetchCategories = (url) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Http error! Status: ${response.status}`);
        }

        const result = await response.json();
        setCategories(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, [url]);

  return {
    categories,
    error,
    loading,
  };
};

export default useFetchCategories;
