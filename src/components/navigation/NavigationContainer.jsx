import { Link } from 'react-router-dom';

export default function NavigationContainer() {
  return (
    <div>
      <Link to="/">Homepage</Link>
      <Link to="/about-me">About</Link>
      <Link to="/contact">Contact</Link>
      <button>Blog</button>
      {false ? <button>Add Blog</button> : null}
    </div>
  );
}
