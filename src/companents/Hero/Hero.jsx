import React from 'react'
import "./Hero.scss"
import { useTranslation } from 'react-i18next';
import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';



export default function CountUp({
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



export const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
        <section>
            <div className="hero">
                <h1>{t('hero.title')}</h1>
                <p>{t('hero.description')}</p>
                <button type="submit">{t('hero.button')}</button>
            </div>
            
           <div className="bootom-hero">
  <div className="hero-item">
    <div className="hero-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19h16" />
        <path d="M20 7v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
        <path d="M12 11h.01" />
        <rect width="4" height="3" x="8" y="7" rx="1" />
      </svg>
    </div>
    <div className="hero-content">
      <div className="counter-wrapper">
        <CountUp from={0} to={1400} separator="." direction="up" duration={0.5} className="count-up-text" delay={0} />
        <span className="count-up-plus">+</span>
      </div>
      <p className="hero-label">{t('stats.courses')}</p>
    </div>
  </div>

  <div className="hero-item">
    <div className="hero-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z" />
        <path d="M3 11h18" />
        <circle cx="12" cy="7" r="1" />
      </svg>
    </div>
    <div className="hero-content">
      <div className="counter-wrapper">
        <CountUp from={0} to={1100} separator="." direction="up" duration={0.5} className="count-up-text" delay={0} />
        <span className="count-up-plus">+</span>
      </div>
      <p className="hero-label">{t('stats.instructors')}</p>
    </div>
  </div>

  <div className="hero-item">
    <div className="hero-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
        <path d="M14 9h5v5" />
      </svg>
    </div>
    <div className="hero-content">
      <div className="counter-wrapper">
        <CountUp from={0} to={800} separator="," direction="up" duration={1} className="count-up-text" delay={0} />
        <span className="count-up-plus">+</span>
      </div>
      <p className="hero-label">{t('stats.stories')}</p>
    </div>
  </div>
</div>
        </section>
    </div>
  )
}