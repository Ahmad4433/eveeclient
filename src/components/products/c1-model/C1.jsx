import React, { useEffect, useState } from "react";
import "./C1.css";
import httpAction from "../../../store/actions/httpAction";
import { useDispatch } from "react-redux";
import urlList from "../../../store/utils/urlList";
import MiniSlider from "../../slider/MiniSlider";
import Product from "./Product";
import Feature from "../c1-features/Feature";
const C1 = () => {
  const dispathc = useDispatch();
  const list = urlList();
  const [product, setProduct] = useState();
  const data = {
    url: list.loadProduct,
  };

  useEffect(() => {
    const getData = async () => {
      const result = await dispathc(httpAction(data));

      setProduct(result);
    };

    getData();
  }, [dispathc]);

  const c1Model =
    product &&
    product.formatedProduct
      .filter((pro) => pro.model === "c1")
      .map((pro) => {
        return pro.images;
      })
      .flat();

  const productContent =
    product && product.formatedProduct.filter((pro) => pro.model === "c1");

  return (
    <div>
      <div className="c1-main">
        {window.innerWidth >= 756 && (
          <div className="c1-product-content-sec">
            <Product data={productContent} />
          </div>
        )}
        <div className="c1-mini-slider-sec">
          <MiniSlider data={c1Model} />
        </div>

        {window.innerWidth <= 756 && (
          <div className="c1-product-content-sec">
            <Product data={productContent} />
          </div>
        )}
      </div>
      <Feature data={productContent} />
    </div>
  );
};

export default C1;
