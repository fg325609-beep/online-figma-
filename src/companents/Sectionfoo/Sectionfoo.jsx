import React, { useCallback, useEffect, useRef } from 'react'
import "./Sectionfoo.scss"
import { useInView, useMotionValue, useSpring } from 'framer-motion'; // Ko'p hollarda 'motion/react' emas, 'framer-motion' ishlatiladi. Loyihangizga qarab tekshiring.

// 1. "default" so'zini olib tashladik (Named export qildik)
export function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = num => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    latest => {
      const hasDecimals = maxDecimals > 0;
      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };
      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') onEnd();
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });
    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}


// 2. Asosiy komponent (default export bo'lib qoladi)
const Sectionfoo = () => {
  return (
    <div>
  <section className='sect-foo'>
    <div className="timers">
      
      <div className="timer">
        <div className="num-box">
          <CountUp from={0} to={85} separator="," direction="up" duration={1} className="count-up-text" delay={0} />
          <span>+</span>
        </div>
        <p>Online Courses</p>
      </div>

      <div className="timer">
        <div className="num-box">
          <CountUp from={0} to={850} separator="," direction="up" duration={1} className="count-up-text" delay={0} />
          <span>+</span>
        </div>
        <p>Expert Tutors</p>
      </div>

      <div className="timer">
        <div className="num-box">
          <CountUp from={0} to={55} separator="," direction="up" duration={1} className="count-up-text" delay={0} />
          <span>+</span>
        </div>
        <p>Global Branches</p>
      </div>

      <div className="timer">
        <div className="num-box">
          <CountUp from={0} to={25} separator="," direction="up" duration={1} className="count-up-text" delay={0} />
          <span>+</span>
        </div>
        <p>Award Winning</p>
      </div>

    </div>
  </section>
</div>
  )
}

export default Sectionfoo;