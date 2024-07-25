import './App.css';

import Navbar from './components/Layout/Navbar/Navbar';
import SceneText from './components/Sections/SceneText/SceneText';
import InfoCards from './components/Sections/InfoCards/InfoCards';
import FeatureCards from './components/Sections/FeatureCards/FeatureCards';
import BrushStroke from './components/UI/BrushStroke/BrushStroke';
import ChallengesAndSolutions from './components/Sections/ChallengesAndSolutions/ChallengesAndSolutions';
import HeroSlider from './components/Sections/HeroSlider/HeroSlider';
import StackedCards from './components/Sections/StackedCards/StackedCards';
import VideWithContent from './components/Sections/VideoWithContent/VideoWithContent';

function App() {
  return (
    <>
      <Navbar />
      {/* You can open the svg file in a code editor and change the
          fill color for the svg. I have placed 3 variants of the brush
          stroke so you can pick whichever you like.
          1. my-line-2.svg
          2. my-line-3.svg
          3. BrushStroke (component - color can be controlled via color prop)
      */}
      {/* <img src='./my-line-2.svg' /> */}
      <VideWithContent
        videoSrc='./meeting.mp4'
        title='Welcome to Our Site'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        link='https://www.google.com'
      />
      <img src='./my-line-2.svg' className='header-svg' />
      {/* <BrushStroke color='#c1aaf2' /> */}
      <HeroSlider />
      <img src='./my-line-3.svg' />
      {/* <BrushStroke color='#c1aaf2' /> */}
      <ChallengesAndSolutions />
      <img src='./my-line-2.svg' />
      {/* <BrushStroke color='#c1aaf2' /> */}
      <FeatureCards />
      <img src='./my-line-3.svg' />
      <StackedCards />
      <img src='./my-line-3.svg' />
      {/* <BrushStroke color='#c1aaf2' /> */}
      <InfoCards />
      <img src='./my-line-3.svg' />
      {/* <BrushStroke color='#c1aaf2' /> */}
      <SceneText />
      {/* <BrushStroke color='#c1aaf2' /> */}
      <img src='./my-line-3.svg' />
    </>
  );
}

export default App;
