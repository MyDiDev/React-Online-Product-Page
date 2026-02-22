export const addToCart = (product) => {
  if (!product) return false;

  let cart = localStorage.getItem("cart_products") ?? [];
  cart = JSON.parse(cart);

  if (cart.length > 0) {
    for (const p of cart) {
      if (p?.id == product?.id) return true;
    }
  }

  cart.push(product);
  localStorage.setItem("cart_products", JSON.stringify(cart));
  return true;
};

export const removeFromCart = (id) => {
  let cart = localStorage.getItem("cart_products") ?? [];
  cart = JSON.parse(cart);

  if (cart.length == 0) return false;

  for (let i = 0; i <= cart.length; i++) {
    if (cart[i].id == id) {
      cart.splice(i);
      localStorage.setItem("cart_products", JSON.stringify(cart));
      return true;
    }
  }
};
