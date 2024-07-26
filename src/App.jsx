import './App.css';

import Navbar from './components/Layout/Navbar/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import OtherPage from './pages/OtherPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/other' component={<OtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
