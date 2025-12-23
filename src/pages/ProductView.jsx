import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductViewPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
    
        const response = await fetch(`${apiUrl}/products/${id}`);
        const fetchedProduct = await response.json();
        setProduct(fetchedProduct);
        setLoading(false);
      } catch (ex) {
        setLoading(false);
        setError(ex?.message);
      }
    };

    fetchProduct();
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
      <main className="px-4 h-dvh">
        <div className="w-full max-w-7xl">
          <div className="flex sm:flex-row flex-col justify-around items-center">
            <div className="h-full w-75 sm:w-125">
              {product.images.map((img) => {
                return (
                  <>
                    <img
                      src={img}
                      alt={product.title}
                      className="w-full h-full"
                    />
                  </>
                );
              })}
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductViewPage;
