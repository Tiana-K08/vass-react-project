import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Layout from './navigation/Layout.jsx';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import HomepageItemDetail from './components/homepage/HomepageItemDetail.jsx';

import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      <Route path=":slug" element={<HomepageItemDetail />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
