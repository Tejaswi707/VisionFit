import React from 'react';
import './FitPicks.css';

import yogaImg from '../../assets/yoga.png';
import cardioImg from '../../assets/cardio.png';
import strengthImg from '../../assets/strength.png';
import absImg from '../../assets/abs.png';
import flexibilityImg from '../../assets/flexibility.png';
import pilatesImg from '../../assets/pilates.png';
import hiitImg from '../../assets/hiit.png';
import danceImg from '../../assets/dance.png';
import warmupImg from '../../assets/warmup.png';
import zumbaImg from '../../assets/zumba.png'; // Add zumba image

const FitPicks = () => {
  const workouts = [
    { name: 'Yoga', image: yogaImg, link: 'https://www.youtube.com/watch?v=v7AYKMP6rOE' },
    { name: 'Cardio', image: cardioImg, link: 'https://www.youtube.com/watch?v=ml6cT4AZdqI' },
    { name: 'Strength', image: strengthImg, link: 'https://www.youtube.com/watch?v=U0bhE67HuDY' },
    { name: 'Abs', image: absImg, link: 'https://www.youtube.com/watch?v=1919eTCoESo' },
    { name: 'Flexibility', image: flexibilityImg, link: 'https://www.youtube.com/watch?v=i6TzP2COtow' },
    { name: 'Pilates', image: pilatesImg, link: 'https://www.youtube.com/watch?v=lCg_gh_fppI' },
    { name: 'HIIT', image: hiitImg, link: 'https://www.youtube.com/watch?v=ml6cT4AZdqI' },
    { name: 'Dance', image: danceImg, link: 'https://www.youtube.com/watch?v=FHo9QaJ1DyI' },
    { name: 'Warm-up', image: warmupImg, link: 'https://www.youtube.com/watch?v=R0mMyV5OtcM' },
    { name: 'Zumba', image: zumbaImg, link: 'https://youtu.be/opAL9UPg2d0?si=CNV4MsTfU2RTHkLq' },
  ];

  return (
    <div className="fitpicks-wrapper">
      <h2 className="fitpicks-title">Explore Your Fit Picks</h2>
      <div className="fitpicks-grid">
        {workouts.map((item, index) => (
          <div key={index} className="fitpicks-card" onClick={() => window.open(item.link, '_blank')}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitPicks;
