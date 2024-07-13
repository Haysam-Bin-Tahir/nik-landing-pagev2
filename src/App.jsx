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
      {/* <img src='./my-line.svg' /> */}
      <BrushStroke color='#c1aaf2' />
      <VideoSlider />
      {/* <img src='./my-line.svg' /> */}
      <BrushStroke color='#c1aaf2' />
      <ChallengesAndSolutions />
      <BrushStroke color='#c1aaf2' />
      <FeatureCards />
      {/* <img src='./my-line.svg' /> */}
      <BrushStroke color='#c1aaf2' />
      <InfoCards />
      {/* <img src='./my-line.svg' /> */}
      <BrushStroke color='#c1aaf2' />
      <SceneText />
      <BrushStroke color='#c1aaf2' />
      {/* <img src='./my-line.svg' /> */}
    </>
  );
}

export default App;
