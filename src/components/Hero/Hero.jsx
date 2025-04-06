import "./hero.css";

import LOGO from "../../assets/img/hero/LOGO.png";
import HERO from "../../assets/img/hero/hero.png";

import nightday from "../../assets/img/icons/nightday.png";
import noplastic from "../../assets/img/icons/noplastic.png";
import comfort from "../../assets/img/icons/comfort.png";
import stars from "../../assets/img/hero/stars.svg";
import user from "../../assets/img/hero/user_comment.png";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-logo">
          <a href="#!">
            <img src={LOGO} className="hero-logo__img" alt="Logo" />
          </a>
        </div>

        <h1 className="hero-text__title">
          Don’t apologize for being <br />
          comfortable.
        </h1>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-advants">
              <div className="hero-advants__desc">
                <img
                  className="hero-advants__img"
                  src={nightday}
                  alt="nightday"
                />
                <p>Beautiful, comfortable loungewear for day or night.</p>
              </div>
              <div className="hero-advants__desc">
                <img
                  className="hero-advants__img"
                  src={noplastic}
                  alt="noplastic"
                />
                <p>No wasteful extras, like tags or plastic packaging.</p>
              </div>
              <div className="hero-advants__desc">
                <img
                  className="hero-advants__img"
                  src={comfort}
                  alt="comfort"
                />
                <p>
                  Our signature fabric is incredibly comfortable — unlike
                  anything you’ve ever felt.
                </p>
              </div>
            </div>
            <Button />
          </div>
          <div className="hero-img">
            <img src={HERO} alt="Hero image" />
          </div>
        </div>

        <div className="hero-comments">
          <div className="hero-comments__head">
            <div className="hero-comments__photo">
              <img src={user} alt="user" />
            </div>
            <p className="hero-comments__name">Amy P.</p>
            <div className="hero-comments__stars">
              <img src={stars} alt="rating" />
            </div>
            <span>One of 500+ 5 Star Reviews Online</span>
          </div>
          <div className="hero-comments__text">
            <p>
              Overjoyed with my Loungewear set. I have the jogger and the
              sweatshirt. Quality product on every level. From the compostable
              packaging, to the supplied washing bag, even the garments smells
              like fresh herbs when I first held them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
