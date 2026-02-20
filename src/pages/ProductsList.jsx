import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { uniqBy } from "lodash";
import "./productlist.css";

const ProductListPage = () => {
  const [preloadProducts, setPreloadProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productQuery, setProductQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchProducts = async () => {
    try {
      if (productQuery != "") setProductQuery("");
      setPreloadProducts(localStorage.getItem("products"));

      if (preloadProducts?.length > 0) {
        setProductsData(preloadProducts);
        setLoading(false);
        return;
      }
      const response = await fetch(`${apiUrl}/products?limit=0`);
      const products = await response.json();
      const categories = [];
      products.products.map((p) => categories.push(p.category));

      setProductsData(products.products);
      setPreloadProducts(products.products);
      setCategories(categories);
      localStorage.setItem("products", productsData);

      setLoading(false);
    } catch (ex) {
      setError(ex?.message);
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      setProductQuery("");
      const response = await fetch(
        `${apiUrl}/products/category/${category}?limit=0`,
      );
      const categoryProducts = await response.json();
      setProductsData(categoryProducts?.products);
    } catch (ex) {
      setError(ex?.message);
    }
  };

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const searchProducts = async () => {
    try {
      if (!productQuery) await sleep(400);
      else await sleep(800);
      
      const response = await fetch(
        `${apiUrl}/products/search?q=${productQuery}&limit=0`,
      );
      const products = await response.json();

      setProductsData(products.products);
    } catch (ex) {
      setError(ex?.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-dvh">
          <p>Loading products...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="flex justify-center items-center h-dvh">
          <p>Oops... Error ocurred: {error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <header className="flex justify-between items-center p-4 sticky top-0 z-10">
        <div id="logo"></div>
        <div className="max-w-175 w-full">
          <div className="flex flex-row items-center border-2 border-gray-700 bg-black/80 backdrop-blur-lg px-4 rounded-full w-full">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "gray" }}
            ></i>
            <input
              id="searchProductInput"
              type="text"
              value={productQuery}
              onChange={(e) => {
                setProductQuery(e?.target?.value);
                searchProducts();
              }}
              className="px-2 outline-none rounded-full h-12.5 font-medium w-full"
              placeholder="Search for a product..."
            />
          </div>
        </div>
        <a href="/cart">
          <div className="flex items-center justify-center border-2 border-gray-700 bg-black/80 p-3 rounded-full cursor-pointer">
            <i className="fa-solid fa-cart-shopping text-lg text-gray-300"></i>
          </div>
        </a>
      </header>

      <main className="px-4 pb-5 mt-5 h-full w-full flex justify-center">
        <div className="max-w-500 w-full">
          <section id="products">
            <h2 className="text-6xl font-bold sm:text-start text-center">
              Listed Products
            </h2>
            <div className="flex sm:flex-row flex-col w-full gap-2 my-4 items-center">
              <h2 className="font-medium">Filter by:</h2>
              <div>
                <select
                  onChange={(e) => {
                    fetchProductsByCategory(e?.target?.value);
                  }}
                  className="bg-black p-2 outline-none border-2 border-gray-500/50 rounded-full cursor-pointer"
                >
                  {uniqBy(categories).map((c) => {
                    return (
                      <>
                        <option value={c}>{c}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <Button onclick={() => fetchProducts()}>Clear filter</Button>
              </div>
            </div>
            <div id="products-list" className="mt-10">
              {productsData.map((p) => {
                return (
                  <ProductCard
                    id={p?.id}
                    thumbnailSrc={p?.thumbnail}
                    title={p?.title}
                    category={p?.category}
                    description={p?.description}
                    price={p?.price?.toLocaleString("en-US")}
                    rating={p?.rating}
                    reviewsCount={p?.reviews.length}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ProductListPage;
