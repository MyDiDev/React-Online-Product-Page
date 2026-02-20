import Button from "../components/Button";

const CartViewPage = () => {
  const productsInCart = localStorage.getItem("cart_products", null);
  if (!productsInCart) {
    return (
      <>
        <div className="grid place-content-center place-items-center h-dvh">
          <div className="text-center p-4">
            <h2 className="text-5xl font-bold">
              No products in the cart yet...
            </h2>
          </div>
          <a href="/" className="w-full my-2">
            <Button
              styles={{
                width: "100%",
              }}
            >
              Go back
            </Button>
          </a>
        </div>
      </>
    );
  }
};

export default CartViewPage;
