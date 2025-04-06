import stars from "../../assets/img/hero/stars.svg";
import Button from "../Button/Button";

import { orderCards } from "../data/orderCards";

import "./order.css";

export default function Order() {
  return (
    <section className="order">
      <h3 className="order-title">Comfort made easy</h3>
      <div className="order-cards">
        <div className="container-small">
          <div className="cards-wrapper">
            {orderCards.map((card, index) => (
              <div
                className={card == orderCards[1] ? "card center" : "card"}
                key={index}
              >
                <img src={card.image} alt={card.title} />
                <h5>{card.title}</h5>
                <p>{card.text}</p>
              </div>
            ))}
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
        </div>
      </div>
    </section>
  );
}
