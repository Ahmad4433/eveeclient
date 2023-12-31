import React from "react";
import "./Feature.css";
import { IoIosArrowDown } from "react-icons/io";
const Feature = ({ data }) => {
  if (data) console.log(data);

  return (
    <div className="feature-main">
      {data &&
        data.map((pro, index) => {
          return pro.features.map((fea, index) => {
            return (
              <div key={index} className="features">
                <div className="feature-items">
                  <div className="feature-image">
                    <img
                      src={fea.image}
                      className="feature-img"
                      alt="feature"
                    />
                  </div>
                  <h4 className="feature-title">{fea.title}</h4>
                  <p className="feature-detail">{fea.detail}</p>
                </div>
              </div>
            );
          });
        })}
      <IoIosArrowDown className="feature-expend-icon" />
    </div>
  );
};

export default Feature;
