import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationContainer from './components/navigation/NavigationContainer.jsx';
import Homepage from './components/pages/Homepage.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import HomepageContainer from './components/homepage/HomepageContainer.jsx';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <NavigationContainer />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <HomepageContainer />
    </>
  );
}

export default App;
