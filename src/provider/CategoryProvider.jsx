/* eslint-disable react/prop-types */
import { useState } from "react";
import CategoryContext from "../context/CategoryContext";

export default function CategoryProvider({ children }) {
  const [category, setCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
