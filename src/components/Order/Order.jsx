
import vector from "../../assets/img/hero/Vector.png";
import noplastic from "../../assets/img/icons/noplast.svg";
import shipping from "../../assets/img/icons/ship.svg";
import dayNight from "../../assets/img/icons/day-night.svg";
import stars from "../../assets/img/hero/stars.svg";

import "./order.css";

export default function Order() {
  return (
    <section className="order">
      <h3 className="order-title">Comfort made easy</h3>
      <div className="order-cards">
        <div className="container-small">
          <div className="cards-wrapper">
            <div className="card">
              <img src={noplastic} alt="noplastic" />
              <h5>You save.</h5>
              <p>Browse our comfort sets and save 15% when you bundle.</p>
            </div>

            <div className="card center">
              <img src={shipping} alt="shipping" />
              <h5>We ship.</h5>
              <p>We ship your items within 1-2 days of receiving your order.</p>
            </div>

            <div className="card">
              <img src={dayNight} alt="Day and Night" />
              <h5>You enjoy!</h5>
              <p>Wear hernest around the house, out on the town, or in bed.</p>
            </div>
          </div>
          <div className="rating-wrap">
            <button className="btn">
              Customize Your Outfit
              <img src={vector} className="btn-img" alt="arrow button" />
            </button>
            <div className="rating-bottom">
              <div className="rating-stars">
                <img src={stars} alt="rating" />
              </div>
              <span>One of 500+ 5 Star Reviews Online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
