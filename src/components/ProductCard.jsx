import Button from "./Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Rating } from "@mui/material";
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
  reviewsCount = 0,
}) => {
  return (
    <>
      <a
        style={{ backgroundColor: "rgb(20,20,20)" }}
        className="border-2 px-4 border-gray-600 rounded-sm shadow-sm p-2 cursor-pointer hover:-translate-y-1 transition-all"
        href={`/product/${id}`}
      >
        <div className="flex flex-col justify-between  gap-0 h-full w-full">
          <div className="w-full flex py-3">
            <img
              src={thumbnailSrc}
              alt={title + "_thumbnail"}
              className="relative"
              style={{ margin: "0 auto" }}
            />
            <div className="flex gap-2 mt-3 absolute bg-gray-800 p-3 rounded-full text-gray-600 hover:text-red-600 hover:-translate-y-0.5 transition-all">
              <i className="fa-regular fa-heart"></i>
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
              <div className="flex flex-row gap-2">
                <Rating
                  defaultValue={rating}
                  precision={0.5}
                  readOnly={true}
                  emptyIcon={<StarBorderIcon style={{ color: "gray" }} />}
                />
                <div>
                  <i className="fa-regular fa-message mr-2"></i>
                  <span>{reviewsCount}</span>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row justify-between sm:items-center mt-5 flex-col gap-3 pb-3">
              <div>
                <p className="text-gray-500 font-medium text-[12px]">PRICE</p>
                <h4 className="font-semibold text-2xl">{price}$</h4>
              </div>
              <div className="w-full sm:w-auto">
                <Button>
                  <i className="fa-solid fa-cart-shopping text-lg"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProductCard;
