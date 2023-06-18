import React, { useState, useEffect } from 'react';

import circle__big from '../../images/circle__big.svg'
import circle__small from '../../images/circle__small.svg';
const Separation = () => {

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="separation">
      <img src={circle__big} alt="круг" className="separation__image_size_big" />
      <img src={circle__small} alt="круг" className="separation__image_size_small" />
      {windowSize < 1700 ? <img src={circle__small} alt="круг" className="separation__image_size_small" /> : ''}
      {windowSize < 700 ?
        <>
          <img src={circle__small} alt="круг" className="separation__image_size_small" />
          <img src={circle__small} alt="круг" className="separation__image_size_small" />
        </>
        :
        ''}
    </div>
  )
}

export default Separation;