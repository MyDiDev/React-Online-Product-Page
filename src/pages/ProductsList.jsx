import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./productlist.css";

function ProductListPage() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = process.env.API_URL ?? "";
        const response = await fetch(`${apiUrl}/products`);
        const products = response.json() ?? null;
        setProductsData(products);
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
        <div className="flex justify-center items-center h-full">
          <p>Loading products...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="flex justify-center items-center h-full">
          <p>Oops... Error ocurred: {error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <header className="grid place-content-center place-items-center p-4">
        <div className="max-w-2xl">
          <div className="flex flex-row items-center border-2 px-3 rounded-full">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              className="px-2 outline-none rounded-full w-full h-12.5 font-medium"
              placeholder="Search for a product..."
            />
          </div>
        </div>
      </header>

      <main className="px-4 mt-5 h-full flex justify-center">
        <div className="max-w-7xl w-full">
          <section id="products">
            <h2 className="text-2xl font-bold">Listed Products</h2>
            <div id="products-list" className="mt-10">
              <ProductCard />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default ProductListPage;
