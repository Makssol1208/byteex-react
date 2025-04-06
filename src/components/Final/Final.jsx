import finalImg from "../../assets/img/final.png";
import stars from "../../assets/img/hero/stars.svg";
import finalGroup from "../../assets/img/icons/finalGroup.png";
import finalShip from "../../assets/img/icons/finalShip.png";
import finalRev from "../../assets/img/icons/finalRev.png";
import finalResp from "../../assets/img/icons/finalResp.png";

import Button from "../Button/Button";

import "./final.css";

export default function Final() {
  return (
    <section className="final">
      <div className="final-wrapper">
        <div className="final-header">
          <h3 className="final-header__title">Find something you love.</h3>
          <p>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit.Fusce
            lobortis sapien facilisis tincidunt pellentesque.In eget ipsum et
            felis finibus consequat.
          </p>
        </div>
        <div className="final-img">
          <img src={finalImg} alt="Final image" />
        </div>
        <div className="rating-wrap">
          <Button />
          <div className="rating-bottom">
            <div className="rating-stars">
              <img src={stars} alt="rating" />
            </div>
            <span>One of 500+ 5 Star Reviews Online</span>
          </div>
        </div>
        <img src={finalGroup} alt="Group" className="final-img__group" />
        <div className="final-bottom">
          <div className="final-bottom__block">
            <img src={finalShip} alt="Shipping" />
            <p>FREE Shipping on Orders over $200</p>
          </div>
          <hr />
          <div className="final-bottom__block">
            <img src={finalRev} alt="Shipping" />
            <p>Over 500+ 5 Star Reviews Online</p>
          </div>
          <hr />
          <div className="final-bottom__block">
            <img src={finalResp} alt="Shipping" />
            <p>Made ethically and responsibly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
