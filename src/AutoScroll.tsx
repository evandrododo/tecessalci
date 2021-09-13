import { useEffect, useState } from "react";

import scroll0 from './assets/img/scroll0.png'
import scroll1 from './assets/img/scroll1.png'
import scroll2 from './assets/img/scroll2.png'

const AutoScroll = () => {

  const [velocity, setVelocity] = useState(0);

  const softScroll = () => {
    window.scrollBy({
      top: 15 * velocity * velocity,
      left: 0,
      behavior: 'smooth'
    });
  }

  let [scrolling, setScrolling] = useState<any>();

  
  useEffect(() => {
    clearInterval(scrolling)
    if (velocity > 0) {
      setScrolling(setInterval(softScroll, 100));
    } else {
      setScrolling(null)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [velocity]);

  return (
    <div className='autoscroll'>
      <button
        className='column'
        onClick={() => setVelocity(velocity >= 2 ? 0 : velocity + 1)}
      >
        {velocity === 0 && <img src={scroll0} alt='scroll' />}
        {velocity === 1 && <img src={scroll1} alt='scroll' />}
        {velocity === 2 && <img src={scroll2} alt='scroll' />}
        <span>Scroll automático</span>
      </button>
    </div>
  );
}

export default AutoScroll;
