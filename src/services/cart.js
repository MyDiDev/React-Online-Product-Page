export const addToCart = (product) => {
  if (!product) return null;

  let cart = localStorage.getItem("cart_products");
  cart = JSON.parse(cart);
  console.log(cart, !cart);

  if (!cart) {
    cart = [];
    if (!product) {
      console.error("Invalid product object");
      console.log(product, `Instance: ${typeof product}`);
      return;
    } else {
      cart.push(product);
      return true;
    }
  }

  for (const p of cart) {
    if (p?.id == product?.id) {
      return true;
    }
  }

  cart.push(product);
  localStorage.setItem("cart_products", JSON.stringify(cart));
  return true;
};
