import vector from "../../assets/img/hero/Vector.png";

import "./button.css";

export default function Button() {
  return (
    <div>
      <button className="btn">
        Customize Your Outfit
        <img src={vector} className="btn-img" alt="arrow button" />
      </button>
    </div>
  );
}
