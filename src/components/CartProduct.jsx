import Button from "./Button";
import { Rating } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <>
      <a href={`/product/${id}`} className="cursor-pointer">
        <div className="bg-black/80 backdrop-blur-lg border-2 border-gray-700 rounded p-3">
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <div>
              <img
                src={thumbnailSrc}
                className="w-67"
                alt={title + "_preview"}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="space-y-2">
                <h5 className="text-3xl font-bold">{title}</h5>
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
                <p id="description-preview" className="text-md text-gray-400 ">
                  {description}
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-3 mt-5">
                  <div>
                    <p className="text-gray-500 font-medium text-[12px]">
                      PRICE
                    </p>
                    <h4 className="font-semibold text-2xl">${price}</h4>
                  </div>
                  <Button styles={{ padding: "8px 25px", width: "auto" }}>
                    <div className="text-center">
                      <span className="mr-3">Add to cart</span>
                      <i className="fa-solid fa-cart-shopping text-lg"></i>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default CartProduct;
