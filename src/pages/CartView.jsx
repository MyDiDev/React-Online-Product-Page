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
      <main className="flex justify-center items-center flex-col h-full pb-10">
        <section className="bg-black/80 backdrop-blur-lg border-2 border-gray-500 p-4">
          <div className="flex flex-col gap-5 justify-start">
            <div>
              <h2 className="text-3xl font-bold">Cart</h2>
              <hr />
              <p className="text-sm text-gray-700">
                Products added in the cart.
              </p>
            </div>
            <div>
              {productsInCart.length != 0 &&
                productsInCart.map((p) => {
                  return <CardProduct />;
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
