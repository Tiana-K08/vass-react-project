import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <h3>We couldn't find that page</h3>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
}
