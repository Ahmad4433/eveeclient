import React, { useEffect } from "react";
import "./Product.css";
import { Rating } from "@mui/material";
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineNoteAlt } from "react-icons/md";
import OfferPresent from "./OfferPresent";
import C1Thumbnil from "./C1Thumbnil";
import LikeHandle from "./LikeHandle";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const Product = ({ data }) => {
  const isValid = useSelector((state) => state.offerChecker.isValid);

  const isAvailabel = data && data.map((pro) => pro.stock) > 0;

  return (
    <div className="c1-content-main">
      {window.innerWidth <= 756 && (
        <div className="c1-thumbnil-sec">
          <C1Thumbnil data={data} />
        </div>
      )}

      {data &&
        data.map((pro, index) => {
          return (
            <div key={index} className="c1-content">
              <div className="c1-name-sec">
                <h2 className="c1-name">{pro.name}</h2>

                {isValid && (
                  <span className="c1-offer-per">-{pro.offerPercetange}%</span>
                )}
              </div>

              <div className="c1-model-sec">
                <span className="c1-model">model.</span>
                <h4>{pro.model}</h4>
              </div>

              <div className="c1-detail-sec">
                <p className="c1-detail">{pro.detail}</p>
              </div>
              <div className="c1-bar"></div>
              <div className="c1-price-sec">
                <h4 className={isValid ? "c1-price-formated" : "c1-price"}>
                  {pro.price}
                </h4>
                {isValid ? (
                  <div>
                    <h4 className="c1-offer-price">{pro.offerPrice}</h4>
                    <div className="c1-offer-timer">
                      <OfferPresent data={pro.offerEndDate} />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="c1-bar"></div>
              <div className="c1-rating-sec">
                <Rating
                  style={{ color: "seaGreen" }}
                  defaultValue={3}
                  readOnly
                  max={5}
                />

                <span className="c1-rating-count">
                  ({pro.ratingCount || 1})
                </span>
                <div className="like-sec">
                  <LikeHandle data={data} />
                </div>
              </div>
              <div className="c1-stock-sec">
                <IoMdDoneAll
                  className={
                    isAvailabel ? "c1-stock-icon" : "c1-stock-formated-icon"
                  }
                />
                <span className="c1-stock">
                  {isAvailabel ? "in stock." : "out of stock."}
                  {pro.stock}
                </span>
              </div>
              <div className="c1-bar"></div>
              <div className="c1-action-sec">
                <Button variant="contained" color="secondary">
                  <div className="c1-action">
                    <span>add to cart</span>
                    <MdOutlineShoppingCart className="c1-action-icon" />
                  </div>
                </Button>
                <Button variant="outlined" color="primary">
                  <div className="c1-action">
                    <span>book now</span>
                    <MdOutlineNoteAlt className="c1-action-icon" />
                  </div>
                </Button>
              </div>
            </div>
          );
        })}
      {window.innerWidth >= 756 && (
        <div className="c1-thumbnil-sec">
          <C1Thumbnil data={data} />
        </div>
      )}
    </div>
  );
};

export default Product;
