import Button from "../components/Button";
import CardProduct from "../components/CartProduct";
import { useNavigate } from "react-router-dom";

const CartViewPage = () => {
  const productsInCart = JSON.parse(localStorage.getItem("cart_products"));
  const navigate = useNavigate();

  if (!productsInCart) {
    return (
      <>
        <div className="grid place-content-center place-items-center h-dvh">
          <div className="text-center p-4">
            <h2 className="text-5xl font-bold">
              No products in the cart yet...
            </h2>
          </div>

          <Button
            onclick={() => navigate("/")}
            styles={{
              width: "100%",
            }}
          >
            Go back
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <main className="flex justify-center items-center flex-col h-full my-5 px-4 pb-10">
        <section className="bg-black/80 backdrop-blur-lg max-w-300 p-4 rounded w-full h-full min-h-dvh">
          <div className="flex flex-col gap-5 justify-start">
            <div>
              <h2 className="text-7xl font-bold">Cart</h2>
              <p className="text-lg my-2 text-gray-400">
                Products added in the cart.
              </p>
            </div>
            <div className="flex flex-col gap-7">
              {productsInCart.length > 0 &&
                productsInCart.map((p) => {
                  return (
                    <CardProduct
                      id={p?.id}
                      thumbnailSrc={p?.thumbnail}
                      title={p?.title}
                      category={p?.category}
                      description={p?.description}
                      price={p?.price?.toLocaleString("en-US")}
                      rating={p?.rating}
                      reviewsCount={p?.reviews.length}
                      availabilityStatus={p?.availabilityStatus}
                    />
                  );
                })}
            </div>
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CartViewPage;
