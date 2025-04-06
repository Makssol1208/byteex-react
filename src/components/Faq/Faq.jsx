import Button from "../Button/Button";

import faqImg from "../../assets/img/faq.jpg";
import stars from "../../assets/img/hero/stars.svg";

import "./faq.css";

export default function Faq() {
  return (
    <section className="faq">
      <div className="container">
        <div className="faq-wrapper">
          <div className="faq-left">
            <h2 className="faq-title">Frequently asked questions.</h2>
            <hr />
            <details open>
              <summary>lorem ipsum dolor sit amet</summary>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </details>
            <details>
              <summary>lorem ipsum dolor sit amet</summary>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </details>
            <details>
              <summary>lorem ipsum dolor sit amet</summary>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </details>
            <details>
              <summary>lorem ipsum dolor sit amet</summary>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </details>
            <details>
              <summary>lorem ipsum dolor sit amet</summary>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </details>
          </div>

          <div className="faq-img">
            <img src={faqImg} alt="Faq image" />
          </div>
          <div className="rating-wrap mobile">
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
