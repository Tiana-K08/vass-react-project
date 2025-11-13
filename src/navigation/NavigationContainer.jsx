import { NavLink } from 'react-router-dom';

export default function NavigationContainer() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      {/* {false ? <button>Add Blog</button> : null} */}
    </div>
  );
}
