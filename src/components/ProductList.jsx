import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useFetchData from "../hooks/useFetchData";
import { sortProducts } from "../utils/sorting";
import Cart from "./Cart";
import FilterCategores from "./FilterCategores";
import LoadingCard from "./LoadingCard";
import ProductCard from "./ProductCard";
import Search from "./Search";

export default function ProductList() {
  const { data, loading } = useFetchData();

  const [products, setProducts] = useState(data);
  const [showingProducts, setShowingProducts] = useState([]);
  const [showSortView, setShowSortView] = useState(false);

  useEffect(() => {
    if (data) {
      setProducts(data);
      setShowingProducts(data);
    }
  }, [data]);

  function sortProduct(event) {
    const order = event.target.role;
    const sortedProduct = sortProducts(showingProducts, order);
    setShowingProducts(sortedProduct);
    setShowSortView(false);
  }

  const doSearch = useDebounce((searchText) => {
    console.log("Searching");
    const filterProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setShowingProducts(filterProducts);
  }, 300);
  function onSearch(searchText) {
    doSearch(searchText);
  }

  return (
    <div>
      <div className="mt-10">
        <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          {/* <!-- Sort & Filter--> */}
          <div className="w-full">
            {/* <!-- Sort Start --> */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setShowSortView(!showSortView)}
                >
                  Sort
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* <!-- Sort Options --> */}
              {showSortView && (
                <div
                  className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <span
                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                      role="lowToHigh"
                      tabIndex="-1"
                      id="menu-item-0"
                      onClick={(e) => sortProduct(e)}
                    >
                      Low to High
                    </span>
                    <span
                      href=""
                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                      role="highToLow"
                      tabIndex="-1"
                      id="menu-item-0"
                      onClick={(e) => sortProduct(e)}
                    >
                      High to Low
                    </span>
                  </div>
                </div>
              )}
            </div>
            {/* <!-- Sort End --> */}

            {/* <!-- Filter Start --> */}
            <FilterCategores />
            {/* <!-- Filter End --> */}
          </div>

          {/* <!-- Search and Cart --> */}
          <div className="flex gap-2 items-center">
            {/* <!-- Search --> */}
            <Search onSearch={onSearch} />

            <Cart />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {/* <!-- Card --> */}
              {loading
                ? Array.from({
                    length: Math.max(4, showingProducts?.length || 0),
                  }).map((_, index) => <LoadingCard key={index} />)
                : showingProducts &&
                  showingProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              {!loading && showingProducts.length === 0 && (
                <div className="text-center text-gray-500">
                  No products found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
