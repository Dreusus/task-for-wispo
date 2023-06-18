import React from "react";
import circle__big from '../../images/circle__big.svg'
import circle__small from '../../images/circle__small.svg';
const Separation = () => {
  return (
    <div className="separation">
      <img src={circle__big} alt="круг" className="separation__image_size_big" />
      <img src={circle__small} alt="круг" className="separation__image_size_small" />
    </div>
  )
}

export default Separation;