function ProductCard({
  title = "",
  description = "",
  category = "",
  price = "unavaible",
  rating = 0,
  thumbnailSrc = "",
}) {
  return (
    <>
      <div className="bg-gray-200 rounded-sm shadow-sm p-2">
        <div className="grid grid-cols-1 grid-rows-1 gap-0 max-w-[320px] max-h-140">
          <div className="w-full">
            <img src={thumbnailSrc} alt={title + "_thumbnail"} />
          </div>
          <div className="flex flex-col justify-between gap-1">
            <div>
              <h4 className="text-xl font-semibold">{title}</h4>
              <div id="categories" className="flex flex-row items-start p-2">
                <div className="border p-2">{category}</div>
              </div>
              <div>
                <p className="text-gray-500 font-light">{description}</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center xl:flex-col gap-2">
              <div>
                <p className="text-gray-500 font-medium text-[12px]">PRICE</p>
                <h5>${price}</h5>
              </div>
              <div>
                <button className="bg-blue-800 text-white text-sm font-medium p-2 sm:w-full">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
