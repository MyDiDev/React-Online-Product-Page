import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Rating } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function ProductViewPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

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
      <header className="px-5 py-7 my-2">
        <nav className="flex justify-between items-center p-2">
          <div id="logo"></div>
          <div className="cursor-pointer" onClick={navigate(`/cart?id=${id}`)}>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </nav>
      </header>

      <main className="px-4 h-full grid place-content-center place-items-center gap-y-[100px]">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-20 max-w-425 w-full">
          <div className="h-full w-60 sm:w-125">
            <Swiper autoplay={true} zoom={true}>
              {product.images.map((img) => {
                return (
                  <>
                    <SwiperSlide>
                      <img
                        src={img}
                        alt={product.title}
                        className="w-full h-full"
                      />
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="max-w-125 space-y-2">
              <h2 className="text-2xl font-bold">{product.title} </h2>

              <div className="flex flex-row gap-2 items-center">
                <Rating
                  defaultValue={product.rating}
                  precision={0.5}
                  readOnly={true}
                  emptyIcon={<StarBorderIcon style={{ color: "gray" }} />}
                />
                <p
                  className={
                    product.availabilityStatus != "In Stock"
                      ? "p-1 px-4 bg-red-600 text-white cursor-pointer rounded-full shadow-sm my-2 border border-red-600"
                      : "p-1 px-4 bg-green-800 text-white cursor-pointer rounded-full shadow-sm my-2 border border-green-700"
                  }
                >
                  {product.availabilityStatus}
                </p>
              </div>

              <div className="flex flex-row gap-2">
                {product.tags.map((tag) => {
                  return (
                    <p className="p-1 px-4 bg-white text-black cursor-pointer rounded-full shadow-sm my-2 border border-gray-800">
                      {tag}
                    </p>
                  );
                })}
              </div>
              <div className="space-y-2 mb-3">
                <p className="text-sm text-gray-300">{product.description}</p>
              </div>
              <h4 className="text-lg font-semibold">Product Information:</h4>
              <div className="space-y-2 ml-1 mb-5">
                <p className="text-sm">
                  <strong className="text-gray-200">Brand</strong>:{" "}
                  {product.brand}.
                </p>
                <p className="text-sm">
                  <strong className="text-gray-200">Weight</strong>:{" "}
                  {product.weight} grams.
                </p>
                <p className="text-sm">
                  <strong className="text-gray-200">Warranty</strong>:{" "}
                  {product.warrantyInformation}.
                </p>
                <p className="text-sm">
                  <strong className="text-gray-200">Shipping</strong>:{" "}
                  {product.shippingInformation}.
                </p>
                <p className="text-sm">
                  <strong className="text-gray-200">Stock available:</strong>{" "}
                  {product.stock} items.
                </p>
                <p className="text-sm">
                  <strong className="text-gray-200">Return policy:</strong>{" "}
                  {product.returnPolicy}.
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row justify-between sm:items-center mt-5 flex-col gap-3 pb-3">
              <div>
                <p className="text-gray-500 font-medium text-[12px]">PRICE</p>
                <h4 className="font-semibold text-2xl">${product.price}</h4>
              </div>
              <div className="w-full sm:w-50">
                <button className="bg-white rounded-sm cursor-pointer text-black text-sm font-medium p-2 w-full">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="max-w-425">
            <h2 className="text-2xl font-bold">Reviews</h2>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductViewPage;
