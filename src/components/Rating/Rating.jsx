import vector from '../../assets/img/hero/Vector.png';
import stars from '../../assets/img/hero/stars.svg';

import './rating.css';

export default function Rating() {
  return (
    <div className="rating-wrap mobile">
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
  );
}
