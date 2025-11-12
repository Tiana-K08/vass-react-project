import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      <h2>Blog</h2>
      <Link to="/about">Read more about myself</Link>
    </div>
  );
}
