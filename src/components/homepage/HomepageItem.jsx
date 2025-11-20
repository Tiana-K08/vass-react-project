import { Link } from 'react-router-dom';

export default function HomepageItem(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.url}</p>
      <Link to={`/home/${props.slug}`}>More details about {props.slug}</Link>
    </>
  );
}
