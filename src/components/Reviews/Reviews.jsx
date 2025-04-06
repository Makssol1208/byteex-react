import Button from "../Button/Button";

import { reviewsPhotos } from "../data/reviewsPhotos";
import { reviewsData } from "../data/reviewsData";
import stars from "../../assets/img/hero/stars.svg";

import "./reviews.css";

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews-header">
        <h3 className="reviews-header__title">What are our fans saying?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>
      <div className="container-large">
        <div className="reviews-photos">
          {reviewsPhotos.map((photo, index) => (
            <img src={photo} key={index} alt={photo} />
          ))}
        </div>
      </div>

      <div className="container-small">
        <div className="reviews-comments__wrapper">
          {reviewsData.map((card, index) => (
            <div
              key={index}
              className={
                card == reviewsData[1]
                  ? "reviews-comments lg"
                  : "reviews-comments"
              }
            >
              <div className="reviews-comments__head">
                <span className="reviews-comments__user"></span>
                <div className="reviews-wrap">
                  <div className="reviews-comments__stars">
                    <img src={card.img} alt="rating" />
                  </div>
                  <p className="reviews-comments__name">{card.name}</p>
                </div>
              </div>
              <div className="reviews-comments__text">
                <p>{card.text}</p>
              </div>
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
    </section>
  );
}
