function sortProducts(products, order) {
  if (order === "lowToHigh") {
    return [...products].sort((a, b) => a.price - b.price);
  } else if (order === "highToLow") {
    return [...products].sort((a, b) => b.price - a.price);
  }
  return products;
}

export { sortProducts };
