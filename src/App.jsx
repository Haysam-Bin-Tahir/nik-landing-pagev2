import './App.css'

import Navbar from './components/Layout/Navbar/Navbar'
import Header from './components/Sections/Header/Header'
import AboutUs from './components/Sections/AboutUs/AboutUs'
import Features from './components/Sections/Features/Features'
import Mission from './components/Sections/Mission/Mission'
import Leadership from './components/Sections/Leadership/Leadership'
import VideoBanner from './components/Sections/VideoBanner/VideoBanner'
import VideoSlider from './components/Sections/VideoSlider/VideoSlider'
import Footer from './components/Layout/Footer/Footer'
import SceneText from './components/Sections/SceneText/SceneText'

function App() {

  return (
    <>
        <Navbar /> 
        <VideoSlider /> 
        <SceneText />
        <Header />
        <AboutUs />
        <Features />
        <Mission />
        <VideoBanner />
        <Leadership />
        <Footer />
    </>
  )
}

export default App;
