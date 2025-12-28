import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({
  id = -1,
  title = "",
  description = "",
  category = "",
  price = "unavaible",
  discountRate = null,
  rating = 0,
  thumbnailSrc = "",
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ backgroundColor: "rgb(20,20,20)" }}
        className="backdrop-blur-lg border-2 px-4 border-gray-600 rounded-sm shadow-sm p-2 cursor-pointer hover:-translate-y-1 transition-all"
        onClick={() => navigate(`/product/${id}`)}
      >
        <div className="flex flex-col justify-between  gap-0 h-full w-full">
          <div className="w-full flex">
            <img src={thumbnailSrc} alt={title + "_thumbnail"} className="relative" style={{margin: '0 auto'}} />
            <div className="flex flex-col gap-2 mt-3 absolute bg-gray-800/90 p-3 rounded-full">
              <i style={{ color: "gray" }} className="fa-regular fa-heart"></i>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-base sm:text-2xl font-semibold">{title}</h4>
              <div>
                <p
                  id="description-preview"
                  className="text-gray-400 font-light text-[12px] sm:text-sm"
                >
                  {description}
                </p>
              </div>
              <div>

              </div>
            </div>
            <div className="flex sm:flex-row justify-between sm:items-center mt-5 flex-col gap-3 pb-3">
              <div>
                <p className="text-gray-500 font-medium text-[12px]">PRICE</p>
                <h4 className="font-semibold text-2xl">{price}$</h4>
              </div>
              <div className="w-full sm:w-auto">
                <button className="bg-white rounded-sm cursor-pointer text-black text-sm font-medium p-4 w-full">
                  <i className="fa-solid fa-cart-shopping text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
