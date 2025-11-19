import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>There was a problem loading this page. Please try again.</p>
      <p>Error status: {error?.status}.</p>
      <p>Messag: {error?.statusText || error?.message}.</p>
      <Link to="/">Return to the homepage</Link>
    </div>
  );
}
