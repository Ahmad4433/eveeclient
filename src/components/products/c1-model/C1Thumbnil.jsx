import React from "react";
import "./C1Thumbnil.css";
import { thumbnilActions } from "../../../store/slices/c1-thumbnil";
import { useDispatch } from "react-redux";
const C1Thumbnil = ({ data }) => {
  const dispatch = useDispatch();

  const clickHandler = (value) => {
    dispatch(thumbnilActions.changeIndex(value));
  };

  return (
    <div className="thumbnil-main">
      {data &&
        data.map((pro, index) => {
          return pro.images.map((img, index) => {
            return (
              <div
                onClick={() => clickHandler(index)}
                key={index}
                className="thumbnils"
              >
                <img src={img} alt="thumbnil" className="thumbnil" />
              </div>
            );
          });
        })}
    </div>
  );
};

export default C1Thumbnil;
