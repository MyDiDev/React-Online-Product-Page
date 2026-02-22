import { Rating } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";
import { RemoveButton } from "./Button";
import Button from "./Button";
import { removeFromCart } from "../services/cart";
import toast, { Toaster } from "react-hot-toast";

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
  availabilityStatus = "",
}) => {
  const navigate = useNavigate();

  const removeCartItem = (id) => {
    if (removeFromCart(id)) {
      toast.success(`${title} was successfully removed from the cart`);
      window.location.reload();
    }
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="bg-black/80 backdrop-blur-lg border-2 border-gray-700 rounded p-3">
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <div>
            <a href={`/product/${id}`} className="cursor-pointer">
              <img
                src={thumbnailSrc}
                className="w-67"
                alt={title + "_preview"}
              />
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <div className="space-y-2">
              <h5 className="text-3xl font-bold">{title}</h5>
              <div className="flex flex-row gap-2 items-center">
                <Rating
                  defaultValue={rating}
                  precision={0.5}
                  readOnly={true}
                  emptyIcon={<StarBorderIcon style={{ color: "gray" }} />}
                />
                <p
                  className={
                    availabilityStatus != "In Stock"
                      ? "p-1 px-4 bg-red-600 text-white cursor-pointer rounded-full shadow-sm my-2 border border-red-600"
                      : "p-1 px-4 bg-green-800 text-white cursor-pointer rounded-full shadow-sm my-2 border border-green-700"
                  }
                >
                  {availabilityStatus}
                </p>
              </div>

              <p id="description-preview" className="text-md text-gray-400 ">
                {description}
              </p>
              <div className="flex justify-between gap-4 sm:grid sm:grid-cols-2 my-3 mt-5">
                <div>
                  <p className="text-gray-500 font-medium text-[12px]">PRICE</p>
                  <h4 className="font-semibold text-2xl">${price}</h4>
                </div>
                <div className="flex flex-row gap-2 sm:items-end sm:justify-end z-20">
                  <RemoveButton
                    onclick={() => removeCartItem(id)}
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <i className="fa-solid fa-x text-lg"></i>
                      <span className="mr-3">Remove item</span>
                    </div>
                  </RemoveButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
