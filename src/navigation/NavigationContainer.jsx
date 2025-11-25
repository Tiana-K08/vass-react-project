import { NavLink } from 'react-router-dom';

export default function NavigationContainer() {
  return (
    <div className="nav-container">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/blog">Blog</NavLink>
        </div>
        {/* {false ? <button>Add Blog</button> : null} */}
      </div>
      <div className="right-side">Tetiana Kononenko</div>
    </div>
  );
}
