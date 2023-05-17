import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RxTrash } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteBrandImage } from "../../store/features/images/brandSlice";

const BrandItem = ({ image }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    setIsLoading(true);
    await dispatch(deleteBrandImage({ public_id: image.public_id }));
    setIsLoading(false);
  };
  return (
    <div className="col-6 col-md-4 col-lg-3 p-0">
      <div className="thumbnail p-2">
        <div
          className={`thumbnail-inner d-flex justify-content-center position-relative rounded-3 ${
            isLoading ? "loading" : ""
          }`}
        >
          <LazyLoadImage
            effect="blur"
            className="rounded-3 w-100 h-100"
            src={image.secure_url}
            alt=""
          />
          <div
            onClick={() => handleDelete()}
            role="button"
            style={{ width: "30px", height: "30px" }}
            className="delete position-absolute shadow top-50 start-50 translate-middle bg-secondary d-flex align-items-center justify-content-center rounded-circle"
          >
            <RxTrash className="fs-5 text-danger" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandItem;
