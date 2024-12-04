import { useReducer } from "react";
import ProductCartContext from "../context/ProductCartContext";
import { initialState, productCartReducer } from "../reducers/productsReducer";

export default function ProductCartProvider({ children }) {
  const [cart, dispatch] = useReducer(productCartReducer, initialState);


  return (
    <ProductCartContext.Provider value={{ cart, dispatch }}>
      {children}
    </ProductCartContext.Provider>
  );
}
