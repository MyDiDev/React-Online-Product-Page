import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";

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
      <main className="px-4 h-dvh grid place-content-center">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-20 max-w-425 w-full">
          <div className="h-full w-60 sm:w-125">
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
          <div className="flex flex-col justify-between h-full">
            <div className="max-w-125 space-y-2">
              <h2 className="text-2xl font-bold">{product.title} </h2>

              <div className="flex flex-row gap-2 items-center">
                <Rating
                  defaultValue={product.rating}
                  precision={0.5}
                  readOnly={true}
                />
                <p
                  className={
                    product.availabilityStatus != "In Stock"
                      ? "p-1 px-4 bg-red-600 text-white cursor-pointer rounded-full shadow-sm my-2 border border-red-600"
                      : "p-1 px-4 bg-green-500 text-white cursor-pointer rounded-full shadow-sm my-2 border border-green-700"
                  }
                >
                  {product.availabilityStatus}
                </p>
              </div>

              <div className="flex flex-row gap-2">
                {product.tags.map((tag) => {
                  return (
                    <p className="p-1 px-4 bg-black text-white cursor-pointer rounded-full shadow-sm my-2 border border-gray-800">
                      {tag}
                    </p>
                  );
                })}
              </div>
              <div className="space-y-2 mb-3">
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
              <h4 className="text-lg font-semibold">Product information:</h4>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Brand</strong>: {product.brand}
                </p>
                <p className="text-sm">
                  <strong>Weight</strong>: {product.weight}g
                </p>
                <p className="text-sm">
                  <strong>Warranty</strong>: {product.warrantyInformation}
                </p>
                <p className="text-sm">
                  <strong>Shipping</strong>: {product.shippingInformation}
                </p>
                <p className="text-sm">
                  <strong>Stock available:</strong> {product.stock}
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row justify-between sm:items-center mt-5 flex-col gap-3 pb-3">
              <div>
                <p className="text-gray-500 font-medium text-[12px]">PRICE</p>
                <h4 className="font-semibold text-2xl">${product.price}</h4>
              </div>
              <div className="w-full sm:w-50">
                <button className="bg-blue-800 rounded-sm cursor-pointer text-white text-sm font-medium p-2 w-full">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductViewPage;
