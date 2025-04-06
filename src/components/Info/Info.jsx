import { infoBanner } from "../data/infoBanner";

import "./info.css";

export default function Info() {
  return (
    <section className="info">
      <div className="info-wrapper">
        <h3>Our total green impact</h3>
        <div className="info-block__wrapper">
          {infoBanner.map((banner, index) => (
            <div key={index} className="info-block">
              <img src={banner.img} alt="CO2" />
              <span className="info-block__strong">{banner.numbers}</span>
              <span className="info-block__light">{banner.text}</span>
              <hr />
            </div>
          ))}
         
        </div>
      </div>
    </section>
  );
}
