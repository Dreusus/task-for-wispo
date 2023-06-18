import React from 'react';
import useWindowSize from '../../utils/useWindowSize'
import {
  circle__big,
  circle__small
} from '../../images/svg/svg';

const Separation = () => {
  const windowSize = useWindowSize()

  return (
    <div className="separation">
      <img src={circle__big} alt="круг" className="separation__image separation__image_size_big" />
      <img src={circle__small} alt="круг" className="separation__image separation__image_size_small" />
      {windowSize < 1700 ? <img src={circle__small} alt="круг" className="separation__image_size_small" /> : ''}
      {windowSize < 700 ?
        <>
          <img src={circle__small} alt="круг" className="separation__image separation__image_size_small" />
          <img src={circle__small} alt="круг" className="separation__image separation__image_size_small" />
        </>
        :
        ''}
    </div>
  )
}

export default Separation;