import React from 'react';
import HeroSlider from '../components/Sections/HeroSlider/HeroSlider';
import ChallengesAndSolutions from '../components/Sections/ChallengesAndSolutions/ChallengesAndSolutions';
import FeatureCards from '../components/Sections/FeatureCards/FeatureCards';
import StackedCards from '../components/Sections/StackedCards/StackedCards';

export default function OtherPage() {
  return (
    <div>
      OtherPage
      <HeroSlider />
      <img src='./my-line-3.svg' />
      {/* <BrushStroke color='#c1aaf2' /> */}
      <ChallengesAndSolutions />
      <img src='./my-line-2.svg' />
      {/* <BrushStroke color='#c1aaf2' /> */}
      <FeatureCards />
      <img src='./my-line-3.svg' />
      <div id='other-page-test'>
        <StackedCards />
      </div>
    </div>
  );
}
