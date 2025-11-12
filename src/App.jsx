import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationContainer from './navigation/NavigationContainer.jsx';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import HomepageItemDetail from './components/homepage/HomepageItemDetail.jsx';

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
            <Route path="/:slug" element={<HomepageItemDetail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
