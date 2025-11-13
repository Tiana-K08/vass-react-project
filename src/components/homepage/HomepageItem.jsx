import { Link } from 'react-router-dom';

export default function HomepageItem(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <Link to={`/home/${props.url}`}>Link to {props.url}</Link>
    </>
  );
}
