import React, { useState } from "react";
import "./LikeHandle.css";
import { FcLike } from "react-icons/fc";
import { PiHeartLight } from "react-icons/pi";
import httpAction from "../../../store/actions/httpAction";
import urlList from "../../../store/utils/urlList";
import { useDispatch } from "react-redux";
const LikeHandle = ({ data }) => {
  const [isClicked, setIsClicked] = useState(localStorage.getItem("state"));
  const [likeCount, setLikeCount] = useState(data && data[0].like);
  const dispatch = useDispatch();
  const list = urlList();
  const urlData = {
    url: list.addLike,
    method: "POST",
    body: data && { productId: data[0].id },
  };

  const removeData = {
    url: list.removeLike,
    method: "POST",
    body: data && { productId: data[0].id },
  };

  const clikHandler = () => {
    setIsClicked(!isClicked);
  };

  const addHandler = () => {
    dispatch(httpAction(urlData));
    localStorage.setItem("state", true);
    setLikeCount((preLikeCount) => preLikeCount + 1);
  };
  const removeHandler = () => {
    dispatch(httpAction(removeData));
    localStorage.removeItem("state");
    setLikeCount((prevLikeCount) => prevLikeCount - 1);
  };

  return (
    <div className="like-main">
      <div onClick={clikHandler} className="like">
        {isClicked ? (
          <FcLike onClick={removeHandler} className="like-icon" />
        ) : (
          <PiHeartLight onClick={addHandler} className="like-icon" />
        )}
        <span className="like-count">{likeCount && likeCount}</span>
      </div>
    </div>
  );
};

export default LikeHandle;
