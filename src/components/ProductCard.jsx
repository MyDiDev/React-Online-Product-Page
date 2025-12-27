import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id = -1,
  title = "",
  description = "",
  category = "",
  price = "unavaible",
  rating = 0,
  thumbnailSrc = "",
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-gray-100/60 rounded-sm shadow-sm p-2 cursor-pointer hover:-translate-y-1 transition-all"
        onClick={() => navigate(`/product/${id}`)}
      >
        <div className="flex flex-col justify-between  gap-0 h-full w-full">
          <div className="w-full">
            <img src={thumbnailSrc} alt={title + "_thumbnail"} />
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-semibold">{title}</h4>
              <div id="categories" className="flex flex-row items-start my-2">
                <div className="border p-1 px-2 text-sm rounded-full">
                  {category}
                </div>
              </div>
              <div>
                <p
                  id="product_description_preview"
                  className="text-gray-500 font-light text-[12px] sm:text-sm"
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row justify-between sm:items-center mt-5 flex-col gap-3 pb-3">
              <div>
                <p className="text-gray-500 font-medium text-[12px]">PRICE</p>
                <h4 className="font-semibold text-xl">${price}</h4>
              </div>
              <div className="w-full sm:w-auto">
                <button className="bg-blue-800 rounded-sm cursor-pointer text-white text-sm font-medium p-2 w-full">
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
