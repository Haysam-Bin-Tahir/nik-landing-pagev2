import './App.css';

import Navbar from './components/Layout/Navbar/Navbar';
import Header from './components/Sections/Header/Header';
import AboutUs from './components/Sections/AboutUs/AboutUs';
import Features from './components/Sections/Features/Features';
import Mission from './components/Sections/Mission/Mission';
import Leadership from './components/Sections/Leadership/Leadership';
import VideoBanner from './components/Sections/VideoBanner/VideoBanner';
import VideoSlider from './components/Sections/VideoSlider/VideoSlider';
import Footer from './components/Layout/Footer/Footer';
import SceneText from './components/Sections/SceneText/SceneText';
import InfoCards from './components/Sections/InfoCards/InfoCards';
import FeatureCards from './components/Sections/FeatureCards/FeatureCards';
import BrushStroke from './components/UI/BrushStroke/BrushStroke';
import ChallengesAndSolutions from './components/Sections/ChallengesAndSolutions/ChallengesAndSolutions';

function App() {
  return (
    <>
      <Navbar />
      {/* You can open the svg file in a code editor and change the
          fill color for the svg. I have placed 3 variants of the brush
          stroke so you can pick whichever you like.
          1. my-line-2.svg
          2. my-line-3.svg
          3. BrushStroke (component)
      */}
      <img src='./my-line-2.svg' className='header-svg' />
      {/* <BrushStroke color='#c1aaf2' /> */}
      <VideoSlider />
      <img src='./my-line-3.svg' />
      {/* <BrushStroke color='#c1aaf2' /> */}
      <ChallengesAndSolutions />
      <img src='./my-line-2.svg' />
      {/* <BrushStroke color='#c1aaf2' /> */}
      <FeatureCards />
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
