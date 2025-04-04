import { motion } from "motion/react";
import { brandsImg } from "../data/brandsImg";

import Rating from "../Rating/Rating";

import noplastic from "../../assets/img/icons/noplastic.png";
import response from "../../assets/img/icons/response.png";
import nightday from "../../assets/img/icons/day-night.svg";
import comfort from "../../assets/img/icons/comfort.png";
import benefits_ekaterina from "../../assets/img/benefits/benef_ekat.jpg";

import "./benefits.css";

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <h6 className="benefits-title">as seen in</h6>
        <div className="benefits-artboard">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="brands-list"
          >
            {brandsImg.map((brand, index) => {
              return (
                <a key={index} to="/">
                  <img src={brand} />
                </a>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="brands-list"
          >
            {brandsImg.map((brand, index) => {
              return (
                <a key={index} href="#!">
                  <img src={brand} />
                </a>
              );
            })}
          </motion.div>
        </div>

        <div className="benefits-content">
          <h2 className="benefits-text__title">
            Loungewear you can be proud of.
          </h2>
          <div className="benefits-content__wrap">
            <div className="benefits-text">
              <div className="benefits-advants">
                <div className="benefits-advants__desc">
                  <img
                    className="benefits-advants__img"
                    src={noplastic}
                    alt="noplastic"
                  />
                  <div className="benefits-advants__top">
                    <h5>Ethically sourced.</h5>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce
                      <br />
                      lobortis sapien facilisis tincidunt pellentesque. In eget
                      ipsum et felis finibus consequat.
                    </p>
                  </div>
                </div>
                <div className="benefits-advants__desc">
                  <img
                    className="benefits-advants__img"
                    src={response}
                    alt="response"
                  />
                  <div className="benefits-advants__top">
                    <h5>Responsibly made.</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce
                      <br />
                      lobortis sapien facilisis tincidunt pellentesque. In eget
                      ipsum et felis finibus consequat.
                    </p>
                  </div>
                </div>
                <div className="benefits-advants__desc">
                  <img
                    className="benefits-advants__img"
                    src={nightday}
                    alt="nightday"
                  />
                  <div className="benefits-advants__top">
                    <h5>Made for living in.</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce
                      <br />
                      lobortis sapien facilisis tincidunt pellentesque. In eget
                      ipsum et felis finibus consequat.
                    </p>
                  </div>
                </div>
                <div className="benefits-advants__desc">
                  <img
                    className="benefits-advants__img"
                    src={comfort}
                    alt="comfort"
                  />
                  <div className="benefits-advants__top">
                    <h5>Unimaginably comfortable.</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce
                      <br />
                      lobortis sapien facilisis tincidunt pellentesque. In eget
                      ipsum et felis finibus consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-img">
              <img src={benefits_ekaterina} alt="Benefits image" />
              <span>White Robe</span>
            </div>
          </div>
          <Rating />
        </div>
      </div>
    </section>
  );
}
