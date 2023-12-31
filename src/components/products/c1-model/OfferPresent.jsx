import React, { useEffect, useState } from "react";
import "./OfferPresent.css";
import { useDispatch } from "react-redux";
import { offerAction } from "../../../store/slices/offer-check";

const OfferPresent = ({ data }) => {
  const [remSec, setRemSec] = useState(0);
  const [remMin, setRemMin] = useState(0);
  const [remHrs, setRemHrs] = useState(0);
  const [remDays, setRemDays] = useState(0);
  const [date, setDate] = useState(
    data && new Date(data).getTime() - new Date().getTime()
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setDate((prevDate) => prevDate - 1000);

      const sec = Math.floor(date / 1000);
      const min = Math.floor(sec / 60);
      const hrs = Math.floor(min / 60);
      const days = Math.floor(hrs / 24);
      const newsec = sec % 60;
      const newMin = min % 60;
      const newHrs = hrs % 24;
      setRemSec(newsec);
      setRemMin(newMin);
      setRemHrs(newHrs);
      setRemDays(days);
    }, 1000);
    if (date <= 0) {
      clearInterval(interval);
      setDate(0);
      dispatch(offerAction.changeStatus(false));
    }
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="timer-main">
      <div className="timer">
        <div className="timer-item">
          <span>sec</span>
          <span>{remSec.toString().padStart(2, "0")}</span>
        </div>
        <div className="timer-item">
          <span>min</span>
          <span>{remMin.toString().padStart(2, "0")}</span>
        </div>
        <div className="timer-item">
          <span>hr</span>
          <span>{remHrs.toString().padStart(2, "0")}</span>
        </div>
        <div className="timer-item">
          <span>day</span>
          <span>{remDays.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};

export default OfferPresent;
