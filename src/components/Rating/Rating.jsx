import stars from "../../assets/img/hero/stars.svg";
import Button from "../Button/Button";

import "./rating.css";

export default function Rating() {
  return (
    <div className="rating-wrap mobile">
      <Button />
      <div className="rating-bottom">
        <div className="rating-stars">
          <img src={stars} alt="rating" />
        </div>
        <span>One of 500+ 5 Star Reviews Online</span>
      </div>
    </div>
  );
}
