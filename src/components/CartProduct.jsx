const CartProduct = ({
  id = -1,
  title = "",
  description = "",
  category = "",
  price = "unavaible",
  discountRate = null,
  rating = 0,
  thumbnailSrc = "",
  reviewsCount = 0,
}) => {
  return (
    <>
      <div className="bg-black/80 backdrop-blur-lg border-2 border-gray-500, p-3">
        <div className="flex flex-col gap-3">
          <div>
            <h5 className="text-xl font-bold">{title}</h5>
            <hr className="w-10 fill-white my-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
