export const addToCart = (product) => {
  if (!product) return null;

  let cart = localStorage.getItem("cart_products");
  cart = JSON.parse(cart);

  if (!cart) {
    cart = [];
    if (!product) {
      console.error("Invalid product object");
      console.log(product, `Instance: ${typeof product}`);
      return;
    } else cart.push(product);
  }

  cart.forEach((p) => {
    if (p?.id == product?.id) return true;
  });

  localStorage.setItem("cart_products", JSON.stringify(cart));
  return true;
};
