import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationContainer from './components/navigation/NavigationContainer.jsx';
import Homepage from './components/pages/Homepage.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Blog from './components/pages/Blog.jsx';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <NavigationContainer />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
