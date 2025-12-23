import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./productlist.css";
import { uniqBy } from "lodash";

function ProductListPage() {
  const [productsData, setProductsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/products?limit=0`);
        const products = await response.json();
        setProductsData(products.products);
        const categories = [];
        products.products.map((p) => categories.push(p.category));
        setCategories(categories);
        setLoading(false);
      } catch (ex) {
        setError(ex?.message);
        setLoading(false);
      }
    };

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

    //   useEffect(() => {
    //     const fetchProductsByCategory = async () => {

    //     };
    //   }, []);

  return (
    <>
      <header className="grid place-content-center place-items-center p-4">
        <div className="max-w-2xl">
          <div className="flex flex-row items-center border-2 px-3 rounded-full">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              className="px-2 outline-none rounded-full w-full h-12.5 font-medium"
              placeholder="Search for a product..."
            />
          </div>
        </div>
      </header>

      <main className="px-4 pb-5 mt-5 h-full flex justify-center">
        <div className="max-w-7xl w-full">
          <section id="products">
            <h2 className="text-2xl font-bold">Listed Products</h2>
            <div className="flex sm:flex-row flex-col w-full gap-2 my-4 items-center">
              <h2 className="font-medium">Filter by:</h2>
              <div>
                <select className="bg-gray-100/60 p-2 outline-none border-2 border-gray-500/50 font-semibold rounded-full cursor-pointer">
                  {uniqBy(categories).map((c) => {
                    return (
                      <>
                        <option value={c}>{c}</option>
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
            <div id="products-list" className="mt-10">
              {productsData.map((p) => {
                return (
                  <ProductCard
                    thumbnailSrc={p.thumbnail}
                    title={p.title}
                    category={p.category}
                    description={p.description}
                    price={p.price.toLocaleString("en-US")}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default ProductListPage;
